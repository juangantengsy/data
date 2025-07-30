const output = document.getElementById('logOutput');

const fakeData = [
  "[✔] Mengambil IP Address: 10.0.0.5",
  "[✔] Sistem: Android 11 | Chrome",
  "[✔] Lokasi: Lombok, Indonesia",
  "[✔] MAC Address: D3:AD:BE:EF:12:34",
  "[✔] Mengakses Kamera...",
  "[✔] Kontak ditemukan: 352",
  "[✔] Menyalin WhatsApp...",
  "[✔] Token IG berhasil dicuri!",
  "[✔] Upload ke: /darknet/db/",
  "[✔] Sedang menghapus jejak...",
  "[✔] Data terenkripsi dikirim ke server",
  "[✔] Sistem sedang shutdown virtual...",
  "[✔] DNS Spoof aktif...",
  "[✔] Attack Mode: ACTIVE",
];

let i = 0;

function generateFakeLog() {
  if (i >= fakeData.length) i = 0;
  const line = document.createElement('p');
  line.textContent = fakeData[i++];
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

setInterval(generateFakeLog, 700);
const statusOutput = document.getElementById('statusOutput');

const statusLogs = [
  "[SYS] Data Ulpa Berhasil...",
  "[SYS] Data Zik Berhasil...",
  "[SYS] Data Bolols Berhasil",
  "[SYS] Escalating Privileges...",
  "[SYS] IP Spoofing Activated",
  "[SYS] Downloading Payload...",
  "[SYS] Upload Success → root/tmp/",
  "[SYS] Running obfuscation...",
  "[SYS] Masking Process Tree",
  "[SYS] TOR Tunnel Established",
  "[SYS] DNS Spoof Activated",
  "[SYS] Zero-Day Exploit Running...",
  "[SYS] Encrypting Target Data...",
  "[SYS] Cleaning logs...",
  "[SYS] Exit code: 0 (Success)",
];

let s = 0;

function generateStatusLog() {
  if (s >= statusLogs.length) s = 0;
  const line = document.createElement('p');
  line.textContent = statusLogs[s++];
  statusOutput.appendChild(line);
  statusOutput.scrollTop = statusOutput.scrollHeight;
}

setInterval(generateStatusLog, 900);
