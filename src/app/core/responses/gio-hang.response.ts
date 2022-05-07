export class GioHangResponse {
    id?: string;
    productId?: any;
    soLuong?: number;
    userId?: any;
    trangThai?: number;
    createdAt?: string;
    updatedAt?: string;

    /**
     * set values into this 
     * @param data 
     */
    fromJson(data: any) {
        let t = this as any;
        for (let key in data) {
            t[key] = data[key];
        }
        t.id = data._id;
        delete t._id;

        return t;
    }
}