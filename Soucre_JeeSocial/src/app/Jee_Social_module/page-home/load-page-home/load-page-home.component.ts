import { Component, OnInit } from '@angular/core';
import { QueryParamsModelNewLazy } from '../../../_metronic/shared/crud-table';
import { PageHomeService } from './_services/page-home.service';

@Component({
  selector: 'app-load-page-home',
  templateUrl: './load-page-home.component.html',
  styleUrls: ['./load-page-home.component.scss']
})
export class LoadPageHomeComponent implements OnInit {

  constructor(
    public page_home_service: PageHomeService
  ) { }
  pageSize:number;

  ngOnInit(): void {
    // this.loadList();
  }
  loadList(){
    const queryParams1 = new QueryParamsModelNewLazy(
	
      '',
      '',
      '',
      this.pageSize=0,
      2,
      false,
    
      // pageNumber: number;
      // pageSize: number;
      // more: boolean;
      
    );
    this.page_home_service.getlistBaiDang(queryParams1,this.page_home_service.rt_loadbaidang).subscribe(res=>{
      console.log('dữ liệu bài đăng',res.data);
    })

  }
}
