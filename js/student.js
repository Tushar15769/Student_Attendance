async function loadStudent() {
  const id = localStorage.getItem('userId');
  const data = await fetch(`/attendance/student/${id}`).then(r=>r.json());
  document.getElementById('percent').textContent = data.percentage + "%";
  // fill table + chart here
}
loadStudent();

// js/student.js
async function loadStudent() {
  const studentId = localStorage.getItem('userId'); // from login
  if (!studentId) {
    window.location.href = "index.html"; // redirect if not logged in
    return;
  }

  // For now, mock data (replace with backend API later)
  const data = {
    percentage: 85,
    present: 17,
    total: 20,
    records: [
      { date: "2025-12-01", subject: "Math", status: "Present" },
      { date: "2025-12-02", subject: "Physics", status: "Absent" },
      { date: "2025-12-03", subject: "Chemistry", status: "Present" }
    ]
  };

  // Update cards
  document.getElementById('percent').textContent = data.percentage + "%";
  document.getElementById('present').textContent = data.present;
  document.getElementById('total').textContent = data.total;

  // Fill table
  const tbody = document.getElementById('records');
  tbody.innerHTML = data.records.map(r =>
    `<tr><td>${r.date}</td><td>${r.subject}</td><td>${r.status}</td></tr>`
  ).join('');

  // Chart
  const ctx = document.getElementById('attChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.records.map(r => r.date),
      datasets: [{
        label: 'Attendance',
        data: data.records.map(r => r.status === "Present" ? 1 : 0),
        borderColor: '#3b82f6',
        fill: false
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true, ticks: { stepSize: 1 } }
      }
    }
  });
}

loadStudent();