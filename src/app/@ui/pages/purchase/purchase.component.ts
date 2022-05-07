import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/@shell/services/common.service';
import { ProductRequest } from 'src/app/core/request/product.request';
import { ProductResponse } from 'src/app/core/responses/product.response';
import { SelectSearchBoxComponent } from '../../components/select-search-box/select-search-box.component';

// services

@Component({
  selector: 'app-purchase-page',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit, OnDestroy, AfterViewInit {

  // variable system
  subscription: Subscription[] = [];

  constructor(
    public commonService: CommonService
  ) { }

  /**
   * on init method
   */
  ngOnInit(): void {

  }

  /**
   * on destroy method
   */
  ngOnDestroy(): void {
    // unsubscrible all subscription
    this.subscription.forEach(item => item.unsubscribe());
  }

  /**
   * after view init
   */
  ngAfterViewInit(): void {
    // scroll to top and left
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

}

@Component({
  selector: 'left-purchase-component',
  templateUrl: 'left-purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class LeftPurchaseComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('moneyFromCus') moneyFromCus?: ElementRef;
  data: any[] = [];
  names: string[] = [
    "id",
    "nhomSPId",
    "ten",
    "donGia",
    "donVi",
  ];

  public static donTaos: any = {
    "don-tao-1": [],
    "don-tao-2": [],
  };

  public static donTaoIndex: string = "don-tao-1";

  static inputs: number[] = [];
  static tongDon: number = 0;
  static phanTram: number = .2;
  static giamGia: number = 0;
  static tienNhan: number = 0;
  static keys: string[] = [];

  get inputs() {
    return LeftPurchaseComponent.inputs;
  }

  get tongDon() {
    return LeftPurchaseComponent.tongDon;
  }

  get phanTram() {
    return LeftPurchaseComponent.phanTram;
  }

  get giamGia() {
    return LeftPurchaseComponent.giamGia;
  }

  get tienNhan() {
    return LeftPurchaseComponent.tienNhan;
  }

  set tienNhan(value: number) {
    LeftPurchaseComponent.tienNhan = value;
  }

  get keys() {
    return LeftPurchaseComponent.keys;
  }

  get donTaoIndex() {
    return LeftPurchaseComponent.donTaoIndex;
  }

  get getDonTaos() {
    return LeftPurchaseComponent.donTaos[LeftPurchaseComponent.donTaoIndex];
  }

  constructor(
    public commonService: CommonService,
  ) { }

  /**
   * on init
   */
  ngOnInit(): void {
    let items = LeftPurchaseComponent.donTaos[LeftPurchaseComponent.donTaoIndex];
    items = items.map((item: any) => {
      if (!item.soLuong) item.soLuong = 1;
      LeftPurchaseComponent.tongDon += (item.donGia * item.soLuong);
      return item;
    });

    LeftPurchaseComponent.inputs = items.map((item: any) => item.soLuong);
    LeftPurchaseComponent.keys = Object.keys(LeftPurchaseComponent.donTaos);
    LeftPurchaseComponent.donTaos[LeftPurchaseComponent.donTaoIndex] = items;
    this.onTongTienLoad();
  }

  /**
   * on destroy
   */
  ngOnDestroy(): void {
  }

  /**
   * after view init
   */
  ngAfterViewInit(): void {
    this.onTienNhanLoad();
  }

  /**
   * on tien nhan load
   */
  onTienNhanLoad() {
    let t = this as any;

    if (this.moneyFromCus) {
      let element = this.moneyFromCus!.nativeElement;
      element.addEventListener('keyup', function (_event: any) {
        let _t = element as any;
        let value = _t.value;

        if (value.match(/^\d+$/)) {
          value = value * 1;
          t.tienNhan = value;
        }
      });
    }
  }

  /**
   * on so luong change
   * @param $event 
   * @param i 
   */
  onSoLuongChange($event: any, i: number) {
    LeftPurchaseComponent.inputs[i] = $event.target.value * 1;
    let items = LeftPurchaseComponent.donTaos[LeftPurchaseComponent.donTaoIndex];
    items[i].soLuong = LeftPurchaseComponent.inputs[i];

    LeftPurchaseComponent.tongDon = 0;
    for (let i = 0; i < LeftPurchaseComponent.inputs.length; i++) {
      LeftPurchaseComponent.tongDon += LeftPurchaseComponent.inputs[i] * items[i].donGia!
    }
    LeftPurchaseComponent.giamGia = LeftPurchaseComponent.tongDon * LeftPurchaseComponent.phanTram;
  }

  /**
   * on tong tien load 
   */
  onTongTienLoad() {
    let items = LeftPurchaseComponent.donTaos[LeftPurchaseComponent.donTaoIndex];
    LeftPurchaseComponent.inputs = items.map((item: any) => item.soLuong);
    LeftPurchaseComponent.tongDon = 0;
    for (let i = 0; i < LeftPurchaseComponent.inputs.length; i++) {
      LeftPurchaseComponent.tongDon += items[i].soLuong * items[i].donGia!
    }
    LeftPurchaseComponent.giamGia = LeftPurchaseComponent.tongDon * LeftPurchaseComponent.phanTram;
  }

  /**
   * on thanh toan click
   */
  onThanhToanClick() { }

  /**
   * on ghi chu click
   */
  onGhiChuClick() { }

  /**
   * on huy click
   */
  onHuyClick() { }

  /**
   * on luu click
   */
  onLuuClick() { }

  /**
   * on luu & in click
   */
  onLuuInClick() { }

  /**
   * on reset don index click
   * @param index 
   */
  onResetDonIndexClick(index: string) {
    LeftPurchaseComponent.donTaoIndex = index;
    this.onTongTienLoad();
  }

  /**
   * xóa item từ một đơn tạo 
   * @param itemId 
   */
  onXoaItemFromQuote(itemId: string) {
    let items = LeftPurchaseComponent.donTaos[LeftPurchaseComponent.donTaoIndex];
    items = items.filter((item: any) => item.id !== itemId);
    LeftPurchaseComponent.donTaos[LeftPurchaseComponent.donTaoIndex] = items;
    this.onTongTienLoad();
  }
}

@Component({
  selector: 'right-purchase-component',
  templateUrl: 'right-purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class RightPurchaseComponent implements OnInit, OnDestroy, AfterViewInit {
  data: any[] = [
    {
      id: "p01",
      areaId: "a01",
      nhomSPId: "n01",
      ten: "Sản phẩm 1",
      productImage: "https://greenoyard.com/wp-content/uploads/2021/05/Ladyfinger-removebg-preview.png",
      donGia: 50000,
      trangThai: 1,
      donVi: "Đơn vị 1",
      soLuongTonKho: 10,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
    {
      id: "p02",
      areaId: "a01",
      nhomSPId: "n01",
      ten: "Sản phẩm 2",
      productImage: "",
      donGia: 55000,
      trangThai: 1,
      donVi: "Đơn vị 2",
      soLuongTonKho: 10,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
    {
      id: "p03",
      areaId: "a01",
      nhomSPId: "n01",
      ten: "Sản phẩm 3",
      productImage: "",
      donGia: 70000,
      trangThai: 1,
      donVi: "Đơn vị 3",
      soLuongTonKho: 10,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
    {
      id: "p04",
      areaId: "a01",
      nhomSPId: "n01",
      ten: "Sản phẩm 4",
      productImage: "",
      donGia: 200000,
      trangThai: 1,
      donVi: "Đơn vị 4",
      soLuongTonKho: 10,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
    {
      id: "p05",
      areaId: "a01",
      nhomSPId: "n01",
      ten: "Sản phẩm 5",
      productImage: "",
      donGia: 30000,
      trangThai: 1,
      donVi: "Đơn vị 5",
      soLuongTonKho: 10,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
    {
      id: "p06",
      areaId: "a01",
      nhomSPId: "n01",
      ten: "Sản phẩm 6",
      productImage: "",
      donGia: 100000,
      trangThai: 1,
      donVi: "Đơn vị 6",
      soLuongTonKho: 10,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    }
  ];

  // product response
  static products: ProductResponse[] = [];
  get products() {
    return RightPurchaseComponent.products;
  }
  set products(products: any) {
    RightPurchaseComponent.products = products;
  }

  /**
   * constructor
   * @param leftPurchaseComponent 
   */
  constructor(
    private leftPurchaseComponent: LeftPurchaseComponent
  ) { }

  /**
   * on init
   */
  ngOnInit(): void {
    // this.products = this.data.map((item: any) => new ProductRequest().fromJson(item));
  }

  /**
   * on destroy
   */
  ngOnDestroy(): void {
  }

  /**
   * after view init
   */
  ngAfterViewInit(): void { }

  /**
   * on product click
   * @param item 
   */
  onProductClick(item: any) {
    let data = {} as any;
    for (let [k, v] of Object.entries(item)) data[k] = v;

    let donTaoIndex = LeftPurchaseComponent.donTaoIndex;
    let isExist = false;
    for (let i of LeftPurchaseComponent.donTaos[donTaoIndex]) {
      if (i.id === data.id) {
        isExist = true;
        i.soLuong++;
      }
    }

    if (!isExist) {
      data.soLuong = 1;
      LeftPurchaseComponent.donTaos[donTaoIndex].push(data);
    }

    this.leftPurchaseComponent.onTongTienLoad();
  }
}