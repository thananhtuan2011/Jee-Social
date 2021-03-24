import { GroupModel } from './../_model/group.model';
import { TableService } from '../../../_metronic/shared/crud-table';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService extends  TableService<GroupModel> implements OnDestroy {
  API_URL = `/Group`;
  API_URL_user = `/user`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }
  public rt_getlist_group: string = this.API_URL + '/getDSGroup';
  public rt_random_user: string = this.API_URL_user + '/GetrandomDSUser';


  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
