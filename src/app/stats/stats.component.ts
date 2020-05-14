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
  public displayAvgPoints = true;
  public displayAvgLen = false;
  public selectedValue = "avgPoint";
  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    
    this.pointStats = this._movieService.getCategoryPointStats();
    this.aCategories = this._movieService.getAvailableCategories();
    console.log("points component:");
    console.log(this.pointStats);
  }
  onChange(event) {
    console.log(event);
    
    console.log();
    if(this.selectedValue == "avgPoint") {
      this.displayAvgPoints = true;
    }else {
      this.displayAvgPoints = false;
    }
    if(this.selectedValue == "avgLen") {
      this.displayAvgLen = true;
    }else {
      this.displayAvgLen = false;
    }
  }

}
