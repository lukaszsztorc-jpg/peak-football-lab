import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BrainCircuit,
    CircleDot,
  Dumbbell,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Salad,
  ShieldCheck,
  Target,
  TimerReset,
  Video,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { brand, media, navigation as navItems, pageContent, seo, type IconName } from "@/content";

const iconMap: Record<IconName, LucideIcon> = {
  activity: Activity,
  brain: BrainCircuit,
  circle: CircleDot,
  dumbbell: Dumbbell,
  message: MessageCircle,
  play: Play,
  salad: Salad,
  target: Target,
  timer: TimerReset,
  video: Video,
  zap: Zap,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.openGraphTitle },
      { property: "og:description", content: seo.openGraphDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SportsActivityLocation",
        name: brand.name,
        description: seo.schemaDescription,
        telephone: brand.phoneHref,
        areaServed: brand.location,
        author: brand.author,
      }),
    }],
  }),
  component: Index,
});

function Logo() {
  return <a href="#start" aria-label={`${brand.name} — strona główna`} className="flex items-center gap-2.5">
    <img src={media.logo.src} alt={media.logo.alt} width={media.logo.width} height={media.logo.height} className="h-12 w-12 object-contain" />
    <span className="font-display text-xl font-extrabold tracking-[0.04em] sm:text-2xl">{brand.name}</span>
  </a>;
}

function Network({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`network-bg pointer-events-none absolute inset-0 opacity-45 ${className}`}>
    <i className="absolute left-[18%] top-[28%] h-2 w-2 rounded-full bg-cyan shadow-[0_0_18px_var(--cyan)] animate-[pulse-node_3s_ease-in-out_infinite]" />
    <i className="absolute right-[20%] top-[58%] h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_14px_var(--gold)] animate-[pulse-node_4s_ease-in-out_infinite]" />
  </div>;
}

function SectionLabel({ children }: { children: string }) {
  return <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gold"><span className="animated-rule h-px w-10 bg-gold" />{children}</p>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-border bg-background/90 py-2 backdrop-blur-xl" : "border-foreground/10 bg-background/10 py-3 backdrop-blur-sm"}`}>
    <div className="mx-auto flex w-[min(100%-1.5rem,90rem)] items-center justify-between">
      <Logo />
      <nav aria-label="Główne menu" className="hidden items-center gap-5 xl:flex">
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`} className="text-[11px] font-bold uppercase tracking-[0.11em] text-foreground/75 transition-colors hover:text-primary">{label}</a>)}
      </nav>
      <div className="hidden items-center gap-5 lg:flex">
        <a href={`tel:${brand.phoneHref}`} className="flex items-center gap-2 text-xs font-bold"><Phone className="size-4 text-primary" />{brand.phoneDisplay}</a>
        <Button asChild variant="performance" size="xl"><a href="#kontakt">{pageContent.hero.primaryCta} <ArrowRight /></a></Button>
      </div>
      <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Zamknij menu" : "Otwórz menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="mt-3 border-t border-border bg-background px-5 py-5 lg:hidden">
      <div className="flex flex-col">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="border-b border-border py-3 font-display text-xl font-bold uppercase">{label}</a>)}</div>
      <a href={`tel:${brand.phoneHref}`} className="mt-5 flex items-center gap-2 text-sm font-bold text-primary"><Phone className="size-4" />{brand.phoneDisplay}</a>
    </nav>}
  </header>;
}

const meshPoints: [number, number][] = [[0,130],[70,70],[150,110],[40,210],[130,190],[230,150],[210,250],[320,190],[300,280],[90,300],[410,230],[390,300],[480,255],[560,262],[620,268]];
const meshLinks: [number, number][] = [[0,1],[1,2],[0,3],[3,4],[2,4],[2,5],[4,5],[4,6],[5,7],[6,7],[6,8],[3,9],[9,6],[7,10],[8,10],[8,11],[10,11],[10,12],[11,12],[12,13],[13,14],[7,8],[1,5]];
function MeshWing({ side }: { side: "left" | "right" }) {
  const right = side === "right";
  const color = right ? "var(--burgundy)" : "var(--cyan-soft)";
  return <svg viewBox="0 0 640 400" className={`stelvio-mesh absolute top-[38%] h-[45%] w-[48%] ${right ? "right-0 -scale-x-100" : "left-0"}`} style={{ animationDelay: right ? "-4s" : "0s" }} fill="none" preserveAspectRatio="none">
    <g stroke={right ? "var(--gold)" : color} strokeOpacity=".35" strokeWidth="1">{meshLinks.map(([a,b],i)=>{const p1=meshPoints[a]!, p2=meshPoints[b]!; return <line key={i} x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]} />;})}</g>
    {meshPoints.map(([x,y],i)=><circle key={i} className="stelvio-node" style={{ animationDelay: `${(i%5)*0.8}s` }} cx={x} cy={y} r={i>12?2:3} fill="var(--gold)" fillOpacity=".85" />)}
  </svg>;
}

