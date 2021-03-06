import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClusterResult} from './grade';

@Injectable({
  providedIn: 'root'
})
export class ClusterGradeService {
  baseUrl = '/api/v1/cluster/{cluster_id}/grade/';

  constructor(private http: HttpClient) {
  }

  getGradeData(id: string): Observable<ClusterResult> {
    return this.http.get<ClusterResult>(this.baseUrl.replace('{cluster_id}', id));
  }
}
