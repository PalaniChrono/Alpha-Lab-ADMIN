  import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
  import {
    FormControl,
    FormBuilder,
    FormGroup,
    Validators,
  } from "@angular/forms";
  import { ApiService } from "src/app/services/api.service";
  import { ToastrService } from "ngx-toastr";
  import { ImageService } from "src/app/services/image.service";
  import Swal from "sweetalert2";
  import { AngularMultiSelect } from "angular2-multiselect-dropdown";
  import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
  import { Router } from "@angular/router";
  @Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
  })
  export class TestComponent implements OnInit {
    productList: any = [];
    loading = false;
    loadingBtn = false;
    showPopup = false;
    stockBox = false;
    modalBoxName = "";
    keyword = "name";
  
    selectedSize: any = [];
    selectedFlavour: any = [];
    sizeSettings = {};
    flavourSettings = {};
  
    categories: any = [];
    activeCategories: any = [];
    subCategories: any = [];
    subCategoryName: any;
    filteredSubCategories: any = [];
    sno = 1;
    searchField: FormControl = new FormControl();
    errorMsg: any = [];
    viewBox = false;
    showImage = true;
  
  
    defaultImage = "assets/images/loader.gif";
  
    @ViewChild("auto", { static: false }) auto;
    @ViewChild("auto", { static: false, read: ElementRef }) dishAuto: ElementRef;
    @ViewChild("sizeDropDown", { static: false })
    sizeDropDown: AngularMultiSelect;
    @ViewChild("flavourDropDown", { static: false })
    flavourDropDown: AngularMultiSelect;
   
  
    secthreeimg: any = "";
    secthreeTxt: any = "";
    secfourTxt: any = "";
    secfourimg: any = "";
    wedding_textcontent : any = "";
    all_textContent : any = ""
  
    
    header:any;
    header_Content:any;
    SpotLightBanner: any ="";
    header_date: any;
    header_details_Content:any;

  
  
  
    constructor(
      private apiService: ApiService,
      private toastr: ToastrService,
      public router: Router,
      private imageService: ImageService,
      private formBuilder: FormBuilder
    ) {}
  
    ngOnInit() {
     
      this.getsTestDetails();
    }
  
    getsTestDetails(){
      this.loading = true;
      this.apiService.getData('getTestDetails').subscribe((data) => {
          const value = data.data;
  
         this.header = value[0].test_name;
         this.header_Content = value[0].test_details;
         this.header_details_Content = value[0].test_points;
         this.SpotLightBanner = value[0].test_image;

         this.loading = false;
          console.warn("this is data",data)
       }, error => {
          this.loading = false;
      });
    }
  
    formatDate(date) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;
  
      return [year, month, day].join('-');
  }
     
    updatespotlight() { 
  
      const value = {
  
        test_name :this.header,
        test_details: this.header_Content,
        test_image: this.SpotLightBanner,
        test_points : this.header_details_Content,

  
      };
    
      this.apiCall("update", "updateTest", value);
    }
  
  
  
    apiCall(name, url, value: any = "") {
      this.apiService[name](url, value).subscribe((data) => {
        if (data.error === false) {
          this.toastr.success(data.message);
          this.loadingBtn = false;
        } else {
          this.toastr.error(data.message);
          this.loadingBtn = false;
          this.errorMsg = data.data;
        }
        this.getsTestDetails();
      });
    }
  
  
  }
  