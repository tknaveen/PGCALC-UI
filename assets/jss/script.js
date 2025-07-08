var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
tooltipTriggerList.forEach(function (tooltipTriggerEl) {
  new bootstrap.Tooltip(tooltipTriggerEl)
})


    const form = document.getElementById('loginForm');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let hasError = false;
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      
      // clear errors
      document.getElementById('usernameError').textContent = '';
      document.getElementById('passwordError').textContent = '';
      
      if (!username) {
        document.getElementById('usernameError').textContent = 'Username is required';
        hasError = true;
      }
      if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required';
        hasError = true;
      }
      
      if (!hasError) {
        // fake alert trigger
        showAlert();
      }
    });
    
    function showAlert() {
      document.getElementById('alert').classList.remove('d-none');
    }
    function hideAlert() {
      document.getElementById('alert').classList.add('d-none');
    }