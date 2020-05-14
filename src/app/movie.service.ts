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
  
  getCategoryPointStats(): {name: string, point: number, pointStat: number, movieCount: number}[] {
    let categories = this.getAvailableCategories();
    var stats = [];
    for (var  cat in categories) {
      stats.push({name: cat});
    }
    return stats;
  }
}
