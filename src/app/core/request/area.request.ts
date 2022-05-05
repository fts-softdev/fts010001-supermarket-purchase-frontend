export class AreaRequest {
    id?: string;
    tenKhu?: string;
    moTa?: string;
    createdAt?: string;
    updatedAt?: string;

    /**
     * from json
     * @param data 
     */
    fromJson(data: any) {
        this.id = data._id;
        this.tenKhu = data.tenKhu;
        this.moTa = data.moTa;
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
            tenKhu: this.tenKhu!,
            moTa: this.moTa!,
            createdAt: this.createdAt!,
            updatedAt: this.updatedAt!,
        }
    }
}