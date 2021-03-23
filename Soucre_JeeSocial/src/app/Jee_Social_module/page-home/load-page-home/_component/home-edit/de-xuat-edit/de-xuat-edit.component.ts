import { PageHomeService } from './../../../../_services/page-home.service';

import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'kt-de-xuat-edit',
  templateUrl: './de-xuat-edit.component.html',
  styleUrls: ['./de-xuat-edit.component.scss']
})
export class DeXuatEditComponent implements OnInit {


  dexuat: any = {};
  item:any[]=[];
  id_user:number;
	viewLoading:boolean=false;
  constructor(
    public dialogRef: MatDialogRef<DeXuatEditComponent>,
    private changeDetectorRefs: ChangeDetectorRef,
    private _service:PageHomeService,
    // private tokenStore:TokenStorage,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  closeDia(data = undefined)
{
    this.dialogRef.close(data);
}
onSubmit() {
 // debugger
  this._service.updateSocial(this.dexuat,this._service.rt_update_baidang).subscribe(res => {
    if (res && res.status == 1) {
      this.closeDia(res.data);
    }
  });
}
getCurrentUser() 
{
  this._service.getUserData().subscribe(res =>{
   
      this.item= res;
      this.id_user=res.ID_user;
 

  });
}

  ngOnInit() {
    this.getCurrentUser();
    this.dexuat = this.data;
    this.changeDetectorRefs.detectChanges();
    
  }


}
