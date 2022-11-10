import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() image: string | undefined;
  @Input() btnText: string | undefined;
  @Input() btnColor: string | undefined;
  @Input() cardSize: string | undefined;

  @Input() stock: number | undefined;

/*   @Input() options:any {
    Title :
  }; */

  constructor() {}

  ngOnInit(): void {
    console.log(this.title)
  }

  buy(): void{
    alert ('elemento ananido')
  }
}