function HeroMotion() {
  return <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="stelvio-drift absolute -left-1/4 top-0 h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--cyan)_34%,transparent),transparent_65%)] blur-3xl" />
    <div className="stelvio-drift-alt absolute -right-1/4 bottom-0 h-[60%] w-[60%] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--burgundy)_40%,transparent),transparent_65%)] blur-3xl" />
    <div className="stelvio-sweep absolute inset-y-0 -left-1/3 w-1/3 bg-[linear-gradient(100deg,transparent,color-mix(in_oklab,var(--foreground)_7%,transparent),transparent)]" />
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
      <g stroke="var(--foreground)" strokeOpacity=".08" strokeWidth="1.5">
        <rect x="760" y="120" width="620" height="660" />
        <line x1="760" y1="450" x2="1380" y2="450" />
        <circle cx="1070" cy="450" r="110" />
        <rect x="960" y="120" width="220" height="110" />
        <rect x="960" y="670" width="220" height="110" />
      </g>
      <path className="stelvio-trajectory" d="M180 780 C 520 520, 820 280, 1260 210" stroke="var(--gold)" strokeOpacity=".7" strokeWidth="2" strokeDasharray="6 10" />
      <path className="stelvio-trajectory-alt" d="M420 860 C 700 650, 900 620, 1320 560" stroke="var(--cyan-soft)" strokeOpacity=".5" strokeWidth="1.5" strokeDasharray="4 12" />
      <circle className="stelvio-ball" r="7" fill="var(--foreground)" style={{ offsetPath: "path('M180 780 C 520 520, 820 280, 1260 210')" }} />
      {[[860,300],[1010,380],[1180,330],[1120,560],[930,610],[1290,470]].map(([x,y],i)=><g key={i} className="stelvio-node" style={{ animationDelay: `${i*0.7}s` }}><circle cx={x} cy={y} r="3.5" fill="var(--cyan-soft)" /><circle cx={x} cy={y} r="14" stroke="var(--cyan-soft)" strokeOpacity=".35" /></g>)}
    </svg>
    <div className="network-bg stelvio-particles absolute inset-0 opacity-30" />
    <div className="stelvio-glow absolute left-1/2 top-[58%] h-64 w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,color-mix(in_oklab,var(--foreground)_10%,transparent),transparent_70%)] blur-2xl" />
    <MeshWing side="left" />
    <MeshWing side="right" />
  </div>;
}

function Hero() {
  return <section id="start" className="relative flex min-h-[92svh] items-end overflow-hidden border-b border-border">
    <img src={media.hero.src} alt={media.hero.alt} width={media.hero.width} height={media.hero.height} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[64%_center]" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--ink)_0%,color-mix(in_oklab,var(--ink)_88%,transparent)_37%,color-mix(in_oklab,var(--burgundy)_38%,transparent)_100%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(0deg,var(--background)_0%,transparent_42%)]" />
    <Network className="opacity-35" />
    <HeroMotion />
    <div className="section-shell relative z-10 pb-16 pt-32 md:pb-20">
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-gold">{pageContent.hero.kicker.map((item, index) => <span key={item}>{index > 0 && <span className="mx-2 text-foreground/40">|</span>}{item}</span>)}</p>
      <h1 className="display-title max-w-4xl text-[clamp(4rem,10vw,9.5rem)]">{pageContent.hero.title}<br/><span className="text-primary">{pageContent.hero.titleAccent}</span></h1>
      <div className="mt-8 max-w-xl border-l-2 border-burgundy pl-5">
        <p className="font-display text-3xl font-bold uppercase md:text-5xl">{pageContent.hero.lead}</p>
        <p className="mt-3 max-w-lg text-sm leading-7 text-foreground/70 md:text-base">{pageContent.hero.description}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild variant="performance" size="xl"><a href="#kontakt">Umów trening <ArrowRight /></a></Button>
        <Button asChild variant="performanceOutline" size="xl"><a href="#o-treningu">{pageContent.hero.secondaryCta} <ArrowDown /></a></Button>
      </div>
    </div>
    <div className="absolute bottom-0 right-5 hidden h-40 w-40 translate-y-1/2 rounded-full border border-primary/40 md:block"><span className="absolute inset-4 rounded-full border border-burgundy/60" /></div>
  </section>;
}

