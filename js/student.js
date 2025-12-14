async function loadStudent() {
  const id = localStorage.getItem('userId');
  const data = await fetch(`/attendance/student/${id}`).then(r=>r.json());
  document.getElementById('percent').textContent = data.percentage + "%";
  // fill table + chart here
}
loadStudent();