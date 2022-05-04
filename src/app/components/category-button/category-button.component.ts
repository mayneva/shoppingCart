import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.scss'],
})
export class CategoryButtonComponent implements OnInit {
  @Input() spanText: string;
  @Input() image: string;
  constructor() { }

  ngOnInit() {}

}
