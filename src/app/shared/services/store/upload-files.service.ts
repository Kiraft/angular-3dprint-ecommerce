import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import File3DModel from '../../../interfaces/File3DModel';


@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  private fileUploadSubject = new BehaviorSubject<File3DModel[]>([]);
  private fileUploadList: File3DModel[] = [];

  constructor() {}

  // ✅ Observable para que otros componentes puedan suscribirse
  getFileUploadList(): Observable<File3DModel[]> {
    return this.fileUploadSubject.asObservable();
  }

  // ✅ Método para agregar archivo y emitir nueva lista
  setFileUploadPush(file: File3DModel): void {
    this.fileUploadList.push(file);
    this.fileUploadSubject.next([...this.fileUploadList]);
  }

  // ✅ Método opcional para eliminar archivos, si lo necesitas
  removeFile(index: number): void {
    this.fileUploadList.splice(index, 1);
    this.fileUploadSubject.next([...this.fileUploadList]);
  }

  // ✅ Método opcional para limpiar la lista
  clearFiles(): void {
    this.fileUploadList = [];
    this.fileUploadSubject.next([]);
  }
}
