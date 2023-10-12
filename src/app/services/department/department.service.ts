import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddDepartmentModel } from 'src/app/models/add-department-model';
import { ListResponseModel } from 'src/app/models/list-response-model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  apiUrl = "http://localhost:60805/api/Departments/"
  constructor(private httpClient:HttpClient) { }

  addDepartment(formData:FormData){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.httpClient.post<AddDepartmentModel>(this.apiUrl, formData, { headers });
  }

  getListDepartment(index:number, size:number){

    return this.httpClient.get<ListResponseModel>(this.apiUrl+ "?PageIndex="+index+"&PageSize="+size);

  }

  updateDepartment(formData:FormData){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.httpClient.put<AddDepartmentModel>(this.apiUrl, formData, { headers });
  }

  deleteDepartment(id:string)
  {
    return this.httpClient.delete(this.apiUrl+id);
  }
  
}
