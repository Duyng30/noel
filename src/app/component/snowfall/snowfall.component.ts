import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snowfall',
  templateUrl: './snowfall.component.html',
  styleUrls: ['./snowfall.component.scss']
})
export class SnowfallComponent implements OnInit {
  snowflakes: { left: number; animationDuration: string }[] = [];

  constructor() {}

  ngOnInit() {
    this.createSnowflakes();
  }

  createSnowflakes() {
    for (let i = 0; i < 50; i++) {
      this.snowflakes.push({
        left: Math.random() * window.innerWidth,
        animationDuration: (Math.random() * 5 + 2) + 's'
      });
    }
  }
}

