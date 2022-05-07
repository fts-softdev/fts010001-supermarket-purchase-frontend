export class ProductCategoryRequest {
    id?: string;
    areaId?: any;
    tenNhom?: string;
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