import { Component } from '@angular/core';
import { AdvertisementService } from '././services/advertisementService/advertisement.service';
import { UserService } from '././services/userService/user.service';

@Component({
  selector: 'my-app',
  template: `<header></header>
          <router-outlet></router-outlet>`,
  providers: [AdvertisementService,UserService]        
})
export class AppComponent  { name = 'Angular'; }
