import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-preview3-d',
  template: `<div #viewerContainer class="w-full h-[100px]"></div>`,
})
export class Preview3DComponent implements AfterViewInit {
  @ViewChild('viewerContainer', { static: true }) viewerContainer!: ElementRef;
  @Input() file!: File;
  @Input() idFile!: number;

  private animationFrameId: number = 0;
  private renderer?: THREE.WebGLRenderer;

  ngAfterViewInit(): void {
    const reader = new FileReader();
    reader.onload = () => {
      const arrayBuffer = reader.result as ArrayBuffer;

      const scene = new THREE.Scene();
      const container = this.viewerContainer.nativeElement;
      const width = container.clientWidth;
      const height = container.clientHeight;

      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setSize(width, height);
      container.appendChild(this.renderer.domElement);

      const controls = new OrbitControls(camera, this.renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.screenSpacePanning = false;
      controls.minDistance = 10;
      controls.maxDistance = 500;

      const loader = new STLLoader();
      const geometry = loader.parse(arrayBuffer);
      geometry.center();

      const material = new THREE.MeshNormalMaterial();
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const boundingBox = new THREE.Box3().setFromObject(mesh);
      const size = boundingBox.getSize(new THREE.Vector3());
      const maxDimension = Math.max(size.x, size.y, size.z);
      const distance = maxDimension * 1.0;

      camera.position.set(0, 0, distance);
      camera.lookAt(mesh.position);

      const animate = () => {
        this.animationFrameId = requestAnimationFrame(animate);
        controls.update();
        this.renderer?.render(scene, camera);
      };

      animate();
    };

    reader.readAsArrayBuffer(this.file);
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    if (this.renderer) {
      this.renderer.dispose();
      const container = this.viewerContainer.nativeElement;
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }
  }
}
