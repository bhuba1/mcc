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
    });
    
    return categoriesMaxMin;
  }
  
  getMaxMinLenInCategoryChart (): {}[]{
    let categories = [];
    let categoriesMaxMin = [];
    let categoriesMaxMinChart = [];
   
    
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
      var categoriesCollection =[];
      for (let cat of categories) {
        categoriesCollection.push( {name:cat, max:0, min:0} );
      }

      for (let catm of categoriesMaxMin) {
        for (let cat of categoriesCollection) {
          if (cat.name == catm.name) {
            cat.max = catm.maxLen;
            cat.min = catm.minLen;
          }
        }
      }
      var max = [];
      var min = [];
      for (let catc of categoriesCollection) {
        max.push(catc.max);
        min.push(catc.min);
        
      }
      categoriesMaxMinChart.push({data : max, label: "Max", backgroundColor: 'rgba(255, 99, 132, 0.5)'});
      categoriesMaxMinChart.push({data : min, label: "Min", backgroundColor: 'rgba(54, 162, 235, 0.5)'});

      
    });

    
    
    return categoriesMaxMinChart;
  }

  getMaxMinStarInCategoryChart (): {}[]{
    let categories = [];
    let categoriesMaxMin = [];
    let categoriesMaxMinChart = [];
   
    
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
      var categoriesCollection =[];
      for (let cat of categories) {
        categoriesCollection.push( {name:cat, max:0, min:0} );
      }

      for (let catm of categoriesMaxMin) {
        for (let cat of categoriesCollection) {
          if (cat.name == catm.name) {
            cat.max = catm.maxStar;
            cat.min = catm.minStar;
          }
        }
      }
      var max = [];
      var min = [];
      for (let catc of categoriesCollection) {
        max.push(catc.max);
        min.push(catc.min);
        
      }
      categoriesMaxMinChart.push({data : max, label: "Max", backgroundColor: 'rgba(255, 99, 132, 0.5)'});
      categoriesMaxMinChart.push({data : min, label: "Min", backgroundColor: 'rgba(54, 162, 235, 0.5)'});

      
    });

    
    
    return categoriesMaxMinChart;
  }

}
