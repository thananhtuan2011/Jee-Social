import { TableService } from '../../../_metronic/shared/crud-table';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { BaiDangModel } from '../_model/BaiDang.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageHomeService extends TableService<BaiDangModel> implements OnDestroy {
  API_URL = `/baidang`;
  public rt_loadbaidang: string = this.API_URL + '/getDSBaiDang';
  public rt_addbaidang: string = this.API_URL + '/addBaiDang'
  public rt_deletebaidang: string = this.API_URL + '/deleteBaiDang';
  public rt_like_baidang: string = this.API_URL + '/Baidang_like';
  public rt_update_baidang: string = this.API_URL + '/UpdateBaiDang';
  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
