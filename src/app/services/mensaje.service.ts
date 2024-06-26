import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private mensajeCambio = new Subject<string>();

  constructor(private snackBar: MatSnackBar,
  ) { }

  setMensajeCambio(mensaje: string) {
    this.mensajeCambio.next(mensaje);
  }

  getMensajeCambio() {
    return this.mensajeCambio.asObservable();
  }
  MostrarMensaje(message: string, duration: number = 2000) {
    this.snackBar.open(message, 'AVISO', {
      duration: duration,
    });
  }
}
