import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Logger {
  log(message: any, ...optionalParams: any[]) {
    console.log(message, ...optionalParams);
  }

  error(message: any, ...optionalParams: any[]) {
    console.error(message, ...optionalParams);
  }

  warn(message: any, ...optionalParams: any[]) {
    console.warn(message, ...optionalParams);
  }
}

@Injectable({providedIn: 'root'})
export class SilentLogger {
  log(message: any, ...optionalParams: any[]) {
  }

  error(message: any, ...optionalParams: any[]) {
  }

  warn(message: any, ...optionalParams: any[]) {
  }
}
