function Validation() {
    this.checkEmpty = function (value, spanID, message) {
        if (value === "") {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }

        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }
    this.checkID = function (value, spanID, message, mangNV) {
        var isExist = mangNV.some(function (nv, index) {
            return nv.taiKhoan === value
        });
        if (isExist) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }
    this.checkName = function (value, spanID, message) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (value.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;

        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;

    }
    this.checkEmail = function (value, spanID, message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkMK = function (value, spanID, message) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`|}{[\]:;?/.,\\=-]).{6,10}$/
        if (value.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkLuong = function (value, spanID, message) {
        if (value > 1000000 && value < 20000000) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    
    this.checkChucVu = function (value, spanID, message) {
        if (value !== "Chọn chức vụ") {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkDate = function (value, spanID, message) {
        var pattern = /(0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])[/](19|20)[0-9]{2}/
        if (value.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkGioLam = function (value, spanID, message) {
        if (value > 80 && value < 200) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
}





