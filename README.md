# 🛡️ Cyber Heroji — Kvizovi

> **Interaktivni quiz sistem za edukaciju o sajber bezbjednosti djece i mladih uzrasta 9–15 godina**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-mujmej.github.io%2Fquizzes-10b981?style=for-the-badge)](https://mujmej.github.io/quizzes/)
[![Materijali](https://img.shields.io/badge/📚_Materijali-cyber--edu--children-f59e0b?style=for-the-badge)](https://mujmej.github.io/cyber-edu-children/materials.html)
[![Jezik](https://img.shields.io/badge/Jezik-Bosanski-blue?style=for-the-badge)](#)
[![Uzrast](https://img.shields.io/badge/Uzrast-9–15_godina-purple?style=for-the-badge)](#)

---

## 📖 O projektu

**Cyber Heroji** je edukativni program o digitalnoj bezbjednosti namijenjen učenicima osnovnih i nižih razreda srednje škole. Ovaj repozitorij sadrži **quiz engine** koji prati prezentacijske materijale iz repozitorija [`cyber-edu-children`](https://github.com/MujMej/cyber-edu-children).

Sistem je dizajniran za upotrebu **u učionici** — edukator prikazuje prezentaciju, a učenici skeniraju QR kod i rješavaju kviz na vlastitom uređaju.

---

## ✨ Funkcionalnosti

| Funkcija | Opis |
|---|---|
| 🎯 **10 tema** | Svaka tema pokriva jedan aspekt digitalne sigurnosti |
| 👥 **2 uzrasne grupe** | Grupa A (9–11 god.) i Grupa B (11–15 god.) |
| 📱 **QR verifikacija** | Edukator prikazuje QR kod → učenik skenira → unosi kod |
| ⏱️ **Timer** | 10 minuta po kvizu |
| 🏆 **Rang sistem** | Cyber Pro / Cyber Smart / Položio/la |
| 🔑 **Ključevi** | Za svaku položenu temu učenik dobija jedinstveni ključ |
| 📜 **Sertifikat** | 10 ključeva = sertifikat o završetku programa |
| 🌙 **Dark mode** | Podrška za tamnu temu |
| 💾 **Lokalno čuvanje** | Rezultati se pamte u browseru (bez servera) |

---

## 🗂️ Teme i ključevi

| # | Tema | Ključ | Grupa A | Grupa B |
|---|---|---|---|---|
| 1 | 🌳 Internet kao javni prostor | `PARK` | Osnove javnog/privatnog prostora | OSINT, oversharing, vishing |
| 2 | 👣 Digitalni trag | `OTISAK` | Šta je digitalni trag | Metadata, GDPR, case study |
| 3 | 🔐 Lični podaci i privatnost | `SEF` | PII, privatnost naloga | GDPR, phishing, social eng. |
| 4 | 🛡️ Lozinke i zaštita naloga | `ŠTIT` | Jake lozinke, 2FA | Brute force, password manager |
| 5 | 🎭 Ko je s druge strane ekrana? | `MASKA` | Lažni profili, upozorenja | Catfishing, grooming znakovi |
| 6 | 🧠 Društvene mreže i mozak | `BALANS` | Screen time, dopamin | Algoritmi, echo chamber |
| 7 | 💬 Cyberbullying i zajednica | `HRABROST` | Prepoznavanje, reakcija | Tipovi, bystander efekt |
| 8 | 🔍 Lažne vijesti | `DETEKTIV` | Clickbait, provjera izvora | Fact-checking alati, deepfake |
| 9 | 🤖 AI i deepfake | `PAZI` | Prepoznavanje AI sadržaja | Deepfake rizici, voice cloning |
| 10 | 🚨 Incident response | `HEROJ` | Šta uraditi kad nešto pođe po zlu | Lifecycle, containment, reporting |

---

## 🔄 Tok aktivnosti u učionici

```
Edukator                          Učenik
────────                          ──────
1. Otvara materials.html
2. Klika "Kviz A" ili "Kviz B" ──► prikazuje QR kod
3. Učenik skenira QR             ◄── 3. Skenira telefon
4. Unosi 4-znakasti kod ──────── ◄── 4. Čita kod sa verify.html
5. Kviz se otključava
6. Učenik rješava 5 pitanja (10 min)
7. Rezultat + ključ se prikazuju
```

---

## 🏗️ Struktura fajlova

```
quizzes/
├── index.html       # Početna – odabir teme, unos imena
├── quiz.html        # QR gate + aktivni kviz
├── result.html      # Prikaz rezultata i ključa
├── verify.html      # Stranica za učenika (kod za unos)
├── quiz.js          # Quiz engine (logika, bodovanje, timer)
├── quiz.css         # Stilovi
└── data.js          # Sva pitanja, odgovori i objašnjenja
```

---

## 📊 Sistem bodovanja

```
5 pitanja × 20 bodova = 100 bodova maksimalno

🏆 Cyber Pro      ─── 90–100 bodova
⭐ Cyber Smart    ─── 75–89 bodova
✅ Položio/la     ─── 60–74 bodova  ← minimum za ključ
🔄 Pokušaj ponovo ─── 0–59 bodova
```

**Multiple-choice pitanja** podržavaju djelimično bodovanje:
- Svi tačni odabrani = **20 pts**
- Dio tačnih, bez pogrešnih = **proporcionalno** (partialScale)

---

## 💻 Tehnologije

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)

- Čisti vanilla JS — **bez frameworka, bez servera**
- Rezultati u `localStorage` — **ne šalju se nikakvi podaci**
- QR generacija via [api.qrserver.com](https://api.qrserver.com)
- Font: [Montserrat](https://fonts.google.com/specimen/Montserrat) (Google Fonts)

---

## 🚀 Pokretanje lokalno

```bash
git clone https://github.com/MujMej/quizzes.git
cd quizzes

# Pokrenuti lokalni server (Python)
python3 -m http.server 8000

# Otvoriti u browseru
open http://localhost:8000
```

> ⚠️ Fajlovi moraju biti servovani putem HTTP servera (ne `file://`) zbog učitavanja `data.js`.

---

## 🔗 Povezani repozitoriji

| Repozitorij | Opis | Link |
|---|---|---|
| 📚 `cyber-edu-children` | Prezentacijski materijali (PDF + materials.html) | [GitHub](https://github.com/MujMej/cyber-edu-children) · [Live](https://mujmej.github.io/cyber-edu-children/materials.html) |

---

## 📁 Podaci i privatnost

Ovaj sistem **ne koristi server, bazu podataka ni kolačiće.**
Svi rezultati se čuvaju isključivo u `localStorage` korisnikovog browsera i nestaju brisanjem istorije pregledača.

---

## 👩‍💻 Autor

Razvijeno u svrhu edukacije o digitalnoj bezbjednosti za djecu i mlade.

**· with love, MujMej ·**

---

*© 2026 Cyber Heroji | Digitalna bezbjednost za djecu*
