import {Injectable} from '@angular/core';
import {AppToast} from './app-toast';

@Injectable({providedIn: 'root'})
export class AppToastService {

  toasts: AppToast[] = [];

  show(toast: AppToast) {
    this.toasts.push(toast);
  }

  remove(toast: AppToast) {
    this.toasts = this.toasts.filter(t => (t.header !== toast.header) && (t.body !== toast.body));
  }
}
