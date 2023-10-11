import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddPersonnelModel } from 'src/app/models/add-personnel-model';
import { ListResponseModel } from 'src/app/models/list-response-model';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  apiUrl = "http://localhost:60805/api/Personnels"
  constructor(private httpClient:HttpClient) { }

  addPersonnel(formData:FormData){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.httpClient.post<AddPersonnelModel>(this.apiUrl, formData, { headers });
  }

  getListPersonnel(index:number, size:number){

    return this.httpClient.get<ListResponseModel>(this.apiUrl+ "?PageIndex="+index+"&PageSize="+size);

  }
}
