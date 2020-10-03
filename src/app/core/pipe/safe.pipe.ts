import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

constructor(private sanz:DomSanitizer){}

  transform(url) {
    return this.sanz.bypassSecurityTrustResourceUrl(url);
  }

}
