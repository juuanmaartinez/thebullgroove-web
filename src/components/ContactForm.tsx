'use client';

import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';

const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), {
  ssr: false,
});

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const captchaToken = recaptchaRef.current?.getValue();

    if (!captchaToken) {
      setStatus('error');
      setErrorMsg('Por favor, completá la verificación CAPTCHA.');
      return;
    }

    const payload = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value.trim(),
      email: (
        form.elements.namedItem('email') as HTMLInputElement
      ).value.trim(),
      message: (
        form.elements.namedItem('message') as HTMLTextAreaElement
      ).value.trim(),
      captchaToken,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? 'Error al enviar el mensaje.');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Error al enviar el mensaje.'
      );
      recaptchaRef.current?.reset();
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <p className="text-lg font-light tracking-wide text-white/70">
          Mensaje recibido. Te contactamos pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
      {/* Honeypot — invisible for humans, traps bots */}
      <input
        type="text"
        name="_honey"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="flex flex-col gap-6 sm:flex-row">
        <input
          type="text"
          name="name"
          required
          placeholder="Nombre *"
          className="flex-1 border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-white/60"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email *"
          className="flex-1 border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-white/60"
        />
      </div>

      <textarea
        name="message"
        required
        rows={4}
        placeholder="¿En qué podemos ayudarte? *"
        className="resize-none border-b border-white/20 bg-transparent py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-white/60"
      />

      {/* reCAPTCHA */}
      <div>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
          theme="dark"
        />
      </div>

      {errorMsg && <p className="text-xs text-red-400">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="self-start border border-white/30 px-8 py-3 text-xs font-semibold tracking-[0.25em] text-white uppercase transition-colors hover:bg-white hover:text-black disabled:opacity-40"
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
    </form>
  );
}
