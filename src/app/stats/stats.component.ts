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
  public displayedDataOnChart = [];
  public displayedCategoriesOnChart = [];
  public bColor = 'rgba(222, 184, 135, 0.7)';
  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this.aCategories = this._movieService.getAvailableCategories();
    this.pointStats = this._movieService.getCategoryPointStats();
    this.minMaxStats = this._movieService.getMaxMintInCategory();
    
    var currentDataArray =  this._movieService.getCategoryPoints();
    var currentLegend = "Átlagos értékelések kategóriánként"
    this.displayedDataOnChart = [{data : currentDataArray, label:currentLegend, backgroundColor: this.bColor}];
    this.displayedCategoriesOnChart = this.aCategories;
    
    
  
  }
  onChange(event) {
    console.log(event);
    
    console.log();
    if(this.selectedValue == "avgPoint") {
      this.displayAvgPoints = true;
      var currentDataArray =  this._movieService.getCategoryPoints();
      var currentLegend = "Átlagos értékelések kategóriánként"
      this.displayedDataOnChart = [{data : currentDataArray, label:currentLegend , backgroundColor: this.bColor}];
    }else {
      this.displayAvgPoints = false;
    }
    if(this.selectedValue == "avgLen") {
      this.displayAvgLen = true;
      var currentDataArray = this._movieService.getCategoryLengths();
      this.displayedDataOnChart = [{data : currentDataArray, label: "Átlagos hossz kategóriánként (perc)", backgroundColor: this.bColor}];
      
    }else {
      this.displayAvgLen = false;
    }
    if(this.selectedValue == "minMaxLen") {
      this.displayMinMaxLen = true;
      this.displayedDataOnChart = this._movieService.getMaxMinLenInCategoryChart();
      
    }else {
      this.displayMinMaxLen = false;
    }
    if(this.selectedValue == "minMaxStars") {
      this.displayMinMaxStars = true;
      this.displayedDataOnChart = this._movieService.getMaxMinStarInCategoryChart();
    }else {
      this.displayMinMaxStars = false;
    }
  }

}
