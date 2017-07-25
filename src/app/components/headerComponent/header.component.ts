import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header',
    templateUrl: `./headerComponent.html`,

})
export class HeaderComponent {
    constructor(private router: Router) { }
    onClick(path:any) { 
        this.router.navigate([path]); 
    }
}
