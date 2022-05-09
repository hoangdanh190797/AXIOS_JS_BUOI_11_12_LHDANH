var servies = new Services();
var validation = new Validation();
//-----------------------------------------------------------------------------
function getListUsers() {
  servies
    .fetchData()
    .then(function (result) {
      renderHTML(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
getListUsers();
//-----------------------------------------------------------------------------
function renderHTML(data) {
  var content = "";
  for (var i = 0; i < data.length; i++) {
    var users = data[i];
    content += `
        <tr>
            <td>${i + 1}</td>
            <td>${users.account}</td>
            <td>${users.password}</td>
            <td>${users.fullname}</td>
            <td>${users.email}</td>
            <td>${users.language}</td>
            <td>${users.typename}</td>
            <td>
                <button 
                    class="btn btn-info" 
                    data-toggle="modal" 
                    data-target="#myModal" 
                    onclick="_edit(${users.id})"
                    >
                    Edit</button>
                <button 
                    class="btn btn-danger" 
                    onclick="_detele(${users.id})"
                    >
                    Del</button>
            </td>
        </tr>
    `;
  }
  document.getElementById("tblDanhSachNguoiDung").innerHTML = content;
}
//-----------------------------------------------------------------------------
function getInfoUsers() {
  var account = document.getElementById("TaiKhoan").value;
  var fullname = document.getElementById("HoTen").value;
  var password = document.getElementById("MatKhau").value;
  var email = document.getElementById("Email").value;
  var picture = document.getElementById("HinhAnh").value;
  var typename = document.getElementById("loaiNguoiDung").value;
  //typename ~ loại người dùng
  var language = document.getElementById("loaiNgonNgu").value;
  var describe = document.getElementById("MoTa").value;

  // Validation;
  var isValid = true;

  //---Validation cho -  Tài khoản:
  isValid &= validation.checkEmpty(account, "tbAccount", "Don't BLANK");

  //---Validation cho -  Tên nhân viên:
  isValid &=
    validation.checkEmpty(fullname, "tbFullname", "Don't BLANK") &&
    validation.checkString(fullname, "tbFullname", "Name is string");

  //---Validation cho -  Email:
  isValid &=
    validation.checkEmpty(email, "tbEmail", "Don't BLANK") &&
    validation.checkEmail(email, "tbEmail", "Email is format");

  //---Validation cho -  Mật khẩu:
  isValid &=
    validation.checkEmpty(password, "tbPassword", "Don't BLANK") &&
    validation.checkPassword(
      password,
      "tbPassword",
      `6 - 10 characters, at least one uppercase letter, one 
      lowercase letter, one number and one special character`
    );
  //---Validation cho -  Picture:
  isValid &= validation.checkEmpty(picture, "tbPicture", "Don't BLANK");

  //---Validation cho -  Typename:
  isValid &= validation.checkEmpty(typename, "tbTypename", "Don't BLANK");

  //---Validation cho -  language:
  isValid &= validation.checkEmpty(language, "tbLanguage", "Don't BLANK");

  //---Validation cho -  describe:
  isValid &=
    validation.checkEmpty(describe, "tbDescribe", "Don't BLANK") &&
    validation.checkStringLength(
      describe,
      "tbDescribe",
      "0 - 60 characters",
      0,
      60
    );
  if (!isValid) return null;
  var userOne = new usersMGR(
    "",
    account,
    fullname,
    password,
    email,
    typename,
    language,
    describe,
    picture
  );
  return userOne;
}
//-----------------------------------------------------------------------------
/*Edit*/
function _edit(id) {
  document.getElementsByClassName("modal-title")[0].innerHTML =
    "CHANGE INFO USERS";
  var footer = `<button class="btn btn-warning" onclick="_updateInfoUser(${id})">Update</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;

  //Xử lý Promise
  servies
    .getUsersbyId(id)
    .then(function (result) {
      var users = result.data;
      //
      getEle("TaiKhoan").value = users.account;
      getEle("HoTen").value = users.fullname;
      getEle("MatKhau").value = users.password;
      getEle("Email").value = users.email;
      getEle("HinhAnh").value = users.picture;
      getEle("loaiNguoiDung").value = users.typename;
      getEle("loaiNgonNgu").value = users.language;
      getEle("MoTa").value = users.describe;
    })
    .catch(function (error) {
      console.log(error);
    });
}
//-----------------------------------------------------------------------------
/*Cập nhật thông tin người dùng*/
function _updateInfoUser(id) {
  var account = document.getElementById("TaiKhoan").value;
  var fullname = document.getElementById("HoTen").value;
  var password = document.getElementById("MatKhau").value;
  var email = document.getElementById("Email").value;
  var picture = document.getElementById("HinhAnh").value;
  var typename = document.getElementById("loaiNguoiDung").value;
  //typename ~ loại người dùng
  var language = document.getElementById("loaiNgonNgu").value;
  var describe = document.getElementById("MoTa").value;

  var userMode = new usersMGR(
    id,
    account,
    fullname,
    password,
    email,
    typename,
    language,
    describe,
    picture
  );

  //Xử lý Promise
  servies
    .updateInfoUsers(userMode)
    .then(function () {
      getListUsers();
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    });
}
//-----------------------------------------------------------------------------
/*Delete*/
function _detele(id) {
  servies
    .deleteUser(id)
    .then(function () {
      getListUsers();
    })
    .catch(function (error) {
      console.log(error);
    });
}
//-----------------------------------------------------------------------------
getEle("btnThemNguoiDung").addEventListener("click", function () {
  document.getElementsByClassName("modal-title")[0].innerHTML = "ADD USERS";
  var footer = `<button class="btn btn-success" onclick="addUsers()">Add Users</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
});
//-----------------------------------------------------------------------------
/*Thêm người dùng*/
function addUsers() {
  var userDemo = getInfoUsers();

  var userMode = new usersMGR(
    "",
    userDemo.account,
    userDemo.fullname,
    userDemo.password,
    userDemo.email,
    userDemo.typename,
    userDemo.language,
    userDemo.describe,
    userDemo.picture
  );

  // Xử lý Promise
  servies
    .addUsersApi(userMode)
    .then(function () {
      getListUsers();
    })
    .catch(function (error) {
      console.log(error);
    });
}
//-----------------------------------------------------------------------------
function getEle(id) {
  return document.getElementById(id);
}
