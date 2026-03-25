import Navbar from '@/components/Navbar';
import Image from 'next/image';

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
      'Creamos aplicaciones web y sistemas personalizados diseñados para resolver los retos específicos de tu negocio. Desde el diseño inicial hasta el despliegue final, construimos software escalable que optimiza tu flujo de trabajo y mejora la experiencia de tus clientes.',
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
    title: 'Automatizaciones Inteligentes',
    description:
      'Diseñamos flujos de trabajo que conectan tus sistemas para eliminar tareas manuales y reducir errores. Transformamos procesos operativos en ciclos automáticos, permitiendo que tu empresa escale su operación sin fricciones y tú recuperes tiempo valioso.',
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
    title: 'Soporte IT Integral y Redes',
    description:
      'Gestión completa de tu infraestructura técnica: desde el soporte remoto en hardware y software hasta la configuración de redes seguras. Optimizamos el rendimiento de tus equipos a medida y resolvemos incidencias de forma proactiva para que tu actividad nunca se detenga.',
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
          src="/videotoro.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <p className="mb-4 text-xs font-semibold tracking-[0.5em] text-white/40 uppercase">
            Technology Services Agency
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-7xl lg:text-9xl">
            THEBULL
            <span className="text-white/25">GROOVE</span>
          </h1>
          <p className="mt-5 text-xs font-light tracking-[0.3em] text-white/50 uppercase sm:text-sm">
            Soluciones IT&nbsp;&nbsp;·&nbsp;&nbsp;Desarrollo
            Moderno&nbsp;&nbsp;·&nbsp;&nbsp;Automatización
          </p>
          <div className="mt-10 inline-flex items-center gap-4 rounded-full border border-white/20 bg-white/5 px-8 py-4 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white/60" />
            <span className="text-sm font-semibold tracking-[0.3em] text-white/70 uppercase">
              Coming Soon &mdash; 2026
            </span>
          </div>
        </div>

        {/* Neon glow — debajo del video */}
        <div className="absolute bottom-0 left-1/2 h-56 w-2/3 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[110px]" />
        <div className="absolute bottom-0 right-1/4 h-40 w-1/3 rounded-full bg-cyan-500/10 blur-[90px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Separador neon */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/25 to-transparent" />

      {/* ── QUÉ HACEMOS ──────────────────────────────────── */}
      <section
        id="que-hacemos"
        className="relative bg-zinc-950 px-6 py-24 md:py-32 overflow-hidden"
      >
        <div className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-40 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[90px]" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-40 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[90px]" />
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

      {/* Separador neon */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* ── QUIÉNES SOMOS ────────────────────────────────── */}
      <section
        id="quienes-somos"
        className="relative bg-black px-6 py-24 md:py-32 overflow-hidden"
      >
        {/* Neon laterales */}
        <div className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-48 -translate-y-1/2 rounded-full bg-violet-600/30 blur-[90px]" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-48 -translate-y-1/2 rounded-full bg-violet-600/30 blur-[90px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.12)_0%,_transparent_70%)]" />
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.4em] text-white/30 uppercase">
            Nosotros
          </p>
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Quiénes Somos
          </h2>
          <p className="mb-10 text-base font-light tracking-wide text-white/40">
            Tecnología con Propósito Humano
          </p>
          <div className="h-px w-16 bg-white/20 mb-10" />

          {/* Foto + intro */}
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-12 mb-12">
            <div className="shrink-0">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/20 ring-4 ring-white/5">
                <Image
                  src="/Foto CV.jpg"
                  alt="Juan Martinez"
                  fill
                  className="object-cover [object-position:center_30%]"
                />
              </div>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/juanmartinez95"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-white/50 hover:text-white transition-colors group"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-[#0A66C2] group-hover:text-[#0A66C2]"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>/juanmartinez95</span>
              </a>
              <p className="text-lg font-light leading-[1.9] text-white/60 sm:text-xl">
                Mi nombre es{' '}
                <span className="text-white font-normal">Juan Martinez</span>,
                de{' '}
                <span className="text-white font-normal">
                  Córdoba, Argentina
                </span>
                , fundador de{' '}
                <span className="text-white font-normal">THEBULLGROOVE</span>, y
                lidero un equipo apasionado por transformar la realidad
                operativa de empresas y emprendedores. Mi camino en el sector
                tecnológico nació de una pasión genuina por ayudar: me encanta
                escuchar los desafíos de cada cliente para ofrecer soluciones
                que realmente marquen una diferencia en su rendimiento laboral y
                personal.
              </p>
              <p className="mt-6 text-lg font-light leading-[1.9] text-white/60 sm:text-xl">
                Especializados en{' '}
                <span className="text-white font-normal">
                  Soporte IT, Redes y Desarrollo a medida
                </span>
                , nuestra misión es llevar eficiencia técnica y mejoras
                continuas a cada rincón de{' '}
                <span className="text-white font-normal">
                  Europa y Latinoamérica
                </span>
                .
              </p>
            </div>
          </div>

          {/* Cómo ayudamos */}
          <div>
            <h3 className="mb-6 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              ¿Cómo ayudamos a potenciar tu negocio?
            </h3>
            <p className="mb-8 text-base font-light leading-relaxed text-white/50">
              Creemos que la tecnología debe ser una solución transparente, no
              un obstáculo. Por eso, nuestro enfoque se basa en la{' '}
              <span className="text-white/80">
                cercanía y la personalización
              </span>
              :
            </p>
            <ul className="mb-10 space-y-5">
              {[
                {
                  title: 'Desarrollo de Software y Webs desde cero',
                  desc: 'Creamos herramientas digitales adaptadas a tu flujo de trabajo.',
                },
                {
                  title: 'Automatización inteligente',
                  desc: 'Optimizamos tus procesos para que ahorres tiempo y recursos.',
                },
                {
                  title: 'Soporte Integral',
                  desc: 'Brindamos asistencia técnica en Hardware, Software y Redes, configurando tus equipos para alcanzar su máximo potencial.',
                },
                {
                  title: 'Consultoría Tecnológica',
                  desc: 'Si estás creando tu empresa desde cero, te acompañamos en el diseño de toda tu infraestructura.',
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                  <p className="text-base font-light leading-relaxed text-white/60">
                    <span className="text-white font-normal">
                      {item.title}:
                    </span>{' '}
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-lg font-light leading-[1.9] text-white/60 sm:text-xl">
              Trabajamos de forma{' '}
              <span className="text-white font-normal">remota</span> bajo un
              modelo de confianza total. Iniciamos siempre con una{' '}
              <span className="text-white font-normal">entrevista previa</span>{' '}
              para entender tu situación específica; desde ahí, diagramamos la
              estrategia exacta que tu proyecto necesita para{' '}
              <span className="text-white font-normal">no detenerse nunca</span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Separador neon */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/25 to-transparent" />

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center">
        <p className="text-xs tracking-widest text-white/20 uppercase">
          © 2026 THEBULLGROOVE — All rights reserved
        </p>
      </footer>
    </>
  );
}
