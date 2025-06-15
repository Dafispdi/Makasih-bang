
// create-panel.js

async function createPanel() {
  const username = document.getElementById('username').value;
  const ram = document.getElementById('ram').value;
  const disk = document.getElementById('disk').value;
  const cpu = document.getElementById('cpu').value;
  const resultEl = document.getElementById('result');

  if (!username || !ram || !disk || !cpu) {
    alert('Semua field wajib diisi!');
    return;
  }

  // Gunakan endpoint backend Vercel jika ada atau fallback ke URL default
  const endpoint = '/api/createPanel'; // Ubah sesuai endpoint kamu

  const payload = {
    username: username,
    ram: parseInt(ram),
    disk: parseInt(disk),
    cpu: parseInt(cpu)
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error('Gagal mengambil data dari server');
    }

    const data = await response.json();

    const formatted = `( Berikut Data Panel Anda 🌐 )
Username: ${data.username}
Password: ${data.password}
Login: ${data.domain}`;

    resultEl.textContent = formatted;
  } catch (error) {
    resultEl.textContent = '❌ Gagal membuat panel: ' + error.message;
  }
}
