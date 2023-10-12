import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddShiftModel } from 'src/app/models/add-shift-model';
import { ListResponseModel } from 'src/app/models/list-response-model';

@Injectable({
  providedIn: 'root'
})
export class PersonnelShiftService {

  apiUrl = "http://localhost:60805/api/PersonnelShifts/"
  constructor(private httpClient:HttpClient) { }

  addShift(formData:FormData){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.httpClient.post<AddShiftModel>(this.apiUrl, formData, { headers });
  }

  getListShift(index:number, size:number){

    return this.httpClient.get<ListResponseModel>(this.apiUrl+ "?PageIndex="+index+"&PageSize="+size);

  }

  

}
