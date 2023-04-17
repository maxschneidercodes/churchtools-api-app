# ChurchtTools Api Test App

## Anwendung Starten
### 1. npm install
### 2. npm run dev


# Bericht
## Wie ist die Anwendung aufgebaut?
Die Anwendung fetched die Personen von der ChurchTools-Api mithilfe des `churchtoolsClient` und speichert sie dann in einem Array.
Das Array wird mit der Funktion `paginationPersons` reduziert, sodass auf jeder Seite nur vier Personen angezeigt werden.
Mit `NuxtLink` ist es möglich die Seite zu wechseln und es werden die Personen daten als Querry übergeben und dann in der neuen Seite angezeigt.

## Warum wurde welches Framework eingesetzt?
Ich habe mich für die Entwicklung mit `Nuxt.js` entschieden, da ich sehr erfahren in `Next.js` bin und die beiden sich sehr ähneln.
`Nuxt.js` hat mir die Entwicklung vereinfach, indem ich einfaches `Filebases Routing` verwenden konnte und `Layouts` hinzufügen konnte.
Außerdem ist `Nuxt.js` ist sehr kompatibel mit `TypeScript` und ich habe mich für `TypeScript` entschieden, damit ich mit Typen sicher arbeiten kann.
Ich habe `Bootstrap 5` verwendet, da es sehr einfach zu bedienen ist und man schnell schöne Layouts erstellen kann.

## Welche Schwierigkeiten gab es bei der Implementierung?
Ich habe leider die `POST /persons` Schnittstelle nicht implementieren können, da ich immer einen Error Code 500 bekommen habe.
![Bildschirmfoto 2023-04-17 um 20 34 46](https://user-images.githubusercontent.com/45995648/232588580-713fffb0-caa2-433c-951d-229fd7102f08.png)


## Welche Ideen gibt es, die Webanwendung noch zu verbessern?
Ich möchte auf jeden Fall herausfinden, warum die beiden `API Schnittstellen (POST /persons` nicht funktioniert haben.
Des Weiteren möchte ich die Anwendung noch was `UX freundlicher` machen.
Ich würde sehr gerne noch `JEST` Tests schreiben.

## Auf welchen Teil des Codes bin ich besonders stolz?
Mir hat die Entwicklung der `Paginierung` und der einzelnen `Components` sehr viel Spaß gemacht.
Ich bin stolz drauf, dass der `Code` lesbar und einfach zu verstehen ist.
Mir hat das Projekt sehr Spaß gemacht, aber ich war leider etwas enttäuscht, dass ich die beiden Api Routes nicht ins Laufen bekommen habe.


# Bilder von der Anwendung
![Bildschirmfoto 2023-04-17 um 21 15 24](https://user-images.githubusercontent.com/45995648/232588416-89dc0632-9fe8-457f-827b-88bc13d89130.png)
![Bildschirmfoto 2023-04-17 um 21 18 28](https://user-images.githubusercontent.com/45995648/232588897-06c1bf8f-1046-4572-8abf-1bd2ad29a26f.png)
![Bildschirmfoto 2023-04-17 um 21 19 31](https://user-images.githubusercontent.com/45995648/232589170-4e3fbfc0-b8c9-4d3d-bfb1-a723ea4fc9ef.png)
![Bildschirmfoto 2023-04-17 um 21 19 37](https://user-images.githubusercontent.com/45995648/232589195-8b2257bf-f164-4767-b405-b874188812ca.png)

