import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <!-- NAV -->
  <nav id="navbar">
    <a class="nav-logo" href="#">NEURADRIVE</a>
    <ul class="nav-links">
      <li><a href="#how-it-works">How It Works</a></li>
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
    <a href="#features">Features</a>
    <a href="#safety">Safety</a>
    <a href="#specs">Specs</a>
    <a href="#order" class="btn-primary">Order Now</a>
  </div>

  <!-- HERO -->
  <section class="hero" id="hero">
    <div class="hero-bg"></div>
    <div class="hero-content">
      <p class="hero-eyebrow">Introducing</p>
      <h1>NeuraDrive</h1>
      <p class="hero-sub">Drive your car with the power of your mind.<br>No hands. No lag. Pure neural precision.</p>
      <div class="hero-actions">
        <a href="#order" class="btn-primary">Order NeuraDrive</a>
        <a href="#how-it-works" class="btn-ghost">Learn More</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="brain-ring ring-1"></div>
      <div class="brain-ring ring-2"></div>
      <div class="brain-ring ring-3"></div>
      <div class="brain-core">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="brain-icon">
          <circle cx="40" cy="40" r="38" stroke="rgba(99,102,241,0.6)" stroke-width="1.5"/>
          <path d="M25 40 Q30 25 40 28 Q50 25 55 40 Q58 52 50 56 Q44 60 40 58 Q36 60 30 56 Q22 52 25 40Z" stroke="rgba(139,92,246,0.9)" stroke-width="1.5" fill="rgba(99,102,241,0.08)"/>
          <path d="M40 28 L40 58" stroke="rgba(139,92,246,0.5)" stroke-width="1"/>
          <path d="M28 36 Q36 32 40 36 Q44 32 52 36" stroke="rgba(167,139,250,0.7)" stroke-width="1" fill="none"/>
          <path d="M26 44 Q34 48 40 44 Q46 48 54 44" stroke="rgba(167,139,250,0.7)" stroke-width="1" fill="none"/>
          <circle cx="40" cy="40" r="3" fill="rgba(139,92,246,0.9)"/>
          <path d="M58 20 Q65 15 72 20" stroke="rgba(99,102,241,0.6)" stroke-width="1.5" fill="none"/>
          <path d="M56 16 Q66 9 76 16" stroke="rgba(99,102,241,0.4)" stroke-width="1.5" fill="none"/>
          <circle cx="72" cy="60" r="2" fill="rgba(139,92,246,0.6)"/>
          <path d="M58 62 L70 58" stroke="rgba(99,102,241,0.5)" stroke-width="1"/>
        </svg>
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
      <span class="stat-num">8ms</span>
      <span class="stat-label">Neural Latency</span>
    </div>
    <div class="stat-divider"></div>
    <div class="stat">
      <span class="stat-num">99.7%</span>
      <span class="stat-label">Command Accuracy</span>
    </div>
    <div class="stat-divider"></div>
    <div class="stat">
      <span class="stat-num">256</span>
      <span class="stat-label">EEG Channels</span>
    </div>
    <div class="stat-divider"></div>
    <div class="stat">
      <span class="stat-num">72hr</span>
      <span class="stat-label">Battery Life</span>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section class="section" id="how-it-works">
    <div class="section-inner">
      <p class="section-eyebrow">The Science</p>
      <h2 class="section-title">How NeuraDrive Works</h2>
      <p class="section-sub">Three layers of technology working in harmony — from thought to motion in milliseconds.</p>
    </div>
    <div class="steps-grid">
      <div class="step-card">
        <div class="step-num">01</div>
        <div class="step-icon">
          <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M24 8V4M24 44v-4M8 24H4M44 24h-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M15 15l-3-3M36 36l-3-3M33 15l3-3M12 36l3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>
        <h3>Neural Capture</h3>
        <p>256-channel dry EEG sensors embedded in a lightweight headband read your motor-cortex signals at 2 kHz sampling rate — no gel, no prep.</p>
      </div>
      <div class="step-card">
        <div class="step-num">02</div>
        <div class="step-icon">
          <svg viewBox="0 0 48 48" fill="none"><rect x="8" y="16" width="32" height="20" rx="4" stroke="currentColor" stroke-width="1.5"/><path d="M16 16V12a8 8 0 0116 0v4" stroke="currentColor" stroke-width="1.5"/><circle cx="24" cy="26" r="3" fill="currentColor"/></svg>
        </div>
        <h3>On-Device AI</h3>
        <p>A 4 TOPS edge neural processor decodes intent locally — steering, acceleration, braking — with sub-10ms latency, fully offline and private.</p>
      </div>
      <div class="step-card">
        <div class="step-num">03</div>
        <div class="step-icon">
          <svg viewBox="0 0 48 48" fill="none"><path d="M6 34l6-12 8 8 8-16 8 12 6-8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <h3>Vehicle Control</h3>
        <p>Commands are transmitted over an encrypted CAN-Bus bridge compatible with all major EVs and modern ICE vehicles via the OBD-II port.</p>
      </div>
    </div>
  </section>

  <!-- FEATURE SPLIT — DARK -->
  <section class="split-section dark" id="features">
    <div class="split-visual">
      <div class="feature-visual-card v1">
        <div class="pulse-circle"></div>
        <div class="waveform">
          <span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <p class="visual-label">Live Neural Stream</p>
      </div>
    </div>
    <div class="split-content">
      <p class="section-eyebrow light">Precision</p>
      <h2>Think It.<br>Drive It.</h2>
      <p>NeuraDrive distinguishes between 14 discrete mental commands — from gentle steering corrections to full emergency stops — using a proprietary transformer model trained on over 50 million driving miles of neural data.</p>
      <a href="#order" class="btn-primary">Experience NeuraDrive</a>
    </div>
  </section>

  <!-- FEATURE SPLIT — LIGHT -->
  <section class="split-section">
    <div class="split-content">
      <p class="section-eyebrow">Comfort</p>
      <h2>Wear It<br>All Day.</h2>
      <p>Weighing just 38g, the NeuraDrive headband adapts to any head shape in under 60 seconds. Medical-grade silicone electrodes stay comfortable for 12+ hour drives. A single charge lasts 72 hours of continuous use.</p>
      <a href="#specs" class="btn-outline">View Specifications</a>
    </div>
    <div class="split-visual">
      <div class="feature-visual-card v2">
        <div class="device-ring"></div>
        <div class="device-body">
          <div class="device-led"></div>
          <span>38g</span>
        </div>
        <p class="visual-label">Featherlight Design</p>
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
          <svg viewBox="0 0 32 32" fill="none"><path d="M16 4l10 4v8c0 6-4.5 11-10 12C10.5 27 6 22 6 16V8l10-4z" stroke="currentColor" stroke-width="1.5"/><path d="M11 16l3 3 7-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <h3>Attention Monitoring</h3>
        <p>Continuous drowsiness and attention-loss detection disengages control and alerts the driver if focus drops below threshold.</p>
      </div>
      <div class="safety-card">
        <div class="safety-icon blue">
          <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="11" stroke="currentColor" stroke-width="1.5"/><path d="M16 10v6l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>
        <h3>Dual-Mode Fallback</h3>
        <p>Physical controls always remain active. NeuraDrive augments — never replaces — traditional steering and pedals.</p>
      </div>
      <div class="safety-card">
        <div class="safety-icon purple">
          <svg viewBox="0 0 32 32" fill="none"><rect x="6" y="10" width="20" height="14" rx="3" stroke="currentColor" stroke-width="1.5"/><path d="M11 10V8a5 5 0 0110 0v2" stroke="currentColor" stroke-width="1.5"/></svg>
        </div>
        <h3>End-to-End Encryption</h3>
        <p>All neural data is processed on-device and never leaves the headband. AES-256 secures the vehicle command channel.</p>
      </div>
      <div class="safety-card">
        <div class="safety-icon amber">
          <svg viewBox="0 0 32 32" fill="none"><path d="M16 6l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
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
    <div class="cta-content">
      <p class="section-eyebrow light">Available Now</p>
      <h2>Drive Into<br>The Future</h2>
      <p>NeuraDrive ships worldwide. Reserve yours today with a fully refundable $250 deposit.</p>
      <div class="cta-pricing">
        <span class="price">$2,499</span>
        <span class="price-note">+ free calibration session</span>
      </div>
      <div class="cta-actions">
        <a href="#" class="btn-primary large">Reserve Now</a>
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
  { threshold: 0.12 }
)

document.querySelectorAll(
  '.step-card, .safety-card, .split-content, .split-visual, .stats-bar .stat, .spec-row'
).forEach(el => observer.observe(el))
