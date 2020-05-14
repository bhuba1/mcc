import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-stats',
  templateUrl:'./stats.component.html',
  styles: []
})
export class StatsComponent implements OnInit {

  public pointStats  = [];
  public minMaxStats = [];
  public aCategories = [];
  public displayAvgPoints = true;
  public displayAvgLen = false;
  public selectedValue = "avgPoint";
  public displayMinMaxLen = false;
  public displayMinMaxStars = false;

  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this.aCategories = this._movieService.getAvailableCategories();
    this.pointStats = this._movieService.getCategoryPointStats();
    this.minMaxStats = this._movieService.getMaxMintInCategory();
    
    console.log("points component:");
    console.log(this.pointStats);
    
    console.log("points minMaxStats:");
    console.log(this.minMaxStats)
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
    if(this.selectedValue == "minMaxLen") {
      this.displayMinMaxLen = true;
    }else {
      this.displayMinMaxLen = false;
    }
    if(this.selectedValue == "minMaxStars") {
      this.displayMinMaxStars = true;
    }else {
      this.displayMinMaxStars = false;
    }
  }

}
