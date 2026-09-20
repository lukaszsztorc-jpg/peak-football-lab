/**
 * Centralny model treści przygotowany pod przyszły import z WordPress/ACF.
 * Komponenty prezentacyjne pozostają niezależne od źródła danych.
 */
export const brand = {
  name: "STELVIO Traning",
  location: "Puławy",
  author: "STELVIO Marketing Sportowy",
  phoneDisplay: "508 286 090",
  phoneHref: "+48508286090",
  emailDisplay: "E-mail do uzupełnienia",
  emailHref: "email@do-uzupelnienia.pl",
} as const;

export const navigation = [
  ["Start", "start"], ["O treningu", "o-treningu"], ["Programy", "programy"],
  ["Diagnostyka", "diagnostyka"], ["Trener", "trener"], ["Wiedza", "wiedza"], ["Kontakt", "kontakt"],
] as const;

export const processSteps = ["Analiza", "Diagnostyka", "Plan", "Trening", "Kontrola", "Rozwój"] as const;

export const programs = [
  ["01", "Trening indywidualny", "Praca 1 na 1 nad konkretnymi elementami gry."],
  ["02", "Trening pozycyjny", "Rozwój zachowań charakterystycznych dla pozycji zawodnika."],
  ["03", "Trening motoryczny", "Szybkość, dynamika, koordynacja, siła i zmiana kierunku."],
  ["04", "Przygotowanie meczowe", "Praca nad konkretnymi wymaganiami zawodnika."],
  ["05", "Analiza meczowa", "Analiza materiału video i zachowania podczas meczu."],
  ["06", "Program rozwoju zawodnika", "Długoterminowy proces obejmujący wiele obszarów."],
] as const;
