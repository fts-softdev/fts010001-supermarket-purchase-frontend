export class DonThanhToanRequest {
    id?: string;
    danhSachDatMuaIds?: string[];
    tongTien?: number;
    tongDon?: number;
    eventId?: string;
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
        return t;
    }
}