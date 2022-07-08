import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { ImageService } from 'src/app/services/image.service';
import Swal from 'sweetalert2';
import { AngularMultiSelect } from 'angular2-multiselect-dropdown';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  productList: any = [];
  loading = false;
  loadingBtn = false;
  showPopup = false;
  stockBox = false;
  modalBoxName = '';
  keyword = 'name';
  categoryName: any = 0;
  productName: any;
  productPrice: any;
  productDiscPrice: any;
  productDesc: any;
  productSize = '';
  productImages: any = [];
  editProductId: any;
  basePrice;
  shortDescription;


  selectedSize: any = [];
  selectedFlavour:any = [];
  sizeSettings = {};
  flavourSettings = {};

  categories: any = [];
  activeCategories: any = [];
  subCategories:any = [];
  subCategoryName:any ;
  filteredSubCategories:any=[];
  sno = 1;
  searchField: FormControl = new FormControl();
  errorMsg: any = [];
  viewBox = false;
  showImage = true;
  imageUrl = '';

  productStocks:any = [];
  stockProductName = '';
  stockForm: FormGroup;


  card3_img : any = ""
  card3_iconimg : any = ""
  home_card3_heading : any = ""
  home_card_3_textcontent : any = ""
  // sizeQuantity:any[] = [];

  defaultImage = 'assets/images/loader.gif';

  @ViewChild('auto', { static: false }) auto;
  @ViewChild('auto', { static: false, read: ElementRef }) dishAuto: ElementRef;
  @ViewChild('sizeDropDown', { static: false }) sizeDropDown: AngularMultiSelect;
  @ViewChild('flavourDropDown', { static: false }) flavourDropDown: AngularMultiSelect;
  taxList: any = [];
  taxId: any = 0;
  newProduct: any = 1;
  bestSelling: any = 1;
  regionList: any = [];
  regionArray: any = [];
  regionId: any = [];

  flavourList: any = [];
  flavourArray: any = [];
  flavourId: any = [];
  description;
  variation:any = [];
  weightList: any = [];
  clickValue: any = 1;
  weightLength: any;
  startTime:any;
  endTime:any;
  hsn:any = 0;
  preparation:any = 0;
  unitList: any = [];
  unitId: any = 0;
  baseEggPrice:any = ''
  baseEgglessPrice:any = ''
  filteredHsnCodeList:any = [];
  homeContent:any="";
  sectionOneGreyText:any = "";
  features:any = "";
  seconeimg:any = "";
  sectwoTxt:any = "";
  sectwoimg:any = "";
  secthreeimg:any = "";
  secthreeTxt:any ="";
  secfourTxt:any = "";
  secfourimg:any = "";
  show: boolean = false;
  
  blogList : any = [];
  viewauthor:any;
  viewdate:any;
  viewName: any = '';
  viewDesignation: any;

  viewid: any ;
  editCompanyID: any = '';
  
  createID :any ;
  createCompanyID : any ='';
  createName: any = '';
  createDesignation: any = '';
  createQuote: any = '';
  blogID:any;

  BlogProfileImage: any ="";





  constructor(private apiService: ApiService,
     private toastr: ToastrService, 
     public router: Router, 
     private imageService: ImageService, 
     private formBuilder: FormBuilder) { }

  ngOnInit() {


    this.getblogcontent();
 
  }
  openModalBox(id = '',equipments_header='' , equipments_content='',equipments_image='', type) {
   if (type == 'view') {
       this.modalBoxName = 'View';
       this.viewid = id;
       this.viewName = equipments_header;
       this.viewDesignation = equipments_content;
       this.BlogProfileImage = equipments_image;


    }else if( type =='image'){
       this.modalBoxName = 'Image';
       this.blogID = id; 

    }
    this.showPopup = true;
  }
  popUpClose() {
    this.showPopup = false;
    this.errorMsg = [];
}


getblogcontent(){
    this.loading = true;
    this.apiService.getData('getAllEquipment').subscribe((data) => {
      const value = data.data
      this.blogList = value;
      console.log(this.blogList);
      this.loading = false;
    }, error => {
        this.loading = false;
    });
  }

  
  activateSpotlight(id){
    console.log(id);
    this.loading = true;
    this.apiService.getData('activateEquipments', id).subscribe((data) => {
      if (data.error === false) {
        this.toastr.success(data.message);
        this.getblogcontent();
        this.loadingBtn = false;
    } else {
        this.toastr.warning(data.message);
        this.loadingBtn = false;
    }
    }, error => {
        this.loading = false;
    });
  }

  deActivateSpotlight(id){
    this.loading = true;
    this.apiService.getData('deactivateEquipments', id).subscribe((data) => {
      if (data.error === false) {
        this.toastr.success(data.message);
        this.getblogcontent();
        this.loadingBtn = false;
    } else {
        this.toastr.warning(data.message);
        this.loadingBtn = false;
    }
    }, error => {
        this.loading = false;
    });
  }

  
  deleteBlog(id) {
    Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this Testimony Detail',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
    }).then((result) => {
        if (result.value) {
            this.apiService.getData('deleteEquipmentsDetailsById', id).subscribe((data) => {
                if (data.error === false) {
                    this.toastr.success(data.message);
                    this.getblogcontent();
                } else {
                    this.toastr.error(data.message);
                }
            });
  
            Swal.fire(
                'Deleted!',
                'Your Testimony  detail has been deleted.',
                'success'
            );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                'Cancelled',
                'Your Testimony detail file is safe :)',
                'error'
            );
        }
    });
  }


  apiCall(name, url, value : any = '') {
    this.apiService[name](url, value).subscribe((data) => {
       if (data.error === false) {
          this.toastr.success(data.message);
          this.loadingBtn = false;
        } else {
          this.toastr.error(data.message);
          this.loadingBtn = false;
          this.errorMsg = data.data;     
       }
      this.getblogcontent();
      
    });
  }




  closepopup(){
    this.show = false;
  }

  openPopup(){
    this.show = true;
  }
}
