import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface FileModel  {
  type: string,
  name: string,
  size: number
}

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  private fileUploadSubject = new BehaviorSubject<FileModel[]>([]);
  private fileUploadList: FileModel[] = [];

  constructor() {}

  // ✅ Observable para que otros componentes puedan suscribirse
  getFileUploadList(): Observable<FileModel[]> {
    return this.fileUploadSubject.asObservable();
  }

  // ✅ Método para agregar archivo y emitir nueva lista
  setFileUploadPush(file: FileModel): void {
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
