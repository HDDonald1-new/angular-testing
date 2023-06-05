import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PostData } from '../models/share.model';
import { CoreService } from './core/core.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver  {
  constructor (private core: CoreService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<PostData> {
    return this.core.getPostData(route.params.id)
  }
}
