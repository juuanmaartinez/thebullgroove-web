import Navbar from '@/components/Navbar';

export default function ProyectosPage() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen items-center justify-center bg-black px-6 pt-24 pb-16 overflow-hidden">
        {/* Neon ambient */}
        <div className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-48 -translate-y-1/2 rounded-full bg-violet-600/25 blur-[90px]" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-48 -translate-y-1/2 rounded-full bg-violet-600/25 blur-[90px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.10)_0%,_transparent_70%)]" />

        <div className="relative z-10 text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.4em] text-white/30 uppercase">
            Portfolio
          </p>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Proyectos
          </h1>
          <div className="mx-auto h-px w-16 bg-white/20 mb-8" />
          <p className="text-lg font-light text-white/50 max-w-md mx-auto leading-relaxed">
            Pronto mostraremos nuestros proyectos desarrollados.
          </p>
        </div>
      </main>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/25 to-transparent" />
      <footer className="bg-black px-6 py-8 text-center">
        <p className="text-xs tracking-widest text-white/20 uppercase">
          © 2026 THEBULLGROOVE — All rights reserved
        </p>
      </footer>
    </>
  );
}
