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
    this.getMovies().subscribe(movies => {
      for (var val of movies) {
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

  getCategoryPoints(): number[] {
    let categories = [];
    let categorieStats = [];
    var CategoryPoints = [];
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

      for (let point of categorieStats) {
    
        CategoryPoints.push(point.avgPoint);

      }

    });
     
    return CategoryPoints;
  }

  getCategoryLengths(): number[] {
    let categories = [];
    let categorieStats = [];
    var CategoryPoints = [];
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

      for (let point of categorieStats) {
    
        CategoryPoints.push(point.avgLen);

      }

    });
     
    return CategoryPoints;
  }

  getMaxMintInCategory (): {}[]{
    let categories = [];
    let categoriesMaxMin = [];
    
   
    
    this.getMovies().subscribe(movies => {
      for (let val of movies) {
        if(!categories.includes(val.cat))
        {
          categories.push(val.cat);
        }
      }
      
      for (let cat of categories) {
        categoriesMaxMin.push({name: cat, maxLenName : "", maxLen : 0, minLenName : "", minLen : 1000000, 
        maxStarName : "", maxStar: 0, minStarName : "", minStar : 100})
      }

      for (var mov of movies) {
        for (let catm of categoriesMaxMin) {
          if (mov.cat == catm.name && mov.len > catm.maxLen) {
            catm.maxLen = mov.len;
            catm.maxLenName = mov.title;
          }
          if (mov.cat == catm.name && mov.len < catm.minLen) {
            catm.minLen = mov.len;
            catm.minLenName = mov.title
          }
          if (mov.cat == catm.name && mov.stat > catm.maxStar) {
            catm.maxStar = mov.stat;
            catm.maxStarName = mov.title
          }
          if (mov.cat == catm.name && mov.stat < catm.minStar) {
            catm.minStar = mov.stat;
            catm.minStarName = mov.title
          }
        
        }
        
    }
    console.log(categories);
    });
    return categoriesMaxMin;
  }
  
}
