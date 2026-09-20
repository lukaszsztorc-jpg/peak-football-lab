import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  ChevronRight,
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
import heroImage from "@/assets/stelvio-hero.jpg";
import sprintImage from "@/assets/stelvio-sprint.jpg";
import analysisImage from "@/assets/stelvio-analysis.jpg";
import performanceImage from "@/assets/stelvio-performance.jpg";
import coachImage from "@/assets/stelvio-coach-placeholder.jpg";
import logoAsset from "@/assets/stelvio-logo-primary.png.asset.json";
import { brand, navigation as navItems, processSteps, programs } from "@/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${brand.name} — Indywidualny trening piłkarski ${brand.location}` },
      { name: "description", content: "Indywidualny trening piłkarski, trening pozycyjny, przygotowanie motoryczne i diagnostyka sportowa młodych zawodników w Puławach." },
      { property: "og:title", content: `${brand.name} — Rozwijaj swoją grę` },
      { property: "og:description", content: "Trening szyty na miarę zawodnika: analiza, diagnostyka, plan, trening i kontrola procesu." },
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
        description: "Indywidualny trening piłkarski i diagnostyka sportowa w Puławach.",
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
    <img src={logoAsset.url} alt="STELVIO" width={1920} height={1920} className="h-12 w-12 object-contain" />
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
  return <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gold"><span className="h-px w-10 bg-gold" />{children}</p>;
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
        <Button asChild variant="performance" size="xl"><a href="#kontakt">Umów trening <ArrowRight /></a></Button>
      </div>
      <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Zamknij menu" : "Otwórz menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="mt-3 border-t border-border bg-background px-5 py-5 lg:hidden">
      <div className="flex flex-col">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="border-b border-border py-3 font-display text-xl font-bold uppercase">{label}</a>)}</div>
      <a href={`tel:${brand.phoneHref}`} className="mt-5 flex items-center gap-2 text-sm font-bold text-primary"><Phone className="size-4" />{brand.phoneDisplay}</a>
    </nav>}
  </header>;
}

function Hero() {
  return <section id="start" className="relative flex min-h-[92svh] items-end overflow-hidden border-b border-border">
    <img src={heroImage} alt="Trener prowadzący indywidualny trening młodego piłkarza" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[64%_center]" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--ink)_0%,color-mix(in_oklab,var(--ink)_88%,transparent)_37%,color-mix(in_oklab,var(--burgundy)_38%,transparent)_100%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(0deg,var(--background)_0%,transparent_42%)]" />
    <Network className="opacity-35" />
    <div className="section-shell relative z-10 pb-16 pt-32 md:pb-20">
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-gold">Indywidualne <span className="mx-2 text-foreground/40">|</span> pozycyjne <span className="mx-2 text-foreground/40">|</span> motoryczne</p>
      <h1 className="display-title max-w-4xl text-[clamp(4rem,10vw,9.5rem)]">Treningi<br/><span className="text-primary">piłki nożnej</span></h1>
      <div className="mt-8 max-w-xl border-l-2 border-burgundy pl-5">
        <p className="font-display text-3xl font-bold uppercase md:text-5xl">Trening szyty na miarę!</p>
        <p className="mt-3 max-w-lg text-sm leading-7 text-foreground/70 md:text-base">Ułożony indywidualnie pod zawodnika, jego potrzeby, deficyty i potencjał.</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild variant="performance" size="xl"><a href="#kontakt">Umów trening <ArrowRight /></a></Button>
        <Button asChild variant="performanceOutline" size="xl"><a href="#o-treningu">Poznaj metodę <ArrowDown /></a></Button>
      </div>
    </div>
    <div className="absolute bottom-0 right-5 hidden h-40 w-40 translate-y-1/2 rounded-full border border-primary/40 md:block"><span className="absolute inset-4 rounded-full border border-burgundy/60" /></div>
  </section>;
}

