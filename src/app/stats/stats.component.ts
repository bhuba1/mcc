import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-stats',
  templateUrl:'./stats.component.html',
  styles: []
})
export class StatsComponent implements OnInit {

  public pointStats  = [];
  public aCategories = [];
  constructor(private _movieService: MovieService) { }


  ngOnInit(): void {
    
    this.pointStats = this._movieService.getCategoryPointStats();
    this.aCategories = this._movieService.getAvailableCategories();
    console.log("points component:");
    console.log(this.pointStats);
  }

}
