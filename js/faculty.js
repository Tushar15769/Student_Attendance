async function loadClass(subject) {
  const data = await fetch(`/attendance/class/${subject}`).then(r=>r.json());
  // render table + chart here
}



document.getElementById('subject').addEventListener('change', loadClass);

async function loadClass() {
  const subject = document.getElementById('subject').value;

  // Mock data for now
  const data = [
    { id: "101", percent: 92 },
    { id: "102", percent: 78 },
    { id: "103", percent: 65 },
    { id: "104", percent: 48 },
    { id: "105", percent: 88 }
  ];

  // Fill table
  const table = document.getElementById('classTable');
  table.innerHTML = data.map(d =>
    `<tr><td>${d.id}</td><td>${d.percent}%</td></tr>`
  ).join('');

  // Defaulters
  const defaulters = data.filter(d => d.percent < 75);
  const list = document.getElementById('defaulters');
  list.innerHTML = defaulters.map(d =>
    `<li>${d.id} - ${d.percent}%</li>`
  ).join('');

  // Chart
  const ctx = document.getElementById('classChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => d.id),
      datasets: [{
        label: 'Attendance %',
        data: data.map(d => d.percent),
        backgroundColor: '#3b82f6'
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true, max: 100 }
      }
    }
  });
}

// Load default subject
loadClass();