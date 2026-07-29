"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import emailjs from "@emailjs/browser";
import "aos/dist/aos.css";
import { FaInstagram, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
  "/hero.jpg",
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
];

const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
const [activeSection, setActiveSection] = useState("home");
const [darkMode, setDarkMode] = useState(true);
const [loading, setLoading] = useState(false);
useEffect(() => {
  AOS.init({
  duration: 1000,
  once: true,
});
  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedIndex === null) return;

    if (e.key === "ArrowRight") {
      setSelectedIndex((prev) =>
        prev === images.length - 1 ? 0 : (prev as number) + 1
      );
    }

    if (e.key === "ArrowLeft") {
      setSelectedIndex((prev) =>
        prev === 0 ? images.length - 1 : (prev as number) - 1
      );
    }

    if (e.key === "Escape") {
      setSelectedIndex(null);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedIndex]);
useEffect(() => {
  const sections = ["home", "gallery", "about"];

  const handleScroll = () => {
    let current = "home";

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
          current = id;
        }
      }
    });

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <main id="home"
      style={{backgroundColor: darkMode ? "#000" : "#f5f5f5",
        backgroundImage: darkMode
          ? "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/hero.jpg')"
          : "linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: darkMode ? "#fff" : "#111",
        minHeight: "100vh",
        paddingBottom: "150px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingTop: "clamp(180px, 22vw, 240px)",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    ><nav
  style={{
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    rowGap: "15px",
    padding: "25px 60px",
    boxSizing: "border-box",
    color: "#fff",
    background: darkMode
    ? "rgba(255,255,255,0.08)"
    : "rgba(255,255,255,0.9)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.15)",
    
  }}
>
  <a
    href="#home"
    style={{
      color: "inherit",
      textDecoration: "none",
    }}
  >
    <h2>SaurxFrames</h2>
  </a>

  <div style={{ display: "flex", gap: "30px" }}>
    <span
      style={{ cursor: "pointer", transition: "0.3s" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
    >
      <a
        href="#home"
        style={{
          color: activeSection === "home" ? "#fbbf24" : "inherit",
          textDecoration: "none",
          fontWeight: activeSection === "home" ? "bold" : "normal",
        }}
      >
        Home
      </a>
    </span>
    
      <span
      style={{ cursor: "pointer", transition: "0.3s" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
    >
      <a
        href="#gallery"
        style={{
          color: activeSection === "gallery" ? "#fbbf24" : "inherit",
          textDecoration: "none",
          fontWeight: activeSection === "gallery" ? "bold" : "normal",
        }}
      >
        Gallery
      </a>
    </span>

    <span
      style={{ cursor: "pointer", transition: "0.3s" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#fbbf24")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
    >
      <a
        href="#about"
        style={{
          color: activeSection === "about" ? "#f0c073" : "inherit",
          textDecoration: "none",
          fontWeight: activeSection === "about" ? "bold" : "normal",
        }}
      >
        About
      </a>
    </span>
  </div>

  <button
    onClick={() => setDarkMode(!darkMode)}
    style={{
      background: "transparent",
      border: "1px solid rgba(255,255,255,0.3)",
      borderRadius: "50%",
      width: "45px",
      height: "45px",
      cursor: "pointer",
      fontSize: "20px",
      color: "#fff",
    }}
  >
    {darkMode ? "🌙" : "☀️"}
  </button>
  
</nav>

<div className="hero-content">
  <h1
    style={{
      fontSize: "clamp(40px, 8vw, 72px)",
      fontWeight: "bold",
      margin: 0,
      textShadow: "0 4px 20px rgba(0,0,0,0.6)",
      letterSpacing: "2px",
    }}
  >
    SaurxFrames Studio
  </h1>

  <p
    style={{
      fontSize: "22px",
      color: "#bbb",
      marginTop: "10px",
    }}
  >
    Capturing Stories Through Light
  </p>

  <button
    onClick={() => alert("Gallery Coming Soon 📸")}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.08)";
      e.currentTarget.style.background = "#ffb300";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.background = "#ff9800";
    }}
    style={{
      marginTop: "20px",
      padding: "12px 25px",
      fontSize: "18px",
      borderRadius: "10px",
      border: "none",
      cursor: "pointer",
      background: "#ff9800",
      color: darkMode ? "#fff" : "#111",
      fontWeight: "bold",
      boxShadow: "0 8px 20px rgba(255,152,0,0.4)",
      transition: "all 0.3s ease",
    }}
  >
    Explore Gallery
  </button>

  <div
    style={{
      marginTop: "50px",
      color: "#ddd",
      fontSize: "18px",
      textAlign: "center",
    }}
  >
    ⌄
    <br />
    Scroll Down
  </div>
</div>

<div
  style={{
    marginTop: "300px",
    width: "100%",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "40px",
      color: "#fff",
      marginBottom: "30px",
    }}
  >
    My Gallery
  </h2>

  <p
    style={{
      color: "#ccc",
      fontSize: "18px",
      marginBottom: "40px",
    }}
  >
    A collection of my favorite cinematic moments 📸
  </p>

<div
  id="gallery"
  className="gallery-container"
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  }}
>
  <img
    className="gallery-image"
    src="/photo1.jpg"
    alt="Photo 1"
    onClick={() => setSelectedIndex(0)}
    style={{
      width: "100%",
      maxWidth: "300px",
      height: "200px",
      objectFit: "cover",
      borderRadius: "18px",
      border: "2px solid rgba(248, 245, 134, 0.15)",
      boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.6)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.5)";
    }}
  />

  <img
    className="gallery-image"
    src="/photo2.jpg"
    alt="Photo 2"
    onClick={() => setSelectedIndex(1)}
    style={{
      width: "100%",
      maxWidth: "300px",
      height: "200px",
      objectFit: "cover",
      borderRadius: "18px",
      border: "2px solid rgba(248, 245, 134, 0.15)",
      boxShadow: "0 15px 35px rgba(140, 184, 240, 0.5)",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.6)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.5)";
    }}
  />

  <img
    className="gallery-image"
    src="/photo3.jpg"
    alt="Photo 3"
    onClick={() => setSelectedIndex(2)}
    style={{
      width: "100%",
      maxWidth: "300px",
      height: "200px",
      objectFit: "cover",
      borderRadius: "18px",
      border: "2px solid rgba(94, 207, 255, 0.15)",
      boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.6)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.5)";
    }}
  />
