import './style.css'

const app = document.querySelector('#app')

// ============================================================
// DATA
// ============================================================

const METRICS = [
  { value: 8,    suffix: '',  unit: 'ms', label: 'Signal latency',         desc: 'End-to-end from intent to command dispatch' },
  { value: 99.7, suffix: '',  unit: '%',  label: 'Command rejection rate',  desc: 'Ambiguous or low-confidence signals blocked' },
  { value: 256,  suffix: '',  unit: 'ch', label: 'Neural channels',         desc: 'Dry EEG electrodes, no prep required' },
  { value: 72,   suffix: '',  unit: 'h',  label: 'Battery life',            desc: 'Per charge, continuous active monitoring' },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Detect Intent',
    desc: 'NeuraDrive reads intentional motor-cortex patterns through 256 dry EEG electrodes at 2,048 Hz — distinguishing deliberate commands from background neural noise in real time.',
    detail: 'On-device signal processing eliminates noise and extracts intent signatures without any external data transfer.',
    iconSVG: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 9C17 9 12 14 11 20C10 25 12 30 16 33C18 34.5 20 35 22 35L22 37C22 38.8 23.2 40 24.5 40C25.8 40 27 38.8 27 37L27 35C29 35 31 34.5 33 33C37 30 39 25 38 20C37 14 32 9 24 9Z" stroke="currentColor" stroke-width="1.4" fill="rgba(91,140,255,0.08)"/>
      <path d="M3 24 L6 24 L7.5 19 L9.5 29 L11.5 21 L13 27 L14 24" stroke="#39D0FF" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M34 24 L36 24 L37.5 19 L39.5 29 L41.5 21 L43 27 L44 24 L46 24" stroke="#39D0FF" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="24" cy="23" r="2.5" fill="rgba(57,208,255,0.9)"/>
    </svg>`,
  },
  {
    step: '02',
    title: 'Validate Confidence',
    desc: 'Each detected signal passes through a multi-stage validation gate: intent classification, confidence thresholding, driver attention check, and command eligibility verification.',
    detail: 'Commands below the confidence threshold are silently rejected. Borderline signals require a secondary confirmation pattern.',
    iconSVG: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="14" y="14" width="20" height="20" rx="4" stroke="currentColor" stroke-width="1.4" fill="rgba(91,140,255,0.08)"/>
      <rect x="19" y="19" width="10" height="10" rx="2" stroke="rgba(57,208,255,0.5)" stroke-width="0.8"/>
      <line x1="3" y1="20" x2="14" y2="20" stroke="currentColor" stroke-width="1.3"/>
      <line x1="3" y1="24" x2="14" y2="24" stroke="currentColor" stroke-width="1.3"/>
      <line x1="3" y1="28" x2="14" y2="28" stroke="currentColor" stroke-width="1.3"/>
      <line x1="34" y1="20" x2="45" y2="20" stroke="currentColor" stroke-width="1.3"/>
      <line x1="34" y1="24" x2="45" y2="24" stroke="currentColor" stroke-width="1.3"/>
      <line x1="34" y1="28" x2="45" y2="28" stroke="currentColor" stroke-width="1.3"/>
      <circle cx="24" cy="24" r="3" fill="rgba(57,208,255,0.85)"><animate attributeName="opacity" values="0.85;0.4;0.85" dur="1.8s" repeatCount="indefinite"/></circle>
    </svg>`,
  },
  {
    step: '03',
    title: 'Execute Approved Command',
    desc: 'Only pre-approved command categories are routed to the vehicle. Safety-critical controls remain physically operated and cannot be overridden by neural input.',
    detail: 'Commands are encrypted end-to-end over the CAN-Bus bridge. All execution events are logged in the companion app for review.',
    iconSVG: `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M5 33L5 28Q6 24 10 23L15 23Q17 16 21 14L34 14Q39 14 42 20L45 20Q47 20 47 23L47 33Z" stroke="currentColor" stroke-width="1.4" fill="rgba(91,140,255,0.08)"/>
      <path d="M21 9 Q26 5.5 31 9" stroke="#39D0FF" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      <path d="M18 6.5 Q26 1.5 34 6.5" stroke="#39D0FF" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="0.6"/>
      <circle cx="14" cy="33" r="6" stroke="currentColor" stroke-width="1.3" fill="rgba(17,24,42,0.6)"/>
      <circle cx="38" cy="33" r="6" stroke="currentColor" stroke-width="1.3" fill="rgba(17,24,42,0.6)"/>
      <path d="M11 33 L13.5 35.5 L18 30" stroke="#39D0FF" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
]

const SAFETY_PILLARS = [
  {
    color: 'blue',
    title: 'Intent Confidence Scoring',
    desc: 'Every neural signal is scored for intent confidence before classification. Only high-confidence, repeatable patterns are accepted as valid commands.',
    detail: 'Threshold calibrated per driver. Ambiguous patterns are automatically rejected.',
    icon: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 4C10 4 6 9 6 14C6 19 9 23 13 24.5L13 26C13 27.7 14.3 29 16 29C17.7 29 19 27.7 19 26L19 24.5C23 23 26 19 26 14C26 9 22 4 16 4Z" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="16" y1="5" x2="16" y2="24" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2,2" opacity="0.4"/><circle cx="11" cy="14" r="1.5" fill="currentColor" opacity="0.8"/><circle cx="21" cy="14" r="1.5" fill="currentColor" opacity="0.8"/><path d="M10 10 Q13 8 16 10 Q19 8 22 10" stroke="currentColor" stroke-width="1" fill="none" opacity="0.6"/></svg>`,
  },
  {
    color: 'cyan',
    title: 'Driver Attention Monitoring',
    desc: 'Continuous EEG-based drowsiness and distraction detection. If driver state falls below safe thresholds, neural input is suspended and an alert is issued.',
    detail: 'Monitoring runs passively at all times, independent of active command mode.',
    icon: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="14" r="5" stroke="currentColor" stroke-width="1.5"/><path d="M4 14 Q10 6 16 14 Q22 22 28 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/><path d="M8 22 L10 20 M16 24 L16 22 M24 22 L22 20" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/></svg>`,
  },
  {
    color: 'violet',
    title: 'Multi-Stage Command Approval',
    desc: 'Commands pass through intent classification, confidence gate, driver state check, and command eligibility filter before reaching the vehicle interface.',
    detail: 'Any single failed stage blocks the command. No override is possible from software.',
    icon: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="4" y="10" width="24" height="14" rx="3" stroke="currentColor" stroke-width="1.5"/><path d="M10 17 L14 21 L22 13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 10 L10 7 M16 10 L16 5 M22 10 L22 7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/></svg>`,
  },
  {
    color: 'green',
    title: 'Encrypted Signal Processing',
    desc: 'All neural data is processed entirely on-device. No raw signal data leaves the headband. The vehicle command channel uses AES-256 encryption.',
    detail: 'Neural data is never stored, transmitted, or sold. Signal processing is fully airgapped from the internet.',
    icon: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="6" y="13" width="20" height="13" rx="3" stroke="currentColor" stroke-width="1.5"/><path d="M11 13V10a5 5 0 0110 0v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="16" cy="19.5" r="2" fill="currentColor" opacity="0.8"/><line x1="16" y1="21.5" x2="16" y2="24" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  },
  {
    color: 'amber',
    title: 'Restricted Command Categories',
    desc: 'Only pre-approved, non-safety-critical vehicle functions are accessible via neural input. Braking, steering override, and emergency systems are hardware-locked.',
    detail: 'Command categories are defined in firmware and cannot be modified through software or app updates.',
    icon: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="16" r="10" stroke="currentColor" stroke-width="1.5"/><line x1="11" y1="11" x2="21" y2="21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="21" y1="11" x2="11" y2="21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity="0.4"/></svg>`,
  },
  {
    color: 'red',
    title: 'Fail-Safe Disable Behavior',
    desc: 'Signal loss, hardware fault, or driver state degradation triggers immediate graceful disengagement. Physical controls always remain fully operational.',
    detail: 'Fail-safe is hardware-enforced and cannot be disabled by firmware or software.',
    icon: `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 4 L28 9 L28 20 C28 26 22 30 16 31 C10 30 4 26 4 20 L4 9 Z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M16 12 L16 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="16" cy="22" r="1.5" fill="currentColor"/></svg>`,
  },
]

const SPECS = [
  {
    category: 'Signal Processing',
    items: [
      { key: 'EEG Channels',      val: '256 dry electrodes' },
      { key: 'Sampling Rate',     val: '2,048 Hz' },
      { key: 'Neural Latency',    val: '< 8 ms end-to-end' },
      { key: 'Command Accuracy',  val: '99.7% (validated)' },
      { key: 'Processor',         val: '4 TOPS edge NPU, ARM Cortex-M55' },
    ],
  },
  {
    category: 'Hardware',
    items: [
      { key: 'Weight',            val: '38 g' },
      { key: 'Water Resistance',  val: 'IPX4' },
      { key: 'Battery',           val: '450 mAh — 72 hrs continuous' },
      { key: 'Charging',          val: 'USB-C magnetic dock' },
      { key: 'Materials',         val: 'Medical-grade silicone, polycarbonate' },
    ],
  },
  {
    category: 'Connectivity',
    items: [
      { key: 'Wireless',          val: 'BLE 5.3 + encrypted CAN-Bus bridge' },
      { key: 'Vehicle Interface', val: 'OBD-II (2010+) and native EV API' },
      { key: 'App Platform',      val: 'iOS 16+ / Android 12+' },
      { key: 'Encryption',        val: 'AES-256 end-to-end' },
    ],
  },
  {
    category: 'Compliance',
    items: [
      { key: 'Safety Standard',   val: 'ISO 26262 ASIL-D' },
      { key: 'Regulatory',        val: 'FCC, CE, UKCA' },
      { key: 'Testing',           val: '10M+ simulated critical-scenario hours' },
      { key: 'Clinical',          val: 'IRB-approved driver validation study' },
    ],
  },
]

const FAQS = [
  {
    q: 'How are commands validated before reaching the vehicle?',
    a: 'Every neural signal passes through four sequential validation stages: intent classification, confidence scoring, driver state assessment, and command eligibility check. A command is only routed to the vehicle if all four stages pass. If any single stage fails — due to ambiguity, low confidence, or driver inattention — the command is silently rejected and no vehicle action occurs.',
  },
  {
    q: 'What happens when the system is uncertain about my intent?',
    a: 'Commands below the confidence threshold are rejected without any vehicle response. The threshold is individually calibrated during your onboarding session and adjusts over time as the system learns your neural patterns. Borderline signals may require a secondary confirmation gesture, which you configure during setup.',
  },
  {
    q: 'Which vehicle functions can be controlled with NeuraDrive?',
    a: 'NeuraDrive supports a pre-approved set of non-safety-critical functions: navigation activation, call accept/decline, climate adjustment, audio volume, and voice assistant trigger. Steering, braking, acceleration, and all safety-critical systems are hardware-locked and cannot be accessed through neural input.',
  },
  {
    q: 'Does NeuraDrive work with my vehicle?',
    a: 'NeuraDrive is compatible with any vehicle manufactured after 2010 via the OBD-II port. Native integration is available for major EV platforms including Tesla, Rivian, and GM EVs. Vehicle compatibility can be verified using the NeuraDrive app before purchase.',
  },
  {
    q: 'How does the system ensure driver safety at all times?',
    a: 'Driver state is monitored continuously, independent of active command mode. If the system detects drowsiness, distraction, or reduced cognitive state, neural input is suspended, an alert is issued, and the driver is prompted to engage physical controls. This monitoring cannot be disabled.',
  },
  {
    q: 'How is my neural data handled and protected?',
    a: 'All neural signal processing occurs entirely on the NeuraDrive headband. Raw EEG data never leaves the device and is never stored, transmitted, or uploaded. Vehicle commands are transmitted over an AES-256 encrypted channel. NeuraDrive does not collect, sell, or share any biometric data.',
  },
]

const PROD_SPECS = [
  { val: '38g',        label: 'Weight' },
  { val: '72 hours',   label: 'Battery' },
  { val: '256 ch',     label: 'EEG channels' },
  { val: '< 8 ms',     label: 'Latency' },
  { val: 'BLE 5.3',    label: 'Wireless' },
  { val: 'IPX4',       label: 'Water rating' },
]

const COMFORT_TILES = [
  { stat: '38g',   label: 'Ultralight',  desc: 'Lighter than most glasses' },
  { stat: '72h',   label: 'Battery',     desc: 'Per single charge' },
  { stat: '60s',   label: 'Setup time',  desc: 'No calibration gel needed' },
  { stat: 'IPX4',  label: 'Rated',       desc: 'Splash and sweat resistant' },
]

// ============================================================
// RENDER
// ============================================================

app.innerHTML = `

<!-- NAVBAR -->
<header>
  <nav id="navbar" role="navigation" aria-label="Main navigation">
    <div class="nav-container">
      <a class="nav-logo" href="#" aria-label="NeuraDrive home">
        <svg class="logo-mark" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#5B8CFF"/>
              <stop offset="100%" stop-color="#39D0FF"/>
            </linearGradient>
          </defs>
          <path d="M14 2L25 8V20L14 26L3 20V8L14 2Z" stroke="url(#logoGrad)" stroke-width="1.5" fill="none"/>
          <circle cx="14" cy="14" r="3" fill="url(#logoGrad)" opacity="0.9"/>
        </svg>
        <span>NEURADRIVE</span>
      </a>

      <ul class="nav-links" role="list">
        <li><a href="#how-it-works" class="nav-link">How It Works</a></li>
        <li><a href="#product"      class="nav-link">Product</a></li>
        <li><a href="#safety"       class="nav-link">Safety</a></li>
        <li><a href="#specs"        class="nav-link">Specs</a></li>
        <li><a href="#faq"          class="nav-link">FAQ</a></li>
      </ul>

      <div class="nav-actions">
        <a href="#reserve" class="btn-nav-cta">Reserve Now</a>
      </div>

      <button class="nav-hamburger" id="hamburger"
        aria-label="Open navigation menu"
        aria-expanded="false"
        aria-controls="mobile-menu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>
  </nav>
</header>

<!-- MOBILE MENU -->
<div id="mobile-menu" class="mobile-menu" role="dialog" aria-label="Navigation menu" aria-hidden="true">
  <nav>
    <ul role="list">
      <li><a href="#how-it-works" class="mob-link">How It Works</a></li>
      <li><a href="#product"      class="mob-link">Product</a></li>
      <li><a href="#safety"       class="mob-link">Safety</a></li>
      <li><a href="#specs"        class="mob-link">Specs</a></li>
      <li><a href="#faq"          class="mob-link">FAQ</a></li>
    </ul>
    <a href="#reserve" class="btn-primary mob-cta">Reserve Now</a>
  </nav>
</div>

<!-- ============================================================ -->
<!-- HERO                                                          -->
<!-- ============================================================ -->
<section class="hero" id="hero" aria-labelledby="hero-heading">
  <div class="hero-bg"   aria-hidden="true"></div>
  <div class="hero-grid" aria-hidden="true"></div>

  <div class="container hero-layout">

    <!-- Content -->
    <div class="hero-content reveal-left">
      <div class="eyebrow-pill">
        <span class="pulse-dot" aria-hidden="true"></span>
        Neural Vehicle Interface
      </div>

      <h1 id="hero-heading">
        Control essential<br>driving functions<br>
        <span class="text-gradient">with thought&#8209;guided input.</span>
      </h1>

      <p class="hero-desc">
        NeuraDrive translates intentional brainwave patterns into verified
        in-car commands through a safety-gated interface designed for
        real-world driving.
      </p>

      <div class="hero-actions">
        <a href="#reserve"      class="btn-primary btn-glow">Reserve Now</a>
        <a href="#how-it-works" class="btn-ghost">See How It Works →</a>
      </div>

      <div class="trust-strip" role="list" aria-label="Key safety features">
        <div class="trust-item" role="listitem">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 2L13 4.5V10C13 13 10.7 15 8 15.5C5.3 15 3 13 3 10V4.5L8 2Z" stroke="currentColor" stroke-width="1.2"/>
            <path d="M6 8l1.5 1.5L11 6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Driver monitoring</span>
        </div>
        <div class="trust-item" role="listitem">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="2" y="7" width="12" height="8" rx="2" stroke="currentColor" stroke-width="1.2"/>
            <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
          <span>Multi-step validation</span>
        </div>
        <div class="trust-item" role="listitem">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="5.5" stroke="currentColor" stroke-width="1.2"/>
            <path d="M4.5 8 H6 L7 5.5 L8 10.5 L9 7 L10 8.5 L11 8 H12" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
          <span>Encrypted signals</span>
        </div>
        <div class="trust-item" role="listitem">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 1L14 3.8V9C14 12.5 11.5 15 8 15.5C4.5 15 2 12.5 2 9V3.8L8 1Z" stroke="currentColor" stroke-width="1.2"/>
          </svg>
          <span>Certified testing roadmap</span>
        </div>
      </div>
    </div>

    <!-- Visual -->
    <div class="hero-visual reveal-right" aria-label="Neural-to-vehicle signal flow visualization" role="img">
      <div class="neural-scene" aria-hidden="true">

        <div class="scene-tag scene-tag-top">
          <span class="tag-dot"></span>
          NEURAL INTENT DETECTED
        </div>

        <!-- Brain orb -->
        <div class="scene-orb-wrap">
          <div class="brain-orb">
            <div class="orb-ring r1"></div>
            <div class="orb-ring r2"></div>
            <div class="orb-ring r3"></div>
            <div class="orb-core">
              <svg viewBox="0 0 100 100" fill="none" class="brain-svg">
                <defs>
                  <linearGradient id="bGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#5B8CFF"/>
                    <stop offset="100%" stop-color="#39D0FF"/>
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="42" stroke="url(#bGrad)" stroke-width="0.8" opacity="0.35"/>
                <path d="M50 17C35 17 22 27 20 41C18 51 22 61 30 67C34 70.5 38 72 42 72L42 76C42 78.5 44 81 47 82L53 82C56 81 58 78.5 58 76L58 72C62 72 66 70.5 70 67C78 61 82 51 80 41C78 27 65 17 50 17Z"
                  stroke="url(#bGrad)" stroke-width="1.3" fill="rgba(91,140,255,0.06)"/>
                <line x1="50" y1="19" x2="50" y2="72" stroke="rgba(139,109,255,0.28)" stroke-width="0.8"/>
                <path d="M28 37 Q35 32 42 35 Q38 43 32 45" stroke="rgba(91,140,255,0.65)" stroke-width="0.9" fill="none"/>
                <path d="M24 49 Q30 46 38 49 Q34 57 28 58" stroke="rgba(91,140,255,0.55)" stroke-width="0.9" fill="none"/>
                <path d="M72 37 Q65 32 58 35 Q62 43 68 45" stroke="rgba(91,140,255,0.65)" stroke-width="0.9" fill="none"/>
                <path d="M76 49 Q70 46 62 49 Q66 57 72 58" stroke="rgba(91,140,255,0.55)" stroke-width="0.9" fill="none"/>
                <circle cx="35" cy="39" r="2"   fill="rgba(57,208,255,0.9)"><animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s"   repeatCount="indefinite"/></circle>
                <circle cx="43" cy="54" r="1.6" fill="rgba(139,109,255,0.9)"><animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.4s" begin="0.5s" repeatCount="indefinite"/></circle>
                <circle cx="65" cy="39" r="2"   fill="rgba(57,208,255,0.9)"><animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.2s" begin="0.3s" repeatCount="indefinite"/></circle>
                <circle cx="57" cy="54" r="1.6" fill="rgba(139,109,255,0.9)"><animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.8s" begin="0.8s" repeatCount="indefinite"/></circle>
              </svg>
            </div>
          </div>
        </div>

        <!-- Signal lines -->
        <div class="scene-lines">
          <svg class="conn-svg" viewBox="0 0 500 120" fill="none" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#8B6DFF" stop-opacity="0.75"/>
                <stop offset="100%" stop-color="#39D0FF" stop-opacity="0.15"/>
              </linearGradient>
            </defs>
            <path class="sig-line sl1" d="M250 0 C220 40 160 75 90 118"/>
            <path class="sig-line sl2" d="M250 0 C245 45 245 82 248 118"/>
            <path class="sig-line sl3" d="M250 0 C268 38 325 75 405 118"/>
            <circle r="3"   fill="#39D0FF" opacity="0.9"><animateMotion dur="2.2s" repeatCount="indefinite" path="M250 0 C220 40 160 75 90 118"/></circle>
            <circle r="2.5" fill="#8B6DFF" opacity="0.9"><animateMotion dur="2.5s" repeatCount="indefinite" begin="0.6s" path="M250 0 C245 45 245 82 248 118"/></circle>
            <circle r="2.2" fill="#39D0FF" opacity="0.8"><animateMotion dur="2.0s" repeatCount="indefinite" begin="1.1s" path="M250 0 C268 38 325 75 405 118"/></circle>
          </svg>
        </div>

        <!-- Command chips -->
        <div class="cmd-strip">
          <div class="cmd-chip active" data-cmd="0"><span class="chip-dot"></span>Navigate Home</div>
          <div class="cmd-chip"        data-cmd="1"><span class="chip-dot"></span>Accept Call</div>
          <div class="cmd-chip"        data-cmd="2"><span class="chip-dot"></span>Adjust Climate</div>
        </div>

        <!-- Car SVG -->
        <div class="car-wrap">
          <svg class="car-svg" viewBox="0 0 520 175" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="carGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stop-color="#5B8CFF"/>
                <stop offset="55%"  stop-color="#8B6DFF"/>
                <stop offset="100%" stop-color="#39D0FF"/>
              </linearGradient>
              <filter id="carGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <ellipse cx="260" cy="153" rx="220" ry="5" fill="rgba(91,140,255,0.07)"/>
            <line x1="25" y1="143" x2="495" y2="143" stroke="rgba(91,140,255,0.12)" stroke-width="0.8"/>
            <path d="M48 141 L46 118 Q48 106 64 103 L142 101 Q156 72 178 62 L336 59 Q368 59 400 84 L448 84 Q463 84 464 100 L465 141 Z"
              stroke="url(#carGrad)" stroke-width="1.8" fill="rgba(11,16,32,0.65)" filter="url(#carGlow)"/>
            <!-- wheel arches -->
            <path d="M70 142 Q112 100 154 142" stroke="url(#carGrad)" stroke-width="1.5" fill="rgba(7,11,22,0.85)"/>
            <path d="M382 142 Q422 100 462 142" stroke="url(#carGrad)" stroke-width="1.5" fill="rgba(7,11,22,0.85)"/>
            <!-- front wheel -->
            <circle cx="112" cy="141" r="27" stroke="url(#carGrad)" stroke-width="1.2" fill="rgba(11,16,32,0.9)"/>
            <circle cx="112" cy="141" r="14" stroke="rgba(139,109,255,0.35)" stroke-width="0.8" fill="rgba(17,24,42,0.6)"/>
            <circle cx="112" cy="141" r="4"  fill="rgba(91,140,255,0.9)"/>
            <!-- rear wheel -->
            <circle cx="422" cy="141" r="27" stroke="url(#carGrad)" stroke-width="1.2" fill="rgba(11,16,32,0.9)"/>
            <circle cx="422" cy="141" r="14" stroke="rgba(139,109,255,0.35)" stroke-width="0.8" fill="rgba(17,24,42,0.6)"/>
            <circle cx="422" cy="141" r="4"  fill="rgba(91,140,255,0.9)"/>
            <!-- windshields -->
            <path d="M148 101 Q164 73 182 63 L288 61 L288 101 Z" stroke="rgba(57,208,255,0.35)" stroke-width="0.8" fill="rgba(57,208,255,0.03)"/>
            <path d="M293 61 L348 61 Q390 61 408 84 L293 84 Z"     stroke="rgba(57,208,255,0.3)"  stroke-width="0.8" fill="rgba(57,208,255,0.03)"/>
            <!-- door lines -->
            <line x1="248" y1="101" x2="246" y2="141" stroke="rgba(91,140,255,0.2)" stroke-width="0.8"/>
            <line x1="288" y1="101" x2="292" y2="141" stroke="rgba(91,140,255,0.2)" stroke-width="0.8"/>
            <!-- headlight -->
            <rect x="47" y="109" width="17" height="4" rx="2" fill="rgba(57,208,255,0.9)" filter="url(#carGlow)"/>
            <!-- taillight -->
            <rect x="450" y="93" width="12" height="19" rx="2" fill="none" stroke="rgba(255,80,60,0.35)" stroke-width="0.8"/>
            <rect x="452" y="95" width="8"  height="8"  rx="1" fill="rgba(255,80,60,0.65)"/>
            <!-- sensor mast -->
            <line x1="198" y1="59" x2="198" y2="49" stroke="rgba(57,208,255,0.55)" stroke-width="1"/>
            <circle cx="198" cy="47" r="3" fill="rgba(57,208,255,0.65)" filter="url(#carGlow)"/>
            <!-- roofline sensor dots -->
            <circle cx="228" cy="59" r="2" fill="rgba(139,109,255,0.75)"><animate attributeName="opacity" values="0.75;0.2;0.75" dur="2s"   repeatCount="indefinite"/></circle>
            <circle cx="252" cy="59" r="2" fill="rgba(57,208,255,0.75)"><animate  attributeName="opacity" values="0.75;0.2;0.75" dur="2.3s" begin="0.4s" repeatCount="indefinite"/></circle>
            <circle cx="276" cy="59" r="2" fill="rgba(139,109,255,0.75)"><animate attributeName="opacity" values="0.75;0.2;0.75" dur="1.8s" begin="0.8s" repeatCount="indefinite"/></circle>
            <!-- data overlay -->
            <rect x="305" y="70" width="58" height="13" rx="2.5" fill="rgba(7,11,22,0.75)" stroke="rgba(57,208,255,0.22)" stroke-width="0.6"/>
            <text x="310" y="79" font-size="6" fill="rgba(57,208,255,0.7)" font-family="monospace">8ms · VALIDATED ✓</text>
          </svg>
        </div>

        <div class="scene-tag scene-tag-bot">
          <span class="tag-ok" aria-hidden="true">✓</span>
          COMMAND APPROVED
        </div>

      </div>
    </div>
  </div>

  <div class="hero-scroll-cue" aria-hidden="true">
    <span>Scroll</span>
    <div class="scroll-bar"></div>
  </div>
</section>

<!-- ============================================================ -->
<!-- PROOF METRICS                                                 -->
<!-- ============================================================ -->
<section class="metrics-section" id="metrics" aria-label="Key product metrics">
  <div class="container">
    <div class="metrics-grid">
      ${METRICS.map((m, i) => `
        <div class="metric-item" style="--delay:${i * 0.1}s">
          <div class="metric-num">
            <span class="metric-val" data-target="${m.value}" data-decimal="${Number.isInteger(m.value) ? 0 : 1}">0</span><span class="metric-unit">${m.unit}</span>
          </div>
          <div class="metric-label">${m.label}</div>
          <div class="metric-desc">${m.desc}</div>
        </div>
        ${i < METRICS.length - 1 ? '<div class="metric-divider" aria-hidden="true"></div>' : ''}
      `).join('')}
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- HOW IT WORKS                                                  -->
<!-- ============================================================ -->
<section class="section-dark" id="how-it-works" aria-labelledby="how-heading">
  <div class="container">
    <div class="section-header">
      <span class="eyebrow">The Process</span>
      <h2 id="how-heading">Three stages from intent to action.</h2>
      <p class="section-sub">NeuraDrive doesn't read your thoughts — it classifies intentional motor-cortex patterns through a validated safety pipeline before any vehicle interaction occurs.</p>
    </div>

    <div class="steps-layout">
      ${HOW_IT_WORKS.map((step, i) => `
        <div class="step-card reveal-up" style="--delay:${i * 0.15}s">
          <div class="step-number">${step.step}</div>
          <div class="step-icon-wrap">${step.iconSVG}</div>
          <h3>${step.title}</h3>
          <p class="step-primary">${step.desc}</p>
          <p class="step-detail">${step.detail}</p>
        </div>
        ${i < HOW_IT_WORKS.length - 1 ? `
          <div class="step-connector" aria-hidden="true">
            <div class="connector-line"></div>
            <div class="connector-arrow">→</div>
          </div>` : ''}
      `).join('')}
    </div>

    <div class="how-note" role="note">
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 2L13 4.5V9C13 12.5 10.7 14.8 8 15.5C5.3 14.8 3 12.5 3 9V4.5L8 2Z" stroke="currentColor" stroke-width="1.2"/>
      </svg>
      Only approved, non-safety-critical commands are supported. Braking, steering override, and emergency systems are hardware-locked and inaccessible via neural input.
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- PRODUCT SHOWCASE                                              -->
<!-- ============================================================ -->
<section class="section-alt" id="product" aria-labelledby="product-heading">
  <div class="container">
    <div class="section-header">
      <span class="eyebrow">The Hardware</span>
      <h2 id="product-heading">Precision-engineered to disappear.</h2>
      <p class="section-sub">38 grams. Medical-grade silicone. 256 dry electrodes. Built to be worn all day, across any commute.</p>
    </div>

    <div class="product-layout">
      <div class="product-visual reveal-up">
        <div class="headband-frame">
          <svg class="headband-svg" viewBox="0 0 800 320" fill="none" xmlns="http://www.w3.org/2000/svg"
            role="img" aria-label="NeuraDrive headband technical diagram with component annotations">
            <defs>
              <linearGradient id="hbGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%"   stop-color="#5B8CFF"/>
                <stop offset="100%" stop-color="#39D0FF"/>
              </linearGradient>
              <linearGradient id="hbFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stop-color="rgba(91,140,255,0.13)"/>
                <stop offset="100%" stop-color="rgba(91,140,255,0.02)"/>
              </linearGradient>
              <filter id="hbGlow">
                <feGaussianBlur stdDeviation="1.5" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <!-- Main band -->
            <path d="M248 65 Q248 40 280 36 L520 36 Q552 36 552 65 L552 138 Q552 220 400 242 Q248 220 248 138 Z"
              stroke="url(#hbGrad)" stroke-width="2" fill="url(#hbFill)" filter="url(#hbGlow)"/>
            <path d="M268 78 Q268 58 292 55 L508 55 Q532 58 532 78 L532 140 Q532 202 400 218 Q268 202 268 140 Z"
              stroke="rgba(91,140,255,0.28)" stroke-width="0.8" fill="rgba(7,11,22,0.5)"/>
            <!-- Left module -->
            <rect x="250" y="88" width="54" height="42" rx="7" stroke="url(#hbGrad)" stroke-width="1.6" fill="rgba(11,16,32,0.85)" filter="url(#hbGlow)"/>
            <line x1="260" y1="101" x2="296" y2="101" stroke="rgba(57,208,255,0.5)"  stroke-width="0.8"/>
            <line x1="260" y1="108" x2="296" y2="108" stroke="rgba(57,208,255,0.35)" stroke-width="0.6"/>
            <line x1="260" y1="115" x2="278" y2="115" stroke="rgba(57,208,255,0.35)" stroke-width="0.6"/>
            <circle cx="291" cy="119" r="3" fill="rgba(57,208,255,0.9)" filter="url(#hbGlow)"/>
            <!-- Right module -->
            <rect x="496" y="88" width="54" height="42" rx="7" stroke="rgba(91,140,255,0.5)" stroke-width="1.2" fill="rgba(11,16,32,0.6)"/>
            <line x1="506" y1="101" x2="542" y2="101" stroke="rgba(139,109,255,0.4)" stroke-width="0.7"/>
            <line x1="506" y1="108" x2="542" y2="108" stroke="rgba(139,109,255,0.3)" stroke-width="0.6"/>
            <!-- EEG top sensors -->
            <circle cx="285" cy="90" r="3.5" stroke="rgba(57,208,255,0.65)"  stroke-width="1" fill="rgba(57,208,255,0.13)"/>
            <circle cx="308" cy="73" r="3.5" stroke="rgba(57,208,255,0.65)"  stroke-width="1" fill="rgba(57,208,255,0.13)"/>
            <circle cx="332" cy="63" r="3.5" stroke="rgba(57,208,255,0.65)"  stroke-width="1" fill="rgba(57,208,255,0.13)"/>
            <circle cx="357" cy="57" r="3.5" stroke="rgba(57,208,255,0.65)"  stroke-width="1" fill="rgba(57,208,255,0.13)"/>
            <circle cx="382" cy="54" r="4"   stroke="rgba(139,109,255,0.9)"  stroke-width="1.3" fill="rgba(139,109,255,0.2)"/>
            <circle cx="400" cy="53" r="4.5" stroke="rgba(139,109,255,1)"    stroke-width="1.6" fill="rgba(139,109,255,0.24)" filter="url(#hbGlow)"/>
            <circle cx="418" cy="54" r="4"   stroke="rgba(139,109,255,0.9)"  stroke-width="1.3" fill="rgba(139,109,255,0.2)"/>
            <circle cx="443" cy="57" r="3.5" stroke="rgba(57,208,255,0.65)"  stroke-width="1" fill="rgba(57,208,255,0.13)"/>
            <circle cx="468" cy="63" r="3.5" stroke="rgba(57,208,255,0.65)"  stroke-width="1" fill="rgba(57,208,255,0.13)"/>
            <circle cx="492" cy="73" r="3.5" stroke="rgba(57,208,255,0.65)"  stroke-width="1" fill="rgba(57,208,255,0.13)"/>
            <circle cx="515" cy="90" r="3.5" stroke="rgba(57,208,255,0.65)"  stroke-width="1" fill="rgba(57,208,255,0.13)"/>
            <!-- Lower arc sensors -->
            <circle cx="276" cy="128" r="2.5" stroke="rgba(57,208,255,0.45)" stroke-width="0.8" fill="rgba(57,208,255,0.1)"/>
            <circle cx="275" cy="156" r="2.5" stroke="rgba(57,208,255,0.45)" stroke-width="0.8" fill="rgba(57,208,255,0.1)"/>
            <circle cx="282" cy="182" r="2.5" stroke="rgba(57,208,255,0.45)" stroke-width="0.8" fill="rgba(57,208,255,0.1)"/>
            <circle cx="297" cy="204" r="2.5" stroke="rgba(57,208,255,0.45)" stroke-width="0.8" fill="rgba(57,208,255,0.1)"/>
            <circle cx="524" cy="128" r="2.5" stroke="rgba(57,208,255,0.45)" stroke-width="0.8" fill="rgba(57,208,255,0.1)"/>
            <circle cx="525" cy="156" r="2.5" stroke="rgba(57,208,255,0.45)" stroke-width="0.8" fill="rgba(57,208,255,0.1)"/>
            <circle cx="518" cy="182" r="2.5" stroke="rgba(57,208,255,0.45)" stroke-width="0.8" fill="rgba(57,208,255,0.1)"/>
            <circle cx="503" cy="204" r="2.5" stroke="rgba(57,208,255,0.45)" stroke-width="0.8" fill="rgba(57,208,255,0.1)"/>
            <!-- Annotation lines left -->
            <line x1="248" y1="107" x2="198" y2="107" stroke="rgba(91,140,255,0.32)" stroke-width="0.7"/>
            <text x="195" y="110" font-size="9" fill="rgba(170,179,200,0.7)" font-family="monospace" text-anchor="end">4 TOPS NPU</text>
            <line x1="248" y1="119" x2="198" y2="130" stroke="rgba(91,140,255,0.28)" stroke-width="0.7"/>
            <text x="195" y="134" font-size="9" fill="rgba(170,179,200,0.65)" font-family="monospace" text-anchor="end">BLE 5.3 Radio</text>
            <line x1="248" y1="130" x2="198" y2="150" stroke="rgba(91,140,255,0.22)" stroke-width="0.7"/>
            <text x="195" y="154" font-size="9" fill="rgba(170,179,200,0.6)" font-family="monospace" text-anchor="end">450 mAh · 72 hr</text>
            <!-- Annotation lines right -->
            <line x1="552" y1="107" x2="602" y2="107" stroke="rgba(91,140,255,0.32)" stroke-width="0.7"/>
            <text x="605" y="110" font-size="9" fill="rgba(170,179,200,0.7)" font-family="monospace">CAN-Bus Bridge</text>
            <line x1="552" y1="119" x2="602" y2="130" stroke="rgba(91,140,255,0.28)" stroke-width="0.7"/>
            <text x="605" y="134" font-size="9" fill="rgba(170,179,200,0.65)" font-family="monospace">IPX4 Rated</text>
            <line x1="552" y1="130" x2="602" y2="150" stroke="rgba(91,140,255,0.22)" stroke-width="0.7"/>
            <text x="605" y="154" font-size="9" fill="rgba(170,179,200,0.6)" font-family="monospace">AES-256</text>
            <!-- Top label -->
            <text x="400" y="21" font-size="9" fill="rgba(170,179,200,0.5)" font-family="monospace" text-anchor="middle" letter-spacing="2">256 DRY EEG ELECTRODES</text>
            <!-- Bottom label -->
            <text x="400" y="260" font-size="9" fill="rgba(170,179,200,0.48)" font-family="monospace" text-anchor="middle" letter-spacing="1">Medical-Grade Silicone · 38g · IPX4</text>
            <!-- EEG waveforms -->
            <path d="M305 290 L312 290 L314 281 L318 300 L322 284 L326 294 L328 290 L336 290" stroke="rgba(57,208,255,0.55)"  stroke-width="1.2" fill="none" stroke-linecap="round"/>
            <path d="M390 292 L396 292 L399 282 L404 303 L409 282 L413 297 L416 292 L424 292" stroke="rgba(139,109,255,0.55)" stroke-width="1.2" fill="none" stroke-linecap="round"/>
            <path d="M464 290 L470 290 L472 284 L475 296 L479 285 L482 293 L484 290 L492 290" stroke="rgba(57,208,255,0.55)"  stroke-width="1.2" fill="none" stroke-linecap="round"/>
            <!-- Weight callout -->
            <circle cx="108" cy="232" r="32" stroke="rgba(91,140,255,0.22)" stroke-width="0.8" fill="rgba(91,140,255,0.04)" stroke-dasharray="4,3"/>
            <text x="108" y="228" font-size="20" font-weight="200" fill="rgba(245,247,255,0.72)" font-family="Inter, system-ui" text-anchor="middle">38g</text>
            <text x="108" y="244" font-size="8"  fill="rgba(170,179,200,0.48)" font-family="monospace" text-anchor="middle" letter-spacing="1">WEIGHT</text>
            <line x1="140" y1="222" x2="250" y2="194" stroke="rgba(91,140,255,0.2)" stroke-width="0.7"/>
            <!-- Sampling callout -->
            <circle cx="692" cy="232" r="32" stroke="rgba(57,208,255,0.22)" stroke-width="0.8" fill="rgba(57,208,255,0.03)" stroke-dasharray="4,3"/>
            <text x="692" y="228" font-size="16" font-weight="200" fill="rgba(245,247,255,0.72)" font-family="Inter, system-ui" text-anchor="middle">2 kHz</text>
            <text x="692" y="244" font-size="8"  fill="rgba(170,179,200,0.48)" font-family="monospace" text-anchor="middle" letter-spacing="1">SAMPLING</text>
            <line x1="660" y1="222" x2="552" y2="194" stroke="rgba(57,208,255,0.2)" stroke-width="0.7"/>
          </svg>
        </div>
      </div>

      <div class="product-specs-grid">
        ${PROD_SPECS.map((s, i) => `
          <div class="prod-spec-tile reveal-up" style="--delay:${i * 0.07}s">
            <span class="prod-spec-val">${s.val}</span>
            <span class="prod-spec-label">${s.label}</span>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- COMMAND FLOW DEMO                                             -->
<!-- ============================================================ -->
<section class="section-dark" id="experience" aria-labelledby="experience-heading">
  <div class="container">
    <div class="experience-layout">

      <div class="experience-content reveal-left">
        <span class="eyebrow">How Commands Work</span>
        <h2 id="experience-heading">Validated intent,<br>not raw thought.</h2>
        <p>NeuraDrive doesn't interpret unfiltered brain activity. It classifies specific, repeated intentional patterns — then validates them through four independent safety checks before any vehicle function responds.</p>
        <p style="margin-top:1rem">Only a narrow set of pre-approved functions are accessible. You are always in physical control.</p>

        <div class="supported-cmds">
          <p class="cmds-label">Supported commands</p>
          <div class="cmd-tags">
            <span class="cmd-tag">Open navigation</span>
            <span class="cmd-tag">Accept call</span>
            <span class="cmd-tag">Adjust climate</span>
            <span class="cmd-tag">Voice assistant</span>
            <span class="cmd-tag">Audio volume</span>
          </div>
        </div>
      </div>

      <div class="experience-demo reveal-right">
        <div class="demo-panel" role="region" aria-label="Command flow visualization">
          <div class="demo-header">
            <span class="demo-title">NeuraDrive Interface</span>
            <span class="demo-status"><span class="live-pulse" aria-hidden="true"></span>LIVE</span>
          </div>

          <!-- Step 1 -->
          <div class="demo-step">
            <div class="demo-step-label">
              <span class="demo-step-num" aria-hidden="true">1</span>
              <span>Neural signal captured</span>
            </div>
            <div class="demo-waveform" aria-label="EEG waveform display">
              <svg viewBox="0 0 280 46" fill="none" class="waveform-svg" aria-hidden="true">
                <path class="wave-path" stroke-dasharray="400" stroke-dashoffset="0"
                  d="M0 23 L18 23 L22 9 L27 37 L32 14 L37 30 L41 23 L58 23 L63 7 L68 39 L73 17 L78 28 L82 23 L100 23 L104 11 L109 35 L114 18 L119 27 L123 23 L142 23 L147 8 L152 38 L157 15 L162 29 L166 23 L185 23 L189 10 L194 36 L199 16 L204 27 L208 23 L226 23 L231 12 L236 34 L241 18 L246 26 L250 23 L268 23"
                  stroke="#5B8CFF" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M0 31 L18 31 L21 25 L25 37 L29 28 L33 34 L37 31 L55 31" stroke="#39D0FF" stroke-width="0.8" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.45"/>
              </svg>
              <div class="wave-channels" aria-hidden="true">
                <span>C3</span><span>Cz</span><span>C4</span>
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="demo-step">
            <div class="demo-step-label">
              <span class="demo-step-num" aria-hidden="true">2</span>
              <span>Intent classified</span>
            </div>
            <div class="demo-classification">
              <div class="class-result">
                <span class="class-label">DETECTED INTENT</span>
                <span class="class-value" id="intent-label">ADJUST CLIMATE</span>
              </div>
              <div class="confidence-bar-wrap">
                <span class="conf-label">Confidence</span>
                <div class="confidence-bar" role="progressbar" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100" aria-label="Intent confidence 94.3%">
                  <div class="confidence-fill" style="width:94%"></div>
                </div>
                <span class="conf-pct">94.3%</span>
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="demo-step">
            <div class="demo-step-label">
              <span class="demo-step-num" aria-hidden="true">3</span>
              <span>Safety gate passed</span>
            </div>
            <div class="demo-gates" aria-label="Safety validation checks">
              <div class="gate pass">
                <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l2.5 2.5L10 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Confidence threshold
              </div>
              <div class="gate pass">
                <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l2.5 2.5L10 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Driver attention check
              </div>
              <div class="gate pass">
                <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l2.5 2.5L10 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Command eligibility
              </div>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="demo-step">
            <div class="demo-step-label">
              <span class="demo-step-num" aria-hidden="true">4</span>
              <span>Command dispatched</span>
            </div>
            <div class="demo-result">
              <div class="result-badge">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 8l2.5 2.5L12 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Climate: +2°C
              </div>
              <span class="result-latency">7.8 ms</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- COMFORT SECTION                                               -->
<!-- ============================================================ -->
<section class="section-mid" id="comfort" aria-labelledby="comfort-heading">
  <div class="container">
    <div class="comfort-layout">

      <div class="comfort-content reveal-left">
        <span class="eyebrow">Built for Drivers</span>
        <h2 id="comfort-heading">Wear it all day.<br>Feel nothing but the road.</h2>
        <p>NeuraDrive weighs 38 grams and adapts to any head shape in under 60 seconds. Medical-grade silicone electrodes stay comfortable across long commutes and extended journeys — no gel, no calibration prep required.</p>

        <div class="comfort-tiles">
          ${COMFORT_TILES.map((t, i) => `
            <div class="comfort-tile reveal-up" style="--delay:${i * 0.1}s">
              <span class="comfort-val">${t.stat}</span>
              <span class="comfort-label">${t.label}</span>
              <span class="comfort-desc">${t.desc}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="comfort-visual reveal-right">
        <div class="comfort-device-card">
          <svg viewBox="0 0 280 220" fill="none" aria-label="NeuraDrive headband perspective view showing ergonomic design">
            <defs>
              <linearGradient id="cvGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%"   stop-color="#5B8CFF"/>
                <stop offset="100%" stop-color="#39D0FF"/>
              </linearGradient>
              <filter id="cvGlow">
                <feGaussianBlur stdDeviation="2" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <ellipse cx="140" cy="200" rx="110" ry="7" fill="rgba(91,140,255,0.09)"/>
            <!-- Left arm -->
            <path d="M30 75 L30 100 Q30 110 42 112 L82 114 Q92 114 94 102 L94 78 Q94 68 82 66 L44 64 Q32 64 30 75Z"
              stroke="url(#cvGrad)" stroke-width="1.8" fill="rgba(11,16,32,0.88)" filter="url(#cvGlow)"/>
            <rect x="44" y="74" width="30" height="20" rx="4" fill="rgba(91,140,255,0.14)" stroke="rgba(57,208,255,0.6)" stroke-width="1"/>
            <line x1="50" y1="82" x2="68" y2="82" stroke="rgba(57,208,255,0.5)" stroke-width="0.8"/>
            <line x1="50" y1="87" x2="68" y2="87" stroke="rgba(57,208,255,0.35)" stroke-width="0.6"/>
            <circle cx="70" cy="91" r="3" fill="rgba(57,208,255,0.95)" filter="url(#cvGlow)"/>
            <!-- Band bridge -->
            <path d="M94 72 Q152 22 214 64" stroke="url(#cvGrad)" stroke-width="2" fill="none" filter="url(#cvGlow)"/>
            <path d="M94 100 Q152 50 214 92" stroke="rgba(91,140,255,0.4)" stroke-width="1.2" fill="none"/>
            <!-- Right arm -->
            <path d="M214 64 L214 86 Q214 94 222 94 L250 95 Q258 95 260 88 L260 68 Q260 61 252 60 L222 59 Q214 59 214 68Z"
              stroke="rgba(91,140,255,0.55)" stroke-width="1.2" fill="rgba(11,16,32,0.7)"/>
            <!-- Sensor dots -->
            <circle cx="118" cy="50"  r="3"   stroke="rgba(57,208,255,0.7)"  stroke-width="0.9" fill="rgba(57,208,255,0.18)"/>
            <circle cx="140" cy="38"  r="3"   stroke="rgba(57,208,255,0.7)"  stroke-width="0.9" fill="rgba(57,208,255,0.18)"/>
            <circle cx="162" cy="30"  r="3.5" stroke="rgba(139,109,255,0.9)" stroke-width="1.1" fill="rgba(139,109,255,0.22)"/>
            <circle cx="184" cy="34"  r="3"   stroke="rgba(57,208,255,0.7)"  stroke-width="0.9" fill="rgba(57,208,255,0.18)"/>
            <circle cx="202" cy="48"  r="2.5" stroke="rgba(57,208,255,0.55)" stroke-width="0.8" fill="rgba(57,208,255,0.14)"/>
          </svg>
          <div class="comfort-badge-row">
            <span class="comfort-badge">Medical-grade silicone</span>
            <span class="comfort-badge">Adjustable fit</span>
            <span class="comfort-badge">Dry electrodes</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- SAFETY SECTION                                                -->
<!-- ============================================================ -->
<section class="section-dark" id="safety" aria-labelledby="safety-heading">
  <div class="container">
    <div class="section-header">
      <span class="eyebrow">Safety Architecture</span>
      <h2 id="safety-heading">Six independent layers of protection.</h2>
      <p class="section-sub">Safety isn't a feature — it's the foundation. Every NeuraDrive command passes through multiple hardware-enforced checks that cannot be overridden by software.</p>
    </div>

    <div class="safety-grid">
      ${SAFETY_PILLARS.map((p, i) => `
        <div class="safety-card reveal-up" style="--delay:${(i % 3) * 0.12}s">
          <div class="safety-icon safety-icon--${p.color}" aria-hidden="true">${p.icon}</div>
          <h3>${p.title}</h3>
          <p class="safety-desc">${p.desc}</p>
          <p class="safety-detail">${p.detail}</p>
        </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- SPECS SECTION                                                 -->
<!-- ============================================================ -->
<section class="section-mid" id="specs" aria-labelledby="specs-heading">
  <div class="container">
    <div class="section-header">
      <span class="eyebrow">Technical Specifications</span>
      <h2 id="specs-heading">Built to exacting standards.</h2>
    </div>

    <div class="specs-layout">
      ${SPECS.map((cat, ci) => `
        <div class="spec-category reveal-up" style="--delay:${ci * 0.1}s">
          <h3 class="spec-cat-title">${cat.category}</h3>
          <div class="spec-rows">
            ${cat.items.map(item => `
              <div class="spec-row">
                <span class="spec-key">${item.key}</span>
                <span class="spec-val">${item.val}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>

    <div class="specs-download">
      <a href="#" class="btn-ghost" aria-label="Download NeuraDrive technical datasheet PDF">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 2v8m0 0l-2.5-2.5M8 10l2.5-2.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="2" y="12" width="12" height="2" rx="1" fill="currentColor" opacity="0.6"/>
        </svg>
        Download Technical Sheet
      </a>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- FAQ SECTION                                                   -->
<!-- ============================================================ -->
<section class="section-dark" id="faq" aria-labelledby="faq-heading">
  <div class="container">
    <div class="section-header">
      <span class="eyebrow">Frequently Asked</span>
      <h2 id="faq-heading">Questions and answers.</h2>
    </div>

    <div class="faq-list">
      ${FAQS.map((faq, i) => `
        <div class="faq-item">
          <button class="faq-trigger"
            aria-expanded="false"
            aria-controls="faq-body-${i}"
            id="faq-trigger-${i}">
            <span>${faq.q}</span>
            <svg class="faq-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 6l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="faq-body"
            id="faq-body-${i}"
            role="region"
            aria-labelledby="faq-trigger-${i}"
            hidden>
            <p>${faq.a}</p>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- FINAL CTA                                                     -->
<!-- ============================================================ -->
<section class="cta-section" id="reserve" aria-labelledby="cta-heading">
  <div class="cta-bg"           aria-hidden="true"></div>
  <div class="cta-grid-overlay" aria-hidden="true"></div>
  <div class="container">
    <div class="cta-inner reveal-up">
      <span class="eyebrow eyebrow--light">Available for Pilot Programs</span>
      <h2 id="cta-heading">Join the first wave of<br>thought-guided driving.</h2>
      <p class="cta-sub">Reserve early access, explore pilot opportunities, or speak with the team about automotive integration partnerships.</p>
      <div class="cta-actions">
        <a href="#" class="btn-primary btn-glow btn-lg">Reserve Now</a>
        <a href="#" class="btn-ghost btn-lg">Schedule a Demo</a>
      </div>
      <div class="cta-reassurance" role="list" aria-label="Reservation terms">
        <span role="listitem">
          <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l2.5 2.5L10 3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          No commitment required
        </span>
        <span role="listitem">
          <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l2.5 2.5L10 3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Limited pilot release
        </span>
        <span role="listitem">
          <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l2.5 2.5L10 3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Response within 48 hours
        </span>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- FOOTER                                                        -->
<!-- ============================================================ -->
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">

      <div class="footer-brand">
        <a class="footer-logo" href="#" aria-label="NeuraDrive home">
          <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="footerGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%"   stop-color="#5B8CFF"/>
                <stop offset="100%" stop-color="#39D0FF"/>
              </linearGradient>
            </defs>
            <path d="M14 2L25 8V20L14 26L3 20V8L14 2Z" stroke="url(#footerGrad)" stroke-width="1.5" fill="none"/>
            <circle cx="14" cy="14" r="3" fill="url(#footerGrad)" opacity="0.8"/>
          </svg>
          <span>NEURADRIVE</span>
        </a>
        <p>Wearable neural interface for precision vehicle control. Designed for real-world driving — safe, validated, and restrained.</p>
        <p class="footer-tagline">Neural Vehicle Interface &middot; Gen 3</p>
      </div>

      <nav class="footer-nav" aria-label="Product pages">
        <h4>Product</h4>
        <ul role="list">
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#product">Hardware</a></li>
          <li><a href="#experience">Command Flow</a></li>
          <li><a href="#safety">Safety</a></li>
          <li><a href="#specs">Specifications</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>

      <nav class="footer-nav" aria-label="Company pages">
        <h4>Company</h4>
        <ul role="list">
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div class="footer-col">
        <h4>Stay Updated</h4>
        <p>Get pilot program updates and launch news.</p>
        <form class="footer-form" onsubmit="return false" aria-label="Newsletter signup">
          <label for="footer-email" class="sr-only">Email address</label>
          <input type="email" id="footer-email" class="footer-input"
            placeholder="your@email.com"
            autocomplete="email"
            aria-label="Email address"/>
          <button type="submit" class="footer-submit" aria-label="Subscribe to updates">→</button>
        </form>
        <div class="footer-legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Accessibility</a>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <p>© 2026 NeuraDrive, Inc. All rights reserved.</p>
      <p class="footer-disclaimer">NeuraDrive is a pre-production pilot product. For use by licensed drivers in jurisdictions where neural-assisted driving is permitted under applicable law.</p>
    </div>
  </div>
</footer>
`

// ============================================================
// REDUCED MOTION CHECK
// ============================================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// ============================================================
// NAVBAR — scroll glass + active section
// ============================================================
const navbar     = document.getElementById('navbar')
const navLinks   = document.querySelectorAll('.nav-link')
const sections   = ['hero', 'how-it-works', 'product', 'experience', 'comfort', 'safety', 'specs', 'faq', 'reserve']
const sectionMap = { 'hero': '', 'how-it-works': '#how-it-works', 'product': '#product', 'experience': '#experience', 'comfort': '#comfort', 'safety': '#safety', 'specs': '#specs', 'faq': '#faq', 'reserve': '#reserve' }

// Navbar scroll glass
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40)
  updateActiveNav()
}, { passive: true })

function updateActiveNav() {
  const scrollY = window.scrollY + 100

  let activeSection = ''
  sections.forEach(id => {
    const el = document.getElementById(id)
    if (el && el.offsetTop <= scrollY) activeSection = id
  })

  navLinks.forEach(link => {
    const href = link.getAttribute('href').replace('#', '')
    link.classList.toggle('active', href === activeSection)
  })
}

// ============================================================
// MOBILE MENU
// ============================================================
const hamburger  = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobile-menu')

function closeMobileMenu() {
  mobileMenu.classList.remove('open')
  mobileMenu.setAttribute('aria-hidden', 'true')
  hamburger.setAttribute('aria-expanded', 'false')
  hamburger.classList.remove('open')
}

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('open')
  if (isOpen) {
    closeMobileMenu()
  } else {
    mobileMenu.classList.add('open')
    mobileMenu.setAttribute('aria-hidden', 'false')
    hamburger.setAttribute('aria-expanded', 'true')
    hamburger.classList.add('open')
  }
})

document.querySelectorAll('.mob-link, .mob-cta').forEach(a => {
  a.addEventListener('click', closeMobileMenu)
})

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMobileMenu()
})

// ============================================================
// FAQ ACCORDION
// ============================================================
document.querySelectorAll('.faq-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const expanded = trigger.getAttribute('aria-expanded') === 'true'
    const bodyId   = trigger.getAttribute('aria-controls')
    const body     = document.getElementById(bodyId)

    // Collapse all others
    document.querySelectorAll('.faq-trigger').forEach(t => {
      t.setAttribute('aria-expanded', 'false')
      const b = document.getElementById(t.getAttribute('aria-controls'))
      if (b) b.hidden = true
    })

    // Toggle this one
    if (!expanded) {
      trigger.setAttribute('aria-expanded', 'true')
      body.hidden = false
    }
  })

  // Keyboard support
  trigger.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      trigger.click()
    }
  })
})

// ============================================================
// COUNT-UP ANIMATION
// ============================================================
function animateCountUp(el) {
  if (prefersReducedMotion) {
    el.textContent = el.dataset.target
    return
  }

  const target   = parseFloat(el.dataset.target)
  const decimals = parseInt(el.dataset.decimal || '0')
  const duration = 1800
  const start    = performance.now()

  function tick(now) {
    const elapsed  = now - start
    const progress = Math.min(elapsed / duration, 1)
    // Ease-out cubic
    const eased    = 1 - Math.pow(1 - progress, 3)
    const current  = eased * target
    el.textContent = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString()
    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

// ============================================================
// COMMAND CHIP CYCLING (hero)
// ============================================================
const chips       = document.querySelectorAll('.cmd-chip')
let   activeChip  = 0

if (!prefersReducedMotion && chips.length) {
  setInterval(() => {
    chips[activeChip].classList.remove('active')
    activeChip = (activeChip + 1) % chips.length
    chips[activeChip].classList.add('active')
  }, 2200)
}

// ============================================================
// INTERSECTION OBSERVER — scroll reveal + count-up trigger
// ============================================================
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12 }
)

const metricObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        const valEl = entry.target.querySelector('.metric-val')
        if (valEl) animateCountUp(valEl)
        metricObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.3 }
)

// Reveal elements
document.querySelectorAll(
  '.reveal-up, .reveal-left, .reveal-right, .step-card, .safety-card, .spec-category, .comfort-tile, .prod-spec-tile'
).forEach(el => revealObserver.observe(el))

// Metric count-up
document.querySelectorAll('.metric-item').forEach(el => metricObserver.observe(el))

// Hero content — trigger immediately (already in viewport)
requestAnimationFrame(() => {
  document.querySelectorAll('.hero .reveal-left, .hero .reveal-right').forEach(el => {
    // Small delay so CSS transition runs
    setTimeout(() => el.classList.add('visible'), 120)
  })
})

// CTA reveal
document.querySelectorAll('.cta-inner.reveal-up').forEach(el => revealObserver.observe(el))
