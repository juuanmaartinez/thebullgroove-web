import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';

const services = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
    title: 'Desarrollo de Software a Medida',
    description:
      'Aplicaciones web y sistemas a medida construidos con Next.js, React y Node.js — desde el diseño hasta el despliegue en producción.',
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
        />
      </svg>
    ),
    title: 'Automatizaciones',
    description:
      'Diseñamos flujos de trabajo con Make y Zapier para conectar tus sistemas, eliminar tareas manuales y escalar tu operación sin fricción.',
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
    title: 'Soporte IT Especializado',
    description:
      'Gestión y monitoreo de infraestructura con Zabbix y pfSense, soporte remoto y resolución proactiva antes de que los problemas impacten tu operación.',
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section id="inicio" className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <p className="mb-6 text-xs font-semibold tracking-[0.4em] text-white/50 uppercase">
            Technology Services Agency
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl">
            THEBULL
            <span className="text-white/30">GROOVE</span>
          </h1>
          <p className="mt-6 text-sm font-light tracking-[0.25em] text-white/60 uppercase sm:text-base">
            Soluciones IT&nbsp;&nbsp;|&nbsp;&nbsp;Desarrollo
            Moderno&nbsp;&nbsp;|&nbsp;&nbsp;Automatización Inteligente
          </p>
          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/60" />
            <span className="text-xs font-semibold tracking-[0.3em] text-white/70 uppercase">
              Coming Soon &mdash; 2026
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* ── QUÉ HACEMOS ──────────────────────────────────── */}
      <section id="que-hacemos" className="bg-zinc-950 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.4em] text-white/30 uppercase">
            Servicios
          </p>
          <h2 className="mb-16 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Qué Hacemos
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col items-center gap-6 border border-white/10 bg-white/5 p-8 text-center transition-colors hover:border-white/30 hover:bg-white/10"
              >
                <span className="text-white/50 transition-colors group-hover:text-white">
                  {service.icon}
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="text-base font-semibold tracking-wide text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ────────────────────────────────── */}
      <section id="quienes-somos" className="bg-black px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.4em] text-white/30 uppercase">
            Nosotros
          </p>
          <h2 className="mb-10 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Quiénes Somos
          </h2>
          <div className="h-px w-16 bg-white/20 mb-10" />
          <p className="text-lg font-light leading-[1.9] text-white/60 sm:text-xl">
            Somos un equipo de{' '}
            <span className="text-white font-normal">Argentina</span>, enfocados
            en transformar empresas y brindar mejoras continuas a través de la
            tecnología. Nos especializamos en{' '}
            <span className="text-white font-normal">
              desarrollo a medida, soporte IT y redes
            </span>
            , con la misión de llevar eficiencia técnica a cada rincón de{' '}
            <span className="text-white font-normal">
              Europa y Latinoamérica
            </span>
            .
          </p>
          <p className="mt-8 text-lg font-light leading-[1.9] text-white/60 sm:text-xl">
            Creemos que la tecnología debe ser una solución, no un problema. Por
            eso, trabajamos de forma{' '}
            <span className="text-white font-normal">remota</span> bajo un
            modelo de cercanía: realizamos una{' '}
            <span className="text-white font-normal">entrevista previa</span>{' '}
            para entender tu situación específica y, desde ahí, diagramamos el
            desarrollo o soporte que tu negocio necesita para{' '}
            <span className="text-white font-normal">no detenerse nunca</span>.
          </p>
        </div>
      </section>

      {/* ── CONTACTO ─────────────────────────────────────── */}
      <section id="contacto" className="bg-zinc-950 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.4em] text-white/30 uppercase">
            Contacto
          </p>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Hablemos
          </h2>
          <p className="mb-12 text-sm font-light text-white/40">
            Contanos tu proyecto y te respondemos a la brevedad.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center">
        <p className="text-xs tracking-widest text-white/20 uppercase">
          © 2026 THEBULLGROOVE — All rights reserved
        </p>
      </footer>
    </>
  );
}
