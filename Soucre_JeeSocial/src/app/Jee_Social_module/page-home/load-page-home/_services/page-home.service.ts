import { TableService } from '../../../../_metronic/shared/crud-table';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { BaiDangModel } from '../_model/BaiDang.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageHomeService extends TableService<BaiDangModel> implements OnDestroy {
  API_URL = `/baidang`;
  public rt_loadbaidang: string = this.API_URL + '/getDSBaiDang';


  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
