import { Suspense, lazy, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  ChevronRight,
  Globe,
  Layers3,
  Link2,
  MoveRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useLanguage } from "@/contexts/LanguageContext";

const HeroScene = lazy(() => import("@/components/HeroScene"));

type Language = "pt" | "en";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=244923609024&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+os+servi%C3%A7os+da+Zeytra+Tech.&type=phone_number&app_absent=0";

const copy = {
  pt: {
    metaTitle: "Zeytra Tech | Dados, Software e Arquitecturas que Escalam",
    metaDescription:
      "Landing page da Zeytra Tech para soluções de dados, software e consultoria tecnológica com foco em arquitecturas seguras, modernas e escaláveis.",
    nav: [
      { href: "#vision", label: "Visão" },
      { href: "#capabilities", label: "Capacidades" },
      { href: "#ecosystem", label: "Ecossistema" },
      { href: "#contact", label: "Contacto" },
    ],
    heroEyebrow: "Dados, software e execução sem ruído",
    heroTitle: ["Arquitecturas de dados.", "Software que move operações."],
    heroSubtitle:
      "Desenhamos plataformas, modernizamos sistemas críticos e transformamos dados dispersos em produtos operacionais com leitura clara, segurança e velocidade.",
    heroPrimary: "Falar com a Zeytra",
    heroSecondary: "Explorar a página",
    heroNotes: [
      "EDW, Data Lake e Lakehouse com desenho orientado ao negócio",
      "Reconciliação, integrações e governação em ambientes sensíveis",
      "Aplicações e APIs corporativas com rollout progressivo",
    ],
    heroCards: [
      {
        kicker: "Control Layer",
        title: "Uma camada operacional para dados, integrações e software.",
        body: "A landing foi redesenhada para parecer produto: painéis vivos, superfícies com profundidade e uma narrativa única.",
      },
      {
        kicker: "Delivery Rhythm",
        title: "Estratégia, engenharia e entrega no mesmo compasso.",
        body: "Sem blocos genéricos, sem estatísticas vazias. Apenas sinais concretos do tipo de trabalho que a Zeytra executa.",
      },
    ],
    storyTitle: "Da origem do dado à decisão tomada em produção.",
    storyText:
      "A experiência agora conduz o visitante por um percurso contínuo: integração, observabilidade, software e adopção. Cada secção precisa justificar a próxima.",
    chapters: [
      {
        id: "01",
        title: "Consolidar",
        description:
          "Unificamos fontes críticas, reforçamos qualidade e criamos uma base confiável para reporting, reconciliação e automação.",
        bullets: ["EDW e Lakehouse", "Motores de reconciliação", "Modelos de governação"],
      },
      {
        id: "02",
        title: "Operacionalizar",
        description:
          "Transformamos a arquitectura em software utilizável, APIs e interfaces próprias para equipas de operação, risco e negócio.",
        bullets: ["Sistemas corporativos", "APIs e integrações", "Fluxos assistidos por eventos"],
      },
      {
        id: "03",
        title: "Escalar",
        description:
          "Desenhamos evolução contínua com segurança, monitorização e rollout faseado para não travar a operação.",
        bullets: ["Observabilidade", "Segurança by design", "Modernização progressiva"],
      },
    ],
    capabilitiesTitle: "Capacidades desenhadas para operações exigentes.",
    capabilitiesIntro:
      "Reaproveitei os textos e áreas de actuação da marca, mas reposicionados de forma mais precisa e menos previsível.",
    capabilities: [
      {
        icon: Layers3,
        title: "Soluções de Dados",
        description:
          "EDW, Data Lake, Lakehouse, analytics, qualidade, auditoria e integração para ecossistemas que precisam de consistência e rastreabilidade.",
        items: ["Enterprise Data Warehouse", "Data Lake e Lakehouse", "Governança e auditoria de dados"],
      },
      {
        icon: Link2,
        title: "Software sob Medida",
        description:
          "Aplicações web, sistemas corporativos e APIs construídos para encaixar no terreno real da empresa, não em templates.",
        items: ["Web e mobile", "Sistemas corporativos", "APIs e integrações críticas"],
      },
      {
        icon: ShieldCheck,
        title: "Modernização e Consultoria",
        description:
          "Reengenharia de aplicações, estratégia de dados, apoio à decisão e desenho de arquitectura para ciclos de transformação sérios.",
        items: ["Reconstrução de legados", "Arquitectura de soluções", "Transferência de conhecimento"],
      },
    ],
    ecosystemTitle: "Organizações com que a marca já partilha contexto.",
    ecosystemText:
      "Removi a leitura de “secção de parceiros” demasiado ornamental e transformei-a numa faixa discreta de confiança e proximidade.",
    contactTitle: "Se a operação é crítica, a interface também deve ser.",
    contactText:
      "A próxima conversa pode começar por dados, por software ou por um sistema legado difícil. O importante é desenhar a camada certa para a operação.",
    contactPrimary: "Abrir conversa",
    contactSecondary: "geral@zeytra.it.ao",
    footer:
      "Zeytra Tech. Soluções de dados, desenvolvimento de software e modernização tecnológica para empresas que precisam escalar com rigor.",
  },
  en: {
    metaTitle: "Zeytra Tech | Data, Software and Scalable Architectures",
    metaDescription:
      "Zeytra Tech landing page for data solutions, software engineering and technology consulting focused on secure, modern and scalable architectures.",
    nav: [
      { href: "#vision", label: "Vision" },
      { href: "#capabilities", label: "Capabilities" },
      { href: "#ecosystem", label: "Ecosystem" },
      { href: "#contact", label: "Contact" },
    ],
    heroEyebrow: "Data, software and execution without noise",
    heroTitle: ["Data architectures.", "Software that moves operations."],
    heroSubtitle:
      "We design platforms, modernize critical systems and turn scattered data into operational products with clarity, security and speed.",
    heroPrimary: "Talk to Zeytra",
    heroSecondary: "Explore the page",
    heroNotes: [
      "EDW, Data Lake and Lakehouse shaped around business reality",
      "Reconciliation, integrations and governance for sensitive environments",
      "Corporate applications and APIs with progressive rollout",
    ],
    heroCards: [
      {
        kicker: "Control Layer",
        title: "One operational layer for data, integrations and software.",
        body: "The page now feels like product: living panels, deep surfaces and a single narrative instead of disconnected sections.",
      },
      {
        kicker: "Delivery Rhythm",
        title: "Strategy, engineering and delivery in the same cadence.",
        body: "No generic blocks, no empty metrics. Only signals that match the type of work Zeytra actually delivers.",
      },
    ],
    storyTitle: "From data origin to decisions running in production.",
    storyText:
      "The experience now leads visitors through one continuous flow: integration, observability, software and adoption. Every section has to earn the next one.",
    chapters: [
      {
        id: "01",
        title: "Consolidate",
        description:
          "We unify critical sources, strengthen quality and create a reliable base for reporting, reconciliation and automation.",
        bullets: ["EDW and Lakehouse", "Reconciliation engines", "Governance models"],
      },
      {
        id: "02",
        title: "Operationalize",
        description:
          "We turn architecture into usable software, APIs and interfaces for operations, risk and business teams.",
        bullets: ["Corporate systems", "APIs and integrations", "Event-assisted flows"],
      },
      {
        id: "03",
        title: "Scale",
        description:
          "We design continuous evolution with security, monitoring and phased rollout so operations keep moving.",
        bullets: ["Observability", "Security by design", "Progressive modernization"],
      },
    ],
    capabilitiesTitle: "Capabilities shaped for demanding operations.",
    capabilitiesIntro:
      "I reused the brand's core service areas, but repositioned them in a sharper and less predictable structure.",
    capabilities: [
      {
        icon: Layers3,
        title: "Data Solutions",
        description:
          "EDW, Data Lake, Lakehouse, analytics, quality, audit and integration for ecosystems that need consistency and traceability.",
        items: ["Enterprise Data Warehouse", "Data Lake and Lakehouse", "Data governance and audit"],
      },
      {
        icon: Link2,
        title: "Tailored Software",
        description:
          "Web applications, corporate systems and APIs built for the real operational terrain of a company, not for templates.",
        items: ["Web and mobile", "Corporate systems", "Critical APIs and integrations"],
      },
      {
        icon: ShieldCheck,
        title: "Modernization and Advisory",
        description:
          "Application reengineering, data strategy, decision support and solution architecture for serious transformation cycles.",
        items: ["Legacy reconstruction", "Solution architecture", "Knowledge transfer"],
      },
    ],
    ecosystemTitle: "Organizations the brand already shares context with.",
    ecosystemText:
      "I removed the ornamental partner-section feel and turned it into a quieter confidence band.",
    contactTitle: "If the operation is critical, the interface should be too.",
    contactText:
      "The next conversation can start with data, software or a difficult legacy system. What matters is designing the right operational layer.",
    contactPrimary: "Start the conversation",
    contactSecondary: "geral@zeytra.it.ao",
    footer:
      "Zeytra Tech. Data solutions, software engineering and technology modernization for companies that need to scale with rigor.",
  },
} satisfies Record<
  Language,
  {
    metaTitle: string;
    metaDescription: string;
    nav: Array<{ href: string; label: string }>;
    heroEyebrow: string;
    heroTitle: string[];
    heroSubtitle: string;
    heroPrimary: string;
    heroSecondary: string;
    heroNotes: string[];
    heroCards: Array<{ kicker: string; title: string; body: string }>;
    storyTitle: string;
    storyText: string;
    chapters: Array<{
      id: string;
      title: string;
      description: string;
      bullets: string[];
    }>;
    capabilitiesTitle: string;
    capabilitiesIntro: string;
    capabilities: Array<{
      icon: typeof Layers3;
      title: string;
      description: string;
      items: string[];
    }>;
    ecosystemTitle: string;
    ecosystemText: string;
    contactTitle: string;
    contactText: string;
    contactPrimary: string;
    contactSecondary: string;
    footer: string;
  }
