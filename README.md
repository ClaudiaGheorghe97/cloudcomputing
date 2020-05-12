# Introducere
Acest proiect are ca scop prezentarea informațiilor dobândite în cadrul cursului de Cloud Computing. Astfel, am implementat prin intermediul API-urilor furnizate de Google un calendar și o listă de contacte. 


# Descriere Problemă
Pe platforma Cloud 9 a AWS am realizat un server care să susțină aplicația, cât și o pagină HTML care afișează informațiile preluate din cele 2 API-uri Google Calendar și People API. Cu ajutorul unui fișier CSS a fost realizată cosmetizarea aplicației. 


# Descriere API
Cele 2 API-uri au fost amândouă integrate prin Google prin intermediul unui API Key. 


**Google Calendar**
Acest API permite afișarea, crearea și modificarea evenimentelor din calendar, dar funcționează cu multe alte elemente. Acest API poate fi integrat cu o varietate largă de limbaje de programare (Java, PHP, .NET, JavaScript, NodeJs, Ruby, Python, dar și Andorid și iOS).
 
 
**People API**
People API este folosit pentru a afișa și manageria lista de contacte a userului autentificat și de a-i retrage informațiile profilului pentru userul autentificat, cât și a contactelor acestuia. 





# Flux de date
Interacțiunile de tip API includ o aplicație cloud care comunică cu un server, serverele comunicând între  ele, iar aplicațiile interacționează cu sistemele de operare. Astfel, protoculul de comunicare al unui API este de a permte dezvoltatorilor să construiască, să se conecteze și să integreze aplicații rapid. 

## Exemple de request/ response

# Metoda Get 
API-ul face o cerere prin intermediul funcției listUpcomingEvent() și afișează răspunsul în consolă sub următoarea formă.
 
![GetMethod](/images/MetodaGet.png)

La fel se întâmplă și cu API-ul pentru lista de contacte, care prin intermediul funcției listConnectionNames() afișează obiectul de tip connections cu atributele corespunzătoare. 

![GetMethod](/images/MetodaGet2.png) 
 
## Metode HTTP 

Metodele folosite în cadrul acestui proiect sunt, în mare parte, metode de tip GET, însă pe lângă acestea există și cele de POST, PUT și DELETE.

## Autentificarea și autorizarea serviciilor utilizate. 
Pentru folosirea acestor API s-a folosit integrarea prin intermediul Oauth și s-a dat acces link-urilor de amazon și github, cât și a domeniului de github prin contul personal.

![URI Authentication](/images/URI.png)

## Capturi de ecran aplicatie

Ecranul înainte de a se face autentificarea prin Google: 
![FirstScreen](/images/FirstScreen.png)

## Selectarea unui cont Google:
![SecondScreen](/images/SecondScreen.png)

## Tragerea datelor în urma autentificării și popularea tabelelor: 
#### Tabelul care foloseste People API

![ThirdsScreen](/images/ThirdScreen.png)

#### Tabelul care folosește Calendar API

![FourthScreen](/images/FourthScreen.png)

## *Erori întâmpinate:*

![Eroare](/images/Eroare.png)
Această eroare a apărut datorită faptului că nu am autorizat domeniul de AWS, astfel neputând ca API-ul să comunice cu serverul. După ce a fost realizată autorizarea, a fost necesar să șterg cache & cookies, ca, mai apoi, să funcționeze API-ul. 
 
Referințe:
1) [Developers Google](https://developers.google.com/)
2) [StackOverflow](https://stackoverflow.com/)