function Process() {
  return <section id="o-treningu" className="relative overflow-hidden bg-background py-24 md:py-32"><Network className="opacity-20" />
    <div className="section-shell relative"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
      <div className="reveal-up"><SectionLabel>Metoda Stelvio</SectionLabel><h2 className="display-title text-5xl md:text-7xl">Trening<br/>to <span className="text-primary">proces</span></h2><p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">Nie zaczynam od gotowego planu. Najpierw poznaję zawodnika.</p></div>
      <div className="relative grid gap-0 border-l border-border md:grid-cols-3 md:border-l-0 md:border-t">
        {processSteps.map((step, i) => <div key={step} className="reveal-up relative flex min-h-28 items-center gap-5 border-b border-border px-5 py-5 md:block md:border-b-0 md:border-r">
          <span className="font-display text-4xl font-bold text-gold/40">{String(i + 1).padStart(2,"0")}</span><span className="font-display text-xl font-bold uppercase">{step}</span>
          <i className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-primary bg-background md:-top-1.5 md:left-5 md:translate-y-0" />
        </div>)}
      </div>
    </div></div>
  </section>;
}

function Diagnostics() {
  const items: Array<[LucideIcon, string, string]> = [[Target,"Umiejętności","Technika indywidualna"],[Zap,"Motoryka","Szybkość, dynamika, koordynacja"],[TimerReset,"Poruszanie","Zmiana kierunku, przyspieszenie, hamowanie"],[BrainCircuit,"Rozumienie gry","Decyzje, pozycja, zachowanie na boisku"]];
  return <section id="diagnostyka" className="bg-card py-24 md:py-32"><div className="section-shell">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div className="image-reveal relative min-h-[34rem] overflow-hidden"><img src={sprintImage} alt="Zawodnik podczas testu szybkości i zmiany kierunku" loading="lazy" width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-[linear-gradient(0deg,var(--card),transparent_55%)]"/><div className="absolute bottom-7 left-7 rounded-full border border-primary/50 bg-background/75 p-5 backdrop-blur"><Activity className="size-8 text-primary" /></div></div>
      <div className="reveal-up"><SectionLabel>Punkt wyjścia</SectionLabel><h2 className="display-title text-5xl md:text-7xl">Analiza +<br/><span className="text-primary">diagnostyka</span><br/>sportowa</h2><p className="mt-6 max-w-xl leading-7 text-muted-foreground">Oceniam Twoje umiejętności, sposób poruszania po boisku i rozumienia gry. Wykonujemy testy motoryczne i analizujemy obszary wymagające rozwoju.</p>
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">{items.map(([Icon,title,text],i) => { const I = Icon; return <div key={String(title)} className="bg-card p-6"><div className="flex items-center justify-between"><I className="size-6 text-primary"/><span className="font-display text-3xl text-foreground/10">0{i+1}</span></div><h3 className="mt-5 text-xl font-bold uppercase">{String(title)}</h3><p className="mt-2 text-sm text-muted-foreground">{String(text)}</p></div>})}</div>
      </div>
    </div>
  </div></section>;
}

function TrainingPlan() {
  const flow = ["Diagnoza", "Cel", "Plan", "Trening", "Monitoring", "Efekt"];
  return <section className="relative overflow-hidden py-24 md:py-32"><div className="absolute inset-y-0 right-0 w-1/3 bg-burgundy/15"/><div className="section-shell relative">
    <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div className="reveal-up"><SectionLabel>Od danych do wyniku</SectionLabel><h2 className="display-title text-5xl md:text-7xl">Plan treningowy<br/><span className="text-primary">i trening indywidualny</span></h2><p className="mt-6 max-w-xl leading-7 text-muted-foreground">Tworzę indywidualny plan treningowy dostosowany do deficytów zawodnika oraz rozwoju jego potencjału.</p></div>
      <div className="relative border-l border-primary/40 pl-8 md:grid md:grid-cols-2 md:gap-x-10 md:border-l-0 md:pl-0">{flow.map((item,i)=><div key={item} className="reveal-up relative mb-5 border-b border-border py-5 md:mb-0"><span className="mr-4 font-display text-4xl font-bold text-primary">{String(i+1).padStart(2,"0")}</span><span className="font-display text-2xl font-bold uppercase">{item}</span>{i < flow.length-1 && <ChevronRight className="absolute -bottom-3 right-2 size-5 rotate-90 text-gold md:rotate-0"/>}</div>)}</div>
    </div>
    <div className="mt-14 h-1 overflow-hidden bg-border"><div className="h-full w-full origin-left animate-[reveal-up_2s_ease-out_both] bg-[linear-gradient(90deg,var(--cyan),var(--gold),var(--burgundy))]" /></div>
  </div></section>;
}

