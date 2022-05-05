export class ProductCategoryRequest {
    id?: string;
    tenNhom?: string;
    createdAt?: string;
    updatedAt?: string;

    /**
     * from json
     * @param data 
     */
    fromJson(data: any) {
        this.id = data._id;
        this.tenNhom = data.tenNhom;
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
            tenNhom: this.tenNhom!,
            createdAt: this.createdAt!,
            updatedAt: this.updatedAt!,
        }
    }
}