# AI Consultant Portfolio Website

Eine moderne, responsive Portfolio-Website für einen KI-Berater/Consultant, der Unternehmen dabei unterstützt, Künstliche Intelligenz zu implementieren und konkrete Use Cases zu finden.

## 🚀 Features

### Design & UX
- **Modernes Design**: Dunkles Theme mit bunten Gradient-Akzenten
- **Responsive**: Optimiert für Desktop, Tablet und Mobile
- **Animationen**: Smooth Scrolling, Hover-Effekte und Fade-In-Animationen
- **Glassmorphism**: Moderne Transparenz-Effekte mit Backdrop-Filter
- **Farbschema**: Lila, Blau und Rosa Gradienten für einen modernen Look

### Technische Features
- **Vanilla JavaScript**: Keine Frameworks erforderlich
- **CSS Grid & Flexbox**: Moderne Layout-Techniken
- **Font Awesome Icons**: Professionelle Icon-Bibliothek
- **Google Fonts**: Inter Schriftart für optimale Lesbarkeit
- **Intersection Observer**: Performance-optimierte Scroll-Animationen

## 📁 Dateistruktur

```
/
├── index.html          # Haupt-HTML-Datei
├── styles.css          # CSS-Styling
├── script.js           # JavaScript-Funktionalität
└── README.md           # Dokumentation
```

## 🎨 Sektionen

### 1. Navigation
- Fixed Navigation Bar mit Glassmorphism-Effekt
- Smooth Scrolling zu allen Sektionen
- Mobile-responsive Hamburger-Menü
- Hover-Effekte mit Gradient-Unterstrichen

### 2. Hero Section
- Großer Call-to-Action Bereich
- Animierte Gradient-Hintergründe mit Orbs
- Schwebende Karten mit KI-Technologien
- Zwei prominente Buttons (Beratung buchen, Services entdecken)

### 3. Services
- 6 Hauptservices im Grid-Layout:
  - Use Case Identifikation
  - KI-Implementierung
  - Team Training
  - KI-Strategie
  - AI Governance
  - Innovation Labs
- Jeder Service mit Icon, Beschreibung und Feature-Liste
- Hover-Animationen für bessere UX

### 4. Über mich
- Persönliche Vorstellung
- Statistiken (Projekte, Erfahrung, Kundenzufriedenheit)
- Skill-Tags für Technologien
- Profilkarte mit Social Links

### 5. Portfolio
- 6 Beispielprojekte aus verschiedenen Branchen:
  - E-Commerce Personalisierung
  - Predictive Maintenance
  - Intelligent Chatbot
  - Computer Vision QC
  - Sales Forecasting
  - Document Processing
- Jedes Projekt mit Beschreibung und Technologie-Tags

### 6. Kontakt
- Kontaktinformationen (E-Mail, Telefon, Standort, Verfügbarkeit)
- Funktionales Kontaktformular mit Validierung
- Service-Auswahl Dropdown
- Animierte Submit-Funktionalität

### 7. Footer
- Firmenbranding und Beschreibung
- Social Media Links
- Navigation Links
- Rechtliche Links (Impressum, Datenschutz, AGB)

## 🛠 Interaktivität

### JavaScript Features
- **Mobile Navigation**: Hamburger-Menü für mobile Geräte
- **Smooth Scrolling**: Sanfte Navigation zwischen Sektionen
- **Scroll-Effekte**: Navbar-Transparenz ändert sich beim Scrollen
- **Formular-Handling**: Simulierte Formular-Übermittlung mit Feedback
- **Animations**: Fade-in-Effekte beim Scrollen
- **Hover-Effekte**: Service- und Portfolio-Karten mit Interaktionen
- **Stats-Counter**: Animierte Zahlen im Über-mich-Bereich

### CSS Animationen
- **Floating Cards**: Schwebende Animation für Hero-Karten
- **Gradient Orbs**: Rotierende Hintergrund-Elemente
- **Hover-Transforms**: Scale- und Rotate-Effekte
- **Smooth Transitions**: Übergangseffekte für alle Interaktionen

## 🎯 Zielgruppe

Diese Website richtet sich an:
- **B2B Kunden**: Unternehmen, die KI implementieren möchten
- **Entscheidungsträger**: CTOs, IT-Leiter, Geschäftsführer
- **Branchen**: E-Commerce, Produktion, Fintech, Healthcare
- **Unternehmensgröße**: Mittelstand bis Enterprise

## 🚀 Installation & Nutzung

1. **Einfach öffnen**: Alle Dateien in einem Ordner ablegen
2. **index.html öffnen**: Im Browser öffnen
3. **Live Server**: Für Entwicklung mit VS Code Live Server verwenden

### Anpassungen

#### Inhalte ändern
- **Texte**: Direkt in der `index.html` bearbeiten
- **Farben**: In `styles.css` die CSS-Variablen anpassen
- **Bilder**: Placeholder-Icons durch echte Bilder ersetzen

#### Kontaktdaten
```html
<!-- In der Kontakt-Sektion -->
<p>max.mustermann@ai-consultant.de</p>
<p>+49 123 456 7890</p>
<p>München, Deutschland</p>
```

#### Services erweitern
Neue Service-Karten im Services-Grid hinzufügen:
```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Service Name</h3>
    <p>Beschreibung...</p>
    <ul class="service-features">
        <li>Feature 1</li>
        <li>Feature 2</li>
    </ul>
</div>
```

## 🎨 Farbschema

```css
/* Primäre Gradienten */
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
--accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);

/* Dunkles Theme */
--bg-primary: #0f0f23;
--bg-secondary: #1a1a3e;
--text-primary: #ffffff;
--text-secondary: #b0b0b0;
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 481px
- **Mobile**: < 480px

## 🔧 Technologie-Stack

- **HTML5**: Semantische Struktur
- **CSS3**: Grid, Flexbox, Animations, Backdrop-Filter
- **JavaScript ES6+**: Modern JavaScript Features
- **Font Awesome**: Icon-Bibliothek
- **Google Fonts**: Inter Typography

## 📊 Performance

- **Optimiert**: Minimale Abhängigkeiten
- **Lazy Loading**: Intersection Observer für Animationen
- **Efficient CSS**: Moderne Selektoren und Properties
- **Fast Loading**: Inline kritisches CSS möglich

## 🤝 Anpassung für Ihren Use Case

1. **Branding**: Logo und Farben anpassen
2. **Inhalte**: Texte und Services personalisieren
3. **Portfolio**: Eigene Projekte einfügen
4. **Kontakt**: Echte Kontaktdaten eintragen
5. **Domain**: Auf eigenem Server hosten

## 📄 Lizenz

Diese Website ist als Template frei verwendbar. Bei kommerzieller Nutzung wird eine Erwähnung geschätzt.

---

**Viel Erfolg mit Ihrer AI Consultant Website! 🚀** 