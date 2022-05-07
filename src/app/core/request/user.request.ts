export class UserRequest {
  id?: string;
  hoten?: string;
  soDienThoai?: string;
  email?: string;
  avatar?: string;
  role?: number;
  viTien?: number;
  password?: string;
  access_token?: string;
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
