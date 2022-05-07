export class EventResponse {
    id?: string;
    ten?: string;
    ngayBatDau?: string;
    ngayKetThuc?: string;
    khuyenMai?: number;
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