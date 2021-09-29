import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getNewProfiles() {
    return this.httpClient.get('http://127.0.0.1:8000/api/get-new-profiles');
  }

  getNearbyProfiles() {
    return this.httpClient.get('http://127.0.0.1:8000/api/get-nearby-profiles');
  }

  getOwnAvatar() {
    return this.httpClient.get('http://127.0.0.1:8000/api/get-own-avatar'); 
  }

  getOnlineProfiles() {
    return this.httpClient.get('http://127.0.0.1:8000/api/get-online-profiles'); 
  }
}