function Process() {
  return <section id="o-treningu" className="living-section section-flow relative overflow-hidden bg-background section-space"><Network className="opacity-20" />
    <div className="section-shell relative"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
      <div className="reveal-up"><SectionLabel>{pageContent.process.label}</SectionLabel><h2 className="display-title text-5xl md:text-7xl">{pageContent.process.title}<br/>{pageContent.process.titleLine} <span className="text-primary">{pageContent.process.titleAccent}</span></h2><p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">{pageContent.process.description}</p></div>
      <div className="relative grid gap-0 border-l border-border md:grid-cols-3 md:border-l-0 md:border-t">
        {pageContent.process.steps.map((step, i) => <div key={step} className="stagger-item group relative flex min-h-28 items-center gap-5 border-b border-border px-5 py-5 transition-colors hover:bg-primary/5 md:block md:border-b-0 md:border-r">
          <span className="font-display text-4xl font-bold text-gold/40">{String(i + 1).padStart(2,"0")}</span><span className="font-display text-xl font-bold uppercase">{step}</span>
          <i className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-primary bg-background md:-top-1.5 md:left-5 md:translate-y-0" />
        </div>)}
      </div>
    </div></div>
  </section>;
}

function Diagnostics() {
  const items = pageContent.diagnostics.items;
  return <section id="diagnostyka" className="living-section section-flow relative overflow-hidden bg-card section-space"><div className="section-shell">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
       <div className="image-reveal relative min-h-[34rem] overflow-hidden"><img src={media.diagnostics.src} alt={media.diagnostics.alt} loading="lazy" width={media.diagnostics.width} height={media.diagnostics.height} className="motion-image absolute inset-0 h-[104%] w-full object-cover"/><div className="absolute inset-0 bg-[linear-gradient(0deg,var(--card),transparent_55%)]"/><div className="absolute bottom-7 left-7 rounded-full border border-primary/50 bg-background/75 p-5 backdrop-blur"><Activity className="size-8 text-primary" /></div></div>
      <div className="reveal-up"><SectionLabel>{pageContent.diagnostics.label}</SectionLabel><h2 className="display-title text-5xl md:text-7xl">{pageContent.diagnostics.title}<br/><span className="text-primary">{pageContent.diagnostics.titleAccent}</span><br/>{pageContent.diagnostics.titleLine}</h2><p className="mt-6 max-w-xl leading-7 text-muted-foreground">{pageContent.diagnostics.description}</p>
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">{items.map((item) => { const I = iconMap[item.icon]; const { title, text } = item; return <div key={String(title)} className="motion-card stagger-item group bg-card p-6"><I className="size-6 text-primary transition-transform duration-500 group-hover:-translate-y-1"/><h3 className="mt-5 text-xl font-bold uppercase">{String(title)}</h3><p className="mt-2 text-sm text-muted-foreground">{String(text)}</p></div>})}</div>
      </div>
    </div>
  </div></section>;
}

