import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <!-- NAV -->
  <nav id="navbar">
    <a class="nav-logo" href="#">
      <svg class="logo-hex" viewBox="0 0 24 24" fill="none"><path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke="url(#hexGrad)" stroke-width="1.5" fill="none"/><defs><linearGradient id="hexGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#6366f1"/><stop offset="100%" stop-color="#00d4ff"/></linearGradient></defs></svg>
      NEURADRIVE
    </a>
    <ul class="nav-links">
      <li><a href="#how-it-works">How It Works</a></li>
      <li><a href="#device">Device</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#safety">Safety</a></li>
      <li><a href="#specs">Specs</a></li>
    </ul>
    <div class="nav-actions">
      <a href="#order" class="btn-nav">Order Now</a>
    </div>
    <button class="nav-hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <!-- MOBILE MENU -->
  <div id="mobile-menu" class="mobile-menu">
    <a href="#how-it-works">How It Works</a>
    <a href="#device">Device</a>
    <a href="#features">Features</a>
    <a href="#safety">Safety</a>
    <a href="#specs">Specs</a>
    <a href="#order" class="btn-primary">Order Now</a>
  </div>

  <!-- HERO -->
  <section class="hero" id="hero">
    <div class="hero-bg"></div>
    <div class="hero-grid"></div>

    <div class="hero-content">
      <div class="hero-badge">
        <span class="badge-dot"></span>
        Neural Interface · Gen 3
      </div>
      <h1>Neura<span class="gradient-text">Drive</span></h1>
      <p class="hero-sub">Drive your car with the power of your mind.<br>No hands. No lag. Pure neural precision.</p>
      <div class="hero-actions">
        <a href="#order" class="btn-primary glow">Order NeuraDrive</a>
        <a href="#how-it-works" class="btn-ghost">Explore →</a>
      </div>
    </div>

    <div class="hero-visual">
      <div class="neural-scene">

        <!-- Brain orb at top -->
        <div class="scene-top">
          <div class="brain-orb">
            <div class="orb-ring r1"></div>
            <div class="orb-ring r2"></div>
            <div class="orb-ring r3"></div>
            <div class="orb-core">
              <svg viewBox="0 0 100 100" fill="none" class="brain-svg">
                <defs>
                  <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#6366f1"/>
                    <stop offset="100%" stop-color="#00d4ff"/>
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="42" stroke="url(#bg1)" stroke-width="0.8" opacity="0.5"/>
                <path d="M50 17 C35 17 22 27 20 41 C18 51 22 61 30 67 C34 70.5 38 72 42 72 L42 76 C42 78.5 44 81 47 82 L53 82 C56 81 58 78.5 58 76 L58 72 C62 72 66 70.5 70 67 C78 61 82 51 80 41 C78 27 65 17 50 17Z"
                  stroke="url(#bg1)" stroke-width="1.3" fill="rgba(99,102,241,0.07)"/>
                <line x1="50" y1="19" x2="50" y2="72" stroke="rgba(139,92,246,0.35)" stroke-width="0.8"/>
                <path d="M28 37 Q35 32 42 35 Q38 43 32 45" stroke="rgba(167,139,250,0.65)" stroke-width="0.9" fill="none"/>
                <path d="M24 49 Q30 46 38 49 Q34 57 28 58" stroke="rgba(167,139,250,0.6)" stroke-width="0.9" fill="none"/>
                <path d="M26 61 Q33 59 40 61" stroke="rgba(167,139,250,0.5)" stroke-width="0.8" fill="none"/>
                <path d="M72 37 Q65 32 58 35 Q62 43 68 45" stroke="rgba(167,139,250,0.65)" stroke-width="0.9" fill="none"/>
                <path d="M76 49 Q70 46 62 49 Q66 57 72 58" stroke="rgba(167,139,250,0.6)" stroke-width="0.9" fill="none"/>
                <path d="M74 61 Q67 59 60 61" stroke="rgba(167,139,250,0.5)" stroke-width="0.8" fill="none"/>
                <circle cx="35" cy="39" r="1.8" fill="rgba(0,212,255,0.9)"><animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.8s" repeatCount="indefinite"/></circle>
                <circle cx="43" cy="54" r="1.6" fill="rgba(139,92,246,0.9)"><animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.2s" begin="0.4s" repeatCount="indefinite"/></circle>
                <circle cx="30" cy="54" r="1.2" fill="rgba(0,212,255,0.7)"><animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.5s" begin="0.8s" repeatCount="indefinite"/></circle>
                <circle cx="65" cy="39" r="1.8" fill="rgba(0,212,255,0.9)"><animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.0s" begin="0.3s" repeatCount="indefinite"/></circle>
                <circle cx="57" cy="54" r="1.6" fill="rgba(139,92,246,0.9)"><animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.6s" begin="0.7s" repeatCount="indefinite"/></circle>
                <circle cx="70" cy="54" r="1.2" fill="rgba(0,212,255,0.7)"><animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.4s" begin="1.1s" repeatCount="indefinite"/></circle>
                <path d="M42 17 Q38 7 32 3" stroke="rgba(0,212,255,0.5)" stroke-width="1" stroke-dasharray="2,3"/>
                <path d="M50 17 L50 3" stroke="rgba(0,212,255,0.4)" stroke-width="1" stroke-dasharray="2,3"/>
                <path d="M58 17 Q62 7 68 3" stroke="rgba(0,212,255,0.5)" stroke-width="1" stroke-dasharray="2,3"/>
                <path d="M80 41 Q88 39 95 37" stroke="rgba(0,212,255,0.6)" stroke-width="1" stroke-dasharray="2,2"/>
                <path d="M80 50 Q88 50 96 50" stroke="rgba(139,92,246,0.6)" stroke-width="1" stroke-dasharray="2,2"/>
                <path d="M80 59 Q88 61 94 63" stroke="rgba(0,212,255,0.5)" stroke-width="1" stroke-dasharray="2,2"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Connection lines SVG (brain → car) -->
        <div class="scene-lines">
          <svg class="conn-lines" viewBox="0 0 500 130" fill="none">
            <defs>
              <linearGradient id="lG1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.9"/>
                <stop offset="100%" stop-color="#00d4ff" stop-opacity="0.3"/>
              </linearGradient>
            </defs>
            <path class="signal-line l1" d="M 200 0 C 180 40 140 80 80 125"/>
            <path class="signal-line l2" d="M 210 0 C 200 45 200 85 200 125"/>
            <path class="signal-line l3" d="M 220 0 C 250 40 320 80 390 125"/>
            <path class="signal-line l4" d="M 215 0 C 220 40 280 80 340 125" stroke-width="0.8"/>
            <circle r="3.5" fill="#00d4ff" opacity="0.95">
              <animateMotion dur="2.0s" repeatCount="indefinite" path="M 200 0 C 180 40 140 80 80 125"/>
            </circle>
            <circle r="3" fill="#8b5cf6" opacity="0.95">
              <animateMotion dur="2.3s" repeatCount="indefinite" begin="0.5s" path="M 210 0 C 200 45 200 85 200 125"/>
            </circle>
            <circle r="2.5" fill="#00d4ff" opacity="0.8">
              <animateMotion dur="1.9s" repeatCount="indefinite" begin="1.0s" path="M 220 0 C 250 40 320 80 390 125"/>
            </circle>
            <circle r="2" fill="#a78bfa" opacity="0.8">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.4s" path="M 215 0 C 220 40 280 80 340 125"/>
            </circle>
          </svg>
        </div>

        <!-- Command badges -->
        <div class="scene-badges">
          <div class="cmd-badge b1"><span class="cmd-dot"></span>STEER LEFT</div>
          <div class="cmd-badge b2 active"><span class="cmd-dot active-dot"></span>ACCELERATE</div>
          <div class="cmd-badge b3"><span class="cmd-dot"></span>CRUISE</div>
        </div>

        <!-- Car SVG -->
        <div class="car-container">
          <svg class="car-svg" viewBox="0 0 520 158" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cG" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#6366f1"/>
                <stop offset="55%" stop-color="#8b5cf6"/>
                <stop offset="100%" stop-color="#00d4ff"/>
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="softglow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            <!-- Ground reflection -->
            <ellipse cx="260" cy="153" rx="220" ry="6" fill="rgba(99,102,241,0.1)"/>
            <line x1="25" y1="143" x2="495" y2="143" stroke="rgba(99,102,241,0.22)" stroke-width="0.8"/>

            <!-- Car body -->
            <path d="
              M 48 141
              L 46 118
              Q 48 106 64 103
              L 142 101
              Q 156 72 178 62
              L 336 59
              Q 368 59 400 84
              L 448 84
              Q 463 84 464 100
              L 465 141
              Z
            " stroke="url(#cG)" stroke-width="2" fill="rgba(15,10,35,0.5)" filter="url(#glow)"/>

            <!-- Front wheel arch -->
            <path d="M 70 142 Q 112 100 154 142" stroke="url(#cG)" stroke-width="1.8" fill="rgba(8,5,20,0.7)"/>
            <!-- Rear wheel arch -->
            <path d="M 382 142 Q 422 100 462 142" stroke="url(#cG)" stroke-width="1.8" fill="rgba(8,5,20,0.7)"/>

            <!-- Front wheel -->
            <circle cx="112" cy="141" r="27" stroke="url(#cG)" stroke-width="1.5" fill="rgba(15,10,35,0.8)"/>
            <circle cx="112" cy="141" r="15" stroke="rgba(139,92,246,0.5)" stroke-width="1" fill="rgba(25,15,55,0.6)"/>
            <circle cx="112" cy="141" r="4.5" fill="rgba(99,102,241,0.9)"/>
            <line x1="112" y1="114" x2="112" y2="127" stroke="rgba(139,92,246,0.6)" stroke-width="1.2"/>
            <line x1="112" y1="155" x2="112" y2="168" stroke="rgba(139,92,246,0.6)" stroke-width="1.2"/>
            <line x1="85" y1="141" x2="98" y2="141" stroke="rgba(139,92,246,0.6)" stroke-width="1.2"/>
            <line x1="126" y1="141" x2="139" y2="141" stroke="rgba(139,92,246,0.6)" stroke-width="1.2"/>
            <line x1="93.8" y1="122.8" x2="102" y2="131" stroke="rgba(139,92,246,0.45)" stroke-width="1"/>
            <line x1="122" y1="151" x2="130.2" y2="159.2" stroke="rgba(139,92,246,0.45)" stroke-width="1"/>
            <line x1="93.8" y1="159.2" x2="102" y2="151" stroke="rgba(139,92,246,0.45)" stroke-width="1"/>
            <line x1="122" y1="131" x2="130.2" y2="122.8" stroke="rgba(139,92,246,0.45)" stroke-width="1"/>

            <!-- Rear wheel -->
            <circle cx="422" cy="141" r="27" stroke="url(#cG)" stroke-width="1.5" fill="rgba(15,10,35,0.8)"/>
            <circle cx="422" cy="141" r="15" stroke="rgba(139,92,246,0.5)" stroke-width="1" fill="rgba(25,15,55,0.6)"/>
            <circle cx="422" cy="141" r="4.5" fill="rgba(99,102,241,0.9)"/>
            <line x1="422" y1="114" x2="422" y2="127" stroke="rgba(139,92,246,0.6)" stroke-width="1.2"/>
            <line x1="422" y1="155" x2="422" y2="168" stroke="rgba(139,92,246,0.6)" stroke-width="1.2"/>
            <line x1="395" y1="141" x2="408" y2="141" stroke="rgba(139,92,246,0.6)" stroke-width="1.2"/>
            <line x1="436" y1="141" x2="449" y2="141" stroke="rgba(139,92,246,0.6)" stroke-width="1.2"/>
            <line x1="403.8" y1="122.8" x2="412" y2="131" stroke="rgba(139,92,246,0.45)" stroke-width="1"/>
            <line x1="432" y1="151" x2="440.2" y2="159.2" stroke="rgba(139,92,246,0.45)" stroke-width="1"/>
            <line x1="403.8" y1="159.2" x2="412" y2="151" stroke="rgba(139,92,246,0.45)" stroke-width="1"/>
            <line x1="432" y1="131" x2="440.2" y2="122.8" stroke="rgba(139,92,246,0.45)" stroke-width="1"/>

            <!-- Windshield (front) -->
            <path d="M 148 101 Q 164 73 182 63 L 288 61 L 288 101 Z"
              stroke="rgba(0,212,255,0.5)" stroke-width="1" fill="rgba(0,212,255,0.05)"/>
            <!-- Rear window -->
            <path d="M 293 61 L 348 61 Q 390 61 408 84 L 293 84 Z"
              stroke="rgba(0,212,255,0.45)" stroke-width="1" fill="rgba(0,212,255,0.04)"/>

            <!-- Door lines -->
            <line x1="248" y1="101" x2="246" y2="141" stroke="rgba(99,102,241,0.35)" stroke-width="0.9"/>
            <line x1="288" y1="101" x2="292" y2="141" stroke="rgba(99,102,241,0.35)" stroke-width="0.9"/>

            <!-- Side panel line -->
            <line x1="64" y1="118" x2="448" y2="90" stroke="rgba(99,102,241,0.15)" stroke-width="0.6"/>

            <!-- Headlight strip -->
            <rect x="47" y="109" width="18" height="5" rx="2.5" fill="rgba(0,212,255,0.95)" filter="url(#softglow)"/>
            <rect x="48" y="116" width="12" height="3" rx="1.5" fill="rgba(0,212,255,0.45)"/>

            <!-- Taillight -->
            <rect x="450" y="93" width="13" height="20" rx="2.5" fill="none" stroke="rgba(255,60,60,0.5)" stroke-width="0.8"/>
            <rect x="452" y="95" width="9" height="9" rx="1" fill="rgba(255,60,60,0.8)"/>
            <rect x="452" y="106" width="9" height="5" rx="1" fill="rgba(255,100,100,0.4)"/>

            <!-- EV antenna / sensor mast -->
            <line x1="198" y1="59" x2="198" y2="48" stroke="rgba(0,212,255,0.65)" stroke-width="1.2"/>
            <circle cx="198" cy="46" r="3.5" fill="rgba(0,212,255,0.75)" filter="url(#softglow)"/>

            <!-- Neural sensor dots on roofline -->
            <circle cx="228" cy="59" r="2.2" fill="rgba(139,92,246,0.85)"><animate attributeName="opacity" values="0.85;0.3;0.85" dur="1.9s" repeatCount="indefinite"/></circle>
            <circle cx="252" cy="59" r="2.2" fill="rgba(0,212,255,0.85)"><animate attributeName="opacity" values="0.85;0.3;0.85" dur="2.1s" begin="0.3s" repeatCount="indefinite"/></circle>
            <circle cx="276" cy="59" r="2.2" fill="rgba(139,92,246,0.85)"><animate attributeName="opacity" values="0.85;0.3;0.85" dur="1.7s" begin="0.6s" repeatCount="indefinite"/></circle>

            <!-- Rear data overlay -->
            <rect x="308" y="69" width="52" height="14" rx="3" fill="rgba(0,0,0,0.55)" stroke="rgba(0,212,255,0.3)" stroke-width="0.6"/>
            <text x="312" y="79" font-size="6.5" fill="rgba(0,212,255,0.85)" font-family="monospace">8ms · 99.7% ✓</text>
          </svg>
        </div>

      </div>
    </div>

    <div class="hero-scroll-hint">
      <span>Scroll</span>
      <div class="scroll-line"></div>
    </div>
  </section>

  <!-- STATS BAR -->
  <section class="stats-bar">
    <div class="stat">
      <span class="stat-num">8<span class="stat-unit">ms</span></span>
      <span class="stat-label">Neural Latency</span>
    </div>
    <div class="stat-divider"></div>
    <div class="stat">
      <span class="stat-num">99.7<span class="stat-unit">%</span></span>
      <span class="stat-label">Command Accuracy</span>
    </div>
    <div class="stat-divider"></div>
    <div class="stat">
      <span class="stat-num">256<span class="stat-unit">ch</span></span>
      <span class="stat-label">EEG Channels</span>
    </div>
    <div class="stat-divider"></div>
    <div class="stat">
      <span class="stat-num">72<span class="stat-unit">hr</span></span>
      <span class="stat-label">Battery Life</span>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section class="section dark" id="how-it-works">
    <div class="section-inner">
      <p class="section-eyebrow light">The Science</p>
      <h2 class="section-title">How NeuraDrive Works</h2>
      <p class="section-sub">Three layers of technology working in harmony — from thought to motion in milliseconds.</p>
    </div>
    <div class="steps-grid">
      <div class="step-card">
        <div class="step-num">01</div>
        <div class="step-icon">
          <svg viewBox="0 0 48 48" fill="none">
            <path d="M24 9C17 9 12 14 11 20C10 25 12 30 16 33C18 34.5 20 35 22 35L22 37C22 38.8 23.2 40 24.5 40C25.8 40 27 38.8 27 37L27 35C29 35 31 34.5 33 33C37 30 39 25 38 20C37 14 32 9 24 9Z"
              stroke="currentColor" stroke-width="1.4" fill="rgba(99,102,241,0.07)"/>
            <line x1="24" y1="11" x2="24" y2="35" stroke="rgba(139,92,246,0.4)" stroke-width="0.8"/>
            <path d="M15 22 Q18 19 22 21" stroke="rgba(167,139,250,0.7)" stroke-width="1" fill="none"/>
            <path d="M26 21 Q30 19 33 22" stroke="rgba(167,139,250,0.7)" stroke-width="1" fill="none"/>
            <path d="M14 27 Q18 25 22 27" stroke="rgba(167,139,250,0.6)" stroke-width="1" fill="none"/>
            <path d="M26 27 Q30 25 34 27" stroke="rgba(167,139,250,0.6)" stroke-width="1" fill="none"/>
            <!-- EEG waves left -->
            <path d="M3 24 L6 24 L7.5 19 L9.5 29 L11.5 21 L13 27 L14 24" stroke="#00d4ff" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- EEG waves right -->
            <path d="M34 24 L36 24 L37.5 19 L39.5 29 L41.5 21 L43 27 L44 24 L46 24" stroke="#00d4ff" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="24" cy="23" r="2" fill="rgba(0,212,255,0.8)"/>
          </svg>
        </div>
        <h3>Neural Capture</h3>
        <p>256-channel dry EEG sensors embedded in a lightweight headband read your motor-cortex signals at 2 kHz sampling rate — no gel, no prep.</p>
      </div>
      <div class="step-card">
        <div class="step-num">02</div>
        <div class="step-icon">
          <svg viewBox="0 0 48 48" fill="none">
            <rect x="15" y="15" width="18" height="18" rx="3.5" stroke="currentColor" stroke-width="1.4" fill="rgba(99,102,241,0.07)"/>
            <rect x="19" y="19" width="10" height="10" rx="1.5" stroke="rgba(0,212,255,0.5)" stroke-width="0.8"/>
            <line x1="4" y1="20" x2="15" y2="20" stroke="currentColor" stroke-width="1.3"/>
            <line x1="4" y1="24" x2="15" y2="24" stroke="currentColor" stroke-width="1.3"/>
            <line x1="4" y1="28" x2="15" y2="28" stroke="currentColor" stroke-width="1.3"/>
            <line x1="33" y1="20" x2="44" y2="20" stroke="currentColor" stroke-width="1.3"/>
            <line x1="33" y1="24" x2="44" y2="24" stroke="currentColor" stroke-width="1.3"/>
            <line x1="33" y1="28" x2="44" y2="28" stroke="currentColor" stroke-width="1.3"/>
            <line x1="20" y1="4" x2="20" y2="15" stroke="currentColor" stroke-width="1.3"/>
            <line x1="24" y1="4" x2="24" y2="15" stroke="currentColor" stroke-width="1.3"/>
            <line x1="28" y1="4" x2="28" y2="15" stroke="currentColor" stroke-width="1.3"/>
            <line x1="20" y1="33" x2="20" y2="44" stroke="currentColor" stroke-width="1.3"/>
            <line x1="24" y1="33" x2="24" y2="44" stroke="currentColor" stroke-width="1.3"/>
            <line x1="28" y1="33" x2="28" y2="44" stroke="currentColor" stroke-width="1.3"/>
            <circle cx="24" cy="24" r="3" fill="rgba(0,212,255,0.85)"><animate attributeName="opacity" values="0.85;0.4;0.85" dur="1.6s" repeatCount="indefinite"/></circle>
            <circle cx="4" cy="20" r="1.5" fill="rgba(99,102,241,0.7)"/>
            <circle cx="44" cy="24" r="1.5" fill="rgba(0,212,255,0.7)"/>
            <circle cx="24" cy="4" r="1.5" fill="rgba(139,92,246,0.7)"/>
            <circle cx="28" cy="44" r="1.5" fill="rgba(0,212,255,0.7)"/>
          </svg>
        </div>
        <h3>On-Device AI</h3>
        <p>A 4 TOPS edge neural processor decodes intent locally — steering, acceleration, braking — with sub-10ms latency, fully offline and private.</p>
      </div>
      <div class="step-card">
        <div class="step-num">03</div>
        <div class="step-icon">
          <svg viewBox="0 0 48 48" fill="none">
            <path d="M5 33L5 28Q6 24 10 23L15 23Q17 16 21 14L34 14Q39 14 42 20L45 20Q47 20 47 23L47 33Z"
              stroke="currentColor" stroke-width="1.4" fill="rgba(99,102,241,0.07)"/>
            <path d="M17 23 Q20 15 23 14 L31 14 L31 23 Z" stroke="rgba(0,212,255,0.5)" stroke-width="0.9" fill="rgba(0,212,255,0.04)"/>
            <path d="M33 14 L36 14 Q41 14 43 20 L33 20 Z" stroke="rgba(0,212,255,0.4)" stroke-width="0.9" fill="rgba(0,212,255,0.04)"/>
            <circle cx="14" cy="33" r="6" stroke="currentColor" stroke-width="1.4" fill="rgba(25,15,55,0.6)"/>
            <circle cx="14" cy="33" r="2.5" fill="rgba(99,102,241,0.7)"/>
            <circle cx="38" cy="33" r="6" stroke="currentColor" stroke-width="1.4" fill="rgba(25,15,55,0.6)"/>
            <circle cx="38" cy="33" r="2.5" fill="rgba(99,102,241,0.7)"/>
            <!-- Signal arcs above car -->
            <path d="M21 9 Q26 5.5 31 9" stroke="#00d4ff" stroke-width="1.4" fill="none" stroke-linecap="round"/>
            <path d="M18 6.5 Q26 1.5 34 6.5" stroke="#00d4ff" stroke-width="1.3" fill="none" stroke-linecap="round" opacity="0.7"/>
            <path d="M15 4 Q26 -2 37 4" stroke="#00d4ff" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="0.4"/>
            <!-- Headlight -->
            <rect x="5" y="25" width="5" height="3" rx="1.5" fill="rgba(0,212,255,0.9)"/>
          </svg>
        </div>
        <h3>Vehicle Control</h3>
        <p>Commands are transmitted over an encrypted CAN-Bus bridge compatible with all major EVs and modern ICE vehicles via the OBD-II port.</p>
      </div>
    </div>
  </section>

  <!-- PRODUCT SKETCH -->
  <section class="section product-section" id="device">
    <div class="section-inner">
      <p class="section-eyebrow">The Device</p>
      <h2 class="section-title">NeuraDrive Headband</h2>
      <p class="section-sub">Precision-engineered in 38 grams. Built to disappear on you, built to speak to your car.</p>
    </div>
    <div class="product-sketch-wrap">
      <svg class="headband-svg" viewBox="0 0 800 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#6366f1"/>
            <stop offset="100%" stop-color="#00d4ff"/>
          </linearGradient>
          <linearGradient id="bFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="rgba(99,102,241,0.18)"/>
            <stop offset="100%" stop-color="rgba(99,102,241,0.03)"/>
          </linearGradient>
          <filter id="sGlow">
            <feGaussianBlur stdDeviation="1.5" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <!-- Outer band shape (top-down view of headband) -->
        <path d="M 248 65 Q 248 40 280 36 L 520 36 Q 552 36 552 65 L 552 138 Q 552 220 400 242 Q 248 220 248 138 Z"
          stroke="url(#bG)" stroke-width="2.2" fill="url(#bFill)" filter="url(#sGlow)"/>

        <!-- Inner cavity -->
        <path d="M 268 78 Q 268 58 292 55 L 508 55 Q 532 58 532 78 L 532 140 Q 532 202 400 218 Q 268 202 268 140 Z"
          stroke="rgba(99,102,241,0.35)" stroke-width="1" fill="rgba(5,3,15,0.5)"/>

        <!-- ====== LEFT ARM MODULE ====== -->
        <rect x="250" y="88" width="54" height="42" rx="7" stroke="url(#bG)" stroke-width="1.8" fill="rgba(15,10,40,0.7)" filter="url(#sGlow)"/>
        <!-- Circuit traces -->
        <line x1="260" y1="101" x2="296" y2="101" stroke="rgba(0,212,255,0.55)" stroke-width="0.9"/>
        <line x1="260" y1="108" x2="296" y2="108" stroke="rgba(0,212,255,0.4)" stroke-width="0.7"/>
        <line x1="260" y1="115" x2="282" y2="115" stroke="rgba(0,212,255,0.4)" stroke-width="0.7"/>
        <rect x="273" y="112" width="12" height="8" rx="1.5" stroke="rgba(99,102,241,0.6)" stroke-width="0.7" fill="rgba(99,102,241,0.15)"/>
        <!-- LED active -->
        <circle cx="291" cy="119" r="3.2" fill="rgba(0,212,255,0.95)" filter="url(#sGlow)"/>
        <circle cx="291" cy="119" r="5.5" stroke="rgba(0,212,255,0.35)" stroke-width="0.8" fill="none"/>
        <!-- Charging port -->
        <rect x="245" y="132" width="7" height="14" rx="1.5" stroke="rgba(0,212,255,0.65)" stroke-width="1" fill="rgba(0,212,255,0.08)"/>
        <line x1="247" y1="136" x2="249" y2="136" stroke="rgba(0,212,255,0.65)" stroke-width="0.9"/>
        <line x1="247" y1="140" x2="249" y2="140" stroke="rgba(0,212,255,0.65)" stroke-width="0.9"/>
        <line x1="247" y1="144" x2="249" y2="144" stroke="rgba(0,212,255,0.65)" stroke-width="0.9"/>

        <!-- Left labels -->
        <line x1="248" y1="107" x2="210" y2="107" stroke="rgba(99,102,241,0.4)" stroke-width="0.8"/>
        <text x="207" y="110" font-size="9" fill="rgba(255,255,255,0.45)" font-family="monospace" text-anchor="end">4 TOPS NPU</text>
        <line x1="248" y1="119" x2="210" y2="126" stroke="rgba(99,102,241,0.35)" stroke-width="0.8"/>
        <text x="207" y="130" font-size="9" fill="rgba(255,255,255,0.4)" font-family="monospace" text-anchor="end">BLE 5.3 Radio</text>
        <line x1="248" y1="139" x2="210" y2="150" stroke="rgba(99,102,241,0.3)" stroke-width="0.8"/>
        <text x="207" y="154" font-size="9" fill="rgba(255,255,255,0.38)" font-family="monospace" text-anchor="end">450 mAh · 72 hr</text>

        <!-- ====== RIGHT ARM ====== -->
        <rect x="496" y="88" width="54" height="42" rx="7" stroke="rgba(99,102,241,0.5)" stroke-width="1.2" fill="rgba(15,10,40,0.5)"/>
        <line x1="506" y1="101" x2="542" y2="101" stroke="rgba(139,92,246,0.4)" stroke-width="0.8"/>
        <line x1="506" y1="108" x2="542" y2="108" stroke="rgba(139,92,246,0.3)" stroke-width="0.7"/>
        <line x1="506" y1="115" x2="526" y2="115" stroke="rgba(139,92,246,0.3)" stroke-width="0.7"/>

        <!-- Right labels -->
        <line x1="552" y1="107" x2="592" y2="107" stroke="rgba(99,102,241,0.4)" stroke-width="0.8"/>
        <text x="595" y="110" font-size="9" fill="rgba(255,255,255,0.45)" font-family="monospace">CAN-Bus Bridge</text>
        <line x1="552" y1="119" x2="592" y2="126" stroke="rgba(99,102,241,0.35)" stroke-width="0.8"/>
        <text x="595" y="130" font-size="9" fill="rgba(255,255,255,0.4)" font-family="monospace">IPX4 Rated</text>
        <line x1="552" y1="132" x2="592" y2="144" stroke="rgba(99,102,241,0.3)" stroke-width="0.8"/>
        <text x="595" y="148" font-size="9" fill="rgba(255,255,255,0.38)" font-family="monospace">AES-256 Encrypted</text>

        <!-- ====== EEG SENSOR DOTS — top arc ====== -->
        <!-- Left side sensors -->
        <circle cx="285" cy="90" r="4" stroke="rgba(0,212,255,0.75)" stroke-width="1.1" fill="rgba(0,212,255,0.18)"/>
        <circle cx="308" cy="73" r="4" stroke="rgba(0,212,255,0.75)" stroke-width="1.1" fill="rgba(0,212,255,0.18)"/>
        <circle cx="332" cy="63" r="4" stroke="rgba(0,212,255,0.75)" stroke-width="1.1" fill="rgba(0,212,255,0.18)"/>
        <circle cx="357" cy="57" r="4" stroke="rgba(0,212,255,0.75)" stroke-width="1.1" fill="rgba(0,212,255,0.18)"/>
        <!-- Center sensors (highlighted) -->
        <circle cx="382" cy="54" r="4.5" stroke="rgba(139,92,246,0.95)" stroke-width="1.4" fill="rgba(139,92,246,0.22)"/>
        <circle cx="400" cy="53" r="5" stroke="rgba(139,92,246,1)" stroke-width="1.8" fill="rgba(139,92,246,0.28)" filter="url(#sGlow)"/>
        <circle cx="418" cy="54" r="4.5" stroke="rgba(139,92,246,0.95)" stroke-width="1.4" fill="rgba(139,92,246,0.22)"/>
        <!-- Right side sensors -->
        <circle cx="443" cy="57" r="4" stroke="rgba(0,212,255,0.75)" stroke-width="1.1" fill="rgba(0,212,255,0.18)"/>
        <circle cx="468" cy="63" r="4" stroke="rgba(0,212,255,0.75)" stroke-width="1.1" fill="rgba(0,212,255,0.18)"/>
        <circle cx="492" cy="73" r="4" stroke="rgba(0,212,255,0.75)" stroke-width="1.1" fill="rgba(0,212,255,0.18)"/>
        <circle cx="515" cy="90" r="4" stroke="rgba(0,212,255,0.75)" stroke-width="1.1" fill="rgba(0,212,255,0.18)"/>

        <!-- Lower arc sensors -->
        <circle cx="276" cy="128" r="2.8" stroke="rgba(0,212,255,0.5)" stroke-width="0.9" fill="rgba(0,212,255,0.1)"/>
        <circle cx="275" cy="156" r="2.8" stroke="rgba(0,212,255,0.5)" stroke-width="0.9" fill="rgba(0,212,255,0.1)"/>
        <circle cx="282" cy="182" r="2.8" stroke="rgba(0,212,255,0.5)" stroke-width="0.9" fill="rgba(0,212,255,0.1)"/>
        <circle cx="297" cy="204" r="2.8" stroke="rgba(0,212,255,0.5)" stroke-width="0.9" fill="rgba(0,212,255,0.1)"/>
        <circle cx="318" cy="220" r="2.8" stroke="rgba(0,212,255,0.5)" stroke-width="0.9" fill="rgba(0,212,255,0.1)"/>
        <circle cx="524" cy="128" r="2.8" stroke="rgba(0,212,255,0.5)" stroke-width="0.9" fill="rgba(0,212,255,0.1)"/>
        <circle cx="525" cy="156" r="2.8" stroke="rgba(0,212,255,0.5)" stroke-width="0.9" fill="rgba(0,212,255,0.1)"/>
        <circle cx="518" cy="182" r="2.8" stroke="rgba(0,212,255,0.5)" stroke-width="0.9" fill="rgba(0,212,255,0.1)"/>
        <circle cx="503" cy="204" r="2.8" stroke="rgba(0,212,255,0.5)" stroke-width="0.9" fill="rgba(0,212,255,0.1)"/>
        <circle cx="482" cy="220" r="2.8" stroke="rgba(0,212,255,0.5)" stroke-width="0.9" fill="rgba(0,212,255,0.1)"/>

        <!-- Top label: 256 sensors -->
        <text x="400" y="22" font-size="9.5" fill="rgba(255,255,255,0.5)" font-family="monospace" text-anchor="middle" letter-spacing="2">256 DRY EEG ELECTRODES</text>
        <line x1="355" y1="24" x2="308" y2="50" stroke="rgba(0,212,255,0.25)" stroke-width="0.7"/>
        <line x1="445" y1="24" x2="492" y2="50" stroke="rgba(0,212,255,0.25)" stroke-width="0.7"/>

        <!-- Bottom label -->
        <text x="400" y="256" font-size="9.5" fill="rgba(255,255,255,0.42)" font-family="monospace" text-anchor="middle" letter-spacing="1">Medical-Grade Silicone · 38g · IPX4</text>
        <line x1="330" y1="254" x2="298" y2="224" stroke="rgba(0,212,255,0.2)" stroke-width="0.7"/>
        <line x1="470" y1="254" x2="502" y2="224" stroke="rgba(0,212,255,0.2)" stroke-width="0.7"/>

        <!-- EEG sample waveforms at bottom -->
        <path d="M 305 290 L 312 290 L 314 281 L 318 300 L 322 284 L 326 294 L 328 290 L 336 290"
          stroke="rgba(0,212,255,0.65)" stroke-width="1.3" fill="none" stroke-linecap="round"/>
        <path d="M 390 292 L 396 292 L 399 282 L 404 303 L 409 282 L 413 297 L 416 292 L 424 292"
          stroke="rgba(139,92,246,0.65)" stroke-width="1.3" fill="none" stroke-linecap="round"/>
        <path d="M 464 290 L 470 290 L 472 284 L 475 296 L 479 285 L 482 293 L 484 290 L 492 290"
          stroke="rgba(0,212,255,0.65)" stroke-width="1.3" fill="none" stroke-linecap="round"/>
        <text x="400" y="314" font-size="8" fill="rgba(255,255,255,0.28)" font-family="monospace" text-anchor="middle" letter-spacing="2">LIVE EEG SAMPLE STREAMS</text>

        <!-- 38g callout bubble — positioned below label area to avoid overlap -->
        <circle cx="108" cy="238" r="34" stroke="rgba(99,102,241,0.28)" stroke-width="1" fill="rgba(99,102,241,0.05)" stroke-dasharray="4,3"/>
        <text x="108" y="234" font-size="22" font-weight="200" fill="rgba(255,255,255,0.72)" font-family="Inter, system-ui" text-anchor="middle">38g</text>
        <text x="108" y="249" font-size="8" fill="rgba(255,255,255,0.38)" font-family="monospace" text-anchor="middle" letter-spacing="1">WEIGHT</text>
        <line x1="142" y1="228" x2="250" y2="195" stroke="rgba(99,102,241,0.25)" stroke-width="0.9"/>

        <!-- 2kHz callout bubble — positioned below label area to avoid overlap -->
        <circle cx="692" cy="238" r="34" stroke="rgba(0,212,255,0.28)" stroke-width="1" fill="rgba(0,212,255,0.04)" stroke-dasharray="4,3"/>
        <text x="692" y="234" font-size="17" font-weight="200" fill="rgba(255,255,255,0.72)" font-family="Inter, system-ui" text-anchor="middle">2 kHz</text>
        <text x="692" y="249" font-size="8" fill="rgba(255,255,255,0.38)" font-family="monospace" text-anchor="middle" letter-spacing="1">SAMPLING</text>
        <line x1="658" y1="228" x2="550" y2="195" stroke="rgba(0,212,255,0.25)" stroke-width="0.9"/>
      </svg>
    </div>
  </section>

  <!-- FEATURE SPLIT — DARK (Neural Stream) -->
  <section class="split-section dark" id="features">
    <div class="split-visual">
      <div class="feature-visual-card v1">
        <div class="eeg-display">
          <div class="eeg-header">
            <span class="eeg-label">NEURAL STREAM</span>
            <span class="eeg-status"><span class="live-dot"></span>LIVE</span>
          </div>
          <div class="eeg-channels">
            <div class="eeg-channel">
              <span class="ch-label">C3</span>
              <div class="ch-wave">
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
              </div>
            </div>
            <div class="eeg-channel">
              <span class="ch-label">Cz</span>
              <div class="ch-wave ch-alt">
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
              </div>
            </div>
            <div class="eeg-channel">
              <span class="ch-label">C4</span>
              <div class="ch-wave ch-beta">
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
              </div>
            </div>
          </div>
          <div class="neural-readout">
            <div class="readout-item">
              <span class="r-label">INTENT</span>
              <span class="r-val intent-val">STEER LEFT</span>
            </div>
            <div class="readout-item">
              <span class="r-label">CONFIDENCE</span>
              <span class="r-val">99.2%</span>
            </div>
            <div class="readout-item">
              <span class="r-label">LATENCY</span>
              <span class="r-val">7.8 ms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="split-content">
      <p class="section-eyebrow light">Precision</p>
      <h2>Think It.<br>Drive It.</h2>
      <p>NeuraDrive distinguishes between 14 discrete mental commands — from gentle steering corrections to full emergency stops — using a proprietary transformer model trained on over 50 million driving miles of neural data.</p>
      <a href="#order" class="btn-primary">Experience NeuraDrive</a>
    </div>
  </section>

  <!-- FEATURE SPLIT — LIGHT (Comfort) -->
  <section class="split-section">
    <div class="split-content">
      <p class="section-eyebrow">Comfort</p>
      <h2>Wear It<br>All Day.</h2>
      <p>Weighing just 38g, the NeuraDrive headband adapts to any head shape in under 60 seconds. Medical-grade silicone electrodes stay comfortable for 12+ hour drives. A single charge lasts 72 hours of continuous use.</p>
      <a href="#specs" class="btn-outline">View Specifications</a>
    </div>
    <div class="split-visual">
      <div class="feature-visual-card v2">
        <div class="device-3d-wrap">
          <svg class="device-3d-svg" viewBox="0 0 240 190" fill="none">
            <defs>
              <linearGradient id="dG" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#6366f1"/>
                <stop offset="100%" stop-color="#00d4ff"/>
              </linearGradient>
              <filter id="dGlow">
                <feGaussianBlur stdDeviation="2" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <!-- Ground shadow -->
            <ellipse cx="130" cy="168" rx="95" ry="8" fill="rgba(99,102,241,0.12)"/>

            <!-- Left arm (near, larger perspective) -->
            <path d="M 30 75 L 30 98 Q 30 108 42 110 L 82 112 Q 92 112 94 100 L 94 76 Q 94 66 82 64 L 44 62 Q 32 62 30 75 Z"
              stroke="url(#dG)" stroke-width="1.8" fill="rgba(15,10,40,0.8)" filter="url(#dGlow)"/>

            <!-- Module on left arm -->
            <rect x="44" y="70" width="30" height="20" rx="4" fill="rgba(99,102,241,0.18)" stroke="rgba(0,212,255,0.7)" stroke-width="1.2"/>
            <line x1="50" y1="78" x2="68" y2="78" stroke="rgba(0,212,255,0.55)" stroke-width="0.9"/>
            <line x1="50" y1="83" x2="68" y2="83" stroke="rgba(0,212,255,0.4)" stroke-width="0.7"/>
            <!-- Active LED -->
            <circle cx="70" cy="87" r="3.5" fill="rgba(0,212,255,0.95)" filter="url(#dGlow)"/>
            <circle cx="70" cy="87" r="6" stroke="rgba(0,212,255,0.35)" stroke-width="0.8" fill="none"/>

            <!-- Band bridge (perspective arc) -->
            <path d="M 94 70 Q 152 22 206 62" stroke="url(#dG)" stroke-width="2" fill="none" filter="url(#dGlow)"/>
            <path d="M 94 98 Q 152 50 206 90" stroke="rgba(99,102,241,0.5)" stroke-width="1.2" fill="none"/>

            <!-- Right arm (far, smaller) -->
            <path d="M 206 62 L 206 82 Q 206 90 214 91 L 232 92 Q 238 92 240 86 L 240 66 Q 240 60 234 59 L 214 58 Q 206 58 206 66 Z"
              stroke="rgba(99,102,241,0.6)" stroke-width="1.2" fill="rgba(15,10,40,0.6)"/>

            <!-- Sensor dots on bridge -->
            <circle cx="116" cy="48" r="3.2" stroke="rgba(0,212,255,0.75)" stroke-width="1" fill="rgba(0,212,255,0.22)"/>
            <circle cx="136" cy="37" r="3.2" stroke="rgba(0,212,255,0.75)" stroke-width="1" fill="rgba(0,212,255,0.22)"/>
            <circle cx="156" cy="30" r="3.5" stroke="rgba(139,92,246,0.9)" stroke-width="1.2" fill="rgba(139,92,246,0.25)"/>
            <circle cx="176" cy="33" r="3.2" stroke="rgba(0,212,255,0.75)" stroke-width="1" fill="rgba(0,212,255,0.22)"/>
            <circle cx="196" cy="46" r="2.8" stroke="rgba(0,212,255,0.6)" stroke-width="0.9" fill="rgba(0,212,255,0.15)"/>

            <!-- Drop shadows for perspective depth -->
            <line x1="30" y1="100" x2="62" y2="158" stroke="rgba(99,102,241,0.08)" stroke-width="0.8"/>
            <line x1="94" y1="100" x2="130" y2="165" stroke="rgba(99,102,241,0.07)" stroke-width="0.8"/>
            <line x1="206" y1="92" x2="192" y2="160" stroke="rgba(99,102,241,0.05)" stroke-width="0.8"/>
          </svg>
        </div>
        <div class="device-stats-row">
          <div class="ds-item"><span class="ds-num">38g</span><span class="ds-lbl">Weight</span></div>
          <div class="ds-sep"></div>
          <div class="ds-item"><span class="ds-num">72h</span><span class="ds-lbl">Battery</span></div>
          <div class="ds-sep"></div>
          <div class="ds-item"><span class="ds-num">60s</span><span class="ds-lbl">Setup</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- SAFETY -->
  <section class="section dark" id="safety">
    <div class="section-inner">
      <p class="section-eyebrow light">Built-In Protection</p>
      <h2 class="section-title">Safety First. Always.</h2>
      <p class="section-sub">NeuraDrive includes multiple independent safety layers that cannot be disabled.</p>
    </div>
    <div class="safety-grid">
      <div class="safety-card">
        <div class="safety-icon green">
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M16 4l10 4v8c0 6-4.5 11-10 12C10.5 27 6 22 6 16V8l10-4z" stroke="currentColor" stroke-width="1.5" fill="none"/>
            <path d="M11 16l3 3 7-7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h3>Attention Monitoring</h3>
        <p>Continuous drowsiness and attention-loss detection disengages control and alerts the driver if focus drops below threshold.</p>
      </div>
      <div class="safety-card">
        <div class="safety-icon blue">
          <svg viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="10" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8 16 H10 L11 12 L13 20 L15 14 L17 18 L18 16 L22 16 L23 13 L25 19 L24 16 H26"
              stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
        </div>
        <h3>Dual-Mode Fallback</h3>
        <p>Physical controls always remain active. NeuraDrive augments — never replaces — traditional steering and pedals.</p>
      </div>
      <div class="safety-card">
        <div class="safety-icon purple">
          <svg viewBox="0 0 32 32" fill="none">
            <rect x="6" y="10" width="20" height="14" rx="3" stroke="currentColor" stroke-width="1.5"/>
            <path d="M11 10V8a5 5 0 0110 0v2" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="16" cy="17" r="2.5" fill="currentColor" opacity="0.75"/>
            <line x1="16" y1="19.5" x2="16" y2="22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <h3>End-to-End Encryption</h3>
        <p>All neural data is processed on-device and never leaves the headband. AES-256 secures the vehicle command channel.</p>
      </div>
      <div class="safety-card">
        <div class="safety-icon amber">
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M16 4 L28 9 L28 18 C28 25 22.5 30 16 31.5 C9.5 30 4 25 4 18 L4 9 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
            <path d="M11 17l3.5 3.5 8-8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h3>Certified & Tested</h3>
        <p>ISO 26262 ASIL-D functional safety certification and 10 million simulated critical-scenario hours.</p>
      </div>
    </div>
  </section>

  <!-- SPECS -->
  <section class="section" id="specs">
    <div class="section-inner">
      <p class="section-eyebrow">Technical Details</p>
      <h2 class="section-title">Specifications</h2>
    </div>
    <div class="specs-table">
      <div class="spec-row"><span class="spec-key">EEG Channels</span><span class="spec-val">256 dry electrodes</span></div>
      <div class="spec-row"><span class="spec-key">Sampling Rate</span><span class="spec-val">2,048 Hz</span></div>
      <div class="spec-row"><span class="spec-key">Neural Latency</span><span class="spec-val">&lt; 8 ms end-to-end</span></div>
      <div class="spec-row"><span class="spec-key">Command Accuracy</span><span class="spec-val">99.7% (validated)</span></div>
      <div class="spec-row"><span class="spec-key">Processor</span><span class="spec-val">4 TOPS edge NPU, ARM Cortex-M55</span></div>
      <div class="spec-row"><span class="spec-key">Connectivity</span><span class="spec-val">BLE 5.3 + encrypted CAN-Bus bridge</span></div>
      <div class="spec-row"><span class="spec-key">Vehicle Compatibility</span><span class="spec-val">OBD-II (2010+) and native EV API</span></div>
      <div class="spec-row"><span class="spec-key">Battery</span><span class="spec-val">450 mAh — 72 hrs continuous</span></div>
      <div class="spec-row"><span class="spec-key">Weight</span><span class="spec-val">38 g</span></div>
      <div class="spec-row"><span class="spec-key">Water Resistance</span><span class="spec-val">IPX4</span></div>
      <div class="spec-row"><span class="spec-key">Certifications</span><span class="spec-val">ISO 26262 ASIL-D, FCC, CE, UKCA</span></div>
      <div class="spec-row"><span class="spec-key">Companion App</span><span class="spec-val">iOS 16+ / Android 12+</span></div>
    </div>
  </section>

  <!-- ORDER CTA -->
  <section class="cta-section" id="order">
    <div class="cta-bg"></div>
    <div class="cta-grid"></div>
    <div class="cta-content">
      <p class="section-eyebrow light">Available Now</p>
      <h2>Drive Into<br>The Future</h2>
      <p>NeuraDrive ships worldwide. Reserve yours today with a fully refundable $250 deposit.</p>
      <div class="cta-pricing">
        <span class="price">$2,499</span>
        <span class="price-note">+ free calibration session</span>
      </div>
      <div class="cta-actions">
        <a href="#" class="btn-primary large glow">Reserve Now</a>
        <a href="#" class="btn-ghost large">Schedule a Demo</a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-logo">NEURADRIVE</span>
        <p>Wearable neural interface for precision vehicle control.</p>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h4>Product</h4>
          <a href="#how-it-works">How It Works</a>
          <a href="#device">Device</a>
          <a href="#features">Features</a>
          <a href="#safety">Safety</a>
          <a href="#specs">Specifications</a>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Contact</a>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Safety Data</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 NeuraDrive, Inc. All rights reserved.</p>
      <p>NeuraDrive is intended for use by licensed drivers in jurisdictions where neural-assisted driving is permitted.</p>
    </div>
  </footer>
`

// Navbar scroll effect
const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40)
})

// Mobile hamburger
const hamburger = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobile-menu')
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open')
  hamburger.classList.toggle('active')
})
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open')
    hamburger.classList.remove('active')
  })
})

// Scroll-in animations
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible')
        observer.unobserve(e.target)
      }
    })
  },
  { threshold: 0.1 }
)

document.querySelectorAll(
  '.step-card, .safety-card, .split-content, .split-visual, .stats-bar .stat, .spec-row, .hero-content, .hero-visual, .product-sketch-wrap'
).forEach(el => observer.observe(el))
