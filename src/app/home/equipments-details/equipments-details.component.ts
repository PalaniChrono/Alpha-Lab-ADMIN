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
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-equipments-details',
  templateUrl: './equipments-details.component.html',
  styleUrls: ['./equipments-details.component.css']
})
export class EquipmentsDetailsComponent implements OnInit {
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

  blog_id:any;
  blog_header:any;
  blog_Content:any;
  blog_date:any;
  author_name:any;
  BlogImage: any ="";
  spotlight_details_Content:any;


  equipments_id:any;
  equipments_header:any;
  equipments_content:any;
  equipments_details:any;
  equipments_image:any;



  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    public router: Router,
    private imageService: ImageService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
   
   
    this.route.params.subscribe(params => {
      this.blog_id = +params['id']; 
   });
   if(this.blog_id){
    this.getbloglist(this.blog_id);
   }
    
  }
  getbloglist(blog_id) {
    this.apiService.show('getEquipmentsDetailsById/' + blog_id).subscribe((data) => {
        const value = data.data;


        this.equipments_header = value[0].equipments_header;
     //   this.equipments_content = value[0].equipments_content;
        this.equipments_details = value[0].equipments_details; 
      
        
    });
} 

  Createblog(){
 
     this.loadingBtn = true;
     const value = {

      equipments_header :this.equipments_header,
    //  equipments_content: this.equipments_content,
      equipments_details: this.equipments_details,
  
  
      };
     this.apiService.postData(value, 'storeNewEquipmentsDetails').subscribe((data) => {
         if (data.error === false) {
          this.router.navigate(['equipments']);
          this.toastr.success(data.message);
             this.loadingBtn = false;
         } else {
             this.toastr.warning(data.message);
             this.loadingBtn = false;
         }
     }, error => {
         this.loadingBtn = false;
     });
   }

   
  updateblog() { 

    const value = {
      id :this.blog_id,
      equipments_header :this.equipments_header,
    //  equipments_content: this.equipments_content,
      equipments_details: this.equipments_details,


    };
    this.apiCall("update2", "updateEquipmentsDetails", value);
    this.router.navigate(['equipments']);
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
      this.getbloglist(this.blog_id);
    });
  }


}