function TrainingPlan() {
  const flow = pageContent.trainingPlan.rows;
  return <section className="living-section section-flow relative overflow-hidden section-space bg-[linear-gradient(180deg,var(--card)_0%,var(--background)_35%,color-mix(in_oklab,var(--burgundy)_12%,var(--background))_70%,var(--ink)_100%)]"><div className="stelvio-drift absolute -left-40 top-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--cyan)_22%,transparent),transparent_70%)] blur-3xl"/><div className="section-shell relative">
    <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div className="reveal-up"><SectionLabel>{pageContent.trainingPlan.label}</SectionLabel><h2 className="display-title text-5xl md:text-7xl">{pageContent.trainingPlan.title}<br/><span className="text-primary">{pageContent.trainingPlan.titleAccent}</span></h2><p className="mt-6 max-w-xl leading-7 text-muted-foreground">{pageContent.trainingPlan.description}</p></div>
      <div className="reveal-up relative"><div className="stelvio-glow absolute -inset-6 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--cyan)_28%,transparent),transparent_70%)] blur-2xl"/>
        <div role="table" aria-label={pageContent.trainingPlan.title} className="relative overflow-hidden border border-foreground/12 bg-background/40 backdrop-blur-xl">
          <div role="row" className="hidden grid-cols-[4.5rem_1fr_1.6fr] gap-4 border-b border-foreground/10 bg-foreground/[0.03] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gold md:grid">{pageContent.trainingPlan.columns.map(c=><span role="columnheader" key={c}>{c}</span>)}</div>
           {flow.map((item,i)=><div role="row" key={item.step} className="stagger-item group grid grid-cols-[3.5rem_1fr] items-center gap-x-4 gap-y-1 border-b border-foreground/10 px-5 py-4 transition-colors last:border-b-0 hover:bg-primary/10 md:grid-cols-[4.5rem_1fr_1.6fr] md:px-6">
             <span role="cell" className="motion-number row-span-2 font-display text-3xl font-bold text-cyan-soft md:row-span-1">{String(i+1).padStart(2,"0")}</span>
            <span role="cell" className="font-display text-2xl font-bold uppercase">{item.step}</span>
            <span role="cell" className="text-sm text-muted-foreground">{item.goal}</span>
          </div>)}
        </div></div>
    </div>
    <div className="mt-10 h-1 md:mt-12 overflow-hidden bg-border"><div className="h-full w-full origin-left animate-[reveal-up_2s_ease-out_both] bg-[linear-gradient(90deg,var(--cyan),var(--gold),var(--burgundy))]" /></div>
  </div></section>;
}

function Control() {
  const items = pageContent.control.items;
  return <section className="relative overflow-hidden bg-ink section-space"><img src={media.control.src} alt={media.control.alt} loading="lazy" width={media.control.width} height={media.control.height} className="absolute inset-0 h-full w-full object-cover opacity-35"/><div className="absolute inset-0 bg-[linear-gradient(90deg,var(--ink)_25%,color-mix(in_oklab,var(--ink)_75%,transparent))]"/><div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--ink)_100%,transparent),transparent)]"/><div className="stelvio-glow absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--cyan)_30%,transparent),transparent_70%)] blur-2xl"/><Network />
    <div className="section-shell relative"><div className="max-w-3xl reveal-up"><SectionLabel>{pageContent.control.label}</SectionLabel><h2 className="display-title text-5xl md:text-8xl">{pageContent.control.title}</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/75">{pageContent.control.description}</p></div>
      <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-3">{items.map((item)=>{const I=iconMap[item.icon]; const { title, text } = item;return <div key={String(title)} className="motion-card stagger-item group relative overflow-hidden border border-foreground/10 bg-[linear-gradient(160deg,color-mix(in_oklab,var(--cyan)_12%,transparent),color-mix(in_oklab,var(--ink)_78%,transparent)_60%)] p-7 backdrop-blur-md"><span className="animated-rule absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--gold),transparent)] opacity-60"/><I className="size-7 text-primary transition-transform duration-500 group-hover:-translate-y-1"/><h3 className="mt-8 text-3xl font-bold uppercase">{String(title)}</h3><p className="mt-2 text-sm text-muted-foreground">{String(text)}</p></div>})}</div>
    </div>
  </section>;
}

