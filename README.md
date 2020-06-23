# Backend
Vi har implementerat en enkel backend med Nodejs och SQLite som bakomliggande databas.
SQLite är (som bekant) en databas som endast består av en .db-fil och vår .db-fil ligger i `src/Data` och heter `testDb.db`.

Server skriptet ligger i mappen `src/Util/API` och heter `server.js`. Den startas med `node server.js` och lyssnar på port 4001.

Vårt fokus har legat på att **läsa information från databas** och renderera en dynamisk webbapplikation. Men vi har **inte hunnit att implementera all funktionalitet**.

All information som visas i webbapplikationen läses in från databasen med undantag av "Ditt innehav blev senast uppdaterat 2020-05-31". Detta datum är hårdkodat. Vi läser inte heller in profilbilden från databasen utan också denna resurs är hårdkodad.

När det kommer till generell funktionalitet i appen har vi **inte** hunnit att implementera:
- Skapa en ny användare
- Ändra lösenord
- Redigera personuppgifter

Däremot kan man ändra "Preferenser" under sidan "Inställningr" genom att trycka i "checkboxarna". Detta läses in och skickas till databasen. Likaså kan man ta bort sitt konto och detta raderar användaren från databasen. Var försiktig dock, man får inte frågan "Är du säker på att du vill ta bort kontot?" eller liknande. Har du väl tryckt på knappen är du borta och loggas automatiskt ut.

# Inloggning
För att testa vår applikation har vi skapat två användare:
**Användarnamn: "LiNi" Lösenord: "777"**
**Användarnamn "SiWe" Lösenord: "123"**

LiNi har ett innehav att visa upp. För att se hur applikationen rendererar om man **inte** har innehav kan man logga in med SiWe.

Lösenorden är hashade i databasen.

# Avslutningsvis
Även om inte allting hanns med i detta projekt tycker vi att slutresultatet är bra och det mesta är på plats. Vi har dessutom gömt ett litet "easter egg" i applikationen... Kul om ni hittar det!
