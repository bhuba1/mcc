import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-categories',
  templateUrl:'./categories.component.html',
  styles: ['./test.component.css']
})
export class CategoriesComponent implements OnInit {

  public movies = [];
  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this._movieService.getMovies().subscribe(data => this.movies = data);
  }

}