function Pillars() {
  const pillars = pageContent.pillars.items;
  return <section id="wiedza" className="living-section section-flow relative overflow-hidden section-space"><div className="section-shell"><div className="reveal-up text-center"><SectionLabel>{pageContent.pillars.label}</SectionLabel><h2 className="display-title mx-auto max-w-4xl text-5xl md:text-8xl">{pageContent.pillars.title}<br/>{pageContent.pillars.titleLine}</h2></div>
    <div className="mt-10 grid gap-px bg-border md:mt-12 md:grid-cols-4">{pillars.map((item)=>{const I=iconMap[item.icon]; const { title, text } = item;return <article key={String(title)} className="motion-card stagger-item group relative min-h-72 overflow-hidden bg-card p-7"><I className="size-9 text-primary transition-transform duration-500 group-hover:-translate-y-1"/><h3 className="mt-20 text-3xl font-bold uppercase">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{String(text)}</p><div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"/></article>})}</div>
    <p className="mt-10 text-center font-display text-2xl font-semibold uppercase text-foreground/70">{pageContent.pillars.summary}</p>
  </div></section>;
}

function Programs() {
  return <section id="programy" className="living-section section-flow relative overflow-hidden bg-ink section-space"><Network className="opacity-15"/><div className="section-shell relative"><div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div className="reveal-up"><SectionLabel>{pageContent.programs.label}</SectionLabel><h2 className="display-title text-6xl md:text-8xl">{pageContent.programs.title}<br/><span className="text-primary">{pageContent.programs.titleAccent}</span></h2></div><p className="reveal-up max-w-sm text-sm leading-7 text-muted-foreground">{pageContent.programs.description}</p></div>
    <div className="mt-10 grid gap-px bg-border md:mt-12 md:grid-cols-2 lg:grid-cols-3">{pageContent.programs.items.map(([num,title,text])=><article key={title} className="motion-card stagger-item group relative min-h-64 overflow-hidden bg-[linear-gradient(155deg,color-mix(in_oklab,var(--card)_92%,transparent),color-mix(in_oklab,var(--ink)_96%,transparent))] p-7"><span className="animated-rule absolute inset-x-7 top-0 h-px bg-primary/70"/><div className="relative flex items-start justify-between"><span className="motion-number font-display text-6xl font-bold leading-none text-primary">{num}</span><ArrowRight className="interactive-arrow mt-2 size-5 text-muted-foreground"/></div><h3 className="relative mt-12 text-2xl font-bold uppercase">{title}</h3><p className="relative mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div>
  </div></section>;
}

function Performance() {
  return <section className="relative flex min-h-[88svh] items-center justify-center overflow-hidden"><img src={media.performance.src} alt={media.performance.alt} loading="lazy" width={media.performance.width} height={media.performance.height} className="motion-image absolute inset-0 h-[104%] w-full object-cover object-center"/><div className="absolute inset-0 bg-background/45"/><div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--cyan)_20%,transparent),transparent,color-mix(in_oklab,var(--burgundy)_28%,transparent))]"/><Network />
    <div className="relative z-10 text-center"><p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-gold">Football performance</p><h2 className="display-title text-[clamp(5rem,16vw,13rem)]">Develop<br/><span className="text-primary">your</span><br/>game</h2><p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] md:text-lg">Technika. Motoryka. Decyzje.</p></div>
  </section>;
}

function Coach() {
  return <section id="trener" className="living-section section-flow relative overflow-hidden bg-card section-space"><div className="section-shell"><div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
    <div className="image-reveal relative"><div className="absolute -left-6 -top-6 h-36 w-36 rounded-full border border-primary/55"/><div className="absolute -bottom-8 -right-5 h-44 w-44 rounded-full border border-burgundy/65"/><img src={media.coach.src} alt={media.coach.alt} loading="lazy" width={media.coach.width} height={media.coach.height} className="relative aspect-[4/5] w-full object-cover"/><p className="absolute bottom-3 left-3 bg-background/90 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">Zdjęcie poglądowe — do podmiany</p></div>
    <div className="reveal-up"><SectionLabel>About coach</SectionLabel><h2 className="display-title text-7xl md:text-9xl">Trener</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-foreground/80">Trener UEFA B, student kierunku diagnostyka sportowa & coaching, z doświadczeniem w największych lubelskich akademiach. Były skaut.</p>
      <div className="mt-10 grid gap-px bg-border sm:grid-cols-2"><div className="motion-card group bg-card p-6"><ShieldCheck className="size-7 text-primary"/><p className="mt-5 font-display text-4xl font-bold">UEFA B</p><p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Licencja trenerska</p></div><div className="motion-card group bg-card p-6"><BrainCircuit className="size-7 text-primary"/><p className="mt-5 font-display text-4xl font-bold">SPORT</p><p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Diagnostyka & coaching</p></div></div>
      <div className="mt-8 border-l border-primary pl-5"><h3 className="font-display text-2xl font-bold uppercase">Podejście do treningu</h3><p className="mt-2 leading-7 text-muted-foreground">Najpierw diagnoza, później precyzyjny plan. Każda jednostka ma cel i wynika z realnych potrzeb zawodnika.</p></div>
    </div>
  </div></div></section>;
}

function Tailored() {
  const differences = pageContent.tailored.differences;
  return <section className="living-section section-flow relative overflow-hidden section-space"><Network className="opacity-25"/><div className="section-shell relative"><SectionLabel>{pageContent.tailored.label}</SectionLabel><div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]"><h2 className="reveal-up display-title text-6xl md:text-9xl">{pageContent.tailored.title}<br/><span className="text-primary">{pageContent.tailored.titleAccent}</span></h2><div className="reveal-up"><p className="font-display text-4xl font-bold uppercase leading-none text-gold md:text-5xl">{pageContent.tailored.statement}<br/><span className="text-foreground">{pageContent.tailored.statementAccent}</span></p><div className="mt-9">{differences.map((x)=><div key={x} className="stagger-item group flex items-center gap-4 border-b border-border py-4 transition-colors hover:border-primary/60"><CircleDot className="size-4 text-primary transition-transform duration-500 group-hover:translate-x-1"/><span className="font-display text-xl font-semibold uppercase">{x}</span></div>)}</div></div></div></div></section>;
}

