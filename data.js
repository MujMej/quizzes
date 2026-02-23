// data.js - PRODUKCIJSKA VERZIJA

const QUIZ_DATA = {
  meta: {
    minutesPerQuiz: 10,
    pointsPerQuestion: 20,
    passScore: 60,
    totalTopics: 10
  },

  topics: [
    // =========================
    // TEMA 1 – INTERNET KAO JAVNI PROSTOR
    // =========================
    {
      id: "t1",
      title: "Tema 1 — Internet kao javni prostor",
      room: "JAVNI PARK",
      description: "Razumijevanje razlike javnog i privatnog online prostora.",
      keys: { A: "PARK", B: "TRACE" },

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "🏞️ Ako objaviš sliku ispred svoje kuće gdje se vidi ulica i broj:\n\nKo to može vidjeti?",
            options: [
              { id: "A", text: "Samo moji prijatelji" },
              { id: "B", text: "Bilo ko na internetu - čak i nepoznati ljudi" },
              { id: "C", text: "Samo djeca iz moje škole" },
              { id: "D", text: "Niko, jer sam obrisao sliku nakon 5 minuta" }
            ],
            answer: "B",
            explain: "🚨 Internet je JAVNI prostor! Čak i kad obrišeš, ljudi mogu sačuvati screenshot. Nikad ne dijeli lokaciju!"
          },
          {
            id: 2,
            type: "scenario",
            prompt: "📱 Scenario:\n\nMarko objavljuje na TikTok: 'Idemo sutra u Arena Shopping na 15h!'\n\nŠta može biti problem?",
            options: [
              { id: "A", text: "Ništa, to je samo tržni centar" },
              { id: "B", text: "Otkriva gdje će biti i kad – nepoznati mogu doći" },
              { id: "C", text: "Problem je samo ako objavi i fotografiju" },
              { id: "D", text: "Nema problema jer je Arena veliko mjesto" }
            ],
            answer: "B",
            explain: "✅ LOKACIJA + VRIJEME = opasna kombinacija! Nikad ne najavljuj gdje ćeš biti."
          },
          {
            id: 3,
            type: "single",
            prompt: "🎮 Neko ti piše: 'Hej, imam 10 godina isto kao ti! Pošalji mi sliku sobe pa ću ti poslati kod za Roblox!'\n\nŠta odmah radiš?",
            options: [
              { id: "A", text: "Pošaljem sliku jer želim kod" },
              { id: "B", text: "Screenshot + blokiram + kažem roditelju" },
              { id: "C", text: "Kažem mu da prvo on pošalje" },
              { id: "D", text: "Ignoriš poruku" }
            ],
            answer: "B",
            explain: "🛡️ OVO JE MANIPULACIJA! Odrasli često lažu da su djeca. UVIJEK reci roditelju i blokiraj!"
          },
          {
            id: 4,
            type: "multiple",
            prompt: "🔐 Koja 2 podatka NIKAD ne dijeliš online? (Izaberi 2 tačna)",
            options: [
              { id: "A", text: "Omiljena boja" },
              { id: "B", text: "Kućna adresa" },
              { id: "C", text: "Broj telefona" },
              { id: "D", text: "Omiljena igrica" }
            ],
            answers: ["B", "C"],
            scoring: { full: 20, partial: 10 },
            explain: "✅ ADRESA i TELEFON su PRIVATNI! To može neko zloupotrijebiti."
          },
          {
            id: 5,
            type: "single",
            prompt: "🗑️ Ako obrišeš objavu sa Instagrama, da li je ZAUVIJEK nestala?",
            options: [
              { id: "A", text: "Da, Instagram je obrisao sa servera" },
              { id: "B", text: "NE – ljudi su mogli screenshot-ovati ili sačuvati" },
              { id: "C", text: "Nestala je samo ako sam imao privatan profil" },
              { id: "D", text: "Zavisi od WiFi mreže" }
            ],
            answer: "B",
            explain: "⚠️ DIGITALNI TRAG OSTAJE! Šta jednom objaviš, može ostati zauvijek. Razmisli prije nego objaviš!"
          }
        ],

        B: [
          {
            id: 1,
            type: "scenario",
            prompt: "🔍 ANALIZA OBJAVE:\n\n'Ne mogu dočekati vikend! Idemo na planinu Jahorina, ostajemo u hotelu Termag od petka do nedjelje! 🎿❄️'\n\nKoje OSJETLJIVE informacije ova objava otkriva?",
            options: [
              { id: "A", text: "Samo destinaciju" },
              { id: "B", text: "Lokacija + tačan vremenski period + hotel = kuća je prazna" },
              { id: "C", text: "Samo interesovanja" },
              { id: "D", text: "Nema osjetljivih informacija" }
            ],
            answer: "B",
            explain: "🚨 OVERSHARING! Ovo je SIGURNOSNI RIZIK – provalna krađa! Objavljuj NAKON povratka, nikad prije."
          },
          {
            id: 2,
            type: "multiple",
            prompt: "⚠️ Dobiješ poruku: 'HITNO!!! Klikni bit.ly/novac123 da dobiješ 100KM!!! 🔥💰'\n\nPrepoznaj RED FLAGS: (Izaberi sve tačne)",
            options: [
              { id: "A", text: "Riječ 'HITNO' (urgency tactic)" },
              { id: "B", text: "Skraćeni link (bit.ly = ne vidiš gdje vodi)" },
              { id: "C", text: "Nerealna ponuda (besplatan novac)" },
              { id: "D", text: "Puno emojija" },
              { id: "E", text: "Sve je u redu" }
            ],
            answers: ["A", "B", "C"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ Ovo je PHISHING! Hitnost + skraćeni link + nerealna ponuda = PREVARA. Nikad ne klikći!"
          },
          {
            id: 3,
            type: "analysis",
            prompt: "🔗 OSINT SCENARIO:\n\nKoristiš username 'stefan_sarajevo_2010' na:\n- Instagram\n- TikTok\n- Gmail\n- Roblox\n\nŠta hakerski alati mogu otkriti?",
            options: [
              { id: "A", text: "Samo ime" },
              { id: "B", text: "Ime + grad + godinu rođenja + sve naloge = kompletan profil" },
              { id: "C", text: "Ništa važno" },
              { id: "D", text: "Samo ako imam javne profile" }
            ],
            answer: "B",
            explain: "🎯 OSINT = Open Source Intelligence. Hakeri koriste Google, reverse search i alate za povezivanje naloga. KORISTI RAZLIČITE USERNAMES!"
          },
          {
            id: 4,
            type: "single",
            prompt: "📞 VISHING NAPAD:\n\nDobiješ poziv sa 'maminog broja':\n'Hitno pošalji 50€ na broj 062-XXX-XXX, telefon mi je pao u vodu!'\n\nAli glas zvuči čudno. Šta radiš PRVO?",
            options: [
              { id: "A", text: "Šaljem novac odmah" },
              { id: "B", text: "PREKIDAM POZIV i zovem mamu na drugi broj koji znam" },
              { id: "C", text: "Pošaljem SMS da provjerim" },
              { id: "D", text: "Ignoriš" }
            ],
            answer: "B",
            explain: "🚨 AI VOICE CLONING! Hakeri mogu klonirati glas sa uzorka od 3 sekunde. UVIJEK VERIFIKUJ POZIVE!"
          },
          {
            id: 5,
            type: "single",
            prompt: "💾 Internet arhive (Wayback Machine) mogu:\n\nA) Pohraniti obrisane web stranice\nB) Pohraniti tvoje stare objave čak i ako si ih obrisao\nC) Biti pretražene od strane poslodavaca/univerziteta\n\nŠta je tačno?",
            options: [
              { id: "A", text: "Samo A" },
              { id: "B", text: "A i B" },
              { id: "C", text: "SVE OD NAVEDENOG" },
              { id: "D", text: "Ništa od toga" }
            ],
            answer: "C",
            explain: "✅ DIGITALNI TRAG JE TRAJAN! Archive.org, Google cache, screenshotovi – sve ostaje. Tvoja online reputacija je TRAJNA!"
          }
        ]
      }
    },

    // =========================
    // TEMA 2 – DIGITALNI TRAG
    // =========================
    {
      id: "t2",
      title: "Tema 2 — Digitalni trag",
      room: "OTISAK",
      description: "Kako internet pamti i utiče na budućnost.",
      keys: { A: "OTISAK", B: "FOOTPRINT" },

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "👣 Šta je 'digitalni otisak' (footprint)?",
            options: [
              { id: "A", text: "Trag koji ostaviš hodajući" },
              { id: "B", text: "SVE što ostaviš na internetu – slike, komentari, pretrage" },
              { id: "C", text: "Samo broj lajkova" },
              { id: "D", text: "WiFi signal" }
            ],
            answer: "B",
            explain: "✅ Svaki klik, komentar, like, pretraga – SVE to čini tvoj digitalni trag!"
          },
          {
            id: 2,
            type: "single",
            prompt: "📸 Tvoj drug objavi tvoju smiješnu sliku bez pitanja. Da li smije?",
            options: [
              { id: "A", text: "Da, to je okej jer smo prijatelji" },
              { id: "B", text: "NE – trebao je pitati jer je to tvoja slika" },
              { id: "C", text: "Samo ako je slika lijepa" },
              { id: "D", text: "Samo ako si u grupi" }
            ],
            answer: "B",
            explain: "✅ CONSENT (saglasnost) je važan! Uvijek pitaj prije objavljivanja tuđe slike."
          },
          {
            id: 3,
            type: "single",
            prompt: "🔍 Ako neko ukuca tvoje ime u Google, šta može pronaći?",
            options: [
              { id: "A", text: "Ništa" },
              { id: "B", text: "SVE javne objave, komentare, slike sa javnih profila" },
              { id: "C", text: "Samo privatne poruke" },
              { id: "D", text: "Samo ako mu dam šifru" }
            ],
            answer: "B",
            explain: "🔍 Google indeksira JAVNE profile! Zato je važno postaviti PRIVATE profile."
          },
          {
            id: 4,
            type: "single",
            prompt: "🖼️ Ko može SCREENSHOT-ovati tvoju story/objavu?",
            options: [
              { id: "A", text: "Niko" },
              { id: "B", text: "Samo prijatelji" },
              { id: "C", text: "BILO KO ko vidi – Instagram/Snapchat NE SPREČAVA screenshot" },
              { id: "D", text: "Samo admin" }
            ],
            answer: "C",
            explain: "⚠️ Snapchat obavijesti o screenshot-u, ALI ne može ga spriječiti! Razmisli prije nego pošalješ."
          },
          {
            id: 5,
            type: "single",
            prompt: "🎓 Zašto je digitalni trag važan za BUDUĆNOST?",
            options: [
              { id: "A", text: "Nije važan" },
              { id: "B", text: "Poslodavci i univerziteti GLEDAJU tvoj online profil" },
              { id: "C", text: "Samo ako si poznat" },
              { id: "D", text: "Važan je samo za odrasle" }
            ],
            answer: "B",
            explain: "🎯 70% poslodavaca provjerava kandidate na društvenim mrežama! Čuvaj svoju online reputaciju od malih nogu."
          }
        ],

        B: [
          {
            id: 1,
            type: "analysis",
            prompt: "📊 METADATA FORENSICS:\n\nPreuzmeš sliku sa Instagrama. EXIF data pokazuje:\n- GPS: 43.8564° N, 18.4131° E\n- Datum: 15.03.2024, 14:32\n- Uređaj: iPhone 13 Pro\n\nŠta ovo otkriva?",
            options: [
              { id: "A", text: "Samo tip telefona" },
              { id: "B", text: "TAČNU LOKACIJU (Sarajevo), datum, vrijeme i model uređaja" },
              { id: "C", text: "Ništa važno" },
              { id: "D", text: "Instagram automatski briše EXIF" }
            ],
            answer: "B",
            explain: "🚨 METADATA je OPASNA! Instagram briše GPS ALI originalne slike čuvaju sve. Koristi 'Remove EXIF data' alate prije slanja!"
          },
          {
            id: 2,
            type: "multiple",
            prompt: "🕵️ Ko sve može vidjeti tvoje STARE objave od prije 5 godina? (Sve tačne)",
            options: [
              { id: "A", text: "Budući poslodavci (HR screening)" },
              { id: "B", text: "Univerziteti (admission background check)" },
              { id: "C", text: "Internet Archive (Wayback Machine)" },
              { id: "D", text: "Samo ja ako imam lozinku" },
              { id: "E", text: "Google cache i search indexi" }
            ],
            answers: ["A", "B", "C", "E"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ Sve je TRAJNO! Čak i nakon brisanja, arhive i cache mogu čuvati godinama."
          },
          {
            id: 3,
            type: "scenario",
            prompt: "🔎 OSINT CHALLENGE:\n\nHaker nalazi tvoj Instagram (@marko_sarajevo). Profil je PRIVATAN ali vidi:\n- Bio: 'Gimnazija Obala, fudbal ⚽, gejmr 🎮'\n- Profilna: ti u dresu FK Sarajevo\n- 230 followera\n\nŠta može zaključiti?",
            options: [
              { id: "A", text: "Ništa jer je profil privatan" },
              { id: "B", text: "Ime, grad, školu, hobije, uzrast (gimnazija = 15-18)" },
              { id: "C", text: "Samo ime" },
              { id: "D", text: "Ne može ništa bez lozinke" }
            ],
            answer: "B",
            explain: "🎯 OSINT može puno otkriti iz malih detalja! NIKAD ne stavljaj školu, grad, tim u BIO."
          },
          {
            id: 4,
            type: "single",
            prompt: "🔍 'Right to be forgotten' (GDPR):\n\nImaš pravo zatražiti brisanje podataka, ALI:\n\nA) Google MORA obrisati sve\nB) Google može odbiti ako je 'javni interes'\nC) Primjenjuje se SAMO u EU\n\nŠta je tačno?",
            options: [
              { id: "A", text: "Samo A" },
              { id: "B", text: "B i C" },
              { id: "C", text: "Samo C" },
              { id: "D", text: "Sve od navedenog" }
            ],
            answer: "B",
            explain: "⚖️ GDPR NIJE APSOLUTNO! Ne možeš obrisati sve (npr. javne vijesti, sudski zapisnici). Bolje je NE PRAVITI GREŠKE!"
          },
          {
            id: 5,
            type: "critical",
            prompt: "💼 CASE STUDY:\n\n2019: Student izgubio Harvard ponudu zbog rasističkih memeova sa 16 godina.\n\nŠta je lekcija?",
            options: [
              { id: "A", text: "Harvard je bio strog" },
              { id: "B", text: "Digitalni trag MOŽE UNIŠTITI BUDUĆNOST – online ponašanje je TRAJNO" },
              { id: "C", text: "To se dešava samo poznatima" },
              { id: "D", text: "Mogao je obrisati naloge" }
            ],
            answer: "B",
            explain: "🎓 REAL CASE! Univerziteti koriste 'social media screening'. Tvoje objave danas = tvoja budućnost sutra."
          }
        ]
      }
    },

    // =========================
    // TEMA 3 – LIČNI PODACI I PRIVATNOST
    // =========================
    {
      id: "t3",
      title: "Tema 3 — Lični podaci i privatnost",
      room: "SEF",
      description: "PII, GDPR i zaštita privatnosti.",
      keys: { A: "SEF", B: "PRIVACY" },

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "🔑 Tvoja lozinka je:",
            options: [
              { id: "A", text: "Privatna – daješ SAMO roditeljima" },
              { id: "B", text: "Javna – možeš podijeliti sa najboljim drugom" },
              { id: "C", text: "Možeš objaviti na story" },
              { id: "D", text: "Možeš reći učitelju" }
            ],
            answer: "A",
            explain: "🛡️ Lozinka je SAMO ZA TEBE I RODITELJE. Nikad drugovima, nikad online!"
          },
          {
            id: 2,
            type: "single",
            prompt: "📱 Neko te pita za broj telefona na internetu. Šta radiš?",
            options: [
              { id: "A", text: "Dam broj" },
              { id: "B", text: "NE DAJEM – to je lični podatak" },
              { id: "C", text: "Pitam koliko ima godina pa onda dam" },
              { id: "D", text: "Dam ako je ljubazan" }
            ],
            answer: "B",
            explain: "✅ Broj telefona = PII (Personally Identifiable Information). NIKAD strancima!"
          },
          {
            id: 3,
            type: "multiple",
            prompt: "🔐 Izaberi 3 stvari koje NIKAD ne dijeliš: (Izaberi 3)",
            options: [
              { id: "A", text: "Kućna adresa" },
              { id: "B", text: "Broj telefona" },
              { id: "C", text: "Omiljena boja" },
              { id: "D", text: "Ime škole sa brojem razreda" },
              { id: "E", text: "Omiljena pesma" }
            ],
            answers: ["A", "B", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ ADRESA, TELEFON, ŠKOLA = osjetljive informacije!"
          },
          {
            id: 4,
            type: "single",
            prompt: "👤 Tvoj Instagram/TikTok profil treba biti:",
            options: [
              { id: "A", text: "JAVAN za sve" },
              { id: "B", text: "PRIVATAN – samo odobreni prijatelji" },
              { id: "C", text: "Javan ali bez slike" },
              { id: "D", text: "Nema veze" }
            ],
            answer: "B",
            explain: "✅ PRIVATE profile štite sadržaj od nepoznatih!"
          },
          {
            id: 5,
            type: "single",
            prompt: "🏠 Ko SMIJE znati gdje živiš?",
            options: [
              { id: "A", text: "Svi sa Instagrama" },
              { id: "B", text: "Samo porodica i BLISKI prijatelji (koje poznaješ uživo)" },
              { id: "C", text: "Bilo ko" },
              { id: "D", text: "Samo verified nalozi" }
            ],
            answer: "B",
            explain: "🏡 Adresa je PRIVATNA! Samo ljudi koje STVARNO poznaješ."
          }
        ],

        B: [
          {
            id: 1,
            type: "multiple",
            prompt: "📋 Šta spada u PII (Personally Identifiable Information)? (Sve tačne)",
            options: [
              { id: "A", text: "Ime i prezime" },
              { id: "B", text: "JMBG / broj lične karte" },
              { id: "C", text: "Email adresa" },
              { id: "D", text: "Omiljena boja" },
              { id: "E", text: "IP adresa" },
              { id: "F", text: "Biometrija (otisak, lice)" }
            ],
            answers: ["A", "B", "C", "E", "F"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ PII = bilo koji podatak koji te identificira. GDPR ih štiti!"
          },
          {
            id: 2,
            type: "scenario",
            prompt: "📧 PHISHING SCENARIO:\n\nEmail: 'Potvrdite vašu PayPal email adresu: [link]'\n\nLink vodi na: paypa1.com (primijeti '1' umjesto 'l')\n\nŠta je ovo?",
            options: [
              { id: "A", text: "Legitiman PayPal email" },
              { id: "B", text: "PHISHING – lažan sajt (typosquatting)" },
              { id: "C", text: "Spam ali bezopasan" },
              { id: "D", text: "PayPal backup domen" }
            ],
            answer: "B",
            explain: "🎣 TYPOSQUATTING! Hakeri prave LAŽNE domene slične pravima. UVIJEK provjeri URL prije klika!"
          },
          {
            id: 3,
            type: "analysis",
            prompt: "🎭 SOCIAL ENGINEERING:\n\nPoziv: 'Zdravo, zovem iz škole. Trebamo broj telefona za ekskurziju.'\n\nALI: škola već ima tvoj broj.\n\nŠta je ovo?",
            options: [
              { id: "A", text: "Legitiman poziv" },
              { id: "B", text: "SOCIAL ENGINEERING – manipulacija da daš podatke" },
              { id: "C", text: "Greška u sistemu" },
              { id: "D", text: "Novi nastavnik" }
            ],
            answer: "B",
            explain: "🚨 Social engineering = psihološka manipulacija! UVIJEK verifikuj identitet: 'Hvala, nazvaću školu direktno da provjerim.'"
          },
          {
            id: 4,
            type: "single",
            prompt: "⚖️ GDPR (General Data Protection Regulation):\n\nŠkola objavi sliku sa takmičenja gdje se vidi tvoj broj telefona na papiru.\n\nDa li škola krši zakon?",
            options: [
              { id: "A", text: "Ne, škola može sve" },
              { id: "B", text: "DA – krši GDPR jer objavljuje lične podatke bez saglasnosti" },
              { id: "C", text: "Samo ako je slika loša" },
              { id: "D", text: "Ne jer je slika javna" }
            ],
            answer: "B",
            explain: "⚖️ GDPR VIOLATION! Lični podaci (broj telefona) ne smiju biti javno objavljeni bez EKSPLICITNE saglasnosti."
          },
          {
            id: 5,
            type: "multiple",
            prompt: "⚙️ PRIVACY SETTINGS checklist: (Sve tačne)",
            options: [
              { id: "A", text: "Privatan profil" },
              { id: "B", text: "Two-Factor Authentication (2FA)" },
              { id: "C", text: "Sakriti email od javnosti" },
              { id: "D", text: "Onemogućiti geolocation tagging" },
              { id: "E", text: "Javan profil za više pratilaca" }
            ],
            answers: ["A", "B", "C", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ LAYER DEFENSE! Privatan profil + 2FA + skriveni kontakt + NO GEO = maksimalna zaštita."
          }
        ]
      }
    },

    // =========================
    // TEMA 4 – LOZINKE I ZAŠTITA NALOGA
    // =========================
    {
      id: "t4",
      title: "Tema 4 — Lozinke i zaštita naloga",
      room: "TREZOR",
      description: "Kreiranje jakih lozinki i 2FA.",
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
              { id: "C", text: "M@rk0!2024#P@s" },
              { id: "D", text: "mojeime" }
            ],
            answer: "C",
            explain: "✅ Jaka lozinka: 12+ znakova, VELIKA/mala slova, brojevi, simboli!"
          },
          {
            id: 2,
            type: "single",
            prompt: "🎮 Šta MORA sadržavati sigurna lozinka?",
            options: [
              { id: "A", text: "Samo ime i prezime" },
              { id: "B", text: "Velika + mala slova + brojevi + simboli" },
              { id: "C", text: "Samo datum rođenja" },
              { id: "D", text: "Samo omiljenu boju" }
            ],
            answer: "B",
            explain: "✅ Kombinacija različitih znakova = jak štit!"
          },
          {
            id: 3,
            type: "single",
            prompt: "👭 Najbolji drug traži lozinku 'samo na 5 minuta'. Šta radiš?",
            options: [
              { id: "A", text: "Dam mu" },
              { id: "B", text: "NE DAJEM – lozinka je samo moja" },
              { id: "C", text: "Dam ako obeća da neće reći nikome" },
              { id: "D", text: "Dam ali promijenim nakon" }
            ],
            answer: "B",
            explain: "🛡️ Lozinka je SAMO TVOJA! Ni najbolji drug ne smije znati."
          },
          {
            id: 4,
            type: "single",
            prompt: "🔐 Šta je 2FA (two-factor authentication)?",
            options: [
              { id: "A", text: "Dvije lozinke" },
              { id: "B", text: "DODATNA ZAŠTITA – kod na telefon nakon lozinke" },
              { id: "C", text: "Dva korisnika" },
              { id: "D", text: "Backup lozinka" }
            ],
            answer: "B",
            explain: "✅ 2FA = DODATNI sloj! Čak i ako neko zna lozinku, treba mu tvoj telefon."
          },
          {
            id: 5,
            type: "single",
            prompt: "⚠️ Tvoj drug sazna lozinku. Šta ODMAH radiš?",
            options: [
              { id: "A", text: "Ništa" },
              { id: "B", text: "PROMIJENIM LOZINKU odmah + uključim 2FA" },
              { id: "C", text: "Čekam nedelju" },
              { id: "D", text: "Kažem mu da zaboravi" }
            ],
            answer: "B",
            explain: "🚨 Ako lozinka nije TAJNA = kompromitovana! Promijeni ODMAH."
          }
        ],

        B: [
          {
            id: 1,
            type: "single",
            prompt: "💻 BRUTE FORCE napad:\n\nHaker koristi softver koji pokušava 1 MILIJARDU lozinki/sekundu.\n\nKoliko treba da provali 'marko123'?",
            options: [
              { id: "A", text: "Godine" },
              { id: "B", text: "SEKUNDE – slaba lozinka" },
              { id: "C", text: "Mjeseci" },
              { id: "D", text: "Nikad ne može" }
            ],
            answer: "B",
            explain: "⚡ Brute force probija slabe lozinke TRENUTNO! Koristi 16+ znakova sa simbolima."
          },
          {
            id: 2,
            type: "scenario",
            prompt: "🔑 PASSWORD MANAGER TEST:\n\nImaš 50 naloga. Opcije:\nA) Ista lozinka svuda (lako pamtiš)\nB) Password manager (generiše jake, jedinstvene lozinke)\n\nŠta je NAJBOLJE?",
            options: [
              { id: "A", text: "A – praktičnije" },
              { id: "B", text: "B – PASSWORD MANAGER (LastPass, Bitwarden)" },
              { id: "C", text: "Notebook sa lozinkama" },
              { id: "D", text: "Bilješka na telefonu" }
            ],
            answer: "B",
            explain: "✅ Password manager je JEDINO SIGURNO rješenje! Generiše jake (20+ znakova), enkriptuje sve."
          },
          {
            id: 3,
            type: "multiple",
            prompt: "📱 NAJBOLJI tipovi 2FA (rangirano): (Sve tačne)",
            options: [
              { id: "A", text: "Authenticator app (Google/Microsoft Authenticator)" },
              { id: "B", text: "Hardware key (YubiKey)" },
              { id: "C", text: "SMS kod" },
              { id: "D", text: "Email kod" },
              { id: "E", text: "Pitanje za oporavak ('Ime ljubimca?')" }
            ],
            answers: ["A", "B", "C"],
            scoring: { full: 20, partialScale: true },
            explain: "🥇 NAJBOLJE: Hardware key > Authenticator app > SMS. NIKAD pitanje za oporavak (lako se pogađa)!"
          },
          {
            id: 4,
            type: "analysis",
            prompt: "⚠️ CREDENTIAL STUFFING:\n\n2023: LinkedIn leak – 500M email/lozinka.\n\nHakeri pokušavaju ISTE lozinke na:\n- Gmail\n- Facebook\n- PayPal\n- Banking\n\nZašto je ovo opasno?",
            options: [
              { id: "A", text: "Nije opasno" },
              { id: "B", text: "Ako koristiš ISTU lozinku svuda – SVE je kompromitovano" },
              { id: "C", text: "Samo LinkedIn je problem" },
              { id: "D", text: "Ne može se desiti" }
            ],
            answer: "B",
            explain: "🚨 CREDENTIAL STUFFING! JEDNA LOZINKA = JEDAN LANČANI NAPAD. Koristi JEDINSTVENE lozinke!"
          },
          {
            id: 5,
            type: "critical",
            prompt: "🔓 PASSWORD RESET SECURITY:\n\nZaboraviš lozinku. Opcije:\nA) Pitanje: 'Ime ljubimca?' (lako se pogađa iz Facebook-a)\nB) Email + 2FA kod + IP verifikacija\n\nŠta je NAJSIGURNIJE?",
            options: [
              { id: "A", text: "A – brže" },
              { id: "B", text: "B – MULTI-LAYER verifikacija" },
              { id: "C", text: "Poslati JMBG podršci" },
              { id: "D", text: "Pitati prijatelja da resetuje" }
            ],
            answer: "B",
            explain: "✅ MULTI-FACTOR RESET! Email + 2FA + IP check = hakeri ne mogu zaobići. NIKAD JMBG!"
          }
        ]
      }
    }

    // ✂️ ... OSTALE TEME (5-10) nastavljaju po istom principu
    // Struktura je ista: scenario-based, analysis, critical thinking
  ]
};
