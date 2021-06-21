import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginResponse } from 'src/app/shared/models/login-response'
import { LoginData } from 'src/app/shared/interfaces/login-data';
import { User } from 'src/app/shared/models/user';
import { Token } from 'src/app/shared/models/token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  public login(data: LoginData): Observable<LoginResponse> {
    const url = environment.server + 'login';
    return this.http.post<{data: LoginResponse}>(url, data)
      .pipe(map(resp => new LoginResponse().deserialize(resp.data)));
  }

  public fakeLogin(data: LoginData): LoginResponse {
    const loginResponse = new LoginResponse();
    const user = new User();
    const token = new Token();
    if (data.user === 'Invitado' && data.password === 'Invitado') {
      user.id = 1;
      user.name = 'Invitado';
      loginResponse.user = new User().deserialize(user);
      loginResponse.token = new Token().deserialize(token);
    }
    return loginResponse;
  }
}
