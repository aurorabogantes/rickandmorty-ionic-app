import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string, url: string };
  location: { name: string, url: string };
  image: string;
}

interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[];
}

@Injectable({
  providedIn: 'root'
})
export class RickandmortyapiService {
  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get(`${this.baseUrl}/character`);
  }

  getEpisodes(episodesUrls: string[]): Observable<any[]> {
    const episodeIds = episodesUrls.map(url => url.split('/').pop()).join(',');
    return this.http.get<any[]>(`${this.baseUrl}/episode/${episodeIds}`);
  }
}