function SocialProof() {
  const stats = pageContent.socialProof.stats;
  return <><section className="living-section section-flow relative overflow-hidden border-y border-border bg-ink py-12 md:py-14"><div className="section-shell grid grid-cols-2 gap-px bg-border md:grid-cols-4">{stats.map(([value,label])=><div key={label} className="motion-card stagger-item group bg-ink p-5 text-center md:p-8"><p className="motion-number font-display text-5xl font-black text-primary md:text-7xl">{value}</p><p className="mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">{label}</p></div>)}</div><p className="section-shell mt-4 text-center text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{pageContent.socialProof.statsNote}</p></section>
  <section className="living-section section-flow relative overflow-hidden bg-card section-space"><div className="section-shell"><SectionLabel>{pageContent.socialProof.label}</SectionLabel><h2 className="reveal-up display-title max-w-4xl text-5xl md:text-8xl">{pageContent.socialProof.title}<br/>{pageContent.socialProof.titleLine}</h2><div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2">{pageContent.socialProof.testimonials.map((item) => <blockquote key={item.author} className="motion-card stagger-item border-l-2 border-primary bg-background p-8"><p className="text-lg leading-8 text-foreground/70">{item.quote}</p><footer className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-gold">{item.author}</footer></blockquote>)}</div></div></section></>;
}

