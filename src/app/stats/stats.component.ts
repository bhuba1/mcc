import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-stats',
  templateUrl:'./stats.component.html',
  styles: []
})
export class StatsComponent implements OnInit {

  pointStats  = []
  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this.pointStats = this._movieService.getCategoryPointStats();
  }

}
