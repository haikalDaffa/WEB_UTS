// Fungsi untuk menampilkan form login dan menyembunyikan form registrasi
function showLoginForm() {
    // Menampilkan form login dan menyembunyikan form registrasi
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('formTitle').innerText = 'Login'; // Mengubah judul menjadi "Login"
  }
  
  // Fungsi untuk menampilkan form registrasi dan menyembunyikan form login
  function showRegistrationForm() {
    // Menampilkan form registrasi dan menyembunyikan form login
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'block';
    document.getElementById('formTitle').innerText = 'Registrasi'; // Mengubah judul menjadi "Registrasi"
  }
  
  // Fungsi untuk registrasi pengguna baru
  function registerUser() {
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Validasi apakah password dan konfirmasi password sama
    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok.");
      return false;
    }
  
    // Menyimpan username dan password di localStorage (untuk demo)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  
    alert("Registrasi berhasil! Silakan login.");
    showLoginForm(); // Kembali ke form login setelah registrasi berhasil
    return false;
  }
  
  // Fungsi untuk login pengguna
  function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Ambil data yang disimpan di localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
  
    // Validasi login
    if (username === storedUsername && password === storedPassword) {
      alert("Login berhasil! Anda akan diarahkan ke menu utama.");
      window.location.href = "index.html"; // Arahkan ke halaman utama setelah login berhasil
      return false; // Mencegah form submit
    } else {
      alert("Username atau password salah!");
      return false; // Mencegah form submit
    }
  }
  