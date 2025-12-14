document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const role = document.getElementById('role').value;
  const userId = document.getElementById('userId').value;

  localStorage.setItem('role', role);
  localStorage.setItem('userId', userId);

  if (role === 'student') {
    window.location.href = "student.html";
  } else {
    window.location.href = "Faculty.html";
  }
});