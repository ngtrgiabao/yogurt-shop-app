const validationEmail = (frm) => {
  const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailReg.test(frm.email.value) === false) {
    alert("Vui lòng nhập Email hợp lệ");
    return false;
  }
};

const validationPsw = (frm) => {
  const pswLength = frm.psw.value.length;
  if (pswLength < 8) {
    alert("Vui lòng nhập lại mật khẩu")
    return false;
  }
};

const validationUsername = (frm) => {
    // const usernameLength = frm.value.length;
    
}

const validationForm = (frm) => {
  validationEmail(frm);
  validationPsw(frm)
  validationUsername(frm)

  alert("Đăng ký thành công")
  return true
};
