-----------------------------------------------------------------------------------------------
Tytuł projektu: Zestawienie danych dotyczących rozwoju przemysłu i stanu środowiska naturalnego
-----------------------------------------------------------------------------------------------
Janik Rafał, IINS 6.1/1, nr indeksu 85719
Jarosław Jakubaszek, IINS 6.1/1, nr indeksu 96708

---------------
Opis projektu:
---------------

Projekt polega na prezentacji danych dotyczących rozwoju przemysłu oraz stanu środowiska naturalnego. Aplikacja pozwala na analizę danych związanych z emisją zanieczyszczeń, ściekami przemysłowymi, zakładowymi oczyszczalniami ścieków oraz poborem wody. Użytkownik może wyświetlać dane w postaci tabeli oraz wykresów słupkowych.

Wykorzystane technologie:

- Eksport/import z pliku XML/JSON:
	Aplikacja korzysta z formatu JSON do wymiany danych między frontendem a backendem. Dane zostały pozyskane z GUS'u w formacie .xslx, a następnie sparsowane do .json. Dane są pobierane z plików, a następnie umieszczane w odpowiednich tabelach w bazie danych.
	
- Eksport/import z bazy danych:
	Dane są przechowywane w bazie danych, a następnie pobierane i przekazywane do aplikacji frontendowej za pośrednictwem endpointów serwera backend.
	
- Wykorzystanie ORM w celu dostępu do bazy danych:
	Dostęp do bazy danych jest realizowany za pomocą technologii ORM, co ułatwia zarządzanie danymi i operacje na bazie danych. Przykładem jest użycie Sequelize na backendzie do tworzenia tabel i wprowadzania do nich danych z plików json. 
	
- Wykorzystanie usług typu REST:
	Aplikacja korzysta z usług typu REST do komunikacji między frontendem a backendem. REST API umożliwia pobieranie danych na temat rozwoju przemysłu, emisji zanieczyszczeń, ścieków, oczyszczalni ścieków oraz poboru wody. W projekcie wykorzystujemy axios'a.

- Wykorzystanie kontenerów Docker:
	Aplikacja jest zaimplementowana z wykorzystaniem kontenerów Docker, co pozwala na łatwe zarządzanie zasobami oraz unifikację środowiska uruchomieniowego. Przykładem jest plik Dockerfile oraz docker-compose.yml, które definiują konfigurację kontenerów dla aplikacji.

----------------
2) Uruchomienie
----------------

Do uruchomienia projektu będzie potrzebny Docker (https://docs.docker.com/get-docker/)

- Rozpakuj plik .zip
- Uruchom Docker na swoim komputerze
- W folderze Projekt powinieneś mieć plik "docker-compose.yml". Uruchom cmd lub git bash w 		lokalizacji z tym plikiem
- Wprowadź komendę "docker-compose up --build"
- Poczekaj, aż Docker Compose zakończy budowanie i uruchamianie kontenerów. Gdy zobaczysz, że serwery działają poprawnie, otwórz przeglądarkę internetową i przejdź do "http://localhost:3000
"
- Aplikacja powinna w tym momencie działać prawidłowo

- Aby zatrzymać kontenery i usunąć je razem z ich zawartością, woluminami i obrazami możesz użyć polecenia "docker-compose down --rmi all --volumes"

------------------------
3) Informacje dodatkowe
------------------------

Dołączam krótki filmik, który przedstawia instalację i działanie projektu. W filmie znajduje się wizualna instrukcja dotycząca procesu instalacji oraz prezentację działania poszczególnych części projektu w praktyce.

-----------
4) Wnioski
-----------

Analiza danych przedstawiających rozwój przemysłu i stan środowiska naturalnego obejmuje trzy kategorie: ilość ścieków przemysłowych, liczba zakładów produkcyjnych z różnymi systemami oczyszczania ścieków oraz emisja dwutlenku siarki, tlenków azotu i pyłów.

- Ilość ścieków przemysłowych:
	W latach 2000-2021 ogólna ilość ścieków przemysłowych wykazuje tendencję spadkową, obserwujemy jednak wzrost w roku 2021 w porównaniu do roku 2020. Warto zwrócić uwagę na znaczący spadek ilości ścieków przemysłowych wymagających oczyszczania w latach 2000-2021. Z drugiej strony, wzrosła ilość ścieków oczyszczanych, zwłaszcza z podwyższonym usuwaniem biogenów. Warto zauważyć, że ilość ścieków nieoczyszczanych jest stosunkowo niska w porównaniu do innych kategorii i zmniejsza się w czasie.
	
- Liczba zakładów produkcyjnych z różnymi systemami oczyszczania ścieków:
	W latach 2000-2021 obserwujemy spadek liczby zakładów produkcyjnych ogółem, co sugeruje zmniejszenie liczby zakładów generujących ścieki. Liczba zakładów posiadających oczyszczalnie również spada, jednak większość z nich posiada wystarczającą przepustowość. Warto zwrócić uwagę na zmniejszenie liczby zakładów bez oczyszczalni ścieków oraz na wzrost liczby zakładów odprowadzających ścieki do sieci kanalizacyjnej.
	
- Emisja dwutlenku siarki, tlenków azotu i pyłów:
	Emisja dwutlenku siarki, tlenków azotu i pyłów zmniejsza się w latach 2000-2020. W przypadku dwutlenku siarki, największy spadek obserwujemy w przemyśle energetycznym. Emisja tlenków azotu również spada we wszystkich kategoriach, szczególnie w przemyśle energetycznym oraz transporcie. Natomiast emisja pyłów spada głównie w przemyśle energetycznym i gospodarstwach domowych.
	
Analiza danych wskazuje na poprawę stanu środowiska naturalnego w kontekście przemysłu, dzięki zmniejszeniu ilości ścieków i emisji szkodliwych substancji. Mimo to, wciąż istnieją obszary do poprawy, takie jak transport i oczyszczanie ścieków. Dalsze inwestycje w ekologiczne technologie oraz restrykcyjne przepisy mogą przyczynić się do dalszej poprawy jakości środowiska.

Notki do wniosków:

- Chociaż liczba zakładów produkcyjnych może się zmniejszać, przemysł może nadal rosnąć dzięki zwiększonej efektywności, automatyzacji i innowacjom technologicznym. To pozwala na większą produkcję przy mniejszej liczbie zakładów, jednocześnie redukując negatywny wpływ na środowisko naturalne.

- Dane z GUS-u, jak wszelkie dane statystyczne, mogą mieć swoje ograniczenia. Przy analizowaniu danych, warto zawsze brać pod uwagę potencjalne błędy czy niedokładności. Mimo to, GUS jest oficjalnym źródłem danych statystycznych w Polsce i generalnie jest uważany za wiarygodne źródło informacji.