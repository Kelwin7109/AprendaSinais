import React, { useEffect, useRef, useState } from 'react';
import { CameraOff, Hand, MessageCircle, Mic, MicOff, Send, UserCheck, Video, VideoOff } from 'lucide-react';

const attendanceKey = 'aprenda_sinais_attendance';

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return [hours, minutes, remainingSeconds].map((part) => String(part).padStart(2, '0')).join(':');
}

function readAttendance() {
  try {
    const value = JSON.parse(localStorage.getItem(attendanceKey) || '[]');
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export default function LiveClassroomPortal() {
  const [session, setSession] = useState(null);
  const [stream, setStream] = useState(null);
  const [mediaMessage, setMediaMessage] = useState('Solicitando acesso à câmera e ao microfone…');
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [audioLevel, setAudioLevel] = useState(0);
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [microphoneEnabled, setMicrophoneEnabled] = useState(true);
  const [messages, setMessages] = useState([
    { author: 'Sistema', text: 'Sua sala está aberta. O tempo de presença está sendo contado.' }
  ]);
  const [draft, setDraft] = useState('');
  const videoRef = useRef(null);
  const messagesRef = useRef(null);
  const microphoneEnabledRef = useRef(true);

  useEffect(() => {
    const handleOpen = (event) => {
      const { title, teacher } = event.detail || {};
      setSession({
        title: title || 'Aula ao vivo de LIBRAS',
        teacher: teacher || 'Equipe Aprenda Sinais',
        startedAt: Date.now()
      });
      setElapsedSeconds(0);
      setCameraEnabled(true);
      setMicrophoneEnabled(true);
      setMediaMessage('Solicitando acesso à câmera e ao microfone…');
      setAudioLevel(0);
      setMessages([{ author: 'Sistema', text: 'Sua entrada foi gravada! Registro de permanência ativo.', time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) }]);
    };

    window.addEventListener('aprenda-sinais:live-room-open', handleOpen);
    return () => window.removeEventListener('aprenda-sinais:live-room-open', handleOpen);
  }, []);

  useEffect(() => {
    if (!session) return undefined;

    let cancelled = false;
    let activeStream;
    const timer = window.setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - session.startedAt) / 1000));
    }, 1000);

    if (!navigator.mediaDevices?.getUserMedia) {
      setMediaMessage('Este navegador não oferece acesso à câmera neste endereço.');
    } else {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((cameraStream) => {
          if (cancelled) {
            cameraStream.getTracks().forEach((track) => track.stop());
            return;
          }
          activeStream = cameraStream;
          setStream(cameraStream);
          setMediaMessage('Câmera e microfone conectados.');
        })
        .catch(() => setMediaMessage('Permissão negada ou câmera indisponível. Você ainda pode acompanhar a aula.'));
    }

    return () => {
      cancelled = true;
      window.clearInterval(timer);
      activeStream?.getTracks().forEach((track) => track.stop());
    };
  }, [session]);

  useEffect(() => {
    if (videoRef.current && stream) videoRef.current.srcObject = stream;
  }, [stream]);

  useEffect(() => {
    if (!stream) return;
    stream.getVideoTracks().forEach((track) => { track.enabled = cameraEnabled; });
    stream.getAudioTracks().forEach((track) => { track.enabled = microphoneEnabled; });
  }, [cameraEnabled, microphoneEnabled, stream]);

  useEffect(() => {
    microphoneEnabledRef.current = microphoneEnabled;
  }, [microphoneEnabled]);

  useEffect(() => {
    if (!stream?.getAudioTracks().length) {
      setAudioLevel(0);
      return undefined;
    }

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return undefined;

    let audioContext;
    let animationFrame;
    let previousUpdate = 0;
    try {
      audioContext = new AudioContextClass();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaStreamSource(stream);
      analyser.fftSize = 64;
      const buffer = new Uint8Array(analyser.frequencyBinCount);
      source.connect(analyser);

      const measure = (timestamp) => {
        if (!microphoneEnabledRef.current) {
          setAudioLevel(0);
        } else {
          analyser.getByteFrequencyData(buffer);
          const average = buffer.reduce((sum, value) => sum + value, 0) / buffer.length;
          if (timestamp - previousUpdate > 100) {
            setAudioLevel(Math.min(100, Math.round((average / 128) * 100)));
            previousUpdate = timestamp;
          }
        }
        animationFrame = window.requestAnimationFrame(measure);
      };

      animationFrame = window.requestAnimationFrame(measure);
    } catch {
      setAudioLevel(0);
    }

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      audioContext?.close().catch(() => {});
    };
  }, [stream]);

  useEffect(() => {
    if (messagesRef.current) messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (!session) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') leaveRoom();
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  });

  function leaveRoom() {
    if (!session) return;
    const endedAt = Date.now();
    const durationSec = Math.max(0, Math.floor((endedAt - session.startedAt) / 1000));
    const enteredAt = new Date(session.startedAt);
    const record = {
      classTitle: session.title,
      teacher: session.teacher,
      date: enteredAt.toLocaleDateString('pt-BR'),
      entry: enteredAt.toLocaleTimeString('pt-BR'),
      exit: new Date(endedAt).toLocaleTimeString('pt-BR'),
      durationSec,
      status: 'Presente'
    };

    try {
      localStorage.setItem(attendanceKey, JSON.stringify([record, ...readAttendance()]));
    } catch {
      // The room can still close when storage is unavailable.
    }
    window.initializeLiveClasses?.();
    window.dispatchEvent(new CustomEvent('aprenda-sinais:attendance-updated', { detail: record }));
    setStream(null);
    setSession(null);
  }

  function sendMessage(event) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    addMessage('Você', text);
    setDraft('');
  }

  function addMessage(author, text) {
    const time = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    setMessages((current) => [...current, { author, text, time }]);
  }

  function raiseHand() {
    addMessage('Sistema', 'Você levantou a mão para fazer uma pergunta em LIBRAS.');
  }

  if (!session) return null;

  return (
    <section role="dialog" aria-modal="true" aria-labelledby="live-room-title" className="fixed inset-0 z-[100] flex flex-col bg-slate-950 text-white">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-800 bg-brand-900 px-4 py-3">
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-rose-300">Aula ao vivo</p>
          <h2 id="live-room-title" className="font-bold">{session.title}</h2>
          <p className="text-xs text-brand-200">Instrutor(a): {session.teacher}</p>
        </div>
        <div className="flex items-center gap-3">
          <p role="timer" aria-live="off" className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-300">
            <UserCheck aria-hidden="true" className="mr-1 inline-block h-4 w-4" /> Presença Ativa · Tempo em tela: <span className="font-mono text-white">{formatTime(elapsedSeconds)}</span>
          </p>
          <button type="button" onClick={leaveRoom} className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-bold transition hover:bg-rose-500">Sair da sala</button>
        </div>
      </header>

      <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 overflow-y-auto bg-slate-950 p-3 lg:grid-cols-[minmax(0,3fr)_minmax(260px,1fr)]">
        <div className="grid min-h-[420px] grid-rows-[minmax(220px,1fr)_180px] gap-3">
          <section aria-label="Transmissão da aula" className="relative flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center">
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-950/80 px-2.5 py-1 text-xs text-slate-200"><Video aria-hidden="true" className="h-4 w-4 text-rose-400" /> Instrutor (Ao Vivo)</span>
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-400 bg-brand-600/20" aria-hidden="true"><Hand className="h-9 w-9 text-brand-300" strokeWidth={1.7} /></div>
            <p className="text-lg font-bold">{session.teacher}</p>
            <p className="mt-2 max-w-md text-xs text-sky-400">Transmissão em Alta Definição · LIBRAS e Sinalização Visual</p>
            <p className="mt-3 max-w-md rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-2 text-xs text-slate-300">Acompanhe o movimento das mãos e a expressão facial para a entonação correta.</p>
          </section>

          <section aria-label="Sua câmera" className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            {stream && cameraEnabled ? (
              <video ref={videoRef} autoPlay playsInline muted className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center text-sm text-slate-400">
                <CameraOff aria-hidden="true" className="h-6 w-6" />
                <span>{cameraEnabled ? (stream ? mediaMessage : 'Câmera desligada ou sem permissão') : 'Câmera desligada'}</span>
              </div>
            )}
            <span className="absolute left-3 top-3 flex items-center gap-2 rounded-md bg-slate-950/80 px-2.5 py-1 text-xs"><Video aria-hidden="true" className="h-4 w-4 text-emerald-400" />Sua Câmera (Aluno)</span>
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/85 p-2">
              {microphoneEnabled ? <Mic aria-hidden="true" className="h-4 w-4 shrink-0 text-emerald-400" /> : <MicOff aria-hidden="true" className="h-4 w-4 shrink-0 text-rose-400" />}
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-800" role="meter" aria-label="Nível de áudio" aria-valuemin="0" aria-valuemax="100" aria-valuenow={audioLevel}>
                <div className="h-full rounded-full bg-emerald-400 transition-[width] duration-100" style={{ width: `${audioLevel}%` }}></div>
              </div>
              <span className="min-w-8 text-right font-mono text-[10px] text-slate-400">{microphoneEnabled ? `${audioLevel}%` : 'Mudo'}</span>
            </div>
          </section>
        </div>

        <aside aria-label="Chat da aula" className="flex min-h-[360px] flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <h3 className="flex items-center gap-2 border-b border-slate-800 bg-slate-950 p-3 text-sm font-bold"><MessageCircle aria-hidden="true" className="h-4 w-4 text-sky-400" />Chat da Aula Ao Vivo</h3>
          <div ref={messagesRef} aria-live="polite" className="flex-1 space-y-3 overflow-y-auto p-3 text-sm">
            {messages.map((message, index) => (
              <div key={`${index}-${message.author}`} className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-bold text-sky-300">{message.author}</p>
                  <time className="text-[10px] text-slate-500">{message.time}</time>
                </div>
                <p className="mt-1 break-words text-slate-200">{message.text}</p>
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="flex gap-2 border-t border-slate-800 bg-slate-950 p-2">
            <label htmlFor="live-chat-message" className="sr-only">Mensagem para o chat</label>
            <input id="live-chat-message" value={draft} onChange={(event) => setDraft(event.target.value)} maxLength={300} placeholder="Digite uma dúvida..." className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none" />
            <button type="submit" aria-label="Enviar mensagem" className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-bold hover:bg-brand-500"><Send aria-hidden="true" className="h-4 w-4" /></button>
          </form>
        </aside>
      </div>

      <footer className="flex justify-center gap-3 border-t border-brand-800 bg-brand-900 px-4 py-3">
        <button type="button" aria-label={microphoneEnabled ? 'Desligar microfone' : 'Ligar microfone'} title={microphoneEnabled ? 'Desligar microfone' : 'Ligar microfone'} aria-pressed={!microphoneEnabled} onClick={() => setMicrophoneEnabled((enabled) => !enabled)} className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold ${microphoneEnabled ? 'bg-slate-800 text-emerald-300 hover:bg-slate-700' : 'bg-rose-600 text-white'}`}>
          {microphoneEnabled ? <Mic aria-hidden="true" className="h-5 w-5" /> : <MicOff aria-hidden="true" className="h-5 w-5" />}
        </button>
        <button type="button" aria-label={cameraEnabled ? 'Desligar câmera' : 'Ligar câmera'} title={cameraEnabled ? 'Desligar câmera' : 'Ligar câmera'} aria-pressed={!cameraEnabled} onClick={() => setCameraEnabled((enabled) => !enabled)} className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold ${cameraEnabled ? 'bg-slate-800 text-emerald-300 hover:bg-slate-700' : 'bg-rose-600 text-white'}`}>
          {cameraEnabled ? <Video aria-hidden="true" className="h-5 w-5" /> : <VideoOff aria-hidden="true" className="h-5 w-5" />}
        </button>
        <button type="button" aria-label="Levantar a mão" title="Levantar a mão" onClick={raiseHand} className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-amber-300 hover:bg-slate-700"><Hand aria-hidden="true" className="h-5 w-5" /></button>
      </footer>
    </section>
  );
}
