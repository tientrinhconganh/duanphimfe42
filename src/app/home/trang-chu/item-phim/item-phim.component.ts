import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {

@Input() Phim;

  
  constructor() { }

  ngOnInit(): void {
    
  }

}
