import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  @Input()
  public barChartLabels = ['2006', '2007', '2008', '2009'];
  public barChartType = 'bar';
  public barChartLegend = true;
  
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  }
  }

  @Input()
  public barChartData = [
    {data: [0, 0, 0, 0, 0], label: 'cool label A'}
    
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
