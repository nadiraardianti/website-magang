function registerUser(event) {
  event.preventDefault();
  const pass = document.getElementById("password").value;
  const confirmPass = document.getElementById("confirmPassword").value;

  if (pass !== confirmPass) {
    alert("Password dan konfirmasi tidak sama!");
    return;
  }

  const user = {
    name: document.getElementById("name").value,
    school: document.getElementById("school").value,
    nim: document.getElementById("nim").value,
    email: document.getElementById("email").value,
    password: pass
  };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Registrasi berhasil! Silakan login.");
  window.location.href = "login.html";
}

function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("loggedUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("Email atau password salah!");
  }
}

function checkLogin() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  if (!isLoggedIn || !user) {
    alert("Silakan login dulu!");
    window.location.href = "login.html";
  } else {
    document.getElementById("userName").innerText = user.name + " (" + user.school + ")";
    document.getElementById("userNim").innerText = user.nim;
  }
}

function logoutUser() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("loggedUser");
  window.location.href = "index.html";
}

// simulasi status kelulusan
if (document.getElementById("statusBox")) {
  const lulus = Math.random() > 0.5;
  if (lulus) {
    document.getElementById("statusBox").innerHTML = `
      <h3>Selamat 🎉</h3>
      <p>Anda dinyatakan <b>LULUS</b> seleksi magang.</p>
      <a href="ketentuan.html" class="btn">Lanjut ke Ketentuan</a>
    `;
  } else {
    document.getElementById("statusBox").innerHTML = `
      <h3>Mohon Maaf 🙏</h3>
      <p>Anda <b>BELUM LULUS</b> seleksi magang.<br>Silakan coba lagi tahun depan.</p>
    `;
  }
}
