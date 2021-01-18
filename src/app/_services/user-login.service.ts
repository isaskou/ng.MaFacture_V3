import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { UserModel } from '../_models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  private url = 'https://localhost:44372/api/';

  public currentUser: UserModel;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.currentUser = new UserModel();
    // this.currentUser.prenom='Isabel'
    // this.currentUser.nom='Skou'
    // this.currentUser.email = 'isabel.skou@yahoo.fr'
    // this.currentUser.password = 'test'
    // this.currentUser.role='Admin'
  }

  login(user: UserModel) {
    return this.http.post<UserModel>(this.url + 'Access', user);

  }

  userIsConnected(): boolean{
    if(this.currentUser !== undefined && this.currentUser !== null)
    {
      return this.currentUser.isConnected
    }
    return false;
  }

}
