import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from './movie';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _url: string = "assets/data/movies.json";

  constructor(private http: HttpClient) { }

  getMovies() : Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this._url);
  }

  getAvailableCategories() : string[] {
    let categories = []
    this.getMovies().subscribe(data => {
      for (var val of data) {
        if(!categories.includes(val.cat))
        {
          categories.push(val.cat);
        }
        
        
      }
      console.log(categories);
    });
    return categories;
  }
  
  getCategoryPointStats(): {}[] {
    let categories = [];
    let categorieStats = [];
    this.getMovies().subscribe(movies => {
      for (let val of movies) {
        if(!categories.includes(val.cat))
        {
          categories.push(val.cat);
        }
      }
     
      for (let cat of categories) {
        categorieStats.push({name:cat, point: 0, avgPoint:0, len: 0, avgLen: 0, movieCount: 0})
      }

      for (let mov of movies) {
        for (let cats of categorieStats) {
          if (mov.cat == cats.name){
            cats.movieCount += 1;
            cats.point += +mov.stat;
            cats.len += +mov.len;
            
          }
        }
      }
      for (let cats of categorieStats) {
        cats.avgPoint = cats.point / cats.movieCount;
        cats.avgLen = cats.len / cats.movieCount;
        
      }

      console.log("categories service");
      console.log(categories);
      console.log("categorieStat service");
      console.log(categorieStats);
    });
   
    
    return categorieStats;
  }
}