</div>
{/* Gallery */}
</div>

<section
  id="about"
  data-aos="fade-up"
  style={{
    marginTop: "120px",
    display: "flex",
    justifyContent: "center",
    padding: "0 20px",
  }}
>
  <div
    style={{
      maxWidth: "900px",
      width: "100%",
      background: darkMode
        ? "rgba(255,255,255,0.08)"
        : "rgba(255,255,255,0.9)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      border: "1px solid rgba(255,255,255,0.15)",
      borderRadius: "24px",
      padding: "50px 30px",
      textAlign: "center",
      boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
      transition: "all 0.4s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-8px)";
      e.currentTarget.style.boxShadow =
        "0 30px 60px rgba(0,0,0,0.45)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow =
        "0 20px 50px rgba(0,0,0,0.35)";
    }}
  >
    <img
      src="/hero.jpg"
      alt="SaurxFrames"
      style={{
        width: "170px",
        height: "170px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "5px solid rgba(255,255,255,0.2)",
        boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
        marginBottom: "25px",
      }}
    />

    <h2
      style={{
        fontSize: "clamp(34px, 5vw, 48px)",
        color: "#fff",
        marginBottom: "10px",
      }}
    >
      About Me
    </h2>

    <h3
      style={{
        color: "#fbbf24",
        fontWeight: "normal",
        marginBottom: "25px",
      }}
    >
      📸 Mobile Photographer • Visual Storyteller
    </h3>

    <p
      style={{
        color: darkMode ? "#ddd" : "#333",
        fontSize: "18px",
        lineHeight: "1.9",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      Hi, I'm <strong>Saurabh</strong>, the creator of
      <strong> SaurxFrames Studio</strong>. I love capturing nature,
      cinematic moments, portraits, and everyday stories through my lens.
      Every photo is an attempt to preserve emotion, light, and atmosphere
      in a single frame.
    </p>
  </div>
</section>
 <section
  data-aos="zoom-in"
  style={{
    marginTop: "120px",
    textAlign: "center",
    padding: "0 20px",
  }}
>
  <h2
    style={{
      fontSize: "clamp(32px, 5vw, 40px)",
      color: "#fff",
      marginBottom: "20px",
    }}
  >
    Contact Me
  </h2>

  <p
    style={{
      color: "#ccc",
      fontSize: "18px",
    }}
  >
    Let's create something amazing together 📸
  </p>

  <a
    className="instagram-btn"
    href="https://instagram.com/saurxframes"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      marginTop: "20px",
      padding: "12px 24px",
      background: "#E1306C",
      color: "#fff",
      textDecoration: "none",
      borderRadius: "10px",
      fontWeight: "bold",
      transition: "0.3s ease",
    }}
  >
    📷 Follow on Instagram
  </a>

  <div style={{ marginTop: "15px" }}>
    <a
      href="mailto:kalyanmeena105@gmail.com"
      style={{
        display: "inline-block",
        padding: "12px 24px",
        background: "#2563eb",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "10px",
        fontWeight: "bold",
      }}
    >
      📧 Email Me
    </a>

    <form
      onSubmit={(e) => {
       e.preventDefault();

  const form = e.currentTarget; // <-- ye line add karo

       setLoading(true);

      emailjs
      .sendForm(
      "service_esy94bi",
      "template_j0f8xii",
      form,
      "65SmpRUeueAALoHj4"
     )
     .then(() => {
      alert("✅ Thank you! Your message has been sent successfully.");
      form.reset();          // <-- yahan e.currentTarget.reset() ki jagah
      setLoading(false);
     })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message. Please try again.");
      setLoading(false);
     });
    }}
      style={{
        maxWidth: "500px",
        margin: "40px auto 0",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        style={{
          padding: "15px",
          borderRadius: "10px",
          border: "1px solid rgba(255,255,255,0.2)",
          background: "rgba(255,255,255,0.08)",
          color: "#fff",
          fontSize: "16px",
          outline: "none",
        }}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        style={{
          padding: "15px",
          borderRadius: "10px",
          border: "1px solid rgba(255,255,255,0.2)",
          background: "rgba(255,255,255,0.08)",
          color: "#fff",
          fontSize: "16px",
          outline: "none",
        }}
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        required
        style={{
          padding: "15px",
          borderRadius: "10px",
          border: "1px solid rgba(255,255,255,0.2)",
          background: "rgba(255,255,255,0.08)",
          color: "#fff",
          fontSize: "16px",
          resize: "none",
          outline: "none",
        }}
      />

      <button
       type="submit"
       disabled={loading}
       style={{
       padding: "15px",
       border: "none",
       borderRadius: "10px",
       background: loading ? "#666" : "#2563eb",
       color: "#fff",
       fontSize: "17px",
       fontWeight: "bold",
       cursor: loading ? "not-allowed" : "pointer",
       transition: "0.3s",
      }}
    >
     {loading ? "Sending..." : "Send Message"}
     </button>
    </form>
  </div>
</section>
<footer
  id="about"
  style={{
    marginTop: "80px",
    padding: "30px",
    textAlign: "center",
    color: "#ccc",
    fontSize: "16px",
    width: "100%",
    background: "transparent",
  }}
>
  © 2026 SaurxFrames Studio
Capturing Stories Through Light 📸
</footer>

{selectedIndex !== null && (
  <div
    onClick={() => setSelectedIndex(null)}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.95)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <button
        onClick={() => setSelectedIndex(null)}
        style={{
          position: "absolute",
          top: "-18px",
          right: "-18px",
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          background: "#ffffff",
          border: "none",
          color: "#000",
          fontSize: "28px",
          fontWeight: "bold",
          cursor: "pointer",
          zIndex: 10000,
          boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
        }}
      >
        ×
      </button>

      <button
        onClick={() =>
          setSelectedIndex(
            selectedIndex === 0
              ? images.length - 1
              : selectedIndex - 1
          )
        }
        style={{
          position: "absolute",
          left: "-70px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "45px",
          background: "transparent",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        ❮
      </button>

      <button
        onClick={() =>
          setSelectedIndex(
            selectedIndex === images.length - 1
              ? 0
              : selectedIndex + 1
          )
        }
        style={{
          position: "absolute",
          right: "-70px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "45px",
          background: "transparent",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        ❯
      </button>

      <img
        src={images[selectedIndex]}
        alt="Preview"
        style={{
          display: "block",
          maxWidth: "75vw",
          maxHeight: "80vh",
          width: "auto",
          height: "auto",
          borderRadius: "20px",
          border: "4px solid white",
          objectFit: "contain",
          boxShadow: "0 25px 60px rgba(0,0,0,0.7)",
        }}
      />
    </div>
  </div>
)}

</main>
  );
}