# Plan: przygotowanie strony pod WordPress i dopracowanie rytmu sekcji

## Cel
Zachować obecną stronę, treści, kolejność, branding, zdjęcia, CTA i animacje, a jednocześnie uprościć późniejsze podłączenie WordPress CMS oraz zmniejszyć nadmierne odstępy w sposób zachowawczy.

## Zakres zmian

### 1. Modularna struktura bez zmiany widoku
- Wydzielić istniejące sekcje z jednego pliku do niezależnych, opisowo nazwanych komponentów: nagłówek, hero, proces, diagnostyka, plan, kontrola, filary rozwoju, programy, performance, trener, podejście indywidualne, statystyki i opinie, CTA, kontakt oraz stopka.
- Zachować dokładnie obecną kolejność, HTML, interakcje, animacje i identyfikatory kotwic.
- Pozostawić współdzielone elementy, takie jak logo, etykieta sekcji i motyw sieci, jako małe komponenty wielokrotnego użytku.

### 2. Warstwa treści gotowa pod CMS
- Rozszerzyć centralny model treści tak, aby obejmował nagłówki, opisy, CTA, listy, programy, dane kontaktowe, statystyki zastępcze i opinie zastępcze.
- Dodać czytelne typy danych odpowiadające przyszłym polom WordPress/ACF oraz jeden punkt eksportu danych do komponentów.
- Zachować wszystkie obecne teksty 1:1; zmieni się wyłącznie miejsce ich przechowywania.
- Oddzielić mapę obrazów i logo od komponentów, aby później można było podstawić adresy z WordPress Media Library bez przebudowy sekcji.

### 3. Centralne ustawienia wizualne
- Zachować istniejący `--brand-turquoise` oraz pozostałe tokeny kolorystyczne.
- Zachować centralne fonty i obecne style nagłówków; nie zmieniać krojów ani charakteru typografii.
- Wprowadzić niewielki zestaw semantycznych klas odstępów dla sekcji zamiast powtarzania dużych wartości w każdym komponencie.

### 4. Bardziej zwarty rytm strony
- Zmniejszyć standardowe odstępy sekcji z obecnych dużych wartości do umiarkowanych wartości zależnych od ekranu.
- Pozostawić większy oddech w hero, pełnoekranowej sekcji performance oraz głównym CTA.
- Skrócić największe odstępy wewnętrzne przed siatkami i blokami, bez ściskania tekstu, kart ani formularza.
- Na telefonach zastosować mniejsze odstępy niż na desktopie, zachowując wygodne cele dotykowe.

### 5. Subtelne rozdzielenie sekcji
- Wykorzystać istniejące tła `background`, `card` i `ink` naprzemiennie, bez dodawania nowej palety.
- Dodać cienkie linie z istniejącego tokenu obramowania tylko na granicach, które po skróceniu odstępów wymagają wyraźniejszej hierarchii.
- Nie dodawać ramek wokół całych sekcji ani nowych dekoracji.

## Szczegóły techniczne
- Strona pozostaje aplikacją TanStack; przygotowanie dotyczy czystego rozdziału danych i prezentacji, nie implementacji WordPressa.
- Model danych będzie możliwy do zastąpienia wynikiem WordPress REST API bez zmiany interfejsów komponentów.
- Obrazy pozostaną osobnymi assetami i będą przekazywane przez centralną konfigurację mediów.
- Formularz, menu mobilne, kotwice, SEO i obecne zachowanie strony pozostaną bez zmian.

## Weryfikacja
- Porównać wizualnie stronę przed i po zmianach na desktopie, tablecie i telefonie.
- Sprawdzić kolejność i kompletność treści, działanie menu, CTA, formularza oraz obrazów.
- Potwierdzić brak nachodzenia elementów i poziomego przewijania na wszystkich trzech szerokościach.
- Sprawdzić poprawność kompilacji i błędy przeglądarki.
