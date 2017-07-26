import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/userService/user.service';
import { OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: `./headerComponent.html`,

})
export class HeaderComponent {
    constructor(private router: Router, private userservice:UserService) { 
    }     
    onClick(path:any) { 
        this.router.navigate([path]); 
        //console.log(this.userservice.authToken)
    }
    onLogin(value:Object){
        this.userservice.login(value);
        //console.log(this.userservice.authToken)
    }
    onSignup(value:Object){
        this.userservice.register(value);
    }
    onLogout(){
        this.userservice.logout();
    }
}
