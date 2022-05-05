export class EventRequest {
    id?: string;
    ten?: string;
    ngayBatDau?: string;
    ngayKetThuc?: string;
    khuyenMai?: number;
    createdAt?: string;
    updatedAt?: string;

    /**
     * from json
     * @param data 
     */
    fromJson(data: any) {
        this.id = data._id;
        this.ten = data.ten;
        this.ngayBatDau = data.ngayBatDau;
        this.ngayKetThuc = data.ngayKetThuc;
        this.khuyenMai = data.khuyenMai;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }

    /**
     * to json
     * @returns 
     */
    toJson() {
        return {
            id: this.id!,
            ten: this.ten!,
            ngayBatDau: this.ngayBatDau!,
            ngayKetThuc: this.ngayKetThuc!,
            khuyenMai: this.khuyenMai!,
            createdAt: this.createdAt!,
            updatedAt: this.updatedAt!,
        }
    }
}