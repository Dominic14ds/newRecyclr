import { Component } from '@angular/core';
import { AdvertisementService } from '././services/advertisement.service';

@Component({
  selector: 'my-app',
  template: `<header></header>
          <router-outlet></router-outlet>`,
  providers: [AdvertisementService]        
})
export class AppComponent  { name = 'Angular'; }
