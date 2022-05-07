import { ProductCategoryResponse } from "./product-category.response";

export class ProductResponse {
    id?: string;
    nhomSPId?: any;
    ten?: string;
    productImage?: string;
    donGia?: number;
    trangThai?: number;
    donVi?: string;
    soLuongTonKho?: number;
    updatedAt?: string;
    createdAt?: string;

    /**
     * set values into this 
     * @param data 
     */
    fromJson(data: any) {
        let t = this as any;
        for (let key in data) {
            t[key] = data[key];
        }

        t['nhomSPId'] = new ProductCategoryResponse().fromJson(data['nhomSPId']);

        t.id = data._id;
        delete t._id;

        return t;
    }
}