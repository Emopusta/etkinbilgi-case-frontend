import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonnelShiftService {

  apiUrl = "http://localhost:60805/api/PersonnelShifts/"
  constructor(private httpClient:HttpClient) { }

  

}
