const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Interactive Navbar Project</title>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
  }

  body {
    height: 200vh;
    background: linear-gradient(120deg, #1e3c72, #2a5298);
    color: white;
  }

  /* NAVBAR */
  nav {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding: 15px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.4s;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
  }

  nav.scrolled {
    background: rgba(0,0,0,0.8);
    padding: 10px 40px;
  }

  .logo {
    font-size: 22px;
    font-weight: bold;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 25px;
  }

  
  ul li a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    transition: 0.3s;
    padding: 5px 10px;
    border-radius: 6px;
  }

  /* HOVER EFFECT */
  ul li a:hover {
    background: white;
    color: #2a5298;
    transform: scale(1.1);
  }

  /* SECTION */
  section {
    margin-top: 120px;
    padding: 40px;
    text-align: center;
  }

  .card {
    background: rgba(255,255,255,0.1);
    padding: 30px;
    border-radius: 15px;
    margin-top: 30px;
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    background: #fff;
    color: #2a5298;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background: #2a5298;
    color: white;
  }
</style>
</head>

<body>

<nav id="navbar">
  <div class="logo">MyApp</div>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

<section>
  <h1>Interactive Navigation Menu</h1>
  <div class="card">
    <p>Click below to fetch data from backend 👇</p>
    <button onclick="getMessage()">Get Message</button>
    <p id="output"></p>
  </div>
</section>

<script>
  const navbar = document.getElementById("navbar");

  // SCROLL EFFECT
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // FETCH FROM BACKEND
  async function getMessage() {
    const res = await fetch('/api/message');
    const data = await res.json();
    document.getElementById("output").innerText = data.message;
  }
</script>

</body>
</html>
  `);
});

// BACKEND API
app.get("/api/message", (req, res) => {
  res.json({ message: "🔥 Hello from backend! Your navbar is fully interactive!" });
});

app.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}\`);
});