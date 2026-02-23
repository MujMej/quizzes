// data.js
// Quiz A = Grupa A (9–11)
// Quiz B = Grupa B (12–15)

const QUIZ_DATA = {
  meta: {
    minutesPerQuiz: 10,
    pointsPerQuestion: 20,
    passScore: 60
  },

  topics: [
    // =========================
    // TEMA 1
    // =========================
    {
      id: "t1",
      title: "Tema 1 — Internet kao javni prostor",
      room: "JAVNI PARK",
      description: "Javno vs privatno online, šta ne objavljujemo, kako se ponašamo kao u javnom parku.",
      keys: { A: "PARK", B: "TRACE" },

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "🏠 Objaviš sliku ispred svoje kuće i vidi se broj na vratima. Da li je ovo sigurno?",
            options: [
              { id: "A", text: "Da, nema problema" },
              { id: "B", text: "Ne, to nije sigurno" },
              { id: "C", text: "Samo ako imam 100 pratilaca" },
              { id: "D", text: "Samo ako je dan" }
            ],
            answer: "B",
            explain: "Broj kuće je privatna informacija. Ljudi mogu otkriti gdje živiš!"
          },
          {
            id: 2,
            type: "single",
            prompt: "📱 Ko sve može vidjeti tvoj JAVNI profil na društvenoj mreži?",
            options: [
              { id: "A", text: "Samo moji prijatelji" },
              { id: "B", text: "Samo djeca iz razreda" },
              { id: "C", text: "Bilo ko na internetu" },
              { id: "D", text: "Samo moj učitelj" }
            ],
            answer: "C",
            explain: "Javni profil znači da ga svako može vidjeti – čak i ljudi koje ne poznaš!"
          },
          {
            id: 3,
            type: "single",
            prompt: "🎮 Neko ti piše: 'Pošalji mi sliku svoje sobe pa ću ti dati besplatan skin za igru.' Šta radiš?",
            options: [
              { id: "A", text: "Pošaljem sliku" },
              { id: "B", text: "Ignorišem poruku" },
              { id: "C", text: "Napravim screenshot + blokiram + kažem odrasloj osobi" },
              { id: "D", text: "Pitam zašto mu treba slika" }
            ],
            answer: "C",
            explain: "Nikad ne dijeli slike privatnog prostora! Uvijek obavijesti roditelja ili nastavnika."
          },
          {
            id: 4,
            type: "multiple",
            prompt: "🔒 Koja DVA podatka su NAJPRIVATNIJA i ne treba ih dijeliti? (izaberi 2)",
            options: [
              { id: "A", text: "Omiljena boja" },
              { id: "B", text: "Lozinka" },
              { id: "C", text: "Broj telefona" },
              { id: "D", text: "Ime psa" }
            ],
            answers: ["B", "C"],
            scoring: { full: 20, partial: 10 },
            explain: "Lozinka i broj telefona su tajne koje čuvaju tvoju sigurnost!"
          },
          {
            id: 5,
            type: "single",
            prompt: "🗑️ Ako obrišeš poruku ili sliku, da li je zauvijek nestala?",
            options: [
              { id: "A", text: "Da, nestala je zauvijek" },
              { id: "B", text: "Ne, neko je možda sačuvao" },
              { id: "C", text: "Samo ako je neko screenshotovao" },
              { id: "D", text: "Zavisi od WiFi-ja" }
            ],
            answer: "B",
            explain: "Internet pamti! Ljudi mogu napraviti screenshot ili preuzeti sadržaj prije nego obrišeš."
          }
        ],

        B: [
          {
            id: 1,
            type: "multiple",
            prompt: "📢 Vidiš objavu: 'Jedva čekam koncert večeras u Areni! 🎵' Koje informacije ova objava otkriva? (izaberi sve tačne)",
            options: [
              { id: "A", text: "Lokaciju" },
              { id: "B", text: "Vrijeme (kada nisi kod kuće)" },
              { id: "C", text: "Interesovanja" },
              { id: "D", text: "Lozinku" }
            ],
            answers: ["A", "B", "C"],
            scoring: { full: 20, partialScale: true },
            explain: "Ovakve objave otkrivaju previše! Zlonamjerne osobe mogu koristiti ove informacije."
          },
          {
            id: 2,
            type: "multiple",
            prompt: "⚠️ Dobiješ poruku: 'HITNO! Glasaj za mene! bit.ly/vote123' Koje su crvene zastavice (red flags)?",
            options: [
              { id: "A", text: "Riječ 'HITNO'" },
              { id: "B", text: "Skraćeni link (bit.ly)" },
              { id: "C", text: "Koristi emoji" },
              { id: "D", text: "Nema profilnu sliku" }
            ],
            answers: ["A", "B"],
            scoring: { full: 20, partial: 10 },
            explain: "HITNOST + SKRAĆENI LINK = potencijalna opasnost! Nikad ne klikći na sumnjive linkove."
          },
          {
            id: 3,
            type: "multiple",
            prompt: "🔍 Koristiš isti username na više platformi. Šta je rizik? (izaberi sve tačne)",
            options: [
              { id: "A", text: "Lakše te prate preko platformi" },
              { id: "B", text: "Credential stuffing (krađu lozinki)" },
              { id: "C", text: "OSINT povezivanje podataka" },
              { id: "D", text: "Nema nikakav rizik" }
            ],
            answers: ["A", "B", "C"],
            scoring: { full: 20, partialScale: true },
            explain: "Isti username olakšava praćenje i hakovanje. Koristi različite username-ove!"
          },
          {
            id: 4,
            type: "single",
            prompt: "📞 Dobiješ poziv sa maminog broja: 'Hitno mi pošalji 50€ na ovaj broj!' Koji je PRVI korak?",
            options: [
              { id: "A", text: "Odmah pošaljem novac" },
              { id: "B", text: "Prekinem poziv i nazovem pravi mamin broj" },
              { id: "C", text: "Pošaljem poruku na WhatsApp" },
              { id: "D", text: "Ignorišem" }
            ],
            answer: "B",
            explain: "Ovo je phishing napad! Uvijek verifikuj direktnim pozivom na poznati broj."
          },
          {
            id: 5,
            type: "single",
            prompt: "💭 Može li internet ikada 'zaboraviti' nešto što si objavio?",
            options: [
              { id: "A", text: "Da, ako obrišem nalog" },
              { id: "B", text: "Ne, digitalni trag ostaje" },
              { id: "C", text: "Samo ako je profil bio privatan" },
              { id: "D", text: "Da, nakon 5 godina automatski" }
            ],
            answer: "B",
            explain: "Digitalni trag je trajan! Google, arhive, screenshotovi - sve ostaje."
          }
        ]
      }
    },

    // =========================
    // TEMA 2
    // =========================
    {
      id: "t2",
      title: "Tema 2 — Digitalni trag",
      room: "OTISAK",
      description: "Šta internet pamti, šta je digitalni otisak i kako utiče na reputaciju.",
      keys: { A: "OTISAK", B: "FOOTPRINT" },

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "🧠 Da li internet pamti stvari koje objaviš?",
            options: [
              { id: "A", text: "Ne, sve nestaje kad zatvorim telefon" },
              { id: "B", text: "Da, internet pamti sve" },
              { id: "C", text: "Samo slike" },
              { id: "D", text: "Samo tekstove" }
            ],
            answer: "B",
            explain: "Internet je kao ogromna biblioteka - sve što objaviš može ostati sačuvano!"
          },
          {
            id: 2,
            type: "single",
            prompt: "📸 Tvoj drug objavi smiješnu sliku tebe na proslavi. Da li on može to uraditi bez tvog odobrenja?",
            options: [
              { id: "A", text: "Da, to je okej" },
              { id: "B", text: "Ne, trebao je pitati" },
              { id: "C", text: "Samo ako je slika dobra" },
              { id: "D", text: "Samo ako imam manje od 10 pratilaca" }
            ],
            answer: "B",
            explain: "Uvijek treba pitati osobu prije objavljivanja njene slike!"
          },
          {
            id: 3,
            type: "single",
            prompt: "📷 Ko može kopirati tvoju sliku sa javnog profila?",
            options: [
              { id: "A", text: "Niko" },
              { id: "B", text: "Samo prijatelji" },
              { id: "C", text: "Bilo ko" },
              { id: "D", text: "Samo učitelj" }
            ],
            answer: "C",
            explain: "Sve što je javno, svako može sačuvati ili kopirati!"
          },
          {
            id: 4,
            type: "single",
            prompt: "👣 Šta je 'digitalni trag' (otisak)?",
            options: [
              { id: "A", text: "Trag koji ostaviš hodajući" },
              { id: "B", text: "Sve što ostaviš iza sebe na internetu" },
              { id: "C", text: "Broj lajkova" },
              { id: "D", text: "WiFi signal" }
            ],
            answer: "B",
            explain: "Digitalni trag su informacije koje ostavljaš online - komentari, slike, pretrage..."
          },
          {
            id: 5,
            type: "single",
            prompt: "🔍 Tvoja učiteljica traži tvoje ime na Google-u. Šta će pronaći?",
            options: [
              { id: "A", text: "Ništa" },
              { id: "B", text: "Sve javne objave i profile" },
              { id: "C", text: "Samo moje slike" },
              { id: "D", text: "Samo ako sam joj dao šifru" }
            ],
            answer: "B",
            explain: "Google može pronaći javne informacije povezane sa tvojim imenom."
          }
        ],

        B: [
          {
            id: 1,
            type: "single",
            prompt: "📊 Šta je METADATA kod fotografije?",
            options: [
              { id: "A", text: "Filter koji si koristio" },
              { id: "B", text: "Skrivene informacije (lokacija, datum, tip telefona)" },
              { id: "C", text: "Broj lajkova" },
              { id: "D", text: "Veličina fajla" }
            ],
            answer: "B",
            explain: "Metadata može sadržati GPS, vrijeme i model uređaja."
          },
          {
            id: 2,
            type: "multiple",
            prompt: "🕵️ Ko sve može vidjeti tvoje STARE objave od prije 3 godine? (izaberi sve tačne)",
            options: [
              { id: "A", text: "Budući poslodavci" },
              { id: "B", text: "Univerziteti" },
              { id: "C", text: "Internet arhive (Wayback Machine)" },
              { id: "D", text: "Samo ja" }
            ],
            answers: ["A", "B", "C"],
            scoring: { full: 20, partialScale: true },
            explain: "Javne objave mogu ostati dostupne i uticati na budućnost."
          },
          {
            id: 3,
            type: "single",
            prompt: "🔎 Neko koristi OSINT da istraži tvoj profil. Šta može saznati SAMO iz javnih informacija?",
            options: [
              { id: "A", text: "Samo ime" },
              { id: "B", text: "Ime, školu, hobije, lokaciju, prijatelje" },
              { id: "C", text: "Samo broj telefona" },
              { id: "D", text: "Ništa važno" }
            ],
            answer: "B",
            explain: "OSINT spaja javne podatke i može napraviti kompletan profil."
          },
          {
            id: 4,
            type: "single",
            prompt: "🔍 Ukucaš svoje ime u Google pretragu. Šta bi trebalo da vidiš u IDEALNOM slučaju?",
            options: [
              { id: "A", text: "Svi moji komentari sa YouTubea" },
              { id: "B", text: "Profesionalni sadržaj (nagrade, projekti)" },
              { id: "C", text: "Sve slike sa privatnih proslava" },
              { id: "D", text: "Adresa moje kuće" }
            ],
            answer: "B",
            explain: "Online reputacija treba biti pozitivna i profesionalna."
          },
          {
            id: 5,
            type: "single",
            prompt: "⭐ Šta je 'online reputacija'?",
            options: [
              { id: "A", text: "Broj pratilaca" },
              { id: "B", text: "Ukupna slika o tebi na internetu" },
              { id: "C", text: "Samo lajkovi" },
              { id: "D", text: "Brzina interneta" }
            ],
            answer: "B",
            explain: "Reputacija je sve što ljudi vide kad te pretražuju."
          }
        ]
      }
    },

    // =========================
    // TEMA 3
    // =========================
    {
      id: "t3",
      title: "Tema 3 — Lični podaci i privatnost",
      room: "SEF",
      description: "Šta su lični podaci, privatnost postavke i kako prepoznati manipulaciju.",
      keys: { A: "SEF", B: "PRIVACY" },

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "🔑 Tvoja lozinka je:",
            options: [
              { id: "A", text: "Privatna - nikome je ne daješ" },
              { id: "B", text: "Javna - možeš podijeliti sa drugom" },
              { id: "C", text: "Privatna - osim mami i tati" },
              { id: "D", text: "Javna - objavi je na story" }
            ],
            answer: "C",
            explain: "Lozinku dijeliš SAMO sa roditeljima, nikad sa drugovima ili strancima!"
          },
          {
            id: 2,
            type: "single",
            prompt: "📱 Neko na internetu traži tvoj broj telefona. Šta radiš?",
            options: [
              { id: "A", text: "Dam mu broj" },
              { id: "B", text: "Ne dajem broj telefona strancima" },
              { id: "C", text: "Pitam koliko ima godina" },
              { id: "D", text: "Dam samo ako je ljubazan" }
            ],
            answer: "B",
            explain: "Broj telefona je lični podatak - nikad ga ne dijeli sa nepoznatim osobama!"
          },
          {
            id: 3,
            type: "multiple",
            prompt: "🔐 Zaključaj SEF! Izaberi 3 stvari koje NE DIJELIŠ NIKAD: (izaberi 3)",
            options: [
              { id: "A", text: "Lozinka" },
              { id: "B", text: "Kućna adresa" },
              { id: "C", text: "Omiljena boja" },
              { id: "D", text: "Ime škole" },
              { id: "E", text: "Omiljena igrica" }
            ],
            answers: ["A", "B", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "Lozinka, adresa i ime škole su osjetljive informacije."
          },
          {
            id: 4,
            type: "single",
            prompt: "🏠 Ko SMIJE znati tvoju kućnu adresu?",
            options: [
              { id: "A", text: "Svi prijatelji sa Instagrama" },
              { id: "B", text: "Samo porodica i bliski prijatelji" },
              { id: "C", text: "Bilo ko" },
              { id: "D", text: "Samo oni sa verified oznakom" }
            ],
            answer: "B",
            explain: "Adresa je osjetljiva informacija - samo ljudi koje STVARNO poznaješ."
          },
          {
            id: 5,
            type: "single",
            prompt: "👤 Tvoj profil na društvenoj mreži treba biti:",
            options: [
              { id: "A", text: "Javan za sve" },
              { id: "B", text: "Privatan (samo odobreni prijatelji)" },
              { id: "C", text: "Javan ali bez slike" },
              { id: "D", text: "Nema veze" }
            ],
            answer: "B",
            explain: "Privatni profil te štiti - samo odobreni ljudi vide tvoj sadržaj."
          }
        ],

        B: [
          {
            id: 1,
            type: "multiple",
            prompt: "📋 Šta spada u PII (Personally Identifiable Information)? (izaberi sve tačne)",
            options: [
              { id: "A", text: "Puno ime i prezime" },
              { id: "B", text: "JMBG / broj lične karte" },
              { id: "C", text: "Omiljena boja" },
              { id: "D", text: "Email adresa" },
              { id: "E", text: "Kućna adresa" }
            ],
            answers: ["A", "B", "D", "E"],
            scoring: { full: 20, partialScale: true },
            explain: "PII su podaci koji te mogu identifikovati. Štiti ih."
          },
          {
            id: 2,
            type: "single",
            prompt: "📧 Dobiješ email: 'Potvrdite vašu email adresu: [link]' - ali ti nisi ništa tražio. Šta je ovo?",
            options: [
              { id: "A", text: "Legitiman email" },
              { id: "B", text: "Phishing napad" },
              { id: "C", text: "Greška sistema" },
              { id: "D", text: "Spam ali bezopasan" }
            ],
            answer: "B",
            explain: "Phishing pokušava da te navede da klikneš i predaš podatke."
          },
          {
            id: 3,
            type: "single",
            prompt: "🎭 Neko te nazove: 'Zdravo, iz škole sam, trebamo tvoj broj telefona za ekskurziju.' Šta je ovo?",
            options: [
              { id: "A", text: "Legitiman poziv" },
              { id: "B", text: "Social engineering - manipulacija" },
              { id: "C", text: "Greška" },
              { id: "D", text: "Učitelj" }
            ],
            answer: "B",
            explain: "Verifikuj identitet direktno sa školom/roditeljima."
          },
          {
            id: 4,
            type: "single",
            prompt: "🏫 Škola objavi sliku sa ekskurzije i vidi se tvoj broj telefona na papiru. Da li škola smije to uraditi?",
            options: [
              { id: "A", text: "Da" },
              { id: "B", text: "Ne - krši privatnost" },
              { id: "C", text: "Samo ako je slika lijepa" },
              { id: "D", text: "Samo uz saglasnost roditelja" }
            ],
            answer: "B",
            explain: "Lični podaci ne bi trebalo da budu javno objavljeni bez dozvole."
          },
          {
            id: 5,
            type: "multiple",
            prompt: "⚙️ Koje privacy settings treba UVIJEK aktivirati? (izaberi sve tačne)",
            options: [
              { id: "A", text: "Privatan profil" },
              { id: "B", text: "Two-factor authentication (2FA)" },
              { id: "C", text: "Sakrij email od drugih korisnika" },
              { id: "D", text: "Javan profil za više pratilaca" }
            ],
            answers: ["A", "B", "C"],
            scoring: { full: 20, partialScale: true },
            explain: "Privatan profil + 2FA + skriveni kontakt = sigurnost."
          }
        ]
      }
    },

    // =========================
    // TEMA 4
    // =========================
    {
      id: "t4",
      title: "Tema 4 — Lozinke i zaštita naloga",
      room: "TREZOR",
      description: "Kako napraviti jake lozinke, čuvati naloge i koristiti 2FA.",
      keys: { A: "ŠTIT", B: "ARMOR" },

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "💪 Koja lozinka je NAJJAČA?",
            options: [
              { id: "A", text: "marko123" },
              { id: "B", text: "12345678" },
              { id: "C", text: "M@rk0!2024#Pas" },
              { id: "D", text: "mojeime" }
            ],
            answer: "C",
            explain: "Jaka lozinka ima slova, brojeve, simbole i duža je od 10 znakova."
          },
          {
            id: 2,
            type: "single",
            prompt: "🎮 Napravi sigurnu lozinku! Šta MORA sadržavati?",
            options: [
              { id: "A", text: "Samo ime" },
              { id: "B", text: "Velika slova, mala slova, brojevi, simboli" },
              { id: "C", text: "Samo datum rođenja" },
              { id: "D", text: "Samo omiljenu boju" }
            ],
            answer: "B",
            explain: "Kombinacija različitih znakova čini lozinku jačom."
          },
          {
            id: 3,
            type: "single",
            prompt: "👭 Najbolja drugarica traži tvoju lozinku 'samo da pogleda nešto'. Šta radiš?",
            options: [
              { id: "A", text: "Dam joj lozinku" },
              { id: "B", text: "Ne dajem - lozinka je tajna" },
              { id: "C", text: "Dam ako obećava da neće nikome reći" },
              { id: "D", text: "Dam na 5 minuta" }
            ],
            answer: "B",
            explain: "Lozinka je SAMO TVOJA. Ne dijeli se sa drugovima."
          },
          {
            id: 4,
            type: "single",
            prompt: "🔐 Šta je 2FA (two-factor authentication)?",
            options: [
              { id: "A", text: "Dvije lozinke" },
              { id: "B", text: "Dodatna zaštita - kod na telefon nakon lozinke" },
              { id: "C", text: "Dva korisnika" },
              { id: "D", text: "Dva profila" }
            ],
            answer: "B",
            explain: "2FA je dodatni sloj zaštite i smanjuje rizik od preuzimanja naloga."
          },
          {
            id: 5,
            type: "single",
            prompt: "⚠️ Tvoj drug zna tvoju lozinku. Šta ODMAH treba uraditi?",
            options: [
              { id: "A", text: "Ništa" },
              { id: "B", text: "Promijeniti lozinku odmah" },
              { id: "C", text: "Čekati nedelju dana" },
              { id: "D", text: "Pitati ga da zaboravi" }
            ],
            answer: "B",
            explain: "Ako lozinka više nije tajna, promijeni je odmah."
          }
        ],

        B: [
          {
            id: 1,
            type: "single",
            prompt: "💻 Šta je 'brute force' napad?",
            options: [
              { id: "A", text: "Fizički upad u kuću" },
              { id: "B", text: "Automatsko pokušavanje miliona lozinki dok ne pogodi" },
              { id: "C", text: "Phishing email" },
              { id: "D", text: "Virus" }
            ],
            answer: "B",
            explain: "Automatizovan napad koji pokušava mnogo kombinacija lozinki."
          },
          {
            id: 2,
            type: "single",
            prompt: "🔑 Šta je password manager i zašto je važan?",
            options: [
              { id: "A", text: "Program koji pamti sve lozinke umjesto tebe" },
              { id: "B", text: "Osoba koja čuva lozinke" },
              { id: "C", text: "Jedna lozinka za sve naloge" },
              { id: "D", text: "Bezbjednosna greška" }
            ],
            answer: "A",
            explain: "Pomaže da koristiš jake i jedinstvene lozinke za svaki nalog."
          },
          {
            id: 3,
            type: "multiple",
            prompt: "📱 Koji su tipovi 2FA (two-factor authentication)? (izaberi sve tačne)",
            options: [
              { id: "A", text: "SMS kod" },
              { id: "B", text: "Authenticator aplikacija (Google/Microsoft)" },
              { id: "C", text: "Biometrija (otisak prsta)" },
              { id: "D", text: "Pitanje za oporavak" }
            ],
            answers: ["A", "B", "C"],
            scoring: { full: 20, partialScale: true },
            explain: "Najsigurnije je authenticator app; SMS je slabiji, ali i dalje bolji nego ništa."
          },
          {
            id: 4,
            type: "single",
            prompt: "⚠️ Vidiš vest: 'Facebook leak - 500 miliona lozinki!' Šta je ovo i zašto je opasno?",
            options: [
              { id: "A", text: "Ništa važno" },
              { id: "B", text: "Credential stuffing - pokušavaju iste lozinke na drugim sajtovima" },
              { id: "C", text: "Samo Facebook problem" },
              { id: "D", text: "Lažna vijest" }
            ],
            answer: "B",
            explain: "Ako koristiš istu lozinku svuda, proboj jedne usluge ugrozi i ostale."
          },
          {
            id: 5,
            type: "single",
            prompt: "🔓 Zaboraviš lozinku. Šta je NAJBEZBJEDNIJI način resetovanja?",
            options: [
              { id: "A", text: "Pitanje za oporavak ('Ime ljubimca?')" },
              { id: "B", text: "Verifikacija putem emaila + 2FA kod" },
              { id: "C", text: "Poslati podršci svoj JMBG" },
              { id: "D", text: "Zatražiti od prijatelja da resetuje" }
            ],
            answer: "B",
            explain: "Email + 2FA je najbezbjednije. Ne dijeli dokumente i osjetljive podatke."
          }
        ]
      }
    },

    // =========================
    // TEMA 5
    // =========================
    {
      id: "t5",
      title: "Tema 5 — Ko je s druge strane ekrana?",
      room: "MASKA",
      description: "Lažni profili, manipulacija i pravila bezbjedne komunikacije.",
      keys: { A: "MASKA", B: "IDENTITY" },

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "👤 Da li SIGURNO znaš ko je iza profila na internetu?",
            options: [
              { id: "A", text: "Da, piše mu ime" },
              { id: "B", text: "Ne, bilo ko može lagati o identitetu" },
              { id: "C", text: "Da, ima profilnu sliku" },
              { id: "D", text: "Da, ako ima puno pratilaca" }
            ],
            answer: "B",
            explain: "Na internetu ljudi mogu glumiti da su neko drugi."
          },
          {
            id: 2,
            type: "single",
            prompt: "🚩 Neko bez profilne slike ti piše: 'Imam 10 godina kao ti, hajde da budemo prijatelji!' Šta ti govori instinkt?",
            options: [
              { id: "A", text: "To je okej" },
              { id: "B", text: "Sumnjivo - možda nije dijete" },
              { id: "C", text: "Super, novi prijatelj!" },
              { id: "D", text: "Samo ako ima 100 pratilaca" }
            ],
            answer: "B",
            explain: "Predatori često lažu da su djeca. Reci roditelju."
          },
          {
            id: 3,
            type: "single",
            prompt: "📸 Neko te pita: 'Pošalji mi sliku svoje sobe, hoću da vidim kako izgleda.' Da li je ovo normalan zahtjev?",
            options: [
              { id: "A", text: "Da, to je prijateljski" },
              { id: "B", text: "NE - crvena zastavica! Ne šalji privatne slike" },
              { id: "C", text: "Samo ako pošalje i on svoju" },
              { id: "D", text: "Samo jednu sliku" }
            ],
            answer: "B",
            explain: "Ne dijeli privatni prostor sa ljudima online."
          },
          {
            id: 4,
            type: "single",
            prompt: "🤐 Neko ti kaže: 'Ne govori roditeljima o našem razgovoru, to je naša tajna.' Šta ovo znači?",
            options: [
              { id: "A", text: "Super, imam tajnu!" },
              { id: "B", text: "Opasno - manipulacija! Odmah reci roditelju" },
              { id: "C", text: "Okej, čuvaću tajnu" },
              { id: "D", text: "Zavisi ko je" }
            ],
            answer: "B",
            explain: "Tajne poruke su čest znak manipulacije."
          },
          {
            id: 5,
            type: "single",
            prompt: "🎮 Tvoj 'prijatelj' sa interneta kaže: 'Hajde da se nađemo u parku!' Pravilo br. 1:",
            options: [
              { id: "A", text: "Odem sam" },
              { id: "B", text: "Nikad uživo bez roditelja" },
              { id: "C", text: "Odem sa drugom" },
              { id: "D", text: "Odem ako je dan" }
            ],
            answer: "B",
            explain: "Nikad se ne sastaješ sa online poznanicima bez odrasle osobe."
          }
        ],

        B: [
          {
            id: 1,
            type: "single",
            prompt: "🎣 Šta je 'catfishing'?",
            options: [
              { id: "A", text: "Igrica o ribolovu" },
              { id: "B", text: "Kreiranje lažnog online identiteta da prevari druge" },
              { id: "C", text: "Hakovanje" },
              { id: "D", text: "Vrsta phishing-a" }
            ],
            answer: "B",
            explain: "Catfishing = lažno predstavljanje radi prevare."
          },
          {
            id: 2,
            type: "multiple",
            prompt: "🚨 Koji su znakovi 'grooming'-a (online manipulacije maloljetnika)? (izaberi sve tačne)",
            options: [
              { id: "A", text: "Prevelika pažnja i komplimenti" },
              { id: "B", text: "Traži tajnost ('Ne govori roditeljima')" },
              { id: "C", text: "Traži privatne slike" },
              { id: "D", text: "Postepeno prelazi na ličnije teme" },
              { id: "E", text: "Šalje edukativne video" }
            ],
            answers: ["A", "B", "C", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "Grooming je postupna manipulacija i iskorištavanje povjerenja."
          },
          {
            id: 3,
            type: "single",
            prompt: "🎭 Profil djeluje nedosljedno (čudna gramatika, ne zna popularne stvari). Šta uraditi?",
            options: [
              { id: "A", text: "Ignorisati" },
              { id: "B", text: "Postaviti verifikaciona pitanja ili prekinuti kontakt" },
              { id: "C", text: "Nastaviti razgovor" },
              { id: "D", text: "Dodati kao prijatelja" }
            ],
            answer: "B",
            explain: "Pri sumnji: verifikuj ili prekini kontakt i blokiraj."
          },
          {
            id: 4,
            type: "multiple",
            prompt: "❓ Neko ti postavlja PREVIŠE LIČNIH pitanja. Koje su crvene zastavice? (izaberi sve tačne)",
            options: [
              { id: "A", text: "'Gdje živiš tačno?'" },
              { id: "B", text: "'Kad su ti roditelji na poslu?'" },
              { id: "C", text: "'Koja ti je omiljena boja?'" },
              { id: "D", text: "'Imaš li WebCam?'" },
              { id: "E", text: "'Kakvo vrijeme je kod vas?'" }
            ],
            answers: ["A", "B", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "Lokacija, raspored roditelja i kamera su osjetljive teme."
          },
          {
            id: 5,
            type: "multiple",
            prompt: "🚩 Profil: nov, malo pratilaca, nema objava, traži prelazak na Snap odmah. Koji su red flags? (izaberi sve tačne)",
            options: [
              { id: "A", text: "Nov nalog (mogući throwaway)" },
              { id: "B", text: "Malo pratilaca" },
              { id: "C", text: "Nema sadržaja" },
              { id: "D", text: "Hitno traži prelazak na drugi kanal" },
              { id: "E", text: "Sve ovo je normalno" }
            ],
            answers: ["A", "B", "C", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "Ovo su tipični obrasci lažnih profila."
          }
        ]
      }
    },

    // =========================
    // TEMA 6
    // =========================
    {
      id: "t6",
      title: "Tema 6 — Društvene mreže i mozak",
      room: "MOZAK",
      description: "Kako algoritmi, dopamin i poređenje utiču na pažnju i raspoloženje.",
      keys: { A: "BALANS", B: "CONTROL" },

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "⏰ Koliko vremena MAKSIMALNO djeca trebaju provoditi na ekranu dnevno (za zabavu)?",
            options: [
              { id: "A", text: "5 sati" },
              { id: "B", text: "1-2 sata" },
              { id: "C", text: "Cijeli dan" },
              { id: "D", text: "Neograničeno" }
            ],
            answer: "B",
            explain: "Previše vremena na ekranu može uticati na san, pažnju i raspoloženje."
          },
          {
            id: 2,
            type: "single",
            prompt: "📱 Nakon što scroll-uješ 2 sata, često se osjećaš:",
            options: [
              { id: "A", text: "Super, pun energije!" },
              { id: "B", text: "Umorno, prazno, možda loše" },
              { id: "C", text: "Srećno" },
              { id: "D", text: "Isto kao prije" }
            ],
            answer: "B",
            explain: "Dugo skrolanje umara mozak i može pogoršati raspoloženje."
          },
          {
            id: 3,
            type: "single",
            prompt: "🍬 Lajkovi i notifikacije su kao BOMBONE za mozak. Zašto?",
            options: [
              { id: "A", text: "Jer su slatki" },
              { id: "B", text: "Jer oslobađaju dopamin i mozak želi još" },
              { id: "C", text: "Jer ih možeš jesti" },
              { id: "D", text: "Nisu kao bombone" }
            ],
            answer: "B",
            explain: "Dopamin je signal nagrade – notifikacije ga često aktiviraju."
          },
          {
            id: 4,
            type: "single",
            prompt: "😴 Koliko PRIJE SPAVANJA treba isključiti telefon?",
            options: [
              { id: "A", text: "0 minuta - spavam sa telefonom" },
              { id: "B", text: "Minimum 1 sat" },
              { id: "C", text: "5 minuta" },
              { id: "D", text: "Ne moram gasiti" }
            ],
            answer: "B",
            explain: "Ekran i sadržaj mogu otežati uspavljivanje."
          },
          {
            id: 5,
            type: "single",
            prompt: "🏃 OFFLINE IZAZOV! Šta možeš raditi BEZ telefona?",
            options: [
              { id: "A", text: "Ništa" },
              { id: "B", text: "Sport, čitanje, druženje, crtanje, igra napolju" },
              { id: "C", text: "Samo spavanje" },
              { id: "D", text: "Gledati TV" }
            ],
            answer: "B",
            explain: "Offline aktivnosti pomažu mozgu da se odmori i jačaju fokus."
          }
        ],

        B: [
          {
            id: 1,
            type: "single",
            prompt: "🤖 Kako algoritam radi na TikTok/Instagram?",
            options: [
              { id: "A", text: "Pokazuje nasumične video" },
              { id: "B", text: "Analizira šta zadržava pažnju i pokazuje još takvog sadržaja" },
              { id: "C", text: "Pokazuje samo prijatelje" },
              { id: "D", text: "Ne postoji algoritam" }
            ],
            answer: "B",
            explain: "Algoritam optimizuje sadržaj da te zadrži duže u aplikaciji."
          },
          {
            id: 2,
            type: "single",
            prompt: "🔁 Šta je 'echo chamber' (eho komora)?",
            options: [
              { id: "A", text: "Zvučna soba" },
              { id: "B", text: "Kada vidiš uglavnom sadržaj koji potvrđuje tvoje mišljenje" },
              { id: "C", text: "TikTok filter" },
              { id: "D", text: "Način slušanja muzike" }
            ],
            answer: "B",
            explain: "Može suziti perspektivu i pojačati polarizaciju."
          },
          {
            id: 3,
            type: "single",
            prompt: "🧪 Šta je 'dopamine loop' (dopaminska petlja)?",
            options: [
              { id: "A", text: "Vježba za mozak" },
              { id: "B", text: "Ciklus: scroll → dopamin → želja za još → scroll" },
              { id: "C", text: "Video igra" },
              { id: "D", text: "Zdravi način korišćenja" }
            ],
            answer: "B",
            explain: "Petlja nagrade može povećati impulsivno korištenje."
          },
          {
            id: 4,
            type: "multiple",
            prompt: "😔 Efekat poređenja sa drugima na društvenim mrežama: (izaberi sve tačne)",
            options: [
              { id: "A", text: "Svi izgledaju savršeno - osjećaj da nisi dovoljno dobar" },
              { id: "B", text: "Lažna realnost (filteri, najbolji trenuci)" },
              { id: "C", text: "Anksioznost i depresija" },
              { id: "D", text: "Motivacija" },
              { id: "E", text: "Svi su uvijek srećni" }
            ],
            answers: ["A", "B", "C"],
            scoring: { full: 20, partialScale: true },
            explain: "Mreže prikazuju 'highlight reel' – ne stvarnu svakodnevnicu."
          },
          {
            id: 5,
            type: "single",
            prompt: "🧘 Šta je 'digitalni detoks' plan?",
            options: [
              { id: "A", text: "Obrisati sve naloge zauvijek" },
              { id: "B", text: "Planirana pauza od ekrana (npr. jedan dan sedmično bez telefona)" },
              { id: "C", text: "Kupiti novi telefon" },
              { id: "D", text: "Koristiti više aplikacija" }
            ],
            answer: "B",
            explain: "Planirani odmor pomaže fokusu, snu i raspoloženju."
          }
        ]
      }
    },

    // =========================
    // TEMA 7
    // =========================
    {
      id: "t7",
      title: "Tema 7 — Cyberbullying i pozitivna zajednica",
      room: "ŠTIT",
      description: "Prepoznavanje online nasilja, pravilna reakcija i podrška žrtvi.",
      keys: { A: "HRABROST", B: "RESPECT" },

      quizzes: {
        A: [
          {
            id: 1,
            type: "multiple",
            prompt: "💬 Šta je 'ružna' ili nasilna poruka? (izaberi sve tačne)",
            options: [
              { id: "A", text: "Naziv ružnim imenom" },
              { id: "B", text: "Prijetnja" },
              { id: "C", text: "Ismijavanje" },
              { id: "D", text: "Kompliment" },
              { id: "E", text: "Dijeljenje tajni o nekome" }
            ],
            answers: ["A", "B", "C", "E"],
            scoring: { full: 20, partialScale: true },
            explain: "Sve što povređuje, plaši ili ismijava je cyberbullying."
          },
          {
            id: 2,
            type: "single",
            prompt: "📸 Neko pošalje ružnu poruku u grupu. Prvi korak?",
            options: [
              { id: "A", text: "Ignorisati" },
              { id: "B", text: "Napraviti screenshot (dokaz)" },
              { id: "C", text: "Obrisati poruku" },
              { id: "D", text: "Odgovoriti isto" }
            ],
            answer: "B",
            explain: "Screenshot je dokaz. Čuvaj ga da pokažeš odrasloj osobi."
          },
          {
            id: 3,
            type: "single",
            prompt: "🚫 Šta znači 'BLOKIRATI' nekoga?",
            options: [
              { id: "A", text: "Sada ne može da te kontaktira" },
              { id: "B", text: "Postali ste prijatelji" },
              { id: "C", text: "Može te još zvati" },
              { id: "D", text: "Ništa se ne dešava" }
            ],
            answer: "A",
            explain: "Blokiranje zaustavlja kontakt - koristi ga kad se neko loše ponaša."
          },
          {
            id: 4,
            type: "single",
            prompt: "⚠️ Vidiš da neko šalje ružne poruke tvom drugu. Šta radiš?",
            options: [
              { id: "A", text: "Ništa, to nije moj problem" },
              { id: "B", text: "Prijavim (report) i kažem odrasloj osobi" },
              { id: "C", text: "Pridružim se" },
              { id: "D", text: "Smijem se" }
            ],
            answer: "B",
            explain: "Prijavi nasilje i podrži žrtvu. Ne budi posmatrač."
          },
          {
            id: 5,
            type: "single",
            prompt: "👨‍👩‍👧 Kome UVIJEK treba reći ako vidiš/doživiš cyberbullying?",
            options: [
              { id: "A", text: "Nikome" },
              { id: "B", text: "Roditelj, nastavnik ili odrasla osoba od povjerenja" },
              { id: "C", text: "Samo drugu" },
              { id: "D", text: "Pisati na internetu" }
            ],
            answer: "B",
            explain: "Odrasli mogu pomoći i zaustaviti nasilje - nikad ne ćuti."
          }
        ],

        B: [
          {
            id: 1,
            type: "multiple",
            prompt: "📱 Tipovi online nasilja (cyberbullying): (izaberi sve tačne)",
            options: [
              { id: "A", text: "Harassment (ponavljane poruke)" },
              { id: "B", text: "Doxing (objavljivanje privatnih podataka)" },
              { id: "C", text: "Exclusion (namjerno isključivanje)" },
              { id: "D", text: "Impersonation (lažno predstavljanje)" },
              { id: "E", text: "Pozitivan komentar" }
            ],
            answers: ["A", "B", "C", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "Ovo su ozbiljni oblici nasilja i mogu imati posljedice."
          },
          {
            id: 2,
            type: "single",
            prompt: "💬 Grupa ismijava nekoga u chatu. Ti nisi počeo, ali si tamo. Koja je tvoja odgovornost?",
            options: [
              { id: "A", text: "Nisam učestvovao, nisam odgovoran" },
              { id: "B", text: "Posmatrati = biti saučesnik - treba reagovati" },
              { id: "C", text: "To je njihov problem" },
              { id: "D", text: "Treba se pridružiti" }
            ],
            answer: "B",
            explain: "Posmatrač ima moć da zaustavi nasilje – reaguj ili prijavi."
          },
          {
            id: 3,
            type: "multiple",
            prompt: "🛡️ Kako ISPRAVNO reagovati na cyberbullying? (izaberi sve tačne)",
            options: [
              { id: "A", text: "Ne odgovarati" },
              { id: "B", text: "Screenshot dokumentacija" },
              { id: "C", text: "Blokirati" },
              { id: "D", text: "Prijaviti platformi + odrasloj osobi" },
              { id: "E", text: "Odgovoriti još gore" }
            ],
            answers: ["A", "B", "C", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "Ne odgovaraj, dokumentuj, blokiraj, prijavi."
          },
          {
            id: 4,
            type: "single",
            prompt: "📸 Zašto je dokumentovanje (screenshot) važno?",
            options: [
              { id: "A", text: "Za osvetu" },
              { id: "B", text: "Kao dokaz za roditelje/školu/policiju ako treba" },
              { id: "C", text: "Da se pohvalim" },
              { id: "D", text: "Nije važno" }
            ],
            answer: "B",
            explain: "Dokaz pomaže da se problem riješi i spriječi ponavljanje."
          },
          {
            id: 5,
            type: "single",
            prompt: "😔 Prijatelj doživljava cyberbullying. Najbolja emocionalna podrška?",
            options: [
              { id: "A", text: "'Ignoriši to'" },
              { id: "B", text: "'Vjerujem ti, nisi kriv, nisi sam, riješićemo zajedno'" },
              { id: "C", text: "'To nije toliko loše'" },
              { id: "D", text: "'Zašto ne ugasiš internet?'" }
            ],
            answer: "B",
            explain: "Empatija i podrška su ključ – žrtva nije kriva i nije sama."
          }
        ]
      }
    },

    // =========================
    // TEMA 8
    // =========================
    {
      id: "t8",
      title: "Tema 8 — Lažne vijesti i kritičko razmišljanje",
      room: "DETEKTIV",
      description: "Kako prepoznati clickbait, provjeriti izvor i ne dijeliti laži.",
      keys: { A: "DETEKTIV", B: "VERIFY" },

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "📰 Naslov: 'VANZEMALJCI STIGLI NA ZEMLJU - FOTO DOKAZ!!!' Da li je ovo vjerodostojna vijest?",
            options: [
              { id: "A", text: "Da, piše FOTO DOKAZ" },
              { id: "B", text: "Ne, naslov je previše dramatičan (clickbait)" },
              { id: "C", text: "Da, ako ima puno emojija" },
              { id: "D", text: "Da, ako je na internetu" }
            ],
            answer: "B",
            explain: "Velika slova, uzvičnici i drama često znače clickbait."
          },
          {
            id: 2,
            type: "single",
            prompt: "🕵️ Šta prvo provjeriti kod vijesti?",
            options: [
              { id: "A", text: "Koliko lajkova ima" },
              { id: "B", text: "Ko je izvor (ko je objavio)" },
              { id: "C", text: "Boju teksta" },
              { id: "D", text: "Broj komentara" }
            ],
            answer: "B",
            explain: "Izvor je najvažniji: da li je to pouzdan medij ili random stranica?"
          },
          {
            id: 3,
            type: "single",
            prompt: "📢 Vidiš senzacionalnu vijest samo na jednom sajtu. Šta uraditi?",
            options: [
              { id: "A", text: "Odmah podijeliti" },
              { id: "B", text: "Provjeriti da li i drugi pouzdani mediji pišu o tome" },
              { id: "C", text: "Vjerovati odmah" },
              { id: "D", text: "Dodati emojije i poslati" }
            ],
            answer: "B",
            explain: "Ako samo jedan sumnjiv izvor piše – velika šansa da je lažno."
          },
          {
            id: 4,
            type: "single",
            prompt: "🖼️ Slika izgleda čudno (boje, detalji). Šta može biti?",
            options: [
              { id: "A", text: "Ništa čudno" },
              { id: "B", text: "Slika je montirana (fake)" },
              { id: "C", text: "Loš telefon" },
              { id: "D", text: "Filter" }
            ],
            answer: "B",
            explain: "Mnoge slike su lažne ili montirane – provjeri prije dijeljenja."
          },
          {
            id: 5,
            type: "single",
            prompt: "👨‍👩‍👧 Nisi siguran da li je vijest tačna. Šta radiš?",
            options: [
              { id: "A", text: "Podijelim odmah" },
              { id: "B", text: "Pitam odraslu osobu/pouzdani izvor da provjerim" },
              { id: "C", text: "Vjerujem ako ima emoji" },
              { id: "D", text: "Ignorišem" }
            ],
            answer: "B",
            explain: "Bolje provjeriti nego širiti laž."
          }
        ],

        B: [
          {
            id: 1,
            type: "multiple",
            prompt: "🎣 Karakteristike clickbait naslova: (izaberi sve tačne)",
            options: [
              { id: "A", text: "'NEĆEŠ VJEROVATI ŠTA SE DESILO!'" },
              { id: "B", text: "'Stručnjaci savjetuju...' (neutralno)" },
              { id: "C", text: "'ŠOKANTNO! HITNO! NEVJEROVATNO!'" },
              { id: "D", text: "Emocionalni jezik (strah, bijes)" },
              { id: "E", text: "Činjenice i izvori" }
            ],
            answers: ["A", "C", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "Clickbait koristi emocije i pretjerivanje da dobije klik."
          },
          {
            id: 2,
            type: "multiple",
            prompt: "✅ Najbolji fact-checking alati/metode: (izaberi sve tačne)",
            options: [
              { id: "A", text: "Google Reverse Image Search" },
              { id: "B", text: "Snopes / FactCheck" },
              { id: "C", text: "Vjeruj prvoj vijesti" },
              { id: "D", text: "Provjera domena (je li legit sajt)" },
              { id: "E", text: "Pitaj na Redditu" }
            ],
            answers: ["A", "B", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "Reverse image search + pouzdani fact-check + provjera domena."
          },
          {
            id: 3,
            type: "single",
            prompt: "🎥 Video: usne ne prate zvuk savršeno. Šta može biti?",
            options: [
              { id: "A", text: "Loš internet" },
              { id: "B", text: "Deepfake - AI lažan video" },
              { id: "C", text: "Greška pri snimanju" },
              { id: "D", text: "Ništa čudno" }
            ],
            answer: "B",
            explain: "Deepfake može imati čudne usne/treptanje/osvjetljenje."
          },
          {
            id: 4,
            type: "single",
            prompt: "😡 Zašto su emocije opasne pri čitanju vijesti?",
            options: [
              { id: "A", text: "Nisu opasne" },
              { id: "B", text: "Jaka emocija isključuje kritičko razmišljanje – lakše je manipulacija" },
              { id: "C", text: "Emocije su uvijek dobre" },
              { id: "D", text: "Emocije ne utiču" }
            ],
            answer: "B",
            explain: "Manipulacije često ciljaju strah/bijes da dijelimo bez provjere."
          },
          {
            id: 5,
            type: "single",
            prompt: "🌐 Sajt: 'www.nbcnewz.com.co' (primijeti 'z' i '.co'). Šta je ovo?",
            options: [
              { id: "A", text: "Legitiman NBC News" },
              { id: "B", text: "Lažan sajt (typosquatting) - imitira pravi" },
              { id: "C", text: "Njihov novi domen" },
              { id: "D", text: "Blog" }
            ],
            answer: "B",
            explain: "Typosquatting = slično ime domena da prevari korisnika."
          }
        ]
      }
    },

    // =========================
    // TEMA 9
    // =========================
    {
      id: "t9",
      title: "Tema 9 — AI i deepfake",
      room: "ILUZIJA",
      description: "Kako prepoznati AI lažnjake i kako se zaštititi od manipulacije.",
      keys: { A: "PAZI", B: "AUTHENTIC" },

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "🖼️ Vidiš sliku mačke sa šest nogu. Da li je to prava fotografija?",
            options: [
              { id: "A", text: "Da" },
              { id: "B", text: "Ne, vjerovatno AI ili photoshop" },
              { id: "C", text: "Da, takve mačke postoje" },
              { id: "D", text: "Zavisi od boje" }
            ],
            answer: "B",
            explain: "AI često pravi greške u detaljima (udovi, prsti, proporcije)."
          },
          {
            id: 2,
            type: "single",
            prompt: "🎤 Može li glas biti lažan (da zvuči kao roditelj)?",
            options: [
              { id: "A", text: "Ne" },
              { id: "B", text: "Da - AI može kopirati glas" },
              { id: "C", text: "Samo u filmovima" },
              { id: "D", text: "Samo ako snima" }
            ],
            answer: "B",
            explain: "AI može klonirati glas. Zato uvijek verifikuj čudne zahtjeve."
          },
          {
            id: 3,
            type: "single",
            prompt: "🤔 Zašto bi neko pravio lažni video?",
            options: [
              { id: "A", text: "Za zabavu" },
              { id: "B", text: "Da prevari ljude ili manipuliše" },
              { id: "C", text: "Iz dosade" },
              { id: "D", text: "Da pomogne" }
            ],
            answer: "B",
            explain: "Lažni sadržaj se koristi za prevare, laži i manipulaciju."
          },
          {
            id: 4,
            type: "single",
            prompt: "📺 Vidiš video gdje poznata osoba kaže nešto čudno. Šta uraditi?",
            options: [
              { id: "A", text: "Vjerovati odmah" },
              { id: "B", text: "Provjeriti kod pouzdanih izvora" },
              { id: "C", text: "Podijeliti" },
              { id: "D", text: "Ignorisati" }
            ],
            answer: "B",
            explain: "Uvijek provjeri više izvora – može biti deepfake."
          },
          {
            id: 5,
            type: "single",
            prompt: "🔍 Kada vidiš nešto nevjerovatno na internetu, prvo:",
            options: [
              { id: "A", text: "Podijeli odmah" },
              { id: "B", text: "Provjeri izvor i realnost" },
              { id: "C", text: "Lajkuj" },
              { id: "D", text: "Komentariši" }
            ],
            answer: "B",
            explain: "Prvo provjeri — tek onda vjeruj/dijeli."
          }
        ],

        B: [
          {
            id: 1,
            type: "single",
            prompt: "🤖 Kako deepfake tehnologija radi?",
            options: [
              { id: "A", text: "Photoshop" },
              { id: "B", text: "AI uči lice/glas i zamjenjuje u videu" },
              { id: "C", text: "CGI kao u filmovima" },
              { id: "D", text: "Obična montaža" }
            ],
            answer: "B",
            explain: "Deep learning može generisati realistične, ali lažne snimke."
          },
          {
            id: 2,
            type: "multiple",
            prompt: "⚠️ Rizici deepfake tehnologije: (izaberi sve tačne)",
            options: [
              { id: "A", text: "Politička manipulacija" },
              { id: "B", text: "Finansijske prevare (voice scam)" },
              { id: "C", text: "Uništavanje reputacije" },
              { id: "D", text: "Zabava" },
              { id: "E", text: "Kreiranje lažnih dokaza" }
            ],
            answers: ["A", "B", "C", "E"],
            scoring: { full: 20, partialScale: true },
            explain: "Deepfake može biti opasan alat za prevare i manipulaciju."
          },
          {
            id: 3,
            type: "multiple",
            prompt: "🔍 Kako prepoznati AI generisan tekst? (izaberi sve tačne)",
            options: [
              { id: "A", text: "Previše savršena gramatika" },
              { id: "B", text: "Repetitivne fraze" },
              { id: "C", text: "Nedostatak ličnog stila" },
              { id: "D", text: "Generičke formulacije" },
              { id: "E", text: "Uvijek ima pravopisne greške" }
            ],
            answers: ["A", "B", "C", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "AI tekst često djeluje 'previše gladak' i generičan."
          },
          {
            id: 4,
            type: "single",
            prompt: "📞 Dobiješ poziv od 'ujaka' koji traži hitnu pomoć. Glas zvuči tačno kao on. Šta je ovo?",
            options: [
              { id: "A", text: "Sigurno ujak" },
              { id: "B", text: "Moguća AI voice cloning prevara" },
              { id: "C", text: "Loša veza" },
              { id: "D", text: "Normalno" }
            ],
            answer: "B",
            explain: "Verifikuj poziv drugim kanalom prije bilo kakve radnje."
          },
          {
            id: 5,
            type: "single",
            prompt: "⚖️ Etički problem: kada je OK koristiti deepfake?",
            options: [
              { id: "A", text: "Za prevare i manipulaciju" },
              { id: "B", text: "Za edukaciju uz jasno označavanje da je AI" },
              { id: "C", text: "Za propagandu bez otkrivanja" },
              { id: "D", text: "Za lažne dokaze" }
            ],
            answer: "B",
            explain: "Transparentnost je ključ: edukativno može, obmana ne."
          }
        ]
      }
    },

    // =========================
    // TEMA 10
    // =========================
    {
      id: "t10",
      title: "Tema 10 — Incident response",
      room: "HEROJ",
      description: "Šta uraditi kad nešto pođe po zlu: dokazi, prijava, oporavak i lekcije.",
      keys: { A: "HEROJ", B: "RESPONSE" },

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "😱 Kliknuo si na čudan link i telefon se čudno ponaša. Šta ODMAH radiš?",
            options: [
              { id: "A", text: "Ništa" },
              { id: "B", text: "Kažem odrasloj osobi odmah" },
              { id: "C", text: "Čekam sutra" },
              { id: "D", text: "Ignorišem" }
            ],
            answer: "B",
            explain: "Što brže kažeš, prije se problem rješava."
          },
          {
            id: 2,
            type: "single",
            prompt: "👨‍👩‍👧 Zašto je važno odmah reći roditelju kad nešto pođe po zlu?",
            options: [
              { id: "A", text: "Da te kazne" },
              { id: "B", text: "Da pomognu i zaštite - iskrenost je važna" },
              { id: "C", text: "Nije važno" },
              { id: "D", text: "Samo ako je ozbiljno" }
            ],
            answer: "B",
            explain: "Roditelji su tu da pomognu, ne da kazne."
          },
          {
            id: 3,
            type: "single",
            prompt: "🗑️ Neko ti kaže: 'Obriši poruke da niko ne sazna.' Šta radiš?",
            options: [
              { id: "A", text: "Obrišem sve" },
              { id: "B", text: "Ne brišem - to su dokazi, pokazujem roditelju" },
              { id: "C", text: "Obrišem pola" },
              { id: "D", text: "Pitam druga" }
            ],
            answer: "B",
            explain: "Ne briši dokaze: poruke, slike, linkove."
          },
          {
            id: 4,
            type: "single",
            prompt: "🔓 Neko možda zna tvoju lozinku. Šta odmah uraditi?",
            options: [
              { id: "A", text: "Ništa" },
              { id: "B", text: "Promijenim lozinku odmah" },
              { id: "C", text: "Čekam nedelju" },
              { id: "D", text: "Pitam tu osobu" }
            ],
            answer: "B",
            explain: "Promijeni lozinku odmah i uključi 2FA gdje može."
          },
          {
            id: 5,
            type: "single",
            prompt: "📚 Ako ti se nešto loše desi online, šta možeš naučiti?",
            options: [
              { id: "A", text: "Da nikad više ne koristim internet" },
              { id: "B", text: "Lekciju - kako sljedeći put biti pažljiviji" },
              { id: "C", text: "Ništa" },
              { id: "D", text: "Da sakrijem greške" }
            ],
            answer: "B",
            explain: "Greške su za učenje – bitno je reagovati ispravno."
          }
        ],

        B: [
          {
            id: 1,
            type: "single",
            prompt: "🔄 Šta je 'Incident Lifecycle' (životni ciklus incidenta)?",
            options: [
              { id: "A", text: "Nasumične radnje" },
              { id: "B", text: "Preparation → Detection → Containment → Eradication → Recovery → Lessons Learned" },
              { id: "C", text: "Samo brisanje" },
              { id: "D", text: "Ignorisanje" }
            ],
            answer: "B",
            explain: "Incident response je proces sa jasnim koracima."
          },
          {
            id: 2,
            type: "multiple",
            prompt: "🛑 Containment (izolacija) — sumnjaš da je nalog hakovan. Šta uraditi? (izaberi sve tačne)",
            options: [
              { id: "A", text: "Odmah promijeni lozinku" },
              { id: "B", text: "Odjavi sve aktivne sesije" },
              { id: "C", text: "Obavijesti platformu (report hack)" },
              { id: "D", text: "Nastavi koristiti normalno" },
              { id: "E", text: "Aktiviraj 2FA" }
            ],
            answers: ["A", "B", "C", "E"],
            scoring: { full: 20, partialScale: true },
            explain: "Containment znači zaustaviti štetu što brže."
          },
          {
            id: 3,
            type: "multiple",
            prompt: "📸 Koje dokaze (evidence) treba sačuvati? (izaberi sve tačne)",
            options: [
              { id: "A", text: "Screenshot poruka" },
              { id: "B", text: "Email headeri" },
              { id: "C", text: "Datum i vrijeme" },
              { id: "D", text: "Username/profil napadača" },
              { id: "E", text: "Ništa ne treba" }
            ],
            answers: ["A", "B", "C", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "Dokumentuj sve: ko, šta, kada, gdje i kako."
          },
          {
            id: 4,
            type: "multiple",
            prompt: "📢 Reporting (prijavljivanje) — kome prijaviti? (izaberi sve tačne)",
            options: [
              { id: "A", text: "Roditelj/staratelj" },
              { id: "B", text: "Škola (ako je povezano)" },
              { id: "C", text: "Platforma (Instagram/TikTok report)" },
              { id: "D", text: "Policija (ako je ozbiljan kriminal)" },
              { id: "E", text: "Nikome" }
            ],
            answers: ["A", "B", "C", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "Prijavi relevantnim instancama — povećavaš šansu da se problem riješi."
          },
          {
            id: 5,
            type: "single",
            prompt: "🔄 Recovery (oporavak) — šta znači?",
            options: [
              { id: "A", text: "Zaboraviti incident" },
              { id: "B", text: "Vratiti nalog u normalu + ojačati sigurnost + naučiti lekciju" },
              { id: "C", text: "Obrisati nalog" },
              { id: "D", text: "Ignorisati" }
            ],
            answer: "B",
            explain: "Oporavak znači vratiti kontrolu i postati sigurniji nego prije."
          }
        ]
      }
    }
  ]
};
