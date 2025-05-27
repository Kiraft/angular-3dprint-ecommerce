import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import File3DModel from '../interfaces/File3DModel';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import Color3DModel from '../interfaces/Color3DModel';
import Material3DModel from '../interfaces/Material3DModel';
import Relleno3DModel from '../interfaces/Relleno3DModel';

@Injectable({
  providedIn: 'root',
})
export class UploadFilesService {
  private fileUploadSubject = new BehaviorSubject<File3DModel[]>([]);
  private fileUploadList: File3DModel[] = [];

  constructor() {}

  getFileUploadList(): Observable<File3DModel[]> {
    return this.fileUploadSubject.asObservable();
  }

  async setFileUploadPush(file: File3DModel): Promise<void> {
    console.log(this.fileUploadList);
    const dimensions = await this.getSTLDimensions(file.file);
    const updateFile: File3DModel = {
      ...file,
      dimensions,
    };

    this.fileUploadList.push(updateFile);
    this.fileUploadSubject.next([...this.fileUploadList]);
  }

  // ✅ Método opcional para eliminar archivos, si lo necesitas
  removeFile(index: number): void {
    console.log("Esta es la lista antes de borrar",this.fileUploadList);
    const i =  this.fileUploadList.splice(index, 1);
    console.log('Este es el index que sepasa: ',index);
    console.log('Este se borro: ',i);

    console.log('Esta es la lista despues de borrar',this.fileUploadList);

    this.fileUploadSubject.next([...this.fileUploadList]);
  }

  setColor(index: number, color: Color3DModel): void {
    if (this.fileUploadList[index]) {
      this.fileUploadList[index].color = color;
      this.fileUploadSubject.next([...this.fileUploadList]); // Emitimos la lista actualizada
    }
  }

  setMaterial(index: number, m: Material3DModel): void {
    if (this.fileUploadList[index]) {
      this.fileUploadList[index].material = m;
      this.fileUploadSubject.next([...this.fileUploadList]); // Emitimos la lista actualizada
    }
  }

  setRelleno(index: number, r: Relleno3DModel): void {
    if (this.fileUploadList[index]) {
      this.fileUploadList[index].relleno = r.porcentaje;
      this.fileUploadSubject.next([...this.fileUploadList]); // Emitimos la lista actualizada
    }
  }

  // ✅ Método opcional para limpiar la lista
  clearFiles(): void {
    this.fileUploadList = [];
    this.fileUploadSubject.next([]);
  }

  private getSTLDimensions(
    file: File
  ): Promise<{ x: number; y: number; z: number }> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const loader = new STLLoader();
        const geometry = loader.parse(arrayBuffer);

        geometry.computeBoundingBox();
        const box = geometry.boundingBox!;
        const x = box.max.x - box.min.x;
        const y = box.max.y - box.min.y;
        const z = box.max.z - box.min.z;
        resolve({ x, y, z });
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsArrayBuffer(file);
    });
  }

  incrementQuantity(index: number): void {
    if (this.fileUploadList[index]) {
      const current = this.fileUploadList[index].quantity || 1;
      if (current < 200) {
        this.fileUploadList[index].quantity = current + 1;
        this.fileUploadSubject.next([...this.fileUploadList]);
      }
    }
  }

  decrementQuantity(index: number): void {
    if (this.fileUploadList[index]) {
      const current = this.fileUploadList[index].quantity || 1;
      if (current > 1) {
        this.fileUploadList[index].quantity = current - 1;
        this.fileUploadSubject.next([...this.fileUploadList]);
      }
    }
  }

  isEmpty(): boolean {
    return this.fileUploadList.length == 0;
  }
}
