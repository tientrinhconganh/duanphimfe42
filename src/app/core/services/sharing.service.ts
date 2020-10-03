import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharingService {

  private pushingTrailerToStore = new BehaviorSubject('' as string);
  sharingTrailerFromShowingItemComponent = this.pushingTrailerToStore.asObservable();

  // Film list from showtime
  private pushingFilmListToStore = new BehaviorSubject([] as any);
  sharingFilmListFromShowtimeComponent = this.pushingFilmListToStore.asObservable();

  constructor() { }

  sharingTrailerMethod(trailerFromShowingItemComponent: any) {
    this.pushingTrailerToStore.next(trailerFromShowingItemComponent);
  }
}
