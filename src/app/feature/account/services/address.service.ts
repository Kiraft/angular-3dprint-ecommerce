import { AddressReponse, AddressRequest } from './../interfaces/AddressResponse';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthService } from './../../auth/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import UserState from '../interfaces/UserState';

@Injectable({
  providedIn: 'root'
})
export class AddressService {



  private addressesSubject = new BehaviorSubject<AddressReponse[]>([]);
  addresses$ = this.addressesSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAddressById(addresID: string): Observable<AddressReponse> {
    return this.http.get<AddressReponse>(`${environment.springURL}/addresses/${addresID}`);
  }

  loadAddressesByClientId(userId: number): void {
    this.http.get<AddressReponse[]>(`${environment.springURL}/users/${userId}/address`)
      .subscribe(addresses => this.addressesSubject.next(addresses));
  }

  deleteAddress(addressID: number): Observable<any> {
    return this.http.delete(`${environment.springURL}/addresses/${addressID}`).pipe(
      tap(() => {
        const updated = this.addressesSubject.value.filter(addr => addr.id !== addressID);
        this.addressesSubject.next(updated);
      })
    );
  }

  createAddress(userID: number, address: AddressRequest): Observable<any> {

    console.log(address);
    console.log(userID);


    return this.http.post<AddressReponse>(`${environment.springURL}/addresses/user/${userID}`, address).pipe(
      tap((newAddress) => {
        this.addressesSubject.next([...this.addressesSubject.value, newAddress]);
      })
    );
  }

  updateAddress(addressID: number, address: AddressRequest): Observable<any> {

    return this.http.put<AddressReponse>(`${environment.springURL}/addresses/${addressID}`, address).pipe(
      tap((updatedAddress) => {
        const updatedList = this.addressesSubject.value.map(addr =>
          addr.id === addressID ? updatedAddress : addr
        );
        this.addressesSubject.next(updatedList);
      })
    );
  }
}
