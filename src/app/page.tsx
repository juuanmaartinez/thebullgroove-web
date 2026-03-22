import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section id="inicio" className="relative h-screen w-full overflow-hidden">
        {/* Video background */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          {/* Eyebrow */}
          <p className="mb-6 text-xs font-semibold tracking-[0.4em] text-white/50 uppercase">
            Technology Services Agency
          </p>

          {/* Title */}
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl">
            THEBULL
            <span className="text-white/30">GROOVE</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-sm font-light tracking-[0.25em] text-white/60 uppercase sm:text-base">
            Soluciones IT&nbsp;&nbsp;|&nbsp;&nbsp;Desarrollo
            Moderno&nbsp;&nbsp;|&nbsp;&nbsp;Automatización Inteligente
          </p>

          {/* Badge */}
          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/60" />
            <span className="text-xs font-semibold tracking-[0.3em] text-white/70 uppercase">
              Coming Soon &mdash; 2026
            </span>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>
    </>
  );
}
