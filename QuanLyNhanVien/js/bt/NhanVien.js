function NhanVien(tk, hoten, email, mk, ngaylam, luong, chucvu, giolam) {
    this.taiKhoan = tk;
    this.hoTen = hoten;
    this.email = email;
    this.matKhau = mk;
    this.ngayLam = ngaylam;
    this.luong = luong;
    this.chucVu = chucvu;
    this.giolam = giolam;
    this.tongLuong = 0;
    this.tinhTongLuong = function tinhTongLuong() {
        switch (this.chucVu) {
            case "Sếp":
                 this.tongLuong = this.luong * 3;
                break;
            case "Trưởng phòng":
                 this.tongLuong = this.luong * 2;
                break;
            case "Nhân viên":
                 this.tongLuong = this.luong;
                break;
        }
        return  this.tongLuong;
    }

    this.xeploai = '';
    this.tinhXepLoai = function () {
        console.log(this.giolam +'giờ làm');
        if (Number(this.giolam) > 0 && Number(this.giolam) < 160) {
            return this.xeploai = 'Trung Bình'
        } else if (Number(this.giolam) >= 160 && Number(this.giolam) < 176) {
            return this.xeploai ='Khá'
        } else if (Number(this.giolam) >= 176 && Number(this.giolam) < 192) {
            return this.xeploai ='Giỏi'
        } else if (Number(this.giolam) > 192) {
            return this.xeploai ='Xuất sắc'
        }
    }
    console.log(this.tinhXepLoai);
}


