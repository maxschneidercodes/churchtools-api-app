# ChurchtTools Api Test App

## Anwendung Starten

1. gh repo clone maxschneidercodes/ct-api-app
2. .env file in root Hinzufügen
3. Folgende env Variablen mit entsprechenden Werten Hinzufügen 
`NUXT_CHURCH_TOOLS_USERNAME=<churchtools-username>`
`NUXT_CHURCH_TOOLS_PASSWORD=<churchtools-password>`
4. npm install
5. npm run dev


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
Ich hatte leider einige Schwierigkeiten mit den Api Endpoints da ich beim Login mit dem `churchtoolsClient` einen fehler gemacht habe.

## Welche Ideen gibt es, die Webanwendung noch zu verbessern?
Des Weiteren möchte ich die Anwendung noch was `UX freundlicher` machen.
Ich würde sehr gerne noch `JEST` Tests schreiben und noch etwas Refactoring.


## Auf welchen Teil des Codes bin ich besonders stolz?
Mir hat die Entwicklung der `Paginierung` und der einzelnen `Components` sehr viel Spaß gemacht.
Ich bin stolz drauf, dass der `Code` lesbar und einfach zu verstehen ist und das ich einen `cach` eingebaut habe.



# Bilder von der Anwendung

![Bildschirmfoto 2023-04-18 um 14 04 23](https://user-images.githubusercontent.com/45995648/232779478-3f76ba1e-e701-4e47-b45b-b07e287644b6.png)

![Bildschirmfoto 2023-04-18 um 14 34 51](https://user-images.githubusercontent.com/45995648/232779607-59ffa510-2eac-42e5-ae29-e198f62aef78.png)

![Bildschirmfoto 2023-04-18 um 14 35 20](https://user-images.githubusercontent.com/45995648/232779455-e512d70f-a92a-46c7-952b-e57531e2471b.png)

![Bildschirmfoto 2023-04-18 um 14 04 31](https://user-images.githubusercontent.com/45995648/232779629-1199daaa-229e-4367-97b0-3b078e1f0123.png)