function Control() {
  const items: Array<[LucideIcon, string, string]> = [[Play,"Mecz","Obserwacja zawodnika"],[Video,"Analiza video","Materiał i analiza zachowań"],[MessageCircle,"Feedback","Wnioski i dalszy plan"]];
  return <section className="relative overflow-hidden bg-ink py-24 md:py-32"><img src={analysisImage} alt="Trener analizujący mecz razem z zawodnikiem" loading="lazy" width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover opacity-35"/><div className="absolute inset-0 bg-[linear-gradient(90deg,var(--ink)_25%,color-mix(in_oklab,var(--ink)_75%,transparent))]"/><Network />
    <div className="section-shell relative"><div className="max-w-3xl reveal-up"><SectionLabel>Stały feedback</SectionLabel><h2 className="display-title text-5xl md:text-8xl">Kontrola procesu</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/75">Jestem na Twoim meczu, analizuję postępy, tworzę materiał wideo, przedstawiam efekty i razem wyciągamy wnioski.</p></div>
      <div className="mt-14 grid gap-px bg-foreground/15 md:grid-cols-3">{items.map(([Icon,title,text],i)=>{const I=Icon;return <div key={String(title)} className="bg-ink/75 p-7 backdrop-blur-sm"><I className="size-7 text-gold"/><p className="mt-8 font-display text-sm text-primary">0{i+1}</p><h3 className="mt-2 text-3xl font-bold uppercase">{String(title)}</h3><p className="mt-2 text-sm text-muted-foreground">{String(text)}</p></div>})}</div>
    </div>
  </section>;
}

function Pillars() {
  const pillars: Array<[LucideIcon, string, string, string]> = [[Target,"Technika","text-cyan","Precyzja, kontrola, działanie pod presją."],[BrainCircuit,"Psychologia","text-cyan-soft","Pewność siebie, koncentracja i odporność."],[Dumbbell,"Motoryka","text-burgundy","Siła, szybkość i przygotowanie ruchowe."],[Salad,"Odżywianie","text-gold","Energia, regeneracja i dobre nawyki."]];
  return <section id="wiedza" className="py-24 md:py-32"><div className="section-shell"><div className="reveal-up text-center"><SectionLabel>Pełny potencjał</SectionLabel><h2 className="display-title mx-auto max-w-4xl text-5xl md:text-8xl">Rozwój to więcej<br/>niż trening</h2></div>
    <div className="mt-14 grid gap-px bg-border md:grid-cols-4">{pillars.map(([Icon,title,color,text],i)=>{const I=Icon;return <article key={String(title)} className="group relative min-h-72 overflow-hidden bg-card p-7"><span className="absolute right-4 top-1 font-display text-7xl font-black text-foreground/5">0{i+1}</span><I className={`size-9 ${String(color)}`}/><h3 className="mt-20 text-3xl font-bold uppercase">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{String(text)}</p><div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"/></article>})}</div>
    <p className="mt-10 text-center font-display text-2xl font-semibold uppercase text-foreground/70">Każdy element wpływa na rozwój zawodnika.</p>
  </div></section>;
}

function Programs() {
  return <section id="programy" className="bg-card py-24 md:py-32"><div className="section-shell"><div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><SectionLabel>Wybierz kierunek</SectionLabel><h2 className="display-title text-6xl md:text-8xl">Programy<br/><span className="text-primary">treningowe</span></h2></div><p className="max-w-sm text-sm leading-7 text-muted-foreground">Każdy program zaczyna się od zrozumienia potrzeb zawodnika i może działać samodzielnie lub jako część dłuższego procesu.</p></div>
    <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">{programs.map(([num,title,text],i)=><article key={title} className={`group min-h-60 bg-card p-7 transition-colors hover:bg-muted ${i===5?"lg:bg-burgundy/25":""}`}><div className="flex items-center justify-between"><span className="font-display text-4xl font-bold text-primary">{num}</span><ArrowRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-gold"/></div><h3 className="mt-14 text-2xl font-bold uppercase">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div>
  </div></section>;
}

function Performance() {
  return <section className="relative flex min-h-[88svh] items-center justify-center overflow-hidden"><img src={performanceImage} alt="Piłkarz gotowy do kolejnego etapu rozwoju" loading="lazy" width={1200} height={1600} className="absolute inset-0 h-full w-full object-cover object-center"/><div className="absolute inset-0 bg-background/45"/><div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--cyan)_20%,transparent),transparent,color-mix(in_oklab,var(--burgundy)_28%,transparent))]"/><Network />
    <div className="relative z-10 text-center"><p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-gold">Football performance</p><h2 className="display-title text-[clamp(5rem,16vw,13rem)]">Develop<br/><span className="text-primary">your</span><br/>game</h2><p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] md:text-lg">Technika. Motoryka. Decyzje.</p></div>
  </section>;
}

