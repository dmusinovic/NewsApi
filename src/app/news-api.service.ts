import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Headlines } from './models/headlines';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  //get top headlines on landing page
  getTopHeadlines(pageSize?: string): Observable<Headlines> {

    //API does not support pageSize > 0 and must have some query param
    pageSize = Number(pageSize) > 100 ? '100' : pageSize;

    let params = new HttpParams().append('pageSize', pageSize);
    return this.http.get<Headlines>(`top-headlines?country=us`, { params: params });
  }

  //get single article (filtered by title - there is no any unique id which could be used)
  getArticle(articleTitle?: string, searchTerm?: string): Observable<Headlines> {
    let params = new HttpParams().append('q', articleTitle);

    //API 'everything' does not return all articles from 'top-headlines'
    var endpoint = searchTerm ? `everything` : `top-headlines?country=us`;
    return this.http.get<Headlines>(endpoint , { params: params });
  }

  // filter headlines by search term and sort headlines
  getFilteredHeadlines(pageSize?: string, searchTerm?: string, sortBy?: string): Observable<Headlines> {
    let params = new HttpParams().append('pageSize', pageSize).append('q', searchTerm).append("sortBy", sortBy);
    return this.http.get<Headlines>(`everything`, { params: params });
  }
}