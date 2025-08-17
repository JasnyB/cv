    /* importerer skrift Inter fra google fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

    /* Meny Button */
#button {
    position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 1001;
}

#button .bar{
    width: 30px;
    height: 3px;
    background-color: white;
    margin: 5px 0;
    transition: 0.4s;
}

    /* Side Meny */

#sideMenu {
    position: fixed;
    top: 0;
    left: -200px; /* starter skjult */
    width: 200px;
    height: 100%;
    background-color: rgba(0,0,0,0.85);
    display: flex;
    flex-direction: column;
    padding: 20px;
    transition: left 0.3s ease;
    z-index: 3;
}

#sideMenu.open {
    left: 0; /* vises når åpen */
}

    /* Standard innstillinger */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

    /* basic stil for body og html */
body, html {
    height: 100%;
    margin: 0;
    font-family: 'Inter', sans-serif;
    color: #fff;
    background-color: #111;
    overflow-x: hidden;
}

    /* vanta.js effekt som bakgrunn */
.vanta-canvas {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}
    /* Container */
.container {
    position: relative;
    z-index: 1;
    max-width: 900px;
    margin: 3rem auto;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

    /*  Headerseksjon */
header {
    text-align: center;
    margin-bottom: 2rem;
}

header h1 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

header p {
    font-size: 1.1rem;
    color: #ccc;
}

    /* Kontakt informasjon */
.contact-row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.8rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    white-space: nowrap;
}

.vertical-divider {
    width: 1px;
    height: 1.2em;
    background-color: #00bfff;
    opacity: 0.6;
}


    /* Linker og Ikoner */
a {
    color: #00bfff;
    text-decoration: none;
    transition: color 0.2s;
}

a:hover {
    color: #fff;
}

    /* Seksjoner */
section {
    margin-top: 2rem;
}

section h2 {
    font-size: 1.5rem;
    border-bottom: 1px solid #444;
    padding-bottom: 0.3rem;
    margin-bottom: 1rem;
    color: #00bfff;
}

ul {
    padding-left: 1.2rem;
    line-height: 1.6;
}

    /* Footer */

footer {
    text-align: center;
    font-size: 0.9rem;
    color: #aaa;
    margin-top: 3rem;
    border-top: 1px solid #333;
    padding-top: 1rem;
}

    /* Responsive tilpassning for mobil*/
@media (max-width: 600px) {
    .container {
        padding: 1rem;
        margin: 1rem;
    }

    header h1 {
        font-size: 2rem;
    }

    section h2 {
        font-size: 1.3rem;
    }
}

    /* Ferdigheter Grid Selection */

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
    margin-top: 1rem;
}

.skills-grid ul {
    list-style: none;
    padding-left: 0;
}

.skill-column h3 {
    font-size: 1.2rem;
    color: #00bfff;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #444;
    padding-bottom: 0.3rem;
}

    /* Pop-up overlay når siden lastes inn */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: none; /* Will be shown with JS */
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

    /* innholdet i Popup */
.popup-content {
  background-color: #222;
  padding: 2rem 2.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
}

.popup-content h2 {
  margin-bottom: 1rem;
  color: #00bfff;
}

.popup-content p {
  margin-bottom: 1.5rem;
  color: #ccc;
}

.popup-content button {
  padding: 0.6rem 1.2rem;
  border: none;
  background-color: #00bfff;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease;
}

.popup-content button:hover {
  background-color: #009acd;
}


    /* Referanse Side CSS */

body {
    background: url("assets/car.gif");
    background-size: cover;
    color: white;
    overflow-x: hidden;
    margin: 0;
}

.blur-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    background-color: rgba(0, 0, 0, 0.15);
    z-index: 1;
}

/* References container */
.references-container {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 150px;
    flex-wrap: wrap;
}

/* Reference card */
.reference-card {
    background-color: rgba(0,0,0,0.7);
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    width: 250px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.reference-card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
}

.reference-card h3 {
    margin: 10px 0 5px;
    color: white;
}

.reference-card p {
    color: #ddd;
    margin: 5px 0;
}

a {
    color: #00bfff;
}

a:hover {
    color: #fff;
}

/* Menu button */
#button {
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 3;
    cursor: pointer;
}

.bar {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px 0;
}

/* ===== References Page Styles ===== */
.references-page {
    background: url("assets/car.gif");
    background-size: cover;
    background-position: center;
    backdrop-filter: blur(2px);
    color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.references-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 1;
    margin-top: 100px;
}


.reference-card {
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    padding: 1rem;
    width: 500px;
    max-width: 90%;
    box-shadow: 0 4px 10px rgba(0,0,0,0.4);
}

.reference-card img {
    width: 120px;
    height: 120px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 1rem;
}

.reference-info h2 {
    margin: 0;
    font-size: 1.2rem;
}

.reference-info p {
    margin: 0.2rem 0;
}

.references-header {
    text-align: center;
    color: white;
    margin-bottom: 2rem;
    z-index: 1;
}

.references-header h1 {
    font-size: 2.5rem;
    font-weight: 600;
    background: linear-gradient(90deg, #00bfff, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1px;
    text-shadow: 0 0 10px rgba(0, 191, 255, 0.4);
}

.references-header p {
    font-size: 1rem;
    color: #ccc;
    margin-top: 0.5rem;
    font-style: italic;
}
