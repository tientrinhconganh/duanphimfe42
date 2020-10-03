import { Component, OnInit } from '@angular/core';
import {SharingService} from 'src/app/core/services/sharing.service'

@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: ['./modal-trailer.component.scss']
})
export class ModalTrailerComponent implements OnInit {

  trailerInModal: string = '';

  constructor(private sharing: SharingService) { }

  ngOnInit(): void {
    this.sharing.sharingTrailerFromShowingItemComponent.subscribe((data: any) => {
      if (data != '') {
        this.trailerInModal = data.replace('watch?v=', 'embed/');
        console.log(this.trailerInModal);
      }
    })
  }
  closeTrailer() {
    this.trailerInModal = '';
  }

}
