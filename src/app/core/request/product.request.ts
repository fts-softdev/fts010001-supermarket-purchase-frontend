export class ProductRequest {
    id?: string;
    areaId?: string;
    nhomSPId?: string;
    ten?: string;
    donGia?: number;
    trangThai?: number;
    donVi?: string;
    soLuongTonKho?: number;
    createdAt?: string;
    updatedAt?: string;

    /**
     * to json
     * @param data 
     */
    fromJson(data: any) {
        this.id = data._id;
        this.areaId = data.areaId;
        this.nhomSPId = data.nhomSPId;
        this.ten = data.ten;
        this.donGia = data.donGia;
        this.trangThai = data.trangThai;
        this.donVi = data.donVi;
        this.soLuongTonKho = data.soLuongTonKho;
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
            areaId: this.areaId!,
            nhomSPId: this.nhomSPId!,
            ten: this.ten!,
            donGia: this.donGia!,
            trangThai: this.trangThai!,
            donVi: this.donVi!,
            soLuongTonKho: this.soLuongTonKho!,
            createdAt: this.createdAt!,
            updatedAt: this.updatedAt!,
        }
    }
}