// data.js - FINALNA VERZIJA

const QUIZ_DATA = {
  meta: {
    minutesPerQuiz: 10,
    pointsPerQuestion: 20,
    passScore: 60,
    totalTopics: 10
  },

  topics: [
    // =========================
    // TEMA 1
    // =========================
    {
      id: "t1",
      title: "Tema 1 — Internet kao javni prostor",
      room: "JAVNI PARK",
      description: "Razumijevanje razlike javnog i privatnog online prostora.",
      key: "PARK", // ISTI KLJUČ ZA OBE GRUPE

      quizzes: {
        A: [ // GRUPA A (9-11 god)
          {
            id: 1,
            type: "single",
            prompt: "🏞️ Ako objaviš sliku ispred svoje kuće gdje se vidi broj - ko to može vidjeti?",
            options: [
              { id: "A", text: "Samo moji prijatelji" },
              { id: "B", text: "Bilo ko na internetu" },
              { id: "C", text: "Samo djeca iz škole" },
              { id: "D", text: "Niko" }
            ],
            answer: "B",
            explain: "🚨 Internet je javni prostor! Bilo ko može vidjeti javne objave."
          },
          {
            id: 2,
            type: "single",
            prompt: "📱 Marko objavljuje: 'Idemo sutra u Arena Shopping na 15h!'\n\nŠta može biti problem?",
            options: [
              { id: "A", text: "Ništa" },
              { id: "B", text: "Otkriva gdje će biti i kada" },
              { id: "C", text: "Problem samo ako objavi sliku" },
              { id: "D", text: "Nema problema" }
            ],
            answer: "B",
            explain: "✅ LOKACIJA + VRIJEME = opasno! Ne objavljuj gdje ćeš biti."
          },
          {
            id: 3,
            type: "single",
            prompt: "🎮 Neko ti piše: 'Imam 10 godina! Pošalji mi sliku sobe pa ću ti dati Roblox kod!'\n\nŠta radiš?",
            options: [
              { id: "A", text: "Pošaljem sliku" },
              { id: "B", text: "Screenshot + blokiram + kažem roditelju" },
              { id: "C", text: "Kažem da on pošalje prvo" },
              { id: "D", text: "Ignorišem" }
            ],
            answer: "B",
            explain: "🛡️ OVO JE MANIPULACIJA! Blokiraj i reci roditelju."
          },
          {
            id: 4,
            type: "multiple",
            prompt: "🔐 Koja 2 podatka NIKAD ne dijeliš? (Izaberi 2)",
            options: [
              { id: "A", text: "Omiljena boja" },
              { id: "B", text: "Kućna adresa" },
              { id: "C", text: "Broj telefona" },
              { id: "D", text: "Omiljena igrica" }
            ],
            answers: ["B", "C"],
            scoring: { full: 20, partial: 10 },
            explain: "✅ ADRESA i TELEFON su privatni!"
          },
          {
            id: 5,
            type: "single",
            prompt: "🗑️ Ako obrišeš objavu, da li je zauvijek nestala?",
            options: [
              { id: "A", text: "Da" },
              { id: "B", text: "NE – ljudi mogu screenshot-ovati" },
              { id: "C", text: "Samo ako je privatan profil" },
              { id: "D", text: "Zavisi od WiFi-ja" }
            ],
            answer: "B",
            explain: "⚠️ DIGITALNI TRAG OSTAJE! Razmisli prije nego objaviš."
          }
        ],

        B: [ // GRUPA B (12-15 god)
          {
            id: 1,
            type: "scenario",
            prompt: "🔍 ANALIZA:\n\n'Ne mogu dočekati vikend! Idemo na Jahorinu, hotel Termag od petka do nedjelje! 🎿'\n\nKoje informacije ovo otkriva?",
            options: [
              { id: "A", text: "Samo destinaciju" },
              { id: "B", text: "Lokacija + vrijeme + hotel = kuća je prazna" },
              { id: "C", text: "Samo interesovanja" },
              { id: "D", text: "Nema problema" }
            ],
            answer: "B",
            explain: "🚨 OVERSHARING! Ovo je sigurnosni rizik – objavljuj NAKON putovanja."
          },
          {
            id: 2,
            type: "multiple",
            prompt: "⚠️ Poruka: 'HITNO!!! Klikni bit.ly/novac123 za 100KM! 🔥💰'\n\nRED FLAGS: (Sve tačne)",
            options: [
              { id: "A", text: "Riječ 'HITNO'" },
              { id: "B", text: "Skraćeni link" },
              { id: "C", text: "Nerealna ponuda" },
              { id: "D", text: "Sve je OK" }
            ],
            answers: ["A", "B", "C"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ PHISHING! Hitnost + skraćeni link + nerealna ponuda = prevara."
          },
          {
            id: 3,
            type: "analysis",
            prompt: "🔗 OSINT:\n\nUsername 'stefan_sarajevo_2010' na Instagram, TikTok, Gmail, Roblox.\n\nŠta hakeri mogu otkriti?",
            options: [
              { id: "A", text: "Samo ime" },
              { id: "B", text: "Ime + grad + godinu + sve naloge" },
              { id: "C", text: "Ništa" },
              { id: "D", text: "Samo ako je javan profil" }
            ],
            answer: "B",
            explain: "🎯 OSINT povezuje sve! Koristi RAZLIČITE username-ove."
          },
          {
            id: 4,
            type: "single",
            prompt: "📞 VISHING:\n\nPoziv sa 'maminog broja': 'Pošalji 50€, telefon mi pao u vodu!'\n\nAli glas je čudan. Šta radiš?",
            options: [
              { id: "A", text: "Šaljem novac" },
              { id: "B", text: "PREKIDAM i zovem mamu na drugi broj" },
              { id: "C", text: "Šaljem SMS" },
              { id: "D", text: "Ignorišem" }
            ],
            answer: "B",
            explain: "🚨 AI VOICE CLONING! UVIJEK verifikuj pozive."
          },
          {
            id: 5,
            type: "single",
            prompt: "💾 Internet Archive može:\n\nA) Pohraniti obrisane stranice\nB) Čuvati tvoje stare objave\nC) Biti pretražen od poslodavaca\n\nŠta je tačno?",
            options: [
              { id: "A", text: "Samo A" },
              { id: "B", text: "A i B" },
              { id: "C", text: "SVE OD NAVEDENOG" },
              { id: "D", text: "Ništa" }
            ],
            answer: "C",
            explain: "✅ DIGITALNI TRAG JE TRAJAN! Online reputacija je važna."
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
      description: "Kako internet pamti i utiče na budućnost.",
      key: "OTISAK",

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "👣 Šta je 'digitalni otisak'?",
            options: [
              { id: "A", text: "Trag kada hodaš" },
              { id: "B", text: "SVE što ostaviš na internetu" },
              { id: "C", text: "Broj lajkova" },
              { id: "D", text: "WiFi signal" }
            ],
            answer: "B",
            explain: "✅ Svaki klik, komentar, pretraga = digitalni trag!"
          },
          {
            id: 2,
            type: "single",
            prompt: "📸 Drug objavi tvoju sliku bez pitanja. Da li smije?",
            options: [
              { id: "A", text: "Da, jer smo prijatelji" },
              { id: "B", text: "NE – trebao je pitati" },
              { id: "C", text: "Samo ako je slika lijepa" },
              { id: "D", text: "Samo u grupi" }
            ],
            answer: "B",
            explain: "✅ SAGLASNOST je važna! Uvijek pitaj prije objave."
          },
          {
            id: 3,
            type: "single",
            prompt: "🔍 Ako neko ukuca tvoje ime u Google?",
            options: [
              { id: "A", text: "Ništa" },
              { id: "B", text: "Javne objave i komentare" },
              { id: "C", text: "Privatne poruke" },
              { id: "D", text: "Samo sa lozinkom" }
            ],
            answer: "B",
            explain: "🔍 Google indeksira javne profile! Koristi PRIVATE."
          },
          {
            id: 4,
            type: "single",
            prompt: "🖼️ Ko može screenshot-ovati tvoju story?",
            options: [
              { id: "A", text: "Niko" },
              { id: "B", text: "Samo prijatelji" },
              { id: "C", text: "BILO KO ko vidi" },
              { id: "D", text: "Samo admin" }
            ],
            answer: "C",
            explain: "⚠️ Screenshot ne može biti spriječen! Pazi šta šalješ."
          },
          {
            id: 5,
            type: "single",
            prompt: "🎓 Zašto je digitalni trag važan?",
            options: [
              { id: "A", text: "Nije" },
              { id: "B", text: "Poslodavci i škole gledaju profile" },
              { id: "C", text: "Samo ako si poznat" },
              { id: "D", text: "Samo za odrasle" }
            ],
            answer: "B",
            explain: "🎯 70% poslodavaca provjerava profile! Čuvaj reputaciju."
          }
        ],

        B: [
          {
            id: 1,
            type: "analysis",
            prompt: "📊 METADATA:\n\nSlika pokazuje:\n- GPS: 43.8564° N, 18.4131° E\n- Datum: 15.03.2024, 14:32\n- Uređaj: iPhone 13\n\nŠta ovo otkriva?",
            options: [
              { id: "A", text: "Samo tip telefona" },
              { id: "B", text: "TAČNU LOKACIJU + datum + uređaj" },
              { id: "C", text: "Ništa" },
              { id: "D", text: "Instagram briše metadata" }
            ],
            answer: "B",
            explain: "🚨 METADATA je opasna! Koristi 'Remove EXIF' alate."
          },
          {
            id: 2,
            type: "multiple",
            prompt: "🕵️ Ko vidi STARE objave od prije 5 godina? (Sve tačne)",
            options: [
              { id: "A", text: "Poslodavci" },
              { id: "B", text: "Univerziteti" },
              { id: "C", text: "Internet Archive" },
              { id: "D", text: "Samo ja" },
              { id: "E", text: "Google cache" }
            ],
            answers: ["A", "B", "C", "E"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ Sve je TRAJNO! Arhive čuvaju godinama."
          },
          {
            id: 3,
            type: "scenario",
            prompt: "🔎 OSINT:\n\nPrivatan Instagram ali BIO kaže:\n'Gimnazija Obala, fudbal ⚽, gejmr 🎮'\n\nŠta haker zaključuje?",
            options: [
              { id: "A", text: "Ništa" },
              { id: "B", text: "Ime, grad, školu, hobije, uzrast" },
              { id: "C", text: "Samo ime" },
              { id: "D", text: "Treba lozinka" }
            ],
            answer: "B",
            explain: "🎯 OSINT iz malih detalja! NE stavljaj školu u BIO."
          },
          {
            id: 4,
            type: "single",
            prompt: "🔍 GDPR 'Right to be forgotten':\n\nImaš pravo zatražiti brisanje, ALI:",
            options: [
              { id: "A", text: "Google MORA obrisati sve" },
              { id: "B", text: "Google može odbiti ako je 'javni interes'" },
              { id: "C", text: "Samo u EU" },
              { id: "D", text: "B i C" }
            ],
            answer: "D",
            explain: "⚖️ GDPR NIJE apsolutno! Bolje je NE PRAVITI GREŠKE."
          },
          {
            id: 5,
            type: "critical",
            prompt: "💼 CASE:\n\n2019: Student izgubio Harvard zbog rasističkih memeova.\n\nLekcija?",
            options: [
              { id: "A", text: "Harvard strog" },
              { id: "B", text: "Digitalni trag MOŽE UNIŠTITI BUDUĆNOST" },
              { id: "C", text: "Samo poznati" },
              { id: "D", text: "Mogao obrisati" }
            ],
            answer: "B",
            explain: "🎓 REAL! Univerziteti provjeravaju profile. Tvoje objave = budućnost."
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
      description: "PII, GDPR i zaštita privatnosti.",
      key: "SEF",

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "🔑 Lozinka je:",
            options: [
              { id: "A", text: "Privatna – samo za tebe i roditelje" },
              { id: "B", text: "Javna – dijeliš sa drugom" },
              { id: "C", text: "Možeš objaviti" },
              { id: "D", text: "Možeš reći učitelju" }
            ],
            answer: "A",
            explain: "🛡️ Lozinka je SAMO ZA TEBE I RODITELJE!"
          },
          {
            id: 2,
            type: "single",
            prompt: "📱 Neko traži broj telefona online. Šta radiš?",
            options: [
              { id: "A", text: "Dam broj" },
              { id: "B", text: "NE DAJEM – to je lični podatak" },
              { id: "C", text: "Pitam koliko ima godina" },
              { id: "D", text: "Dam ako je ljubazan" }
            ],
            answer: "B",
            explain: "✅ Broj telefona = PII. NIKAD strancima!"
          },
          {
            id: 3,
            type: "multiple",
            prompt: "🔐 3 stvari koje NIKAD ne dijeliš: (3 tačna)",
            options: [
              { id: "A", text: "Adresa" },
              { id: "B", text: "Broj telefona" },
              { id: "C", text: "Omiljena boja" },
              { id: "D", text: "Ime škole sa razredom" },
              { id: "E", text: "Omiljena pesma" }
            ],
            answers: ["A", "B", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ ADRESA, TELEFON, ŠKOLA = osjetljivo!"
          },
          {
            id: 4,
            type: "single",
            prompt: "👤 Instagram/TikTok profil treba biti:",
            options: [
              { id: "A", text: "JAVAN" },
              { id: "B", text: "PRIVATAN – samo odobreni" },
              { id: "C", text: "Javan bez slike" },
              { id: "D", text: "Nema veze" }
            ],
            answer: "B",
            explain: "✅ PRIVATE profile štite sadržaj!"
          },
          {
            id: 5,
            type: "single",
            prompt: "🏠 Ko smije znati adresu?",
            options: [
              { id: "A", text: "Svi sa Instagrama" },
              { id: "B", text: "Samo porodica i bliski prijatelji" },
              { id: "C", text: "Bilo ko" },
              { id: "D", text: "Verified nalozi" }
            ],
            answer: "B",
            explain: "🏡 Adresa je PRIVATNA! Samo ljudi koje poznaješ uživo."
          }
        ],

        B: [
          {
            id: 1,
            type: "multiple",
            prompt: "📋 PII (Personally Identifiable Information): (Sve tačne)",
            options: [
              { id: "A", text: "Ime i prezime" },
              { id: "B", text: "JMBG" },
              { id: "C", text: "Email" },
              { id: "D", text: "Omiljena boja" },
              { id: "E", text: "IP adresa" },
              { id: "F", text: "Biometrija" }
            ],
            answers: ["A", "B", "C", "E", "F"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ PII = bilo koji podatak koji te identificira."
          },
          {
            id: 2,
            type: "scenario",
            prompt: "📧 PHISHING:\n\nEmail: 'Potvrdite PayPal: [link]'\n\nLink: paypa1.com (1 umjesto l)\n\nŠta je ovo?",
            options: [
              { id: "A", text: "Legitiman PayPal" },
              { id: "B", text: "PHISHING – typosquatting" },
              { id: "C", text: "Spam bezopasan" },
              { id: "D", text: "Backup domen" }
            ],
            answer: "B",
            explain: "🎣 TYPOSQUATTING! Provjeravaj URL prije klika."
          },
          {
            id: 3,
            type: "analysis",
            prompt: "🎭 SOCIAL ENGINEERING:\n\nPoziv: 'Škola ovdje, treba broj za ekskurziju.'\n\nALI: škola već ima broj.\n\nŠta je ovo?",
            options: [
              { id: "A", text: "Legitiman poziv" },
              { id: "B", text: "SOCIAL ENGINEERING – manipulacija" },
              { id: "C", text: "Greška" },
              { id: "D", text: "Novi nastavnik" }
            ],
            answer: "B",
            explain: "🚨 Verifikuj identitet: 'Nazvaću školu da provjerim.'"
          },
          {
            id: 4,
            type: "single",
            prompt: "⚖️ GDPR:\n\nŠkola objavi sliku gdje se vidi tvoj broj telefona.\n\nKrši li zakon?",
            options: [
              { id: "A", text: "Ne" },
              { id: "B", text: "DA – krši GDPR" },
              { id: "C", text: "Samo ako je loša slika" },
              { id: "D", text: "Ne jer je javna" }
            ],
            answer: "B",
            explain: "⚖️ GDPR! Lični podaci ne smiju biti objavljeni bez saglasnosti."
          },
          {
            id: 5,
            type: "multiple",
            prompt: "⚙️ PRIVACY SETTINGS: (Sve tačne)",
            options: [
              { id: "A", text: "Privatan profil" },
              { id: "B", text: "2FA" },
              { id: "C", text: "Sakriti email" },
              { id: "D", text: "Isključiti geolocation" },
              { id: "E", text: "Javan za pratioce" }
            ],
            answers: ["A", "B", "C", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ Privatan + 2FA + skriven kontakt + NO GEO = sigurnost."
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
      description: "Kreiranje jakih lozinki i 2FA.",
      key: "ŠTIT",

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "💪 Najjača lozinka?",
            options: [
              { id: "A", text: "marko123" },
              { id: "B", text: "12345678" },
              { id: "C", text: "M@rk0!2024#P@s" },
              { id: "D", text: "mojeime" }
            ],
            answer: "C",
            explain: "✅ 12+ znakova, VELIKA/mala, brojevi, simboli!"
          },
          {
            id: 2,
            type: "single",
            prompt: "🎮 Sigurna lozinka MORA imati:",
            options: [
              { id: "A", text: "Samo ime" },
              { id: "B", text: "Velika + mala + brojevi + simboli" },
              { id: "C", text: "Samo datum" },
              { id: "D", text: "Samo boju" }
            ],
            answer: "B",
            explain: "✅ Kombinacija = jak štit!"
          },
          {
            id: 3,
            type: "single",
            prompt: "👭 Drug traži lozinku 'na 5 minuta'. Šta radiš?",
            options: [
              { id: "A", text: "Dam" },
              { id: "B", text: "NE DAJEM – lozinka je samo moja" },
              { id: "C", text: "Dam ako obeća" },
              { id: "D", text: "Dam pa promijenim" }
            ],
            answer: "B",
            explain: "🛡️ Lozinka je SAMO TVOJA!"
          },
          {
            id: 4,
            type: "single",
            prompt: "🔐 Šta je 2FA?",
            options: [
              { id: "A", text: "Dvije lozinke" },
              { id: "B", text: "DODATNA ZAŠTITA – kod na telefon" },
              { id: "C", text: "Dva korisnika" },
              { id: "D", text: "Backup lozinka" }
            ],
            answer: "B",
            explain: "✅ 2FA = DODATNI sloj zaštite!"
          },
          {
            id: 5,
            type: "single",
            prompt: "⚠️ Drug sazna lozinku. Šta ODMAH radiš?",
            options: [
              { id: "A", text: "Ništa" },
              { id: "B", text: "PROMIJENIM + uključim 2FA" },
              { id: "C", text: "Čekam nedelju" },
              { id: "D", text: "Kažem mu da zaboravi" }
            ],
            answer: "B",
            explain: "🚨 Kompromitovana lozinka = HITNO promijeni!"
          }
        ],

        B: [
          {
            id: 1,
            type: "single",
            prompt: "💻 BRUTE FORCE:\n\nSoftver pokušava 1 MILIJARDU lozinki/sekundu.\n\nKoliko treba za 'marko123'?",
            options: [
              { id: "A", text: "Godine" },
              { id: "B", text: "SEKUNDE" },
              { id: "C", text: "Mjeseci" },
              { id: "D", text: "Nikad" }
            ],
            answer: "B",
            explain: "⚡ Brute force probija slabe lozinke TRENUTNO! 16+ znakova."
          },
          {
            id: 2,
            type: "scenario",
            prompt: "🔑 PASSWORD MANAGER:\n\n50 naloga:\nA) Ista lozinka\nB) Password manager\n\nNajbolje?",
            options: [
              { id: "A", text: "A – praktičnije" },
              { id: "B", text: "B – PASSWORD MANAGER" },
              { id: "C", text: "Notebook" },
              { id: "D", text: "Bilješka na telefonu" }
            ],
            answer: "B",
            explain: "✅ Password manager = JEDINO SIGURNO! Generiše jake (20+)."
          },
          {
            id: 3,
            type: "multiple",
            prompt: "📱 NAJBOLJI 2FA tipovi: (Sve tačne)",
            options: [
              { id: "A", text: "Authenticator app" },
              { id: "B", text: "Hardware key" },
              { id: "C", text: "SMS kod" },
              { id: "D", text: "Email kod" },
              { id: "E", text: "Pitanje za oporavak" }
            ],
            answers: ["A", "B", "C"],
            scoring: { full: 20, partialScale: true },
            explain: "🥇 Hardware key > Authenticator > SMS. NIKAD pitanje!"
          },
          {
            id: 4,
            type: "analysis",
            prompt: "⚠️ CREDENTIAL STUFFING:\n\nLinkedIn leak – 500M email/lozinka.\n\nHakeri pokušavaju ISTE na Gmail, Facebook, PayPal.\n\nZašto opasno?",
            options: [
              { id: "A", text: "Nije" },
              { id: "B", text: "ISTA lozinka svuda = SVE kompromitovano" },
              { id: "C", text: "Samo LinkedIn" },
              { id: "D", text: "Ne može se desiti" }
            ],
            answer: "B",
            explain: "🚨 JEDNA lozinka = lančani napad. JEDINSTVENE lozinke!"
          },
          {
            id: 5,
            type: "critical",
            prompt: "🔓 PASSWORD RESET:\n\nA) Pitanje: 'Ime ljubimca?'\nB) Email + 2FA + IP verifikacija\n\nNajsigurnije?",
            options: [
              { id: "A", text: "A – brže" },
              { id: "B", text: "B – MULTI-LAYER" },
              { id: "C", text: "Poslati JMBG" },
              { id: "D", text: "Pitati prijatelja" }
            ],
            answer: "B",
            explain: "✅ Email + 2FA + IP = hakeri ne mogu zaobići."
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
      description: "Lažni profili i manipulacija.",
      key: "MASKA",

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "👤 Znaš li SIGURNO ko je iza profila?",
            options: [
              { id: "A", text: "Da, piše ime" },
              { id: "B", text: "NE – bilo ko može lagati" },
              { id: "C", text: "Da, ima sliku" },
              { id: "D", text: "Da, ima pratioce" }
            ],
            answer: "B",
            explain: "✅ Online ljudi mogu glumiti koga god žele!"
          },
          {
            id: 2,
            type: "single",
            prompt: "🚩 Profil bez slike piše: 'Imam 10 godina, hajde prijatelji!'\n\nŠta misliš?",
            options: [
              { id: "A", text: "OK" },
              { id: "B", text: "SUMNJIVO – možda odrasla osoba" },
              { id: "C", text: "Super!" },
              { id: "D", text: "Samo ako ima 100 pratilaca" }
            ],
            answer: "B",
            explain: "🚨 Predatori lažu da su djeca! Reci roditelju."
          },
          {
            id: 3,
            type: "single",
            prompt: "📸 'Pošalji sliku sobe.' – normalan zahtjev?",
            options: [
              { id: "A", text: "Da" },
              { id: "B", text: "NE – CRVENA ZASTAVICA" },
              { id: "C", text: "Samo ako i on pošalje" },
              { id: "D", text: "Samo jednu" }
            ],
            answer: "B",
            explain: "🛑 Ne dijeli privatni prostor!"
          },
          {
            id: 4,
            type: "single",
            prompt: "🤐 'Ne govori roditeljima, naša tajna.' – šta ovo znači?",
            options: [
              { id: "A", text: "Super, imam tajnu!" },
              { id: "B", text: "OPASNO – manipulacija! Reci roditelju" },
              { id: "C", text: "OK" },
              { id: "D", text: "Zavisi" }
            ],
            answer: "B",
            explain: "🚨 Tajne poruke = znak manipulacije!"
          },
          {
            id: 5,
            type: "single",
            prompt: "🎮 'Hajde da se nađemo u parku!' – pravilo?",
            options: [
              { id: "A", text: "Odem sam" },
              { id: "B", text: "NIKAD uživo bez roditelja" },
              { id: "C", text: "Sa drugom" },
              { id: "D", text: "Ako je dan" }
            ],
            answer: "B",
            explain: "✅ NIKAD se ne sastaj sa online poznanicima bez odrasle osobe!"
          }
        ],

        B: [
          {
            id: 1,
            type: "single",
            prompt: "🎣 Šta je 'catfishing'?",
            options: [
              { id: "A", text: "Igrica" },
              { id: "B", text: "Lažan online identitet za prevaru" },
              { id: "C", text: "Hakovanje" },
              { id: "D", text: "Vrsta phishinga" }
            ],
            answer: "B",
            explain: "✅ Catfishing = lažno predstavljanje!"
          },
          {
            id: 2,
            type: "multiple",
            prompt: "🚨 Znakovi GROOMING-a: (Sve tačne)",
            options: [
              { id: "A", text: "Prevelika pažnja" },
              { id: "B", text: "Traži tajnost" },
              { id: "C", text: "Traži slike" },
              { id: "D", text: "Prelazi na ličnije teme" },
              { id: "E", text: "Šalje edukativne sadržaje" }
            ],
            answers: ["A", "B", "C", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "🚨 Grooming = postupna manipulacija!"
          },
          {
            id: 3,
            type: "single",
            prompt: "🎭 Profil je nedosljedan (čudna gramatika, ne zna stvari). Šta radiš?",
            options: [
              { id: "A", text: "Ignorišem" },
              { id: "B", text: "Verifikujem ili prekidam kontakt" },
              { id: "C", text: "Nastavim razgovor" },
              { id: "D", text: "Dodajem" }
            ],
            answer: "B",
            explain: "✅ Pri sumnji: verifikuj ili blokiraj!"
          },
          {
            id: 4,
            type: "multiple",
            prompt: "❓ PREVIŠE LIČNIH pitanja – RED FLAGS: (Sve tačne)",
            options: [
              { id: "A", text: "'Gdje živiš tačno?'" },
              { id: "B", text: "'Kad su roditelji na poslu?'" },
              { id: "C", text: "'Omiljena boja?'" },
              { id: "D", text: "'Imaš WebCam?'" },
              { id: "E", text: "'Kakvo vrijeme?'" }
            ],
            answers: ["A", "B", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "🚨 Lokacija, raspored, kamera = osjetljivo!"
          },
          {
            id: 5,
            type: "multiple",
            prompt: "🚩 Profil: nov, malo pratilaca, nema objava, traži Snap odmah.\n\nRED FLAGS: (Sve tačne)",
            options: [
              { id: "A", text: "Nov nalog" },
              { id: "B", text: "Malo pratilaca" },
              { id: "C", text: "Nema sadržaja" },
              { id: "D", text: "Hitno traži drugi kanal" },
              { id: "E", text: "Sve normalno" }
            ],
            answers: ["A", "B", "C", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "🚨 Tipični lažni profili!"
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
      description: "Algoritmi, dopamin i balans.",
      key: "BALANS",

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "⏰ Koliko MAKSIMALNO vremena na ekranu dnevno (zabava)?",
            options: [
              { id: "A", text: "5 sati" },
              { id: "B", text: "1-2 sata" },
              { id: "C", text: "Cijeli dan" },
              { id: "D", text: "Neograničeno" }
            ],
            answer: "B",
            explain: "✅ Previše ekrana utiče na san i raspoloženje!"
          },
          {
            id: 2,
            type: "single",
            prompt: "📱 Nakon 2h scroll-ovanja se osjećaš:",
            options: [
              { id: "A", text: "Super!" },
              { id: "B", text: "Umorno, prazno" },
              { id: "C", text: "Srećno" },
              { id: "D", text: "Isto" }
            ],
            answer: "B",
            explain: "✅ Dugo skrolanje umara mozak!"
          },
          {
            id: 3,
            type: "single",
            prompt: "🍬 Lajkovi su kao BOMBONE. Zašto?",
            options: [
              { id: "A", text: "Slatki su" },
              { id: "B", text: "Oslobađaju dopamin – mozak želi još" },
              { id: "C", text: "Mogu se jesti" },
              { id: "D", text: "Nisu" }
            ],
            answer: "B",
            explain: "✅ Dopamin = signal nagrade!"
          },
          {
            id: 4,
            type: "single",
            prompt: "😴 Koliko PRIJE SPAVANJA isključiti telefon?",
            options: [
              { id: "A", text: "0 minuta" },
              { id: "B", text: "Minimum 1 sat" },
              { id: "C", text: "5 minuta" },
              { id: "D", text: "Ne moram" }
            ],
            answer: "B",
            explain: "✅ Ekran otežava uspavljivanje!"
          },
          {
            id: 5,
            type: "single",
            prompt: "🏃 OFFLINE aktivnosti?",
            options: [
              { id: "A", text: "Ništa" },
              { id: "B", text: "Sport, čitanje, igra napolju" },
              { id: "C", text: "Samo spavanje" },
              { id: "D", text: "TV" }
            ],
            answer: "B",
            explain: "✅ Offline aktivnosti pomažu mozgu!"
          }
        ],

        B: [
          {
            id: 1,
            type: "single",
            prompt: "🤖 Kako radi algoritam?",
            options: [
              { id: "A", text: "Nasumični video" },
              { id: "B", text: "Analizira šta zadržava pažnju" },
              { id: "C", text: "Samo prijatelji" },
              { id: "D", text: "Nema algoritma" }
            ],
            answer: "B",
            explain: "✅ Algoritam optimizuje za duže vrijeme u app!"
          },
          {
            id: 2,
            type: "single",
            prompt: "🔁 'Echo chamber'?",
            options: [
              { id: "A", text: "Zvučna soba" },
              { id: "B", text: "Vidiš samo sadržaj koji potvrđuje mišljenje" },
              { id: "C", text: "Filter" },
              { id: "D", text: "Muzika" }
            ],
            answer: "B",
            explain: "✅ Može suziti perspektivu!"
          },
          {
            id: 3,
            type: "single",
            prompt: "🧪 'Dopamine loop'?",
            options: [
              { id: "A", text: "Vježba" },
              { id: "B", text: "Ciklus: scroll → dopamin → želja → scroll" },
              { id: "C", text: "Igra" },
              { id: "D", text: "Zdrav način" }
            ],
            answer: "B",
            explain: "✅ Petlja nagrade = impulsivno korištenje!"
          },
          {
            id: 4,
            type: "multiple",
            prompt: "😔 Efekat poređenja: (Sve tačne)",
            options: [
              { id: "A", text: "Osjećaj da nisi dovoljan" },
              { id: "B", text: "Lažna realnost (filteri)" },
              { id: "C", text: "Anksioznost" },
              { id: "D", text: "Motivacija" },
              { id: "E", text: "Svi uvijek srećni" }
            ],
            answers: ["A", "B", "C"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ 'Highlight reel' ≠ stvarnost!"
          },
          {
            id: 5,
            type: "single",
            prompt: "🧘 'Digitalni detoks'?",
            options: [
              { id: "A", text: "Obrisati naloge" },
              { id: "B", text: "Planirana pauza od ekrana" },
              { id: "C", text: "Novi telefon" },
              { id: "D", text: "Više aplikacija" }
            ],
            answer: "B",
            explain: "✅ Planirani odmor pomaže fokusu!"
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
      description: "Prepoznavanje nasilja i reakcija.",
      key: "HRABROST",

      quizzes: {
        A: [
          {
            id: 1,
            type: "multiple",
            prompt: "💬 Ružna poruka? (Sve tačne)",
            options: [
              { id: "A", text: "Naziv ružnim imenom" },
              { id: "B", text: "Prijetnja" },
              { id: "C", text: "Ismijavanje" },
              { id: "D", text: "Kompliment" },
              { id: "E", text: "Dijeljenje tajni" }
            ],
            answers: ["A", "B", "C", "E"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ Sve što povređuje = cyberbullying!"
          },
          {
            id: 2,
            type: "single",
            prompt: "📸 Ružna poruka u grupu. Prvi korak?",
            options: [
              { id: "A", text: "Ignorišem" },
              { id: "B", text: "SCREENSHOT (dokaz)" },
              { id: "C", text: "Obrišem" },
              { id: "D", text: "Odgovorim isto" }
            ],
            answer: "B",
            explain: "✅ Screenshot = dokaz za roditelje!"
          },
          {
            id: 3,
            type: "single",
            prompt: "🚫 'BLOKIRATI' znači?",
            options: [
              { id: "A", text: "Ne može te kontaktirati" },
              { id: "B", text: "Postali prijatelji" },
              { id: "C", text: "Može te zvati" },
              { id: "D", text: "Ništa" }
            ],
            answer: "A",
            explain: "✅ Blokiranje zaustavlja kontakt!"
          },
          {
            id: 4,
            type: "single",
            prompt: "⚠️ Neko šalje ružne poruke tvom drugu. Šta radiš?",
            options: [
              { id: "A", text: "Ništa" },
              { id: "B", text: "PRIJAVIM + kažem odrasloj osobi" },
              { id: "C", text: "Pridružim se" },
              { id: "D", text: "Smijem se" }
            ],
            answer: "B",
            explain: "✅ Ne budi posmatrač – prijavi!"
          },
          {
            id: 5,
            type: "single",
            prompt: "👨‍👩‍👧 Kome reći?",
            options: [
              { id: "A", text: "Nikome" },
              { id: "B", text: "Roditelj, nastavnik" },
              { id: "C", text: "Samo drugu" },
              { id: "D", text: "Pisati online" }
            ],
            answer: "B",
            explain: "✅ Odrasli mogu zaustaviti nasilje!"
          }
        ],

        B: [
          {
            id: 1,
            type: "multiple",
            prompt: "📱 Tipovi cyberbullying-a: (Sve tačne)",
            options: [
              { id: "A", text: "Harassment" },
              { id: "B", text: "Doxing" },
              { id: "C", text: "Exclusion" },
              { id: "D", text: "Impersonation" },
              { id: "E", text: "Pozitivan komentar" }
            ],
            answers: ["A", "B", "C", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ Ozbiljni oblici nasilja!"
          },
          {
            id: 2,
            type: "single",
            prompt: "💬 Grupa ismijava nekoga. Ti si tamo. Odgovornost?",
            options: [
              { id: "A", text: "Nisam učestvovao" },
              { id: "B", text: "Posmatrati = biti saučesnik – reaguj" },
              { id: "C", text: "To je njihov problem" },
              { id: "D", text: "Pridruži se" }
            ],
            answer: "B",
            explain: "✅ Posmatrač ima moć zaustaviti!"
          },
          {
            id: 3,
            type: "multiple",
            prompt: "🛡️ Kako reagovati? (Sve tačne)",
            options: [
              { id: "A", text: "Ne odgovarati" },
              { id: "B", text: "Screenshot" },
              { id: "C", text: "Blokirati" },
              { id: "D", text: "Prijaviti" },
              { id: "E", text: "Odgovoriti gore" }
            ],
            answers: ["A", "B", "C", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ Ne odgovaraj, dokumentuj, blokiraj, prijavi!"
          },
          {
            id: 4,
            type: "single",
            prompt: "📸 Zašto dokumentovanje?",
            options: [
              { id: "A", text: "Osveta" },
              { id: "B", text: "Dokaz za roditelje/školu/policiju" },
              { id: "C", text: "Pohvala" },
              { id: "D", text: "Nije važno" }
            ],
            answer: "B",
            explain: "✅ Dokaz pomaže da se problem riješi!"
          },
          {
            id: 5,
            type: "single",
            prompt: "😔 Prijatelj doživljava cyberbullying. Podrška?",
            options: [
              { id: "A", text: "'Ignoriši'" },
              { id: "B", text: "'Vjerujem ti, nisi kriv, riješićemo zajedno'" },
              { id: "C", text: "'Nije toliko loše'" },
              { id: "D", text: "'Ugasi internet'" }
            ],
            answer: "B",
            explain: "✅ Empatija i podrška su ključ!"
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
      description: "Kako prepoznati clickbait i lažne vijesti.",
      key: "DETEKTIV",

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "📰 'VANZEMALJCI STIGLI – FOTO DOKAZ!!!' – vjerodostojno?",
            options: [
              { id: "A", text: "Da, piše FOTO" },
              { id: "B", text: "NE – clickbait" },
              { id: "C", text: "Da, ima emojije" },
              { id: "D", text: "Da, na internetu je" }
            ],
            answer: "B",
            explain: "✅ Velika slova + drama = clickbait!"
          },
          {
            id: 2,
            type: "single",
            prompt: "🕵️ Šta prvo provjeriti?",
            options: [
              { id: "A", text: "Lajkove" },
              { id: "B", text: "KO JE IZVOR" },
              { id: "C", text: "Boju" },
              { id: "D", text: "Komentare" }
            ],
            answer: "B",
            explain: "✅ Izvor je najvažniji!"
          },
          {
            id: 3,
            type: "single",
            prompt: "📢 Senzacionalna vijest samo na jednom sajtu. Šta uraditi?",
            options: [
              { id: "A", text: "Podijeliti" },
              { id: "B", text: "Provjeriti da li drugi pišu" },
              { id: "C", text: "Vjerovati" },
              { id: "D", text: "Dodati emojije" }
            ],
            answer: "B",
            explain: "✅ Ako samo jedan piše – sumnjivo!"
          },
          {
            id: 4,
            type: "single",
            prompt: "🖼️ Slika izgleda čudno. Šta može biti?",
            options: [
              { id: "A", text: "Ništa" },
              { id: "B", text: "Montirana (fake)" },
              { id: "C", text: "Loš telefon" },
              { id: "D", text: "Filter" }
            ],
            answer: "B",
            explain: "✅ Mnoge slike su lažne!"
          },
          {
            id: 5,
            type: "single",
            prompt: "👨‍👩‍👧 Nisi siguran da li je vijest tačna. Šta radiš?",
            options: [
              { id: "A", text: "Podijelim" },
              { id: "B", text: "PITAM odraslu osobu" },
              { id: "C", text: "Vjerujem ako ima emoji" },
              { id: "D", text: "Ignorišem" }
            ],
            answer: "B",
            explain: "✅ Bolje provjeriti nego širiti laž!"
          }
        ],

        B: [
          {
            id: 1,
            type: "multiple",
            prompt: "🎣 Clickbait karakteristike: (Sve tačne)",
            options: [
              { id: "A", text: "'NEĆEŠ VJEROVATI!'" },
              { id: "B", text: "'Stručnjaci savjetuju' (neutralno)" },
              { id: "C", text: "'ŠOKANTNO! HITNO!'" },
              { id: "D", text: "Emocionalni jezik" },
              { id: "E", text: "Činjenice i izvori" }
            ],
            answers: ["A", "C", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ Emocije + pretjerivanje = clickbait!"
          },
          {
            id: 2,
            type: "multiple",
            prompt: "✅ Fact-checking alati: (Sve tačne)",
            options: [
              { id: "A", text: "Reverse Image Search" },
              { id: "B", text: "Snopes / FactCheck" },
              { id: "C", text: "Vjeruj prvoj vijesti" },
              { id: "D", text: "Provjera domena" },
              { id: "E", text: "Reddit" }
            ],
            answers: ["A", "B", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ Reverse search + fact-check + domen!"
          },
          {
            id: 3,
            type: "single",
            prompt: "🎥 Video: usne ne prate zvuk. Šta može biti?",
            options: [
              { id: "A", text: "Loš internet" },
              { id: "B", text: "DEEPFAKE" },
              { id: "C", text: "Greška" },
              { id: "D", text: "Normalno" }
            ],
            answer: "B",
            explain: "✅ Deepfake ima čudne usne/treptanje!"
          },
          {
            id: 4,
            type: "single",
            prompt: "😡 Zašto su emocije opasne?",
            options: [
              { id: "A", text: "Nisu" },
              { id: "B", text: "Emocija isključuje kritičko razmišljanje" },
              { id: "C", text: "Emocije su dobre" },
              { id: "D", text: "Ne utiču" }
            ],
            answer: "B",
            explain: "✅ Manipulacije ciljaju strah/bijes!"
          },
          {
            id: 5,
            type: "single",
            prompt: "🌐 'nbcnewz.com.co' (primijeti 'z' i '.co'). Šta je ovo?",
            options: [
              { id: "A", text: "Legitiman NBC" },
              { id: "B", text: "LAŽAN sajt (typosquatting)" },
              { id: "C", text: "Novi domen" },
              { id: "D", text: "Blog" }
            ],
            answer: "B",
            explain: "✅ Typosquatting = slično ime prevara korisnika!"
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
      description: "Prepoznavanje AI lažnjaka.",
      key: "PAZI",

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "🖼️ Slika mačke sa 6 nogu. Prava fotografija?",
            options: [
              { id: "A", text: "Da" },
              { id: "B", text: "NE – AI ili photoshop" },
              { id: "C", text: "Da, takve postoje" },
              { id: "D", text: "Zavisi od boje" }
            ],
            answer: "B",
            explain: "✅ AI pravi greške (udovi, prsti)!"
          },
          {
            id: 2,
            type: "single",
            prompt: "🎤 Može li glas biti lažan?",
            options: [
              { id: "A", text: "Ne" },
              { id: "B", text: "DA – AI može kopirati glas" },
              { id: "C", text: "Samo u filmovima" },
              { id: "D", text: "Samo ako snima" }
            ],
            answer: "B",
            explain: "✅ AI klonira glas! Verifikuj čudne zahtjeve."
          },
          {
            id: 3,
            type: "single",
            prompt: "🤔 Zašto praviti lažni video?",
            options: [
              { id: "A", text: "Zabava" },
              { id: "B", text: "Da prevari ili manipuliše" },
              { id: "C", text: "Dosada" },
              { id: "D", text: "Pomoć" }
            ],
            answer: "B",
            explain: "✅ Lažni sadržaj = prevare i manipulacija!"
          },
          {
            id: 4,
            type: "single",
            prompt: "📺 Video gdje poznata osoba kaže čudno. Šta uraditi?",
            options: [
              { id: "A", text: "Vjerovati" },
              { id: "B", text: "PROVJERITI kod pouzdanih izvora" },
              { id: "C", text: "Podijeliti" },
              { id: "D", text: "Ignorisati" }
            ],
            answer: "B",
            explain: "✅ Uvijek provjeri – može biti deepfake!"
          },
          {
            id: 5,
            type: "single",
            prompt: "🔍 Nešto nevjerovatno na internetu. Prvo:",
            options: [
              { id: "A", text: "Podijeliti" },
              { id: "B", text: "PROVJERITI izvor" },
              { id: "C", text: "Lajkovati" },
              { id: "D", text: "Komentarisati" }
            ],
            answer: "B",
            explain: "✅ Prvo provjeri – tek onda vjeruj!"
          }
        ],

        B: [
          {
            id: 1,
            type: "single",
            prompt: "🤖 Kako radi deepfake?",
            options: [
              { id: "A", text: "Photoshop" },
              { id: "B", text: "AI uči lice/glas i zamjenjuje" },
              { id: "C", text: "CGI" },
              { id: "D", text: "Montaža" }
            ],
            answer: "B",
            explain: "✅ Deep learning generiše realistične lažnjake!"
          },
          {
            id: 2,
            type: "multiple",
            prompt: "⚠️ Rizici deepfake: (Sve tačne)",
            options: [
              { id: "A", text: "Politička manipulacija" },
              { id: "B", text: "Finansijske prevare" },
              { id: "C", text: "Uništavanje reputacije" },
              { id: "D", text: "Zabava" },
              { id: "E", text: "Lažni dokazi" }
            ],
            answers: ["A", "B", "C", "E"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ Opasan alat za prevare!"
          },
          {
            id: 3,
            type: "multiple",
            prompt: "🔍 AI generisan tekst: (Sve tačne)",
            options: [
              { id: "A", text: "Savršena gramatika" },
              { id: "B", text: "Repetitivne fraze" },
              { id: "C", text: "Nedostatak ličnog stila" },
              { id: "D", text: "Generičke formulacije" },
              { id: "E", text: "Pravopisne greške" }
            ],
            answers: ["A", "B", "C", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ AI tekst je 'previše gladak'!"
          },
          {
            id: 4,
            type: "single",
            prompt: "📞 Poziv od 'ujaka' traži pomoć. Glas tačan. Šta je ovo?",
            options: [
              { id: "A", text: "Sigurno ujak" },
              { id: "B", text: "Moguća AI VOICE CLONING prevara" },
              { id: "C", text: "Loša veza" },
              { id: "D", text: "Normalno" }
            ],
            answer: "B",
            explain: "✅ Verifikuj drugim kanalom prije radnje!"
          },
          {
            id: 5,
            type: "single",
            prompt: "⚖️ Kada je OK koristiti deepfake?",
            options: [
              { id: "A", text: "Prevare" },
              { id: "B", text: "Edukacija uz jasno označavanje" },
              { id: "C", text: "Propaganda bez otkrivanja" },
              { id: "D", text: "Lažni dokazi" }
            ],
            answer: "B",
            explain: "✅ Transparentnost je ključ – edukativno da, obmana ne!"
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
      description: "Šta uraditi kad nešto pođe po zlu.",
      key: "HEROJ",

      quizzes: {
        A: [
          {
            id: 1,
            type: "single",
            prompt: "😱 Kliknuo si čudan link. Telefon se čudno ponaša. Šta ODMAH radiš?",
            options: [
              { id: "A", text: "Ništa" },
              { id: "B", text: "KAŽEM odrasloj osobi odmah" },
              { id: "C", text: "Čekam sutra" },
              { id: "D", text: "Ignorišem" }
            ],
            answer: "B",
            explain: "✅ Što brže kažeš, prije se rješava!"
          },
          {
            id: 2,
            type: "single",
            prompt: "👨‍👩‍👧 Zašto odmah reći roditelju?",
            options: [
              { id: "A", text: "Da kazne" },
              { id: "B", text: "Da POMOGNU i zaštite" },
              { id: "C", text: "Nije važno" },
              { id: "D", text: "Samo ako ozbiljno" }
            ],
            answer: "B",
            explain: "✅ Roditelji su tu da pomognu, ne da kazne!"
          },
          {
            id: 3,
            type: "single",
            prompt: "🗑️ 'Obriši poruke da niko ne sazna.' Šta radiš?",
            options: [
              { id: "A", text: "Obrišem" },
              { id: "B", text: "NE BRIŠEM – to su DOKAZI" },
              { id: "C", text: "Obrišem pola" },
              { id: "D", text: "Pitam druga" }
            ],
            answer: "B",
            explain: "✅ Ne briši dokaze! Čuvaj poruke."
          },
          {
            id: 4,
            type: "single",
            prompt: "🔓 Neko možda zna lozinku. Šta uraditi?",
            options: [
              { id: "A", text: "Ništa" },
              { id: "B", text: "PROMIJENIM odmah" },
              { id: "C", text: "Čekam nedelju" },
              { id: "D", text: "Pitam tu osobu" }
            ],
            answer: "B",
            explain: "✅ Promijeni odmah + uključi 2FA!"
          },
          {
            id: 5,
            type: "single",
            prompt: "📚 Ako se desi loše online, šta možeš naučiti?",
            options: [
              { id: "A", text: "Da nikad ne koristim internet" },
              { id: "B", text: "LEKCIJU – kako biti pažljiviji" },
              { id: "C", text: "Ništa" },
              { id: "D", text: "Da sakrijem greške" }
            ],
            answer: "B",
            explain: "✅ Greške su za učenje!"
          }
        ],

        B: [
          {
            id: 1,
            type: "single",
            prompt: "🔄 'Incident Lifecycle'?",
            options: [
              { id: "A", text: "Nasumične radnje" },
              { id: "B", text: "Preparation → Detection → Containment → Recovery → Lessons" },
              { id: "C", text: "Samo brisanje" },
              { id: "D", text: "Ignorisanje" }
            ],
            answer: "B",
            explain: "✅ Incident response je proces sa koracima!"
          },
          {
            id: 2,
            type: "multiple",
            prompt: "🛑 CONTAINMENT – nalog hakovan. Šta uraditi? (Sve tačne)",
            options: [
              { id: "A", text: "Promijeni lozinku" },
              { id: "B", text: "Odjavi sesije" },
              { id: "C", text: "Prijavi platformi" },
              { id: "D", text: "Nastavi normalno" },
              { id: "E", text: "Aktiviraj 2FA" }
            ],
            answers: ["A", "B", "C", "E"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ Containment = zaustavi štetu brzo!"
          },
          {
            id: 3,
            type: "multiple",
            prompt: "📸 Koje dokaze sačuvati? (Sve tačne)",
            options: [
              { id: "A", text: "Screenshot" },
              { id: "B", text: "Email headeri" },
              { id: "C", text: "Datum i vrijeme" },
              { id: "D", text: "Username napadača" },
              { id: "E", text: "Ništa" }
            ],
            answers: ["A", "B", "C", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ Dokumentuj SVE: ko, šta, kada!"
          },
          {
            id: 4,
            type: "multiple",
            prompt: "📢 REPORTING – kome prijaviti? (Sve tačne)",
            options: [
              { id: "A", text: "Roditelj" },
              { id: "B", text: "Škola" },
              { id: "C", text: "Platforma" },
              { id: "D", text: "Policija (ozbiljan kriminal)" },
              { id: "E", text: "Nikome" }
            ],
            answers: ["A", "B", "C", "D"],
            scoring: { full: 20, partialScale: true },
            explain: "✅ Prijavi relevantnim instancama!"
          },
          {
            id: 5,
            type: "single",
            prompt: "🔄 RECOVERY znači?",
            options: [
              { id: "A", text: "Zaboraviti" },
              { id: "B", text: "Vratiti nalog + ojačati sigurnost + naučiti" },
              { id: "C", text: "Obrisati nalog" },
              { id: "D", text: "Ignorisati" }
            ],
            answer: "B",
            explain: "✅ Oporavak = vratiti kontrolu i postati sigurniji!"
          }
        ]
      }
    }
  ]
};
