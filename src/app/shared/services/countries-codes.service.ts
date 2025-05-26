import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CountryCode from '../interfaces/CountryCode';

@Injectable({
  providedIn: 'root'
})
export class CountriesCodesService {

  private apiUrl = 'https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json';

  constructor(private http: HttpClient) {}

  getCountryCodes(): Observable<CountryCode[]> {
    return this.http.get<CountryCode[]>(this.apiUrl);
  }
}
