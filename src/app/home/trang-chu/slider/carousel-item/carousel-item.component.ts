import { Component, OnInit,Input } from '@angular/core';
import {SharingService} from 'src/app/core/services/sharing.service'

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit {
@Input() item;
  constructor(private sharing: SharingService) { }

  ngOnInit(): void {
  }

  clickPlayButton(){
    this.sharing.sharingTrailerMethod(this.item.trailer);
  }
}
