-----------------------------------------------------------------------------------------------
Tytuł projektu: Zestawienie danych dotyczących rozwoju przemysłu i stanu środowiska naturalnego
-----------------------------------------------------------------------------------------------
Janik Rafał, IINS 6.1/1, nr indeksu 85719
Jarosław Jakubaszek, IINS 6.1/1, nr indeksu 96708

Opis projektu:

Projekt polega na prezentacji danych dotyczących rozwoju przemysłu oraz stanu środowiska naturalnego. Aplikacja pozwala na analizę danych związanych z emisją zanieczyszczeń, ściekami przemysłowymi, zakładowymi oczyszczalniami ścieków oraz poborem wody. Użytkownik może wyświetlać dane w postaci tabeli oraz wykresów słupkowych.

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

2) Uruchomienie

- Do folderu xampp/htdocs nalezy wkleic folder IS_LAB6_REST (znajduje się w LAB6_REST_PHP)
- Do folderu users/user/IdeaProject wkleić folder LAB6_REST_JAVA
- Otworzyć IntelliJ, wybrać wersję javy i uruchomić program

3) Informacje dodatkowe

Do projektu załączam krótkie filmiki, który pokazuje wynik działania GET z postmana oraz rezultat działania finalnego kodu.