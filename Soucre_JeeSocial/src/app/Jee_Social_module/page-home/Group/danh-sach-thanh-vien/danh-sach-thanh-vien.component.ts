import { GroupMemberService } from './../../_services/group-member.service';
import { LayoutUtilsService, MessageType } from './../../../../_metronic/core/utils/layout-utils.service';
import { GroupService } from './../../_services/group.service';

import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { merge, Observable, of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EditQuyenComponent } from '../edit-quyen/edit-quyen.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { GroupingState, ICreateAction, IDeleteAction, IDeleteSelectedAction, IEditAction, IFetchSelectedAction, IFilterView, IGroupingView, ISearchView, ISortView, IUpdateStatusForSelectedAction, PaginatorState, QueryParamsModelNew, SortState } from '../..../../../../../_metronic/shared/crud-table';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'kt-danh-sach-thanh-vien',
  templateUrl: './danh-sach-thanh-vien.component.html',
  styleUrls: ['./danh-sach-thanh-vien.component.scss']
})
export class DanhSachThanhVienComponent  implements
OnInit,
OnDestroy,
ICreateAction,
IEditAction,
IDeleteAction,
IDeleteSelectedAction,
IFetchSelectedAction,
IUpdateStatusForSelectedAction,
ISortView,
IFilterView,
IGroupingView,
ISearchView,
IFilterView {
paginator: PaginatorState;
sorting: SortState;
grouping: GroupingState;
isLoading: boolean;
filterGroup: FormGroup;
searchGroup: FormGroup;


  
	// Selection
	// selection = new SelectionModel<DepartmentModel>(true, []);
	// productsResult: DepartmentModel[] = [];

	//=================PageSize Table=====================
	pageSize: number;
	flag: boolean = true;
  keyword: string = '';
  listUser:any[]=[];
  tam:string;
  item_11:any[]=[];
  id_phong:number;
  @Input() id_g: any;
  private subscriptions: Subscription[] = []; 
  constructor(
	private fb: FormBuilder,
    // public _service_gr:GroupService,
	public service_group_member:GroupMemberService,
    private changeDetectorRefs: ChangeDetectorRef,
    // private  sharedService: SharedService,
    private layoutUtilsService: LayoutUtilsService,
    // private tokenStorage:TokenStorage,
    private route:ActivatedRoute,

	private translate: TranslateService,
	public dialog: MatDialog,

  ) {
	
	this.filterGroup = new FormGroup({
		status: new FormControl(),
		type: new FormControl()

	 });
	 this.searchGroup = new FormGroup({
		searchTerm: new FormControl(),
	

	 });
   }
	updateStatusForSelected(): void {
		throw new Error('Method not implemented.');
	}
	fetchSelected(): void {
		throw new Error('Method not implemented.');
	}
	deleteSelected(): void {
		throw new Error('Method not implemented.');
	}
	delete(id: number): void {
		throw new Error('Method not implemented.');
	}
	edit(id: number): void {
		throw new Error('Method not implemented.');
	}
	create() {
		this.edit(undefined);
	  }
	ngOnDestroy() {
		this.subscriptions.forEach((sb) => sb.unsubscribe());
	  }


  Update_Quyen(item,index,indexc=-1) {
	var data = Object.assign({}, item);
	// var data = Object.assign({}, item);
	
	const dialogRef = this.dialog.open(EditQuyenComponent, { data:data,
		
		width: '500px' });
	dialogRef.afterClosed().subscribe(res => {
		if (res) {
			item.quyen = res.quyen
			this.loadDataList();
			this.changeDetectorRefs.detectChanges();
		}
		else
		{
			this.loadDataList();
			this.changeDetectorRefs.detectChanges();
		}
	});
}
  getData(){
    
    // this.sharedService.id_phongban.subscribe(sharedata => this.tam = sharedata)

    // this.id_phong=Number(this.tam );
   
  }
  public getPageSize(): Observable<string> {
	const size: string = "10";
	return of(size);
}
  LoadData() {
    // debugger
    this.service_group_member.getUserData().subscribe(res =>{
      this.item_11= res;
    });
    }
	getIndexOfList(v: any){
		var ind = 0;
		this.service_group_member.items$.subscribe(r => {
		  ind = r.indexOf(v);
		});
		return ind;
	  }
  ngOnInit() {

     
    this.route.params.subscribe(params => {
    
      this.id_g =+params.id_group;
    });

	this.filterForm();
    this.searchForm();
    this.loadList();
    console.log('dataTest_TABLE',this.service_group_member.items$);
    this.grouping = this.service_group_member.grouping;
    this.paginator = this.service_group_member.paginator;
    this.sorting = this.service_group_member.sorting;
    const sb = this.service_group_member.isLoading$.subscribe(res => this.isLoading = res);
    this.subscriptions.push(sb);



    
	}

	loadList(){
		this.service_group_member.fetch_JeeSocial(this.service_group_member.rt_loadDS_thanhvien+`?id_group=${this.id_g}`);
	  }

	// ngOnChanges() {
	// 	this.subscriptions.forEach((sb) => sb.unsubscribe());
	// }

	filterForm() {
		this.filterGroup = this.fb.group({
		  status: [''],
		  type: [''],
		  searchTerm: [''],
		});
		this.subscriptions.push(
		  this.filterGroup.controls.searchTerm.valueChanges.subscribe(() =>
			this.filter()
		  )
		);
		this.subscriptions.push(
		  this.filterGroup.controls.type.valueChanges.subscribe(() => this.filter())
		);
	  }
	
	  filter() {
		const filter = {};
	
	
		const search = this.searchGroup.get('searchTerm').value;
		if (search) {
		  filter['Username'] = search;
		}
		this.service_group_member.patchStateJeeSocial({ filter }, this.service_group_member.rt_loadDS_thanhvien+`?id_group=${this.id_g}`);
	  }
	
	  // search
	  searchForm() {
		this.searchGroup = this.fb.group({
		  searchTerm: [''],
		});
		const searchEvent = this.searchGroup.controls.searchTerm.valueChanges
		  .pipe(
			/*
		  The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator,
		  we are limiting the amount of server requests emitted to a maximum of one every 150ms
		  */
			debounceTime(150),
			distinctUntilChanged()
		  )
		  .subscribe(() => this.filter());
		this.subscriptions.push(searchEvent);
	  }
	
	  search(searchTerm: string) {
		this.service_group_member.patchStateJeeSocial({ searchTerm }, this.service_group_member.rt_loadDS_thanhvien+`?id_group=${this.id_g}`);
	  }
	
	  // sorting
	  sort(column: string) {
		const sorting = this.sorting;
		const isActiveColumn = sorting.column === column;
		if (!isActiveColumn) {
		  sorting.column = column;
		  sorting.direction = 'asc';
		} else {
		  sorting.direction = sorting.direction === 'asc' ? 'desc' : 'asc';
		}
		this.service_group_member.patchStateJeeSocial({ sorting }, this.service_group_member.rt_loadDS_thanhvien+`?id_group=${this.id_g}`);
	  }
	
	  // pagination
	  paginate(paginator: PaginatorState) {
		this.service_group_member.patchStateJeeSocial({ paginator }, this.service_group_member.rt_loadDS_thanhvien+`?id_group=${this.id_g}`);
	  }

	loadDataList() {
		this.service_group_member.fetch_JeeSocial(this.service_group_member.rt_loadDS_thanhvien+`?id_group=${this.id_g}`);
	}
	

	XuatFile(item: any) {
		var linkdownload = item.Link;
		window.open(linkdownload);

  }
  



  

	getHeight(): any {
		let obj = window.location.href.split("/").find(x => x == "wework");
		if (obj) {
			let tmp_height = 0;
			tmp_height = window.innerHeight - 197;
			return tmp_height + 'px';
		} else {
			let tmp_height = 0;
			tmp_height = window.innerHeight - 140;
			return tmp_height + 'px';
		}
	}
	quickEdit(item) {
		this.layoutUtilsService.showActionNotification("Updating");
	}
	updateStage(item) {
		this.layoutUtilsService.showActionNotification("Updating");
	}

}
