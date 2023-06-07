const dsnv = new DanhSachNhanVien()
const validation = new Validation();

function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}

function getLocalStorage() {
    var dataLocal = JSON.parse(localStorage.getItem("DSNV"));
    if (dataLocal !== null) {
        hienThiTable(dataLocal);
        dsnv.mangNV = dataLocal;
    }
}
getLocalStorage()
function themNhanVien() {
    var tk = document.getElementById('tknv').value;
    var hoten = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mk = document.getElementById('password').value;
    var ngaylam = document.getElementById('datepicker').value;
    var luong = document.getElementById('luongCB').value;
    var chucvu = document.getElementById('chucvu').value;
    var giolam = document.getElementById('gioLam').value;


    // console.log(tk, hoten, email, mk, ngaylam, luong, chucvu, giolam);

    var isValid = true
    isValid &= validation.checkEmpty(tk,"tbTKNV","Tài khoản không được để trống") && validation.checkID(tk,"tbTKNV","tài khoản không được trùng", dsnv.mangNV)
    isValid &= validation.checkEmpty(hoten,"tbTen","Họ và tên không được để trống") && validation.checkName(hoten,"tbTen","Tên nhân viên phải là chữ")
    isValid &= validation.checkEmpty(email,"tbEmail","Email không được để trống") && validation.checkEmail(email,"tbEmail"," Email phải đúng định dạng")
    isValid &= validation.checkEmpty(mk,"tbMatKhau","Mật khẩu không được để trống") && validation.checkMK(mk,"tbMatKhau","mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)")
    isValid &= validation.checkEmpty(ngaylam,"tbNgay","Ngày làm không được để trống") && validation.checkDate(ngaylam,"tbNgay","Ngày làm  định dạng mm/dd/yyyy")
    isValid &= validation.checkEmpty(luong,"tbLuongCB","Lương không được để trống") && validation.checkLuong(luong,"tbLuongCB"," Lương cơ bản 1 000 000 - 20 000 000")
    isValid &= validation.checkChucVu(chucvu,"tbChucVu","Hãy chọn chức vụ") 
    isValid &= validation.checkEmpty(giolam,"tbGiolam","Giờ làm không được để trống") && validation.checkGioLam(giolam,"tbGiolam","Số giờ làm trong tháng 80 - 200 giờ")
    console.log(isValid)
    if (isValid) {
        var nv = new NhanVien(tk, hoten, email, mk, ngaylam, Number(luong), chucvu, Number(giolam));
        console.log(nv);
        nv.tinhTongLuong();
        nv.tinhXepLoai();
        dsnv.themNV(nv);
        setLocalStorage()
        hienThiTable(dsnv.mangNV)
    }
}
function hienThiTable(mang) {
    var content = ""
    mang.map(function (nv, index) {
        var trNV = `<tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.hoTen}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.xeploai}</td>
            <td>
                <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')">Xóa</button>
                <button class="btn btn-info" onclick="xemThongTin('${nv.taiKhoan}')">Xem</button>
            </td>
        </tr>`;
        content += trNV;
    })
    // console.log(content);
    document.getElementById("tableDanhSach").innerHTML = content;
}
function xoaNhanVien(ma) {
    dsnv.xoaNV(ma)
    setLocalStorage()
    hienThiTable(dsnv.mangNV)
}

function xemThongTin(ma) {
    var indexFind = dsnv.timIndex(ma)
    if (indexFind > -1) {
        var nvFind = dsnv.mangNV[indexFind]
        document.getElementById('tknv').value = nvFind.taiKhoan;
        document.getElementById('name').value = nvFind.hoTen;
        document.getElementById('email').value = nvFind.email;
        document.getElementById('password').value = nvFind.matKhau;
        document.getElementById('datepicker').value = nvFind.ngayLam;
        document.getElementById('luongCB').value = nvFind.luong;
        document.getElementById('chucvu').value = nvFind.chucVu;
        document.getElementById('gioLam').value = nvFind.giolam;
    }
}

function capNhatSV() {
    var tk = document.getElementById('tknv').value;
    var hoten = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mk = document.getElementById('password').value;
    var ngaylam = document.getElementById('datepicker').value;
    var luong = document.getElementById('luongCB').value;
    var chucvu = document.getElementById('chucvu').value;
    var giolam = document.getElementById('gioLam').value;
    var nv = new NhanVien(tk, hoten, email, mk, ngaylam, luong, chucvu, giolam);
    nv.tinhTongLuong();
    nv.tinhXepLoai();
    console.log(nv);
    var result = dsnv.capNhat(nv);
    if (result) {
        setLocalStorage();
        hienThiTable(dsnv.mangNV);
    } else {
        alert("Cập nhật thất bại")
    }
}

document.getElementById("searchName").onkeyup = function(){
    var tuTim = document.getElementById("searchName").value;
    var mangTK =  dsnv.timKiemTheoTen(tuTim);
    hienThiTable(mangTK);
}
