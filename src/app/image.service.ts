import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseUrl = 'https://picsum.photos/id';

  constructor(private http: HttpClient) {}

  // Method to fetch image information by ID using the /id/{id}/info endpoint
  getImageInfoById(id: number): Observable<any> {
    const url = `https://picsum.photos/id/${id}/info`;
    return this.http.get(url);
  }

  // Method to fetch an image by ID, width, and height using the /id/{id}/{width}/{height} endpoint
  getImageByIdWithDimensions(id: number, width: number, height: number): Observable<any> {
    const url = `https://picsum.photos/id/${id}/${width}/${height}.jpg`;
    return this.http.get(url);
  }
}