function Coach() {
  return <section id="trener" className="bg-card py-24 md:py-32"><div className="section-shell"><div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
    <div className="image-reveal relative"><div className="absolute -left-6 -top-6 h-36 w-36 rounded-full border border-primary/55"/><div className="absolute -bottom-8 -right-5 h-44 w-44 rounded-full border border-burgundy/65"/><img src={coachImage} alt="Zdjęcie poglądowe trenera — do podmiany na właściwy portret" loading="lazy" width={1200} height={1600} className="relative aspect-[4/5] w-full object-cover"/><p className="absolute bottom-3 left-3 bg-background/90 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">Zdjęcie poglądowe — do podmiany</p></div>
    <div className="reveal-up"><SectionLabel>About coach</SectionLabel><h2 className="display-title text-7xl md:text-9xl">Trener</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-foreground/80">Trener UEFA B, student kierunku diagnostyka sportowa & coaching, z doświadczeniem w największych lubelskich akademiach. Były skaut.</p>
      <div className="mt-10 grid gap-px bg-border sm:grid-cols-2"><div className="bg-card p-6"><ShieldCheck className="size-7 text-primary"/><p className="mt-5 font-display text-4xl font-bold">UEFA B</p><p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Licencja trenerska</p></div><div className="bg-card p-6"><BrainCircuit className="size-7 text-gold"/><p className="mt-5 font-display text-4xl font-bold">SPORT</p><p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Diagnostyka & coaching</p></div></div>
      <div className="mt-8 border-l border-primary pl-5"><h3 className="font-display text-2xl font-bold uppercase">Podejście do treningu</h3><p className="mt-2 leading-7 text-muted-foreground">Najpierw diagnoza, później precyzyjny plan. Każda jednostka ma cel i wynika z realnych potrzeb zawodnika.</p></div>
    </div>
  </div></div></section>;
}

function Tailored() {
  const differences=["Różne pozycje","Różny wiek","Różny poziom","Różne deficyty","Różne cele"];
  return <section className="relative overflow-hidden py-24 md:py-32"><Network className="opacity-25"/><div className="section-shell relative"><SectionLabel>Trening szyty na miarę</SectionLabel><div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]"><h2 className="display-title text-6xl md:text-9xl">Każdy zawodnik<br/><span className="text-primary">jest inny</span></h2><div><p className="font-display text-4xl font-bold uppercase leading-none text-gold md:text-5xl">Nie gotowy schemat.<br/><span className="text-foreground">Indywidualny proces.</span></p><div className="mt-9">{differences.map((x,i)=><div key={x} className="flex items-center gap-4 border-b border-border py-4"><CircleDot className="size-4 text-primary"/><span className="font-display text-xl font-semibold uppercase">{x}</span><span className="ml-auto text-xs text-muted-foreground">0{i+1}</span></div>)}</div></div></div></div></section>;
}

function SocialProof() {
  const stats=[["XX+","Zawodników"],["XX+","Treningów"],["XX","Lat doświadczenia"],["XX+","Analiz meczowych"]];
  return <><section className="border-y border-border bg-ink py-16"><div className="section-shell grid grid-cols-2 gap-px bg-border md:grid-cols-4">{stats.map(([value,label])=><div key={label} className="bg-ink p-5 text-center md:p-8"><p className="font-display text-5xl font-black text-primary md:text-7xl">{value}</p><p className="mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">{label}</p></div>)}</div><p className="section-shell mt-4 text-center text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Wartości do uzupełnienia po przekazaniu danych</p></section>
  <section className="bg-card py-24 md:py-32"><div className="section-shell"><SectionLabel>Głos zawodników</SectionLabel><h2 className="display-title max-w-4xl text-5xl md:text-8xl">Co mówią zawodnicy<br/>i rodzice</h2><div className="mt-12 grid gap-5 md:grid-cols-2"><blockquote className="border-l-2 border-primary bg-background p-8"><p className="text-lg leading-8 text-foreground/70">„Tutaj opinia zawodnika…”</p><footer className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-gold">Imię zawodnika — do uzupełnienia</footer></blockquote><blockquote className="border-l-2 border-burgundy bg-background p-8"><p className="text-lg leading-8 text-foreground/70">„Tutaj opinia rodzica…”</p><footer className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-gold">Imię rodzica — do uzupełnienia</footer></blockquote></div></div></section></>;
}

