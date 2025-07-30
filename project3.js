<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>CampusHub - Your Campus, Connected</title>

  <!-- Embedded CSS -->
  <style>
    /* --- BEGIN style.css content (truncated and optimized) --- */
    :root {
      --color-white: #fff;
      --color-black: #000;
      --color-teal-500: #21808d;
      --color-primary: var(--color-teal-500);
      --color-btn-primary-text: #fff;
      --color-surface: #fff;
      --color-text: #12343b;
      --font-size-base: 14px;
      --font-size-xl: 18px;
      --font-size-4xl: 30px;
      --font-size-lg: 16px;
      --font-weight-bold: 600;
      --radius-base: 8px;
      --space-8: 8px;
      --space-16: 16px;
      --space-24: 24px;
      --space-32: 32px;
    }
    body {
      font-family: sans-serif;
      margin: 0;
      background-color: #fdfdfd;
      color: var(--color-text);
    }
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: var(--color-surface);
      box-shadow: 0 1px 5px rgba(0,0,0,0.05);
      padding: var(--space-16);
      z-index: 100;
    }
    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    .nav-menu {
      list-style: none;
      display: flex;
      gap: var(--space-32);
      margin: 0;
      padding: 0;
    }
    .nav-link {
      text-decoration: none;
      color: var(--color-text);
      font-weight: bold;
    }
    .hero-section {
      text-align: center;
      padding: 120px 20px 80px;
      background: linear-gradient(to right, #e0f7fa, #b2ebf2);
    }
    .hero-title {
      font-size: var(--font-size-4xl);
      color: var(--color-primary);
      margin-bottom: var(--space-16);
    }
    .hero-subtitle {
      font-size: var(--font-size-xl);
      max-width: 600px;
      margin: 0 auto var(--space-32);
    }
    .btn {
      padding: var(--space-8) var(--space-16);
      border: none;
      border-radius: var(--radius-base);
      background: var(--color-primary);
      color: var(--color-btn-primary-text);
      font-size: var(--font-size-lg);
      cursor: pointer;
    }
    .stats-section {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-32);
      justify-content: center;
      padding: var(--space-32);
      background: var(--color-surface);
    }
    .stat-card {
      text-align: center;
      padding: var(--space-16);
    }
    .stat-number {
      font-size: var(--font-size-4xl);
      color: var(--color-primary);
    }
    .section-title {
      text-align: center;
      font-size: var(--font-size-4xl);
      margin-top: var(--space-32);
    }
    .features-grid {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-32);
      justify-content: center;
      padding: var(--space-32);
    }
    .feature-card {
      width: 250px;
      border: 1px solid #ddd;
      border-radius: var(--radius-base);
      padding: var(--space-16);
      background: var(--color-surface);
      text-align: center;
    }
    .cta-section {
      padding: var(--space-32);
      text-align: center;
      background: linear-gradient(to right, #e1bee7, #ce93d8);
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="navbar">
    <div class="nav-content">
      <div class="nav-brand">
        <h2>CampusHub</h2>
      </div>
      <ul class="nav-menu">
        <li><a class="nav-link" href="#home">Home</a></li>
        <li><a class="nav-link" href="#notes">Notes</a></li>
        <li><a class="nav-link" href="#forums">Forums</a></li>
        <li><a class="nav-link" href="#events">Events</a></li>
        <li><a class="nav-link" href="#announcements">Announcements</a></li>
        <li><a class="nav-link" href="#feedback">Feedback</a></li>
      </ul>
    </div>
  </nav>

  <!-- Home Section -->
  <section class="hero-section" id="home">
    <h1 class="hero-title">Your Campus, Connected</h1>
    <p class="hero-subtitle">Share notes, stay updated, collaborate with peers, and never miss an event.</p>
    <button class="btn cta">Get Started</button>
  </section>

  <!-- Statistics Section -->
  <section class="stats-section">
    <div class="stat-card">
      <h3 class="stat-number">2,500+</h3>
      <p>Notes Shared</p>
    </div>
    <div class="stat-card">
      <h3 class="stat-number">1,200+</h3>
      <p>Active Students</p>
    </div>
    <div class="stat-card">
      <h3 class="stat-number">8,900+</h3>
      <p>Forum Posts</p>
    </div>
    <div class="stat-card">
      <h3 class="stat-number">150+</h3>
      <p>Events Listed</p>
    </div>
  </section>

  <!-- Features Section -->
  <section>
    <h2 class="section-title">Everything You Need for College Success</h2>
    <div class="features-grid">
      <div class="feature-card">
        <div>📚</div>
        <h3>Notes Sharing</h3>
        <p>Upload and download notes with ratings.</p>
      </div>
      <div class="feature-card">
        <div>📢</div>
        <h3>Lecture Updates</h3>
        <p>Real-time announcements from faculty.</p>
      </div>
      <div class="feature-card">
        <div>💬</div>
        <h3>Forums</h3>
        <p>Discuss with your peers.</p>
      </div>
      <div class="feature-card">
        <div>📅</div>
        <h3>Events Calendar</h3>
        <p>Stay updated on all happenings.</p>
      </div>
      <div class="feature-card">
        <div>🎯</div>
        <h3>Mentorship</h3>
        <p>Get guidance from seniors.</p>
      </div>
      <div class="feature-card">
        <div>💡</div>
        <h3>Feedback</h3>
        <p>Improve CampusHub with your suggestions.</p>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta-section">
    <h2>Ready to Transform Your College Experience?</h2>
    <button class="btn cta">Join CampusHub Today</button>
  </section>

  <!-- Embedded JS -->
  <script>
    document.addEventListener('DOMContentLoaded', function () {
      const ctaBtn = document.querySelector('.cta');
      if (ctaBtn) {
        ctaBtn.addEventListener('click', function () {
          alert('Welcome to the Notes Library!');
        });
      }
      console.log('CampusHub site is loaded and JavaScript is connected!');
    });
  </script>

</body>
</html>
