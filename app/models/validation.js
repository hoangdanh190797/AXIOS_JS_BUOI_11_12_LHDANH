function Validation() {
    //---------------------------------------------------------------
    this.checkEmpty = (value, errorID, mess) => {
      if (value === "") {
        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display = "block";
        return false;
      }
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    };
    //---------------------------------------------------------------
    this.checkStringLength = (value, errorID, mess, min, max) => {
      if (value.trim().length >= min && value.trim().length <= max) {
        getEle(errorID).innerHTML = "";
        getEle(errorID).style.display = "none";
        return true;
      }
      getEle(errorID).innerHTML = mess;
      getEle(errorID).style.display = "block";
      return false;
    };
    //---------------------------------------------------------------
    this.checkString = (value, errorID, mess) => {
      var letter =
        "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
      if (value.match(letter)) {
        getEle(errorID).innerHTML = "";
        getEle(errorID).style.display = "none";
        return true;
      }
      getEle(errorID).innerHTML = mess;
      getEle(errorID).style.display = "block";
      return false;
    };
    //---------------------------------------------------------------
    this.checkEmail = (value, errorID, mess) => {
      var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (value.match(letter)) {
        getEle(errorID).innerHTML = "";
        getEle(errorID).style.display = "none";
        return true;
      }
      getEle(errorID).innerHTML = mess;
      getEle(errorID).style.display = "block";
      return false;
    };
    this.checkPassword = (value, errorID, mess) => {
      var letter =
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{6,10}/;
      if (value.match(letter)) {
        getEle(errorID).innerHTML = "";
        getEle(errorID).style.display = "none";
        return true;
      }
      getEle(errorID).innerHTML = mess;
      getEle(errorID).style.display = "block";
      return false;
    };
    this.checkSalary = (value, errorID, mess, min, max) => {
      if (value >= min && value <= max) {
        getEle(errorID).innerHTML = "";
        getEle(errorID).style.display = "none";
        return true;
      }
      getEle(errorID).innerHTML = mess;
      getEle(errorID).style.display = "block";
      return false;
    };
    this.checkWorkingTime = (value, errorID, mess, min, max) => {
      if (value >= min && value <= max) {
        getEle(errorID).innerHTML = "";
        getEle(errorID).style.display = "none";
        return true;
      }
      getEle(errorID).innerHTML = mess;
      getEle(errorID).style.display = "block";
      return false;
    };
  }
  