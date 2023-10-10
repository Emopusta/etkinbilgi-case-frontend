import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { TagContentType } from '@angular/compiler';
import { AccessTokenModel } from 'src/app/models/access-token-model';
import { LoginModel } from 'src/app/models/login-model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  apiUrl = ""
  constructor(private httpClient:HttpClient) { }
    
  login(loginModel:LoginModel){

   
    return this.httpClient.post<AccessTokenModel>(this.apiUrl + "Login", loginModel);

  }


  isAuthenticated(){
    if (localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
