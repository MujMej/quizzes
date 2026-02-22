// Global gate code (soft restriction)
const QUIZ_GATE_CODE = "Cyb£RXeRoy!26";

// Topic registry (redoslijed)
const TOPICS = [
  { id: "t1", title: "Internet kao javni prostor", room: "JAVNI PARK", keyA: "PARK", keyB: "TRACE" },
  { id: "t2", title: "Digitalni trag", room: "OTISAK", keyA: "OTISAK", keyB: "FOOTPRINT" },
  { id: "t3", title: "Lični podaci i privatnost", room: "SEF", keyA: "SEF", keyB: "PRIVACY" },
  { id: "t4", title: "Lozinke i zaštita naloga", room: "TREZOR", keyA: "ŠTIT", keyB: "ARMOR" },
  { id: "t5", title: "Ko je s druge strane ekrana?", room: "MASKA", keyA: "MASKA", keyB: "IDENTITY" },
  { id: "t6", title: "Društvene mreže i mozak", room: "MOZAK", keyA: "BALANS", keyB: "CONTROL" },
  { id: "t7", title: "Cyberbullying i pozitivna zajednica", room: "ŠTIT", keyA: "HRABROST", keyB: "RESPECT" },
  { id: "t8", title: "Lažne vijesti i kritičko razmišljanje", room: "DETEKTIV", keyA: "DETEKTIV", keyB: "VERIFY" },
  { id: "t9", title: "AI i Deepfake", room: "ILUZIJA", keyA: "PAZI", keyB: "AUTHENTIC" },
  { id: "t10", title: "Incident response", room: "HEROJ", keyA: "HEROJ", keyB: "RESPONSE" },
];

// Question bank: TOPIC -> group -> quizPart(A/B) -> questions[]
// tip: "single" | "multiple"
const QUIZZES = {
  t1: {
    A: {
      A: { // Grupa A, Kviz A
        desc: "Park detektivi — brzo prepoznaj šta je sigurno, a šta nije.",
        questions: [
          {
            id: 1,
            type: "single",
            points: 20,
            q: "Objaviš sliku ispred svoje kuće i vidi se broj na vratima. Da li je ovo sigurno?",
            options: ["Da, nema problema", "Ne, to nije sigurno", "Samo ako imam 100 pratilaca", "Samo ako je dan"],
            answer: [1],
            explain: "Broj kuće je privatna informacija."
          },
          // ... dodaj 2-5
        ]
      },
      B: { /* Grupa A, Kviz B (poslije drugog dijela teme) */ }
    },
    B: {
      A: { /* Grupa B, Kviz A */ },
      B: { /* Grupa B, Kviz B */ }
    }
  },

  // t2..t10 dodaj istim formatom
};
