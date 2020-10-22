import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Metric, MetricAdapter } from "./metric.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SendtextService {

  constructor(private http: HttpClient, private adapter: MetricAdapter) { }

  AnaliseText(text: string): Observable<Metric[]> {
    return this.http.post('https://maliuktextaalysis.azurewebsites.net/api/text', text).pipe( map((data: any[]) => data.map((item) => this.adapter.adapt(item))));
    //{responseType: 'text'} //{text : text}
  }
}
