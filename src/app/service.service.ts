import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {}
private api = 'https://angular-ajax.000webhostapp.com/wp-json/wp/v2/posts';

    public articles():Observable<any>{

      return this.http.get(this.api);
    }
   }

