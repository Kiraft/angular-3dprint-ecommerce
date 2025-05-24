import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalCodeQuoteService {

  // Estado del modal: abierto (true) o cerrado (false)
  private modalState = new BehaviorSubject<boolean>(false);
  private codeQuoteSubject = new BehaviorSubject<string | null>(null);
  private codeQuote$ = this.codeQuoteSubject.asObservable();

  // Métodos para modificar el estado del modal

  getModalState(): Observable<boolean>  {
    return this.modalState.asObservable();
  }

  openModal(): void {
    this.modalState.next(true);
  }

  closeModal(): void {
    this.modalState.next(false);
  }

  // Guardar el código de cotización
  setCodeQuote(code: string): void {
    this.codeQuoteSubject.next(code);
  }

  // Obtener el código actual directamente (no observable)
  getCodeQuote(): string | null {
    return this.codeQuoteSubject.getValue();
  }

}
