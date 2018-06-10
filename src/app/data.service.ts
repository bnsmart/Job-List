import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {

  result: any;
  //apiurl: string = "http://KNA113734:3000/api/faults/";
  apiurl: string = "http://" + window.location.hostname + ":3000/api/faults/";

  constructor(private http: Http) { }

  getFaults() {
    return this.http.get(this.apiurl)
      .map((res: Response) => res.json());
  }

  /* getUser() {
    return this.http.get("api/values")
      .map((res: Response) => res.json());
  } */

  createproduct(form:any): Observable<any>{

    return this.http.post(this.apiurl, {
      name: form.newname,
      date: Date.now(),
      loc: form.newloc,
      badgeNum: form.newbadge,
      problem: form.newproblem,
      resolved: false,
      resolution: form.newresolution
      });
  }

      delete(_id:string){
        return this.http.delete(this.apiurl + _id)
      }

      update(form:any): Observable<any>{

        return this.http.put(this.apiurl + form._id, {
          name: form.newname,
          date: form.newdate,
          loc: form.newloc,
          badgeNum: form.newbadge,
          problem: form.newproblem,
          resolution: form.newresolution,
          resolved:  form.newresolved,
          });
      }

}
