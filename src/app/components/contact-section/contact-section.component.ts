import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent implements OnInit {
  @Input() link: string;
  @Input() image: string;
  @Input() spanText: string;
  @Input() pText: string;
  constructor() { }

  ngOnInit() {}

}
