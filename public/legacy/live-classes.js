const LIVE_ATTENDANCE_KEY = 'aprenda_sinais_attendance';

function readLiveAttendance() {
  try {
    const records = JSON.parse(localStorage.getItem(LIVE_ATTENDANCE_KEY) || '[]');
    return Array.isArray(records) ? records : [];
  } catch {
    return [];
  }
}

function escapeLiveText(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function formatLiveDuration(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
}

window.openLiveRoom = (title, teacher) => {
  window.dispatchEvent(new CustomEvent('aprenda-sinais:live-room-open', {
    detail: { title, teacher }
  }));
};

window.initializeLiveClasses = () => {
  const tableBody = document.getElementById('live-attendance-summary-body');
  if (!tableBody) return;

  const records = readLiveAttendance();
  if (records.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="3" class="p-3 text-center text-slate-500">Ainda não há presenças registradas.</td></tr>';
    return;
  }

  tableBody.innerHTML = records.map((record) => `
    <tr>
      <td class="p-2.5 font-semibold text-slate-800">${escapeLiveText(record.classTitle)}<span class="mt-1 block text-[10px] font-normal text-slate-500">${escapeLiveText(record.date)}</span></td>
      <td class="p-2.5 font-mono">${escapeLiveText(record.entry)}</td>
      <td class="p-2.5 font-mono font-bold text-brand-700">${formatLiveDuration(Number(record.durationSec) || 0)}</td>
    </tr>
  `).join('');
};
