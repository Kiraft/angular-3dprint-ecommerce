import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export type ModalType = 'color' | 'material' | 'relleno' | null;

@Injectable({
  providedIn: 'root',
})
export class ModalUploadServiceService {
  private modalTypeSubject = new BehaviorSubject<ModalType>(null);
  private idSubject = new BehaviorSubject<number>(0);

  getModalType(): Observable<ModalType> {
    return this.modalTypeSubject.asObservable();
  }

  getIdState(): Observable<number> {
    return this.idSubject.asObservable();
  }

  getIdValue(): number {
    return this.idSubject.value;
  }

  openModal(type: ModalType, id: number): void {
    this.modalTypeSubject.next(type);
    this.idSubject.next(id);
  }

  closeModal(): void {
    this.modalTypeSubject.next(null);
  }
}
