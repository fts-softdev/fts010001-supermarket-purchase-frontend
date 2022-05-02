export class CommonSerivce {
    /**
     * convert to viet nam currency
     * @param money 
     * @returns 
     */
    convertToVietnamCurrency(money: number) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(money).replace('₫','VNĐ');
    }
}