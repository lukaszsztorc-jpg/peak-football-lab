import analysisImage from "@/assets/stelvio-analysis.jpg";
import coachImage from "@/assets/stelvio-coach-placeholder.jpg";
import heroImage from "@/assets/stelvio-hero.jpg";
import logoAsset from "@/assets/stelvio-logo-primary.png.asset.json";
import performanceImage from "@/assets/stelvio-performance.jpg";
import sprintImage from "@/assets/stelvio-sprint.jpg";

/**
 * Centralny model danych strony, gotowy do zastąpienia odpowiedzią WordPress REST API / ACF.
 * Komponenty prezentacyjne nie zależą od miejsca przechowywania treści ani mediów.
 */
export type IconName = "activity" | "brain" | "circle" | "dumbbell" | "message" | "play" | "salad" | "target" | "timer" | "video" | "zap";
export type FeatureItem = { icon: IconName; title: string; text: string; color?: string };

export const brand = {
  name: "STELVIO Traning",
  location: "Puławy",
  author: "STELVIO Marketing Sportowy",
  phoneDisplay: "508 286 090",
  phoneHref: "+48508286090",
  emailDisplay: "E-mail do uzupełnienia",
  emailHref: "email@do-uzupelnienia.pl",
} as const;

export const media = {
  logo: { src: logoAsset.url, alt: "STELVIO", width: 1920, height: 1920 },
  hero: { src: heroImage, alt: "Trener prowadzący indywidualny trening młodego piłkarza", width: 1920, height: 1088 },
  diagnostics: { src: sprintImage, alt: "Zawodnik podczas testu szybkości i zmiany kierunku", width: 1600, height: 1200 },
  control: { src: analysisImage, alt: "Trener analizujący mecz razem z zawodnikiem", width: 1600, height: 1200 },
  performance: { src: performanceImage, alt: "Piłkarz gotowy do kolejnego etapu rozwoju", width: 1200, height: 1600 },
  coach: { src: coachImage, alt: "Zdjęcie poglądowe trenera — do podmiany na właściwy portret", width: 1200, height: 1600 },
} as const;

export const seo = {
  title: `${brand.name} — Indywidualny trening piłkarski ${brand.location}`,
  description: "Indywidualny trening piłkarski, trening pozycyjny, przygotowanie motoryczne i diagnostyka sportowa młodych zawodników w Puławach.",
  openGraphTitle: `${brand.name} — Rozwijaj swoją grę`,
  openGraphDescription: "Trening szyty na miarę zawodnika: analiza, diagnostyka, plan, trening i kontrola procesu.",
  schemaDescription: "Indywidualny trening piłkarski i diagnostyka sportowa w Puławach.",
} as const;

export const navigation = [
  ["Start", "start"], ["O treningu", "o-treningu"], ["Programy", "programy"],
  ["Diagnostyka", "diagnostyka"], ["Trener", "trener"], ["Wiedza", "wiedza"], ["Kontakt", "kontakt"],
] as const;

