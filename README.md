# 🎓 System Monitorowania Postępów w Nauce

To aplikacja internetowa stworzona w Node.js z wykorzystaniem Express i szablonów EJS (Server-Side Rendering), która pozwala na śledzenie postępów w nauce w ramach przedmiotów i lekcji.


## 📌 Funkcje

- ✅ Dodawanie i usuwanie przedmiotów
- ✅ Dodawanie lekcji do przedmiotów
- ✅ Oznaczanie lekcji jako ukończonych
- ✅ Wyświetlanie listy przedmiotów i ich postępów
- 🚧 W przyszłości: wykresy postępów i filtrowanie

---

## 🛠️ Technologie

- **Node.js** – środowisko uruchomieniowe JavaScript
- **Express.js** – framework backendowy
- **EJS** – szablony HTML renderowane po stronie serwera (SSR)
- **HTML5 + CSS3** – wygląd i układ aplikacji
- **Bootstrap** – responsywny i atrakcyjny design
- *(opcjonalnie)* **MongoDB + Mongoose** – baza danych dla trwałego przechowywania (jeśli używasz)

---

## 📁 Struktura projektu
/project-root
├── controllers/ # Logika sterowania aplikacją (MVC)
├── models/ # Modele danych (np. przedmiot, lekcja)
├── routes/ # Trasy (ścieżki URL i kontrolery)
├── views/ # Szablony EJS
│ ├── subjects.ejs # Główna strona z przedmiotami i lekcjami
├── public/ # Pliki statyczne: CSS, JS, obrazy
├── app.js # Plik główny aplikacji
└── README.md # Ten plik z opisem projektu

```bash
git init
git add .
git commit -m "🎓 Initial commit: Learning Tracker project"
git branch -M main
git remote add origin https://github.com/твой-логин/название-репозитория.git
git push -u origin main