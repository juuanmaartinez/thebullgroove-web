import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen items-center justify-center bg-black px-6 pt-24 pb-16 overflow-hidden">
        {/* Ambient neon glow */}
        <div className="pointer-events-none absolute top-1/3 left-1/2 h-96 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="pointer-events-none absolute top-1/2 right-1/4 h-64 w-1/3 rounded-full bg-cyan-500/8 blur-[100px]" />
        <div className="w-full max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.4em] text-white/30 uppercase">
            Contacto
          </p>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Hablemos
          </h1>
          <p className="mb-12 text-sm font-light text-white/40">
            Contanos tu proyecto y te respondemos a la brevedad.
          </p>
          <ContactForm />
        </div>
      </main>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/25 to-transparent" />
      <footer className="border-t-0 bg-black px-6 py-8 text-center">
        <p className="text-xs tracking-widest text-white/20 uppercase">
          © 2026 THEBULLGROOVE — All rights reserved
        </p>
      </footer>
    </>
  );
}
