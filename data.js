// data.js
// Add topics one-by-one here (Option A). Engine reads from this structure.

const QUIZ_DATA = {
  meta: {
    minutesPerQuiz: 10,
    pointsPerQuestion: 20,
    passScore: 60
  },

  topics: [
    {
      id: "t1",
      title: "Tema 1 — Internet kao javni prostor",
      room: "JAVNI PARK",
      description: "Šta je javno/privatno online, šta ne objavljujemo, kako se ponašamo kao u javnom parku.",
      keys: { A: "PARK", B: "TRACE" },

      // Each topic has two parts (A and B) because you said: presentation part 1 -> Quiz A, part 2 -> Quiz B
      quizzes: {
        A: {
          // GROUP A (9–11)
          groupA: [
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
              explain: "Broj kuće/adresa su privatni podaci. Ne objavljuj mjesto gdje živiš."
            },
            {
              id: 2,
              type: "single",
              prompt: "📱 Ko sve može vidjeti tvoj JAVNI profil?",
              options: [
                { id: "A", text: "Samo moji prijatelji" },
                { id: "B", text: "Samo djeca iz razreda" },
                { id: "C", text: "Bilo ko na internetu" },
                { id: "D", text: "Samo moj učitelj" }
              ],
              answer: "C",
              explain: "Javni profil znači: svi mogu vidjeti sadržaj."
            },
            {
              id: 3,
              type: "single",
              prompt: "🎮 Neko piše: 'Pošalji sliku svoje sobe pa ću ti dati besplatan skin.' Šta radiš?",
              options: [
                { id: "A", text: "Pošaljem sliku" },
                { id: "B", text: "Ignorišem poruku" },
                { id: "C", text: "Screenshot + blokiram + kažem odrasloj osobi" },
                { id: "D", text: "Pitam zašto mu treba" }
              ],
              answer: "C",
              explain: "Ne šalješ privatne slike. Dokumentuj, blokiraj i reci odrasloj osobi."
            },
            {
              id: 4,
              type: "multiple",
              prompt: "🔒 Koja DVA podatka su NAJPRIVATNIJA i ne dijele se? (izaberi 2)",
              options: [
                { id: "A", text: "Omiljena boja" },
                { id: "B", text: "Lozinka" },
                { id: "C", text: "Broj telefona" },
                { id: "D", text: "Ime psa" }
              ],
              answers: ["B", "C"],
              scoring: { full: 20, partial: 10 },
              explain: "Lozinka i broj telefona su osjetljivi. Ne dijele se sa strancima."
            },
            {
              id: 5,
              type: "single",
              prompt: "🗑️ Ako obrišeš poruku ili sliku, da li je zauvijek nestala?",
              options: [
                { id: "A", text: "Da, zauvijek" },
                { id: "B", text: "Ne, neko je možda sačuvao" },
                { id: "C", text: "Samo ako je neko screenshotovao" },
                { id: "D", text: "Zavisi od WiFi-ja" }
              ],
              answer: "B",
              explain: "Internet pamti: screenshotovi, kopije, arhive…"
            }
          ],

          // GROUP B (11–15)
          groupB: [
            {
              id: 1,
              type: "multiple",
              prompt: "📢 Objaviš: 'Jedva čekam koncert večeras u Areni!' Koje informacije otkrivaš? (izaberi sve tačne)",
              options: [
                { id: "A", text: "Lokaciju" },
                { id: "B", text: "Vrijeme (kada nisi kući)" },
                { id: "C", text: "Interesovanja" },
                { id: "D", text: "Lozinku" }
              ],
              answers: ["A","B","C"],
              scoring: { full: 20, partialScale: true }, // engine will scale by correctness
              explain: "Otkriće lokacije + vremena + interesovanja može biti rizik."
            },
            {
              id: 2,
              type: "multiple",
              prompt: "⚠️ Poruka: 'HITNO! Glasaj za mene! bit.ly/vote123' Koje su crvene zastavice?",
              options: [
                { id: "A", text: "Riječ 'HITNO'" },
                { id: "B", text: "Skraćeni link (bit.ly)" },
                { id: "C", text: "Koristi emoji" },
                { id: "D", text: "Nema profilnu sliku" }
              ],
              answers: ["A","B"],
              scoring: { full: 20, partial: 10 },
              explain: "Hitnost + skraćen link su klasični signali prevare."
            },
            {
              id: 3,
              type: "multiple",
              prompt: "🔍 Isti username koristiš svuda. Koji su rizici? (izaberi sve tačne)",
              options: [
                { id: "A", text: "Lakše te prate preko platformi" },
                { id: "B", text: "Credential stuffing (krađa naloga ako procuri lozinka)" },
                { id: "C", text: "OSINT povezivanje podataka" },
                { id: "D", text: "Nema rizika" }
              ],
              answers: ["A","B","C"],
              scoring: { full: 20, partialScale: true },
              explain: "Isti identifikatori olakšavaju praćenje i napade."
            },
            {
              id: 4,
              type: "single",
              prompt: "📞 Dobiješ poziv s maminog broja: 'Hitno pošalji 50€ na ovaj broj!' Prvi korak?",
              options: [
                { id: "A", text: "Odmah pošaljem" },
                { id: "B", text: "Prekinem i nazovem pravi mamin broj" },
                { id: "C", text: "Pošaljem poruku na WhatsApp" },
                { id: "D", text: "Ignorišem" }
              ],
              answer: "B",
              explain: "Verifikacija na poznati broj je najbrža zaštita od prevare."
            },
            {
              id: 5,
              type: "single",
              prompt: "💭 Može li internet ikada potpuno 'zaboraviti' nešto što si objavio?",
              options: [
                { id: "A", text: "Da, ako obrišem nalog" },
                { id: "B", text: "Ne, digitalni trag ostaje" },
                { id: "C", text: "Samo ako je profil bio privatan" },
                { id: "D", text: "Da, nakon 5 godina automatski" }
              ],
              answer: "B",
              explain: "Sadržaj može ostati kroz kopije/screenshotove/arhive."
            }
          ]
        },

        B: {
          // For now, same as A (placeholder). Later you will replace with PART 2 questions per group.
          groupA: [],
          groupB: []
        }
      }
    },

    // Placeholders for Tema 2..10 (add later one-by-one)
    { id: "t2", title: "Tema 2 — Digitalni trag", room: "OTISAK", description: "Uskoro.", keys:{A:"OTISAK",B:"FOOTPRINT"}, quizzes:{A:{groupA:[],groupB:[]},B:{groupA:[],groupB:[]}} },
    { id: "t3", title: "Tema 3 — Lični podaci i privatnost", room: "SEF", description: "Uskoro.", keys:{A:"SEF",B:"PRIVACY"}, quizzes:{A:{groupA:[],groupB:[]},B:{groupA:[],groupB:[]}} },
    { id: "t4", title: "Tema 4 — Lozinke i zaštita naloga", room: "TREZOR", description: "Uskoro.", keys:{A:"ŠTIT",B:"ARMOR"}, quizzes:{A:{groupA:[],groupB:[]},B:{groupA:[],groupB:[]}} },
    { id: "t5", title: "Tema 5 — Ko je s druge strane ekrana?", room: "MASKA", description: "Uskoro.", keys:{A:"MASKA",B:"IDENTITY"}, quizzes:{A:{groupA:[],groupB:[]},B:{groupA:[],groupB:[]}} },
    { id: "t6", title: "Tema 6 — Društvene mreže i mozak", room: "MOZAK", description: "Uskoro.", keys:{A:"BALANS",B:"CONTROL"}, quizzes:{A:{groupA:[],groupB:[]},B:{groupA:[],groupB:[]}} },
    { id: "t7", title: "Tema 7 — Cyberbullying", room: "ŠTIT", description: "Uskoro.", keys:{A:"HRABROST",B:"RESPECT"}, quizzes:{A:{groupA:[],groupB:[]},B:{groupA:[],groupB:[]}} },
    { id: "t8", title: "Tema 8 — Lažne vijesti", room: "DETEKTIV", description: "Uskoro.", keys:{A:"DETEKTIV",B:"VERIFY"}, quizzes:{A:{groupA:[],groupB:[]},B:{groupA:[],groupB:[]}} },
    { id: "t9", title: "Tema 9 — AI i deepfake", room: "ILUZIJA", description: "Uskoro.", keys:{A:"PAZI",B:"AUTHENTIC"}, quizzes:{A:{groupA:[],groupB:[]},B:{groupA:[],groupB:[]}} },
    { id: "t10", title: "Tema 10 — Incident response", room: "HEROJ", description: "Uskoro.", keys:{A:"HEROJ",B:"RESPONSE"}, quizzes:{A:{groupA:[],groupB:[]},B:{groupA:[],groupB:[]}} }
  ]
};