>;

const partners = [
  // { name: "Access Bank", logo: "/access-bank-logo.png" },
  // { name: "BPC", logo: "/bpc-logo.png" },
  { name: "Nus Eventus", logo: "/logo-nus-eventus.png" },
  { name: "Estratus", logo: "/logo-Estratus.jpeg" },
  { name: "Fazenda Agripina", logo: "/agripina-logo.png" },
  { name: "Kunha-Ka", logo: "/logo-cunha-ka.png" },
];

const frameRows = [
  ["Pipelines", "Services", "Governance", "Observability"],
  ["Reconciliation", "APIs", "Legacy", "Adoption"],
  ["Warehouse", "Lakehouse", "Risk", "Delivery"],
];

const MotionVisual = ({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean;
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -120]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -8]);

  return (
    <motion.div
      style={{ y, rotate }}
      className="relative mx-auto w-full max-w-[560px]"
    >
      <div className="data-frame p-4 md:p-6">
        <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-slate-400">
          <span>Operational Canvas</span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            live
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  Architecture
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  Data, software and delivery in one view
                </h3>
              </div>
              <Sparkles className="h-5 w-5 text-cyan-300" />
            </div>

            <div className="space-y-3">
              {frameRows.map((row, index) => (
                <motion.div
                  key={row.join("-")}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { x: [0, index % 2 === 0 ? 16 : -16, 0] }
                  }
                  transition={{
                    duration: 7 + index,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="grid grid-cols-2 gap-3"
                >
                  {row.map((item, itemIndex) => (
                    <div
                      key={item}
                      className={`rounded-2xl border px-3 py-4 text-sm ${
                        itemIndex === 1
                          ? "border-cyan-300/50 bg-cyan-300/10 text-cyan-50"
                          : "border-white/10 bg-black/20 text-slate-200"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {[
              { label: "Quality Gates", value: "Rules + audit trails" },
              { label: "Rollout", value: "Phased by domain" },
              { label: "Interfaces", value: "Ops, risk and business" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { y: [0, index % 2 === 0 ? -10 : 10, 0] }
                }
                transition={{
                  duration: 6 + index,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.05] p-4"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-3 text-base font-medium text-white">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, -18, 0], x: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="data-float-card right-[-4%] top-[8%] hidden md:block"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Signal Layer
        </span>
        <p className="mt-3 text-lg font-semibold text-white">
          Dados legíveis.
          <br />
          Decisão rápida.
        </p>
      </motion.div>

      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, 16, 0], x: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="data-float-card bottom-[-5%] left-[-3%] hidden md:block"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Runtime
        </span>
        <p className="mt-3 text-sm leading-6 text-slate-200">
          Arquitecturas seguras com
          <br />
          rollout progressivo.
        </p>
      </motion.div>
    </motion.div>
  );
};

const Index = () => {
  const { language, setLanguage } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const content = copy[language];
  const marqueeItems = useMemo(() => [...partners, ...partners], []);

  return (
    <>
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <meta
          name="keywords"
          content="engenharia de dados, data warehouse, data lake, reconciliação, desenvolvimento de software, consultoria tecnológica, modernização de sistemas"
        />
        <meta property="og:title" content={content.metaTitle} />
        <meta property="og:description" content={content.metaDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://zeytra.it.ao" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <header className="fixed inset-x-0 top-0 z-50">
          <div className="mx-auto flex w-[min(1200px,calc(100%-1.5rem))] items-center justify-between rounded-full border border-white/10 bg-black/30 px-4 py-3 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl mt-4 md:px-6">
            <a href="#top" className="flex items-center gap-3">
              <img src="/logo-full.png" alt="Zeytra Tech" className="h-9 w-auto" />
              <div className="hidden sm:block">
                <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                  Zeytra Tech
                </p>
                <p className="text-sm text-white/80">Data and software systems</p>
              </div>
            </a>

            <nav className="hidden items-center gap-6 lg:flex">
              {content.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
              >
                <Globe className="h-4 w-4" />
                <span className="uppercase">{language}</span>
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="hidden min-h-11 items-center rounded-full bg-white px-5 text-sm font-medium text-slate-950 transition hover:translate-y-[-1px] hover:bg-cyan-100 md:inline-flex"
              >
                {content.heroPrimary}
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/40 hover:text-white lg:hidden"
                aria-label="Jump to contact"
              >
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </header>

        <main id="top">
          <section className="hero-shell relative overflow-hidden px-4 pb-20 pt-32 md:px-6 md:pt-36">
            <Suspense fallback={<div className="absolute inset-0 pointer-events-none" />}>
              <HeroScene />
            </Suspense>
            <div className="hero-overlay pointer-events-none absolute inset-0" />
            <div className="hero-grid mx-auto grid w-full max-w-[1240px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="relative z-10">
                <motion.h1
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.05 }}
                  className="max-w-[12ch] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[5.6rem]"
                >
                  <span className="block">{content.heroTitle[0]}</span>
                  <span className="hero-highlight block">{content.heroTitle[1]}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.12 }}
                  className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
                >
                  {content.heroSubtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.18 }}
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-slate-950 transition hover:translate-y-[-1px] hover:bg-cyan-100"
                  >
                    {content.heroPrimary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href="#capabilities"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 text-sm text-white transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
                  >
                    {content.heroSecondary}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.26 }}
                  className="mt-14 grid gap-3 sm:grid-cols-3"
                >
                  {content.heroNotes.map((note) => (
                    <div
                      key={note}
                      className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300"
                    >
                      {note}
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="relative z-10">
                <MotionVisual shouldReduceMotion={Boolean(shouldReduceMotion)} />

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {content.heroCards.map((card, index) => (
                    <motion.article
                      key={card.title}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.28 + index * 0.08 }}
                      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                      className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)]"
                    >
                      <p className="text-[11px] uppercase tracking-[0.32em] text-slate-400">
                        {card.kicker}
                      </p>
                      <h2 className="mt-3 text-xl font-semibold text-white">
                        {card.title}
                      </h2>
                      <p className="mt-4 text-sm leading-6 text-slate-300">
                        {card.body}
                      </p>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="vision"
            className="mx-auto grid w-full max-w-[1240px] gap-12 px-4 py-24 md:px-6 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="section-title mt-5 max-w-[12ch]">{content.storyTitle}</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                {content.storyText}
              </p>
            </div>

            <div className="space-y-6">
              {content.chapters.map((chapter, index) => (
                <motion.article
                  key={chapter.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="story-panel"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/80">
                        {chapter.id}
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold text-white">
                        {chapter.title}
                      </h3>
                    </div>
                    <MoveRight className="mt-1 h-5 w-5 text-slate-500" />
                  </div>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                    {chapter.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-400">
                    {chapter.bullets.map((bullet) => (
                      <span key={bullet} className="tracking-[0.08em]">
                        {bullet}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="capabilities" className="px-4 py-10 md:px-6">
            <div className="mx-auto w-full max-w-[1240px] rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
                <div>
                  <h2 className="section-title mt-5 max-w-[13ch]">
                    {content.capabilitiesTitle}
                  </h2>
                  <p className="mt-6 max-w-lg text-base leading-8 text-slate-300">
                    {content.capabilitiesIntro}
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  {content.capabilities.map((capability, index) => {
                    const Icon = capability.icon;

                    return (
                      <motion.article
                        key={capability.title}
                        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.6, delay: index * 0.08 }}
                        whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                        className="capability-card"
                      >
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-6 text-2xl font-semibold text-white">
                          {capability.title}
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-slate-300">
                          {capability.description}
                        </p>
                        <div className="mt-7 space-y-3">
                          {capability.items.map((item) => (
                            <div
                              key={item}
                              className="rounded-2xl border border-white/8 bg-black/15 px-4 py-3 text-sm text-slate-200"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section id="ecosystem" className="overflow-hidden px-4 py-24 md:px-6">
            <div className="mx-auto w-full max-w-[1240px]">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="section-title mt-5">{content.ecosystemTitle}</h2>
                <p className="mt-6 text-base leading-8 text-slate-300">
                  {content.ecosystemText}
                </p>
              </div>

              <div className="logo-marquee mt-14">
                <motion.div
                  animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
                  transition={{
                    duration: 26,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="flex w-max gap-4"
                >
                  {marqueeItems.map((partner, index) => (
                    <div key={`${partner.name}-${index}`} className="logo-pill">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-10 w-auto object-contain opacity-80"
                      />
                      <span className="text-sm text-slate-300">{partner.name}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          <section id="contact" className="px-4 pb-10 md:px-6 md:pb-16">
            <div className="mx-auto grid w-full max-w-[1240px] gap-8 rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(86,214,255,0.08),rgba(255,155,85,0.06))] p-8 md:p-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="section-title mt-5 max-w-[12ch]">{content.contactTitle}</h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200">
                  {content.contactText}
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-slate-950 transition hover:translate-y-[-1px] hover:bg-cyan-100"
                >
                  {content.contactPrimary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="mailto:geral@zeytra.it.ao"
                  className="text-sm text-slate-200 transition hover:text-white"
                >
                  {content.contactSecondary}
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/8 px-4 py-8 md:px-6">
          <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl leading-7">{content.footer}</p>
            <a
              href="https://www.linkedin.com/company/zeytra-tech/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white"
            >
              LinkedIn
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
