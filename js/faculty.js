async function loadClass(subject) {
  const data = await fetch(`/attendance/class/${subject}`).then(r=>r.json());
  // render table + chart here
}