export const pageContent = {
  hero: {
    kicker: ["Indywidualne", "pozycyjne", "motoryczne"],
    title: "Treningi",
    titleAccent: "piłki nożnej",
    lead: "Trening szyty na miarę!",
    description: "Ułożony indywidualnie pod zawodnika, jego potrzeby, deficyty i potencjał.",
    primaryCta: "Umów trening",
    secondaryCta: "Poznaj metodę",
  },
  process: {
    label: "Metoda Stelvio",
    title: "Trening",
    titleLine: "to",
    titleAccent: "proces",
    description: "Nie zaczynam od gotowego planu. Najpierw poznaję zawodnika.",
    steps: ["Analiza", "Diagnostyka", "Plan", "Trening", "Kontrola", "Rozwój"],
  },
  diagnostics: {
    label: "Punkt wyjścia",
    title: "Analiza +",
    titleAccent: "diagnostyka",
    titleLine: "sportowa",
    description: "Oceniam Twoje umiejętności, sposób poruszania po boisku i rozumienia gry. Wykonujemy testy motoryczne i analizujemy obszary wymagające rozwoju.",
    items: [
      { icon: "target", title: "Umiejętności", text: "Technika indywidualna" },
      { icon: "zap", title: "Motoryka", text: "Szybkość, dynamika, koordynacja" },
      { icon: "timer", title: "Poruszanie", text: "Zmiana kierunku, przyspieszenie, hamowanie" },
      { icon: "brain", title: "Rozumienie gry", text: "Decyzje, pozycja, zachowanie na boisku" },
    ] satisfies FeatureItem[],
  },
  trainingPlan: {
    label: "Od danych do wyniku",
    title: "Plan treningowy",
    titleAccent: "i trening indywidualny",
    description: "Tworzę indywidualny plan treningowy dostosowany do deficytów zawodnika oraz rozwoju jego potencjału.",
    steps: ["Diagnoza", "Cel", "Plan", "Trening", "Monitoring", "Efekt"],
  },
  control: {
    label: "Stały feedback",
    title: "Kontrola procesu",
    description: "Jestem na Twoim meczu, analizuję postępy, tworzę materiał wideo, przedstawiam efekty i razem wyciągamy wnioski.",
    items: [
      { icon: "play", title: "Mecz", text: "Obserwacja zawodnika" },
      { icon: "video", title: "Analiza video", text: "Materiał i analiza zachowań" },
      { icon: "message", title: "Feedback", text: "Wnioski i dalszy plan" },
    ] satisfies FeatureItem[],
  },
  pillars: {
    label: "Pełny potencjał",
    title: "Rozwój to więcej",
    titleLine: "niż trening",
    summary: "Każdy element wpływa na rozwój zawodnika.",
    items: [
      { icon: "target", title: "Technika", color: "text-cyan", text: "Precyzja, kontrola, działanie pod presją." },
      { icon: "brain", title: "Psychologia", color: "text-cyan-soft", text: "Pewność siebie, koncentracja i odporność." },
      { icon: "dumbbell", title: "Motoryka", color: "text-burgundy", text: "Siła, szybkość i przygotowanie ruchowe." },
      { icon: "salad", title: "Odżywianie", color: "text-gold", text: "Energia, regeneracja i dobre nawyki." },
    ] satisfies FeatureItem[],
  },
  programs: {
    label: "Wybierz kierunek",
    title: "Programy",
    titleAccent: "treningowe",
    description: "Każdy program zaczyna się od zrozumienia potrzeb zawodnika i może działać samodzielnie lub jako część dłuższego procesu.",
    items: [
      ["01", "Trening indywidualny", "Praca 1 na 1 nad konkretnymi elementami gry."],
      ["02", "Trening pozycyjny", "Rozwój zachowań charakterystycznych dla pozycji zawodnika."],
      ["03", "Trening motoryczny", "Szybkość, dynamika, koordynacja, siła i zmiana kierunku."],
      ["04", "Przygotowanie meczowe", "Praca nad konkretnymi wymaganiami zawodnika."],
      ["05", "Analiza meczowa", "Analiza materiału video i zachowania podczas meczu."],
      ["06", "Program rozwoju zawodnika", "Długoterminowy proces obejmujący wiele obszarów."],
    ],
  },
  tailored: {
    label: "Trening szyty na miarę",
    title: "Każdy zawodnik",
    titleAccent: "jest inny",
    statement: "Nie gotowy schemat.",
    statementAccent: "Indywidualny proces.",
    differences: ["Różne pozycje", "Różny wiek", "Różny poziom", "Różne deficyty", "Różne cele"],
  },
  socialProof: {
    stats: [["XX+", "Zawodników"], ["XX+", "Treningów"], ["XX", "Lat doświadczenia"], ["XX+", "Analiz meczowych"]],
    statsNote: "Wartości do uzupełnienia po przekazaniu danych",
    label: "Głos zawodników",
    title: "Co mówią zawodnicy",
    titleLine: "i rodzice",
    testimonials: [
      { quote: "„Tutaj opinia zawodnika…”", author: "Imię zawodnika — do uzupełnienia" },
      { quote: "„Tutaj opinia rodzica…”", author: "Imię rodzica — do uzupełnienia" },
    ],
  },
  cta: {
    kicker: "Twój następny krok",
    title: "Gotowy na",
    titleAccent: "kolejny poziom?",
    description: "Zacznijmy od analizy Twojego zawodnika i określenia kierunku rozwoju.",
    primary: "Umów trening",
    secondary: "Skontaktuj się",
  },
} as const;
