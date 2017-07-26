import { Component } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { AdvertisementService } from '../../services/advertisementService/advertisement.service';

@Component({
    selector: 'editad',
    templateUrl: `./editAdComponent.html`,

})
export class EditAdComponent {
    options:Array<any> = [];
    advertisement:Object ={};
    adKey:any;

    constructor(private router: Router, private advertisementservice:AdvertisementService , private activatedRoute: ActivatedRoute,) { 
        this.adKey=this.activatedRoute.snapshot.params['id'];
        advertisementservice.getCategories().subscribe((data) =>{
            this.options=data.data.itemList;
        });
        advertisementservice.getAllAdvertisements().subscribe((data) =>{
            this.advertisement=data.data.mypostList.find(x => x.id === this.adKey)
        })

    }
    onSubmit(object:Object) {
        let editObj={postId:this.adKey,status:"Open"}
        editObj=Object.assign(editObj,object);
        this.advertisementservice.editAdvertisement(editObj).subscribe((data) => {
        });
        this.router.navigate(['postad']); 
    }
}