function Contact() {
  const [sent,setSent]=useState(false);
  const [noTeam,setNoTeam]=useState(false);
  const fieldLabel="grid gap-2 text-xs font-bold uppercase tracking-[0.12em]";
  const field="h-12 rounded-none font-normal normal-case tracking-normal border-foreground/15 bg-background text-base focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/50 md:text-sm";
  const submit=(e:FormEvent)=>{e.preventDefault();setSent(true)};
  return <><section className="section-space-roomy relative overflow-hidden bg-ink text-center"><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,color-mix(in_oklab,var(--cyan)_22%,transparent),transparent_35%),radial-gradient(circle_at_80%_50%,color-mix(in_oklab,var(--burgundy)_32%,transparent),transparent_35%)]"/><Network/><div className="section-shell relative"><p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-gold">{pageContent.cta.kicker}</p><h2 className="display-title text-6xl md:text-9xl">{pageContent.cta.title}<br/><span className="text-primary">{pageContent.cta.titleAccent}</span></h2><p className="mx-auto mt-7 max-w-xl leading-7 text-foreground/70">{pageContent.cta.description}</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Button asChild variant="performance" size="xl"><a href="#kontakt">{pageContent.cta.primary} <ArrowRight/></a></Button><Button asChild variant="performanceOutline" size="xl"><a href={`tel:${brand.phoneHref}`}>{pageContent.cta.secondary} <Phone/></a></Button></div></div></section>
  <section id="kontakt" className="living-section section-flow relative overflow-hidden section-space"><div className="section-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div className="reveal-up"><SectionLabel>Kontakt</SectionLabel><h2 className="display-title text-6xl md:text-8xl">Zacznijmy<br/><span className="text-primary">rozmowę</span></h2><a href={`tel:${brand.phoneHref}`} className="group mt-8 flex items-center gap-4 font-display text-4xl font-bold text-foreground transition-colors hover:text-primary"><Phone className="size-7 text-primary transition-transform duration-500 group-hover:-translate-y-1"/>{brand.phoneDisplay}</a><a href={`mailto:${brand.emailHref}`} className="group mt-5 flex items-center gap-4 text-sm text-muted-foreground transition-colors hover:text-primary"><Mail className="size-5 transition-transform duration-500 group-hover:translate-x-1"/>{brand.emailDisplay}</a><div className="mt-8 flex gap-3"><Button variant="outline" size="icon" aria-label="Instagram — profil do uzupełnienia"><Instagram/></Button><Button variant="outline" size="icon" aria-label="Facebook — profil do uzupełnienia"><MessageCircle/></Button></div></div>
  <form onSubmit={submit} className="motion-card reveal-up grid gap-4 border border-foreground/10 bg-[linear-gradient(160deg,var(--card),color-mix(in_oklab,var(--cyan)_8%,var(--card)))] p-6 md:grid-cols-2 md:p-9">
    <label className={`${fieldLabel} md:col-span-2`}>Imię i nazwisko<Input required autoComplete="name" placeholder="Twoje imię" className={field}/></label>
    <label className={fieldLabel}>Wiek zawodnika<select required defaultValue="" className={`${field} w-full border px-3 text-foreground outline-none`}><option value="" disabled>Wybierz wiek</option>{Array.from({length:19},(_,i)=>i+6).map(a=><option key={a} value={a}>{a} lat</option>)}<option value="25+">25+ lat</option></select></label>
    <div className={fieldLabel}><label htmlFor="team">Obecna drużyna</label><Input id="team" required={!noTeam} disabled={noTeam} placeholder={noTeam?"Brak drużyny":"Nazwa klubu / drużyny"} className={field}/><label className="flex items-center gap-2 text-[11px] font-semibold normal-case tracking-normal text-muted-foreground"><input type="checkbox" checked={noTeam} onChange={e=>setNoTeam(e.target.checked)} className="size-4 accent-[var(--brand-turquoise)]"/>Nie trenuję obecnie w drużynie</label></div>
    <label className={fieldLabel}>Telefon<Input required type="tel" inputMode="tel" autoComplete="tel" placeholder="Numer telefonu" className={field}/></label>
    <label className={fieldLabel}>E-mail<Input required type="email" autoComplete="email" placeholder="Twój adres e-mail" className={field}/></label>
    <label className={`${fieldLabel} md:col-span-2`}>Wiadomość / cel treningu<Textarea required placeholder="Napisz krótko, czego potrzebuje zawodnik" className={`${field} h-auto min-h-28`}/></label>
    <div className="md:col-span-2"><Button type="submit" variant="performance" size="xl" className="w-full sm:w-auto">Wyślij wiadomość <ArrowRight/></Button>{sent&&<p role="status" className="mt-4 border-l-2 border-primary bg-primary/10 px-4 py-3 text-sm text-foreground">Dziękujemy! Zgłoszenie zostało przyjęte — skontaktujemy się wkrótce. (Formularz demonstracyjny — wysyłkę podłączymy po uzupełnieniu docelowego adresu e-mail.)</p>}</div>
  </form>
  </div></section></>;
}

function Footer(){return <footer className="border-t border-border bg-ink py-8"><div className="section-shell flex flex-col gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left"><Logo/><p className="text-xs text-muted-foreground">© 2026 {brand.name}. Treningi piłki nożnej w {brand.location}. Realizacja: {brand.author}.</p><a href="#start" className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Wróć na górę ↑</a></div></footer>}

function Index() {
  return <main><Header/><Hero/><Process/><Diagnostics/><TrainingPlan/><Control/><Pillars/><Programs/><Performance/><Coach/><Tailored/><SocialProof/><Contact/><Footer/></main>;
}
