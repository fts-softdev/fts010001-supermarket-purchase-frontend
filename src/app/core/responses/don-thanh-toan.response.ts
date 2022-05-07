export class DonThanhToanResponse {
    id?: string;
    danhSachDatMuaIds?: any[];
    tongTien?: number;
    tongDon?: number;
    eventId?: any;
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