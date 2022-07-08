import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
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
  selector: 'app-faq-banner',
  templateUrl: './faq-banner.component.html',
  styleUrls: ['./faq-banner.component.css']
})
export class FaqBannerComponent implements OnInit {
  loading = false;
  loadingBtn = false;
  showPopup = false;

  sno = 1;
  searchField: FormControl = new FormControl();
  errorMsg: any = [];
  viewBox = false;
  showImage = true;

  productStocks: any = [];
  stockProductName = "";
  stockForm: FormGroup;

  defaultImage = "assets/images/loader.gif";

  @ViewChild("auto", { static: false }) auto;
  @ViewChild("auto", { static: false, read: ElementRef }) dishAuto: ElementRef;
  @ViewChild("sizeDropDown", { static: false })
  sizeDropDown: AngularMultiSelect;
  @ViewChild("flavourDropDown", { static: false })
  flavourDropDown: AngularMultiSelect;
  productBannerImage: String;
  banner_id: any;
  banner_one:any;
  banner_two:any;
  banner_three:any;
  banner_four:any;
  banner_five:any;


  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    public router: Router,
    private imageService: ImageService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getFaqBanner();
  }
  getFaqBanner() {
    this.loading = true;
    this.apiService.getData("getFaqBanner").subscribe(
      (data) => {
        const value = data.data;
        this.banner_id = value[0].id;
        this.banner_one = value[0].banner_one;
        this.banner_two = value[0].banner_two;
        this.banner_three = value[0].banner_three;
        this.banner_four = value[0].banner_four;
        this.banner_five = value[0].banner_five;

      
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }

}
