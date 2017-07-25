import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertisementService } from '../../services/advertisement.service';


@Component({
    selector: 'postad',
    templateUrl: `./postAdComponent.html`,

})
export class PostAdComponent {
    options = [{ name: 'Furniture', value: 'furniture' }, { name: 'Hardware', value: 'hardware' }, { name: 'Mobile', value: 'mobile' }];
    constructor(private router: Router, private advertisementservice:AdvertisementService) { }
    onSubmit(data:Object) { 
        this.router.navigate(['']); 
    }
}
