export class CommonService {
    /**
     * convert to viet nam currency
     * @param money 
     * @returns 
     */
    convertToVietnamCurrency(money: number) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(money).replace('₫', 'VNĐ');
    }

    /**
     * clean accent 
     * @param value 
     * @returns 
     */
    cleanAccent(value: string) {
        return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/[đ|Đ]/g, 'd');
    }
}