function Contact() {
  const [sent,setSent]=useState(false);
  const submit=(e:FormEvent)=>{e.preventDefault();setSent(true)};
  return <><section className="relative overflow-hidden bg-ink py-24 text-center md:py-32"><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,color-mix(in_oklab,var(--cyan)_22%,transparent),transparent_35%),radial-gradient(circle_at_80%_50%,color-mix(in_oklab,var(--burgundy)_32%,transparent),transparent_35%)]"/><Network/><div className="section-shell relative"><p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-gold">Twój następny krok</p><h2 className="display-title text-6xl md:text-9xl">Gotowy na<br/><span className="text-primary">kolejny poziom?</span></h2><p className="mx-auto mt-7 max-w-xl leading-7 text-foreground/70">Zacznijmy od analizy Twojego zawodnika i określenia kierunku rozwoju.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Button asChild variant="performance" size="xl"><a href="#kontakt">Umów trening <ArrowRight/></a></Button><Button asChild variant="performanceOutline" size="xl"><a href={`tel:${brand.phoneHref}`}>Skontaktuj się <Phone/></a></Button></div></div></section>
  <section id="kontakt" className="py-24 md:py-32"><div className="section-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><SectionLabel>Kontakt</SectionLabel><h2 className="display-title text-6xl md:text-8xl">Zacznijmy<br/><span className="text-primary">rozmowę</span></h2><a href={`tel:${brand.phoneHref}`} className="mt-8 flex items-center gap-4 font-display text-4xl font-bold text-foreground hover:text-primary"><Phone className="size-7 text-primary"/>{brand.phoneDisplay}</a><a href={`mailto:${brand.emailHref}`} className="mt-5 flex items-center gap-4 text-sm text-muted-foreground hover:text-primary"><Mail className="size-5"/>{brand.emailDisplay}</a><div className="mt-8 flex gap-3"><Button variant="outline" size="icon" aria-label="Instagram — profil do uzupełnienia"><Instagram/></Button><Button variant="outline" size="icon" aria-label="Facebook — profil do uzupełnienia"><MessageCircle/></Button></div></div>
  <form onSubmit={submit} className="grid gap-5 bg-card p-6 md:grid-cols-2 md:p-9"><label className="grid gap-2 text-xs font-bold uppercase tracking-[0.12em]">Imię i nazwisko<Input required placeholder="Twoje imię" className="h-12 rounded-none bg-background"/></label><label className="grid gap-2 text-xs font-bold uppercase tracking-[0.12em]">Telefon<Input required type="tel" placeholder="Numer telefonu" className="h-12 rounded-none bg-background"/></label><label className="grid gap-2 text-xs font-bold uppercase tracking-[0.12em] md:col-span-2">E-mail<Input required type="email" placeholder="Twój adres e-mail" className="h-12 rounded-none bg-background"/></label><label className="grid gap-2 text-xs font-bold uppercase tracking-[0.12em] md:col-span-2">Wiadomość<Textarea required placeholder="Napisz krótko, czego potrzebuje zawodnik" className="min-h-32 rounded-none bg-background"/></label><div className="md:col-span-2"><Button type="submit" variant="performance" size="xl">Wyślij wiadomość <ArrowRight/></Button>{sent&&<p role="status" className="mt-4 text-sm text-primary">Dziękujemy. Formularz demonstracyjny — podłączymy wysyłkę po uzupełnieniu docelowego adresu e-mail.</p>}</div></form>
  </div></section></>;
}

function Footer(){return <footer className="border-t border-border bg-ink py-8"><div className="section-shell flex flex-col gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left"><Logo/><p className="text-xs text-muted-foreground">© 2026 {brand.name}. Treningi piłki nożnej w {brand.location}. Realizacja: {brand.author}.</p><a href="#start" className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Wróć na górę ↑</a></div></footer>}

function Index() {
  return <main><Header/><Hero/><Process/><Diagnostics/><TrainingPlan/><Control/><Pillars/><Programs/><Performance/><Coach/><Tailored/><SocialProof/><Contact/><Footer/></main>;
}
