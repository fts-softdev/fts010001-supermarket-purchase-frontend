export class GioHangRequest {
    id?: string;
    productId?: string;
    soLuong?: number;
    userId?: string;
    trangThai?: number;
    createdAt?: string;
    updatedAt?: string;

    /**
     * from json
     * @param data 
     */
    fromJson(data: any) {
        this.id = data._id;
        this.productId = data.productId;
        this.soLuong = data.soLuong;
        this.userId = data.userId;
        this.trangThai = data.trangThai;
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
            productId: this.productId!,
            soLuong: this.soLuong!,
            userId: this.userId!,
            trangThai: this.trangThai!,
            createdAt: this.createdAt!,
            updatedAt: this.updatedAt!,
        }
    }
}