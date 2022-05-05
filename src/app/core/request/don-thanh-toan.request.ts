export class DonThanhToanRequest {
    id?: string;
    danhSachDatMuaIds?: string[];
    tongTien?: number;
    tongDon?: number;
    eventId?: string;
    createdAt?: string;
    updatedAt?: string;

    /**
     * from json
     * @param data 
     */
    fromJson(data: any) {
        this.id = data._id;
        this.danhSachDatMuaIds = data.danhSachDatMuaIds;
        this.tongTien = data.tongTien;
        this.tongDon = data.tongDon;
        this.eventId = data.eventId;
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
            danhSachDatMuaIds: this.danhSachDatMuaIds!,
            tongTien: this.tongTien!,
            tongDon: this.tongDon!,
            eventId: this.eventId!,
            createdAt: this.createdAt!,
            updatedAt: this.updatedAt!,
        }
    }
}