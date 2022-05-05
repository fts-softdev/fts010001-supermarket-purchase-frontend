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
   * to json
   * @param data 
   */
  fromJson(data: any) {
    this.id = data._id;
    this.hoten = data.hoten;
    this.soDienThoai = data.soDienThoai;
    this.email = data.email;
    this.avatar = data.avatar;
    this.role = data.role;
    this.viTien = data.viTien;
    this.password = data.password;
    this.access_token = data.access_token;
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
      hoten: this.hoten!,
      soDienThoai: this.soDienThoai!,
      email: this.email!,
      avatar: this.avatar!,
      role: this.role!,
      viTien: this.viTien!,
      password: this.password!,
      access_token: this.access_token!,
      createdAt: this.createdAt!,
      updatedAt: this.updatedAt!,
    }
  }
}
