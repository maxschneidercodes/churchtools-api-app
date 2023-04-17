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
Ich habe leider die `POST /persons` Schnittstelle nicht implementieren können, da ich nicht herausgefunden habe, wie man dem `ctClient.post` das Neue Personen Objekt richtig übergibt.

## Welche Ideen gibt es, die Webanwendung noch zu verbessern?
Ich möchte auf jeden Fall herausfinden, warum die beiden `API Schnittstellen (POST /persons & PATCH /persons/id)` nicht funktioniert haben.
Des Weiteren möchte ich die Anwendung noch was `UX freundlicher` machen.
Ich würde sehr gerne noch `JEST` Tests schreiben.
Ich würde gerne noch die fetch `GET /persons` cachen, sodass man nicht immer wieder einen neuen Request machen muss, wenn man zurücknavigiert.

## Auf welchen Teil des Codes bin ich besonders stolz?
Mir hat die Entwicklung der `Paginierung` und der einzelnen `Components` sehr viel Spaß gemacht.
Ich bin stolz drauf, dass der `Code` lesbar und einfach zu verstehen ist.
Mir hat das Projekt sehr Spaß gemacht, aber ich war leider etwas enttäuscht, dass ich die beiden Api Routes nicht ins Laufen bekommen habe.
