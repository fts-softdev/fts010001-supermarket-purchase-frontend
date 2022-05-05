import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonSerivce } from 'src/@shell/services/common.service';
import { ProductRequest } from 'src/app/core/request/product.request';

// models

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
    public commonService: CommonSerivce
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
  data: any[] = [];
  names: string[] = [
    "id",
    "nhomSPId",
    "ten",
    "donGia",
    "donVi",
  ];

  inputs: number[] = [];
  tongDon: number = 0;
  phanTram: number = .5;
  giamGia: number = 0;
  tienNhan: number = 0;

  constructor(
    public commonService: CommonSerivce
  ) {
    let data = [
      {
        _id: "pr01",
        areaId: "a01",
        nhomSPId: "n01",
        ten: "Product01",
        donGia: 200000,
        trangThai: 0,
        donVi: "DonVi",
        soLuongTonKho: 0,
      },
      {
        _id: "pr02",
        areaId: "a01",
        nhomSPId: "n01",
        ten: "Product02",
        donGia: 200000,
        trangThai: 0,
        donVi: "DonVi",
        soLuongTonKho: 0,
      },
    ];
    this.inputs = new Array(data.length).fill(1);

    this.data = data.map(item => {
      let productRequest = new ProductRequest();
      productRequest.fromJson(item);
      this.tongDon += item.donGia;
      return productRequest.toJson();
    });
  }

  /**
   * on init
   */
  ngOnInit(): void {
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
    let t = this as any;
    document.getElementById('moneyFromCus')!.addEventListener('keyup', function (event) {
      let _t = this as any;
      let value = _t.value;

      if (value.match(/^\d+$/)) {
        value = value * 1;
        t.tienNhan = value;
      }
    })
  }

  /**
   * on so luong change
   * @param $event 
   * @param i 
   */
  onSoLuongChange($event: any, i: number) {
    this.inputs[i] = $event.target.value * 1;
    let temps = [];
    for (let i = 0; i < this.inputs.length; i++) {
      temps.push(this.inputs[i] * this.data[i].donGia);
    }

    this.tongDon = temps.reduce((a, b) => a + b);
    this.giamGia = this.tongDon * this.phanTram;
  }

  /**
   * on thanh toan click
   */
  onThanhToanClick() {
    console.log(this.inputs);
  }

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

}

@Component({
  selector: 'right-purchase-component',
  templateUrl: 'right-purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class RightPurchaseComponent {

  constructor() { }

}