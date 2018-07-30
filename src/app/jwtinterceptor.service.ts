import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class JWTInterceptorService {
  private token: string;

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.token != null) {
    const clone = req.clone({ setHeaders: {'Authorization': `Bearer ${this.token}` } });
    return next.handle(clone);
    }
    return next.handle(req);
  }

  setJwtToken(token: string) {
    return this.token = token;
  }

  removeJwtToken() {
    this.token = null;
  }
}
