##Introducere
Acest proiect are ca scop prezentarea informațiilor dobândite în cadrul cursului de Cloud Computing. Astfel, am implementat prin intermediul API-urilor furnizate de Google un calendar și o listă de contacte. 
##Descriere Problemă
Pe platforma Cloud 9 a AWS am realizat un server care să susțină aplicația, cât și o pagină HTML care afișează informațiile preluate din cele 2 API-uri Google Calendar și People API. Cu ajutorul unui fișier CSS a fost realizată cosmetizarea aplicației. 
##Descriere API
Cele 2 API-uri au fost amândouă integrate prin Google prin intermediul unui API Key. 
•	Google Calendar
Acest API permite afișarea, crearea și modificarea evenimentelor din calendar, dar funcționează cu multe alte elemente. Acest API poate fi integrat cu o varietate largă de limbaje de programare (Java, PHP, .NET, JavaScript, NodeJs, Ruby, Python, dar și Andorid și iOS).
•	People API
People API este folosit pentru a afișa și manageria lista de contacte a userului autentificat și de a-i retrage informațiile profilului pentru userul autentificat, cât și a contactelor acestuia. 
##Flux de date
Interacțiunile de tip API includ o aplicație cloud care comunică cu un server, serverele comunicând între  ele, iar aplicațiile interacționează cu sistemele de operare. Astfel, protoculul de comunicare al unui API este de a permte dezvoltatorilor să construiască, să se conecteze și să integreze aplicații rapid. 
####1.	Exemple de request/ response
##Metoda Get 
API-ul face o cerere prin intermediul funcției listUpcomingEvent() și afișează răspunsul în consolă sub următoarea formă.
 
La fel se întâmplă și cu API-ul pentru lista de contacte, care prin intermediul funcției listConnectionNames() afișează obiectul de tip connections cu atributele corespunzătoare. 
 
###2.	Metode HTTP 

Metodele folosite în cadrul acestui proiect sunt, în mare parte, metode de tip GET, însă pe lângă acestea există și cele de POST, PUT și DELETE.
###3.	Autentificarea și autorizarea serviciilor utilizate. 
Pentru folosirea acestor API s-a folosit integrarea prin intermediul Oauth și s-a dat acces link-urilor de amazon și github, cât și a domeniului de github prin contul personal.
 
Referințe:
1)	https://developers.google.com/
2)	https://stackoverflow.com/
