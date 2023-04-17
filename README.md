# ChurchtTools Api Test App

## Anwendung Starten
### 1. Login Church Tools -> https://jobs.church.tools/
### 2. gh repo clone maxschneidercodes/ct-api-app
### 3. npm install
### 4. npm run dev


# Bericht
## Wie ist die Anwendung aufgebaut?
Die Anwendung fetched die Personen von der ChurchTools-Api mithilfe des `churchtoolsClient` und speichert sie dann in einem Array.
Mit `NuxtLink` ist es möglich die Seite zu wechseln. Es werden die Personen daten als Querry übergeben um dann in der Detail Seite anzuzeigen.


## Warum wurde welches Framework eingesetzt?
Ich habe mich für die Entwicklung mit `Nuxt.js` entschieden, da ich sehr erfahren in `Next.js` bin und die beiden sich sehr ähneln.
`Nuxt.js` hat mir die Entwicklung vereinfach, indem ich einfaches `Filebases Routing` verwenden konnte und `Layouts` hinzufügen konnte.
Außerdem ist `Nuxt.js` ist sehr kompatibel mit `TypeScript` und ich habe mich für `TypeScript` entschieden, damit ich mit Typen sicher arbeiten kann.
Ich habe `Bootstrap 5` verwendet, da es sehr einfach zu bedienen ist und man schnell schöne Layouts erstellen kann.


## Welche Schwierigkeiten gab es bei der Implementierung?
Ich habe leider die `POST /persons` Schnittstelle nicht implementieren können, da ich immer einen Error Code 500 bekommen habe.
![Bildschirmfoto 2023-04-17 um 20 34 46](https://user-images.githubusercontent.com/45995648/232588580-713fffb0-caa2-433c-951d-229fd7102f08.png)


## Welche Ideen gibt es, die Webanwendung noch zu verbessern?
Ich möchte auf jeden Fall herausfinden, warum die `API Schnittstelle POST /persons` nicht funktioniert hat.
Des Weiteren möchte ich die Anwendung noch was `UX freundlicher` machen.
Ich würde sehr gerne noch `JEST` Tests schreiben und noch etwas Refactoring.


## Auf welchen Teil des Codes bin ich besonders stolz?
Mir hat die Entwicklung der `Paginierung` und der einzelnen `Components` sehr viel Spaß gemacht.
Ich bin stolz drauf, dass der `Code` lesbar und einfach zu verstehen ist.
Mir hat das Projekt sehr Spaß gemacht, aber ich war leider etwas enttäuscht, dass ich die POST /persons nicht zum Laufen bekommen habe.


# Bilder von der Anwendung

![Bildschirmfoto 2023-04-17 um 23 01 21](https://user-images.githubusercontent.com/45995648/232610028-1822a68f-3aa1-4731-a6ad-1353b3bba9ea.png)
![Bildschirmfoto 2023-04-17 um 21 19 31](https://user-images.githubusercontent.com/45995648/232589170-4e3fbfc0-b8c9-4d3d-bfb1-a723ea4fc9ef.png)
![Bildschirmfoto 2023-04-17 um 21 19 37](https://user-images.githubusercontent.com/45995648/232589195-8b2257bf-f164-4767-b405-b874188812ca.png)

