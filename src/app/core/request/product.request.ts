export class ProductRequest {
    id?: string;
    nhomSPId?: string;
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
        return t;
    }
}