import { Component, OnInit} from '@angular/core';

import {DataService} from '../data.service';

declare var jQuery:any;

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit{
  
  faults: any;
  icre: any = 1;
  products: any;
  user: any;
  isteacher: number = null;
  loggedIn: boolean = false;
  selectedFault :object;
  editEnabled: any = false;
  isresolved: any = 0;
  sorted: number = 1;
  isChecked: any;

  ngOnInit(){
    this.getFaults();
    //this.getUser();

  }

  constructor (private dataservice: DataService) {

    this.selectedFault = {
      id: '',
      name: '',
      loc: '',
      badgeNum: '',
      problem: '',
      resolved:  '',
      resolution: '',
    }

  }

  resolvedFilter(){
    if (this.isresolved == false){
      this.isresolved = true;
    }
    else{
      this.isresolved = false;
    }
  }

  login(form:any){
    if (form.password == "s74knowle") {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false;
    }
    jQuery("#adminModal").modal("hide");
  }

  logOut(){
    this.loggedIn = false;
  }

  sort(){
    if (this.sorted == 1)
    {
        this.sorted = 0;
      }
      else
      {
        this.sorted = 1;
    }
  }

  getFaults(){
    this.dataservice.getFaults()
    .subscribe(res => this.faults = res);
  }

  createproduct(form:any){
      this.dataservice.createproduct(
        form).subscribe(data => { this.getFaults();
          jQuery("#myModal").modal("hide");
        });
  }

  loadFaults(fault:any){
    this.editEnabled = true;
    this.selectedFault = fault;

  }

  update(form:any){
    this.dataservice.update(form).subscribe();
    jQuery("#editModal").modal("hide");
  }

  delete(id:any){
    this.dataservice.delete(id).subscribe(
      data => { this.getFaults(); }   );
  }

  myFunction(id:any) {
    if (confirm("Are your sure your want to delete?") == true) {
        this.delete(id)
    } else {
    }
  } 


}
