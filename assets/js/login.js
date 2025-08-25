function ResetForgotPwdControls() {
	$('#txtforgotClientNickName').val('');
	$('#txtforgotUserName').val('');
	$('#txtEmail').val('');
} 

 
document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eyeIcon");

  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  eyeIcon.className = isPassword ? "fas fa-eye text-eye" : "fas fa-eye-slash text-eye";
  });
 