import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

@Component({
  selector: 'app-preview3-d',
    template: `<div #viewerContainer class="w-full h-[300px]"></div>`
})
export class Preview3DComponent implements AfterViewInit {
  @ViewChild('viewerContainer', { static: true }) viewerContainer!: ElementRef;
  @Input() file!: File;

    ngAfterViewInit(): void {
    const reader = new FileReader();
    reader.onload = () => {
      const arrayBuffer = reader.result as ArrayBuffer;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(100, 100);
      this.viewerContainer.nativeElement.appendChild(renderer.domElement);

      const loader = new STLLoader();
      const geometry = loader.parse(arrayBuffer);

      const material = new THREE.MeshNormalMaterial();
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // Ajustar escala y posición si es necesario
      geometry.center(); // Centra la geometría en el origen

      camera.position.z = 100;

      const animate = () => {
        requestAnimationFrame(animate);
        mesh.rotation.y += 0.01; // Solo giro sobre eje Y
        renderer.render(scene, camera);
      };

      animate();
    };

    reader.readAsArrayBuffer(this.file);
  }
}
