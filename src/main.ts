import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

<header class="topbar">
  <div class="logo">🚀 ABTalks</div>
  <div class="badge">60-DAY EXPERIMENT</div>
</header>

<main>

  <!-- HERO -->
  <section class="hero">

    <div class="hero-content">

      <p class="eyebrow">YOUR DEVELOPER JOURNEY</p>

      <h1>
        Discover what kind of
        <span>developer</span> you are.
      </h1>

      <p class="hero-text">
        Don't guess your developer identity.
        Build for 60 days, collect evidence,
        reflect on what you learn, and discover
        where you naturally thrive.
      </p>

      <button id="start" class="primary-btn">
        Start Day 1 →
      </button>

    </div>

    <div class="experiment-card">
      <div class="orbit">✦</div>
      <div class="experiment-number">60</div>

      <div class="experiment-label">
        DAYS OF<br>EXPERIMENTATION
      </div>
    </div>

  </section>


  <!-- DAY 1 -->
  <section id="mission" class="mission hidden">

    <div class="section-heading">

      <div>
        <p class="eyebrow">DAY 01 / 60</p>
        <h2>Your first experiment.</h2>
      </div>

      <div class="progress-label">
        <span>1%</span>

        <div class="progress">
          <div class="progress-fill"></div>
        </div>
      </div>

    </div>


    <div class="mission-grid">

      <div class="mission-card">

        <div class="step">

          <span>01</span>

          <div>
            <h3>🎯 Intent</h3>

            <p>
              What do you want to explore today?
            </p>

            <textarea
              id="intent"
              placeholder="I want to explore frontend development..."
            ></textarea>
          </div>

        </div>


        <div class="step">

          <span>02</span>

          <div>
            <h3>🛠 Build</h3>

            <p>
              Turn your curiosity into something real.
            </p>

            <textarea
              id="build"
              placeholder="Today I'll build..."
            ></textarea>
          </div>

        </div>


        <div class="step">

          <span>03</span>

          <div>
            <h3>📸 Evidence</h3>

            <p>
              Show what actually happened.
            </p>

            <textarea
              id="evidence"
              placeholder="GitHub link, screenshot, demo..."
            ></textarea>
          </div>

        </div>


        <div class="step">

          <span>04</span>

          <div>
            <h3>🪞 Reflection</h3>

            <p>
              What did today's experiment teach you?
            </p>

            <textarea
              id="reflection"
              placeholder="I learned that..."
            ></textarea>
          </div>

        </div>


        <button
          id="saveDay"
          class="primary-btn full"
        >
          Complete Day 1 →
        </button>

      </div>


      <aside class="insight-card">

        <p class="eyebrow">
          THE ABTALKS METHOD
        </p>

        <h3>
          You're not building a streak.
          You're building <span>evidence.</span>
        </h3>

        <p>
          Every experiment gives ABTalks another
          signal about the kind of developer you
          might become.
        </p>

        <div class="loop">

          <div>INTENT</div>
          <span>→</span>

          <div>BUILD</div>
          <span>→</span>

          <div>EVIDENCE</div>
          <span>→</span>

          <div>REFLECT</div>

        </div>

      </aside>

    </div>

  </section>


  <!-- ADAPTIVE NEXT EXPERIMENT -->
  <section
    id="nextExperiment"
    class="next-experiment hidden"
  >

    <div class="section-heading">

      <div>

        <p class="eyebrow">
          ABTALKS ADAPTIVE ENGINE
        </p>

        <h2>
          Your next experiment.
        </h2>

        <p class="next-description">
          ABTalks looks at your current signals and chooses
          an experiment that tests what you haven't discovered yet.
        </p>

      </div>

      <div class="experiment-badge">
        🧪 ADAPTIVE
      </div>

    </div>


    <div class="next-card">

      <div class="next-icon">
        🧭
      </div>


      <div class="next-content">

        <p class="eyebrow">
          SIGNAL TO TEST
        </p>

        <h3 id="nextSignal">
          Systems Thinking
        </h3>

        <p id="nextReason">
          We need more evidence about how you approach
          structure, logic and systems.
        </p>


        <div class="experiment-meta">

          <span id="nextDifficulty">
            🟡 STRETCH
          </span>

          <span>
            ⏱ 45 MIN
          </span>

        </div>


        <div class="challenge-box">

          <p class="challenge-label">
            YOUR CHALLENGE
          </p>

          <h4 id="nextChallenge">
            Build a small feature that connects your
            existing project to structured data.
          </h4>

          <p id="nextInstructions">
            Focus less on visual design and more on
            architecture, logic and how the pieces work together.
          </p>

        </div>


        <button
          id="acceptExperiment"
          class="primary-btn"
        >
          Accept Experiment →
        </button>

      </div>

    </div>


    <!-- DAY 2 -->
    <div
      id="day2Mission"
      class="day2-mission hidden"
    >

      <h3>
        Run the experiment.
      </h3>

      <p>
        This experiment was selected from your Day 1 signals.
        Now create new evidence.
      </p>


      <div>

        <h3>Intent</h3>

        <p>
          What are you trying to discover?
        </p>

        <textarea
          id="day2Intent"
          placeholder="I want to discover..."
        ></textarea>

      </div>


      <div>

        <h3>Build</h3>

        <p>
          What will you actually create?
        </p>

        <textarea
          id="day2Build"
          placeholder="I will build..."
        ></textarea>

      </div>


      <div>

        <h3>Evidence</h3>

        <p>
          What proves that you completed it?
        </p>

        <textarea
          id="day2Evidence"
          placeholder="My evidence will be..."
        ></textarea>

      </div>


      <div>

        <h3>Reflection</h3>

        <p>
          What did this experiment teach you?
        </p>

        <textarea
          id="day2Reflection"
          placeholder="I discovered..."
        ></textarea>

      </div>


      <button
        id="completeDay2"
        class="primary-btn full"
      >
        Complete Day 2 →
      </button>

    </div>

  </section>


  <!-- DASHBOARD -->
  <section class="dashboard">

    <div class="section-heading">

      <div>

        <p class="eyebrow">
          YOUR SIGNALS
        </p>

        <h2>
          Developer Identity
        </h2>

      </div>

    </div>


    <div class="stats">

      <div class="stat-card">

        <span>🔥</span>

        <strong id="days">
          0
        </strong>

        <p>
          Days Completed
        </p>

      </div>


      <div class="stat-card">

        <span>🛠</span>

        <strong id="projects">
          0
        </strong>

        <p>
          Projects Built
        </p>

      </div>


      <div class="stat-card identity">

        <span>🧭</span>

        <strong id="identity">
          Unknown
        </strong>

        <p>
          Current Signal
        </p>

      </div>

    </div>


    <!-- RESULT -->
    <div
      id="result"
      class="result hidden"
    >

      <p class="eyebrow">
        YOUR FIRST SIGNAL
      </p>

      <h2 id="resultTitle"></h2>

      <p id="resultText"></p>


      <div class="signal-grid">

        <div class="signal">

          <div class="signal-top">

            <span>
              🎨 Creative
            </span>

            <strong id="creativeScore">
              0
            </strong>

          </div>

          <div class="signal-bar">

            <div
              id="creativeBar"
              class="signal-fill"
            ></div>

          </div>

        </div>


        <div class="signal">

          <div class="signal-top">

            <span>
              ⚙️ Systems
            </span>

            <strong id="systemsScore">
              0
            </strong>

          </div>

          <div class="signal-bar">

            <div
              id="systemsBar"
              class="signal-fill"
            ></div>

          </div>

        </div>


        <div class="signal">

          <div class="signal-top">

            <span>
              📊 Data
            </span>

            <strong id="dataScore">
              0
            </strong>

          </div>

          <div class="signal-bar">

            <div
              id="dataBar"
              class="signal-fill"
            ></div>

          </div>

        </div>


        <div class="signal">

          <div class="signal-top">

            <span>
              🧠 Problem Solving
            </span>

            <strong id="problemScore">
              0
            </strong>

          </div>

          <div class="signal-bar">

            <div
              id="problemBar"
              class="signal-fill"
            ></div>

          </div>

        </div>

      </div>


      <div class="identity-note">

        <span>
          🧪
        </span>

        <p>

          <strong>
            Not a final label.
          </strong>

          This is only your Day 1 signal.
          Keep experimenting — your identity
          can change as your evidence grows.

        </p>

      </div>

    </div>

  </section>


  <!-- TIMELINE -->
  <section class="timeline-section">

    <div class="section-heading">

      <div>

        <p class="eyebrow">
          YOUR EXPERIMENT
        </p>

        <h2>
          60-Day Timeline
        </h2>

      </div>


      <div class="timeline-count">

        <strong id="timelineDays">
          0
        </strong>

        <span>
          / 60 days
        </span>

      </div>

    </div>


    <div class="timeline-day active">

      <div class="day-number">
        01
      </div>

      <div class="day-content">

        <strong>
          Discover
        </strong>

        <p>
          Explore what kind of developer you enjoy being.
        </p>

      </div>

      <span class="day-status">
        ✓
      </span>

    </div>


    <div class="timeline-day">

      <div class="day-number">
        02
      </div>

      <div class="day-content">

        <strong>
          Experiment
        </strong>

        <p>
          Try something outside your comfort zone.
        </p>

      </div>

      <span class="day-status">
        LOCKED
      </span>

    </div>


    <div class="timeline-day">

      <div class="day-number">
        03
      </div>

      <div class="day-content">

        <strong>
          Build
        </strong>

        <p>
          Create something small and collect evidence.
        </p>

      </div>

      <span class="day-status">
        LOCKED
      </span>

    </div>


    <div class="timeline-day">

      <div class="day-number">
        04–07
      </div>

      <div class="day-content">

        <strong>
          Find Your Pattern
        </strong>

        <p>
          Notice what keeps pulling your attention.
        </p>

      </div>

      <span class="day-status">
        LOCKED
      </span>

    </div>


    <div class="timeline-day">

      <div class="day-number">
        08–30
      </div>

      <div class="day-content">

        <strong>
          Go Deeper
        </strong>

        <p>
          Build more. Reflect more. Collect stronger signals.
        </p>

      </div>

      <span class="day-status">
        LOCKED
      </span>

    </div>


    <div class="timeline-day">

      <div class="day-number">
        31–60
      </div>

      <div class="day-content">

        <strong>
          Developer Identity
        </strong>

        <p>
          Your evidence starts telling a clearer story.
        </p>

      </div>

      <span class="day-status">
        LOCKED
      </span>

    </div>

  </section>


  <!-- EVIDENCE VAULT -->
  <section class="evidence-section">

    <div class="section-heading">

      <div>

        <p class="eyebrow">
          YOUR PROOF
        </p>

        <h2>
          Evidence Vault
        </h2>

      </div>


      <div class="timeline-count">

        <strong id="evidenceCount">
          0
        </strong>

        <span>
          pieces collected
        </span>

      </div>

    </div>


    <div class="evidence-card">

      <div class="evidence-icon">
        📸
      </div>


      <div>

        <h3>
          Latest Evidence
        </h3>

        <p id="evidencePreview">
          Your experiments will appear here as evidence.
        </p>

        <div
          id="evidenceHistory"
          class="evidence-history"
        ></div>

        <span
          class="evidence-date"
          id="evidenceDate"
        >
          Waiting for your first experiment
        </span>

      </div>

    </div>

  </section>

</main>
`;


/* -------------------------------- */
/* TYPES */
/* -------------------------------- */

type Signals = {
  creative: number;
  systems: number;
  data: number;
  problem: number;
};


type EvidenceItem = {
  day: number;
  evidence: string;
  build: string;
  identity: string;
  signals: Signals;
  date: string;
};


/* -------------------------------- */
/* SIGNAL ENGINE */
/* -------------------------------- */

const calculateSignals = (
  intent: string,
  build: string,
  evidence: string,
  reflection: string
): Signals => {

  const text =
    `${intent} ${build} ${evidence} ${reflection}`.toLowerCase();


  const score = (keywords: string[]) => {

    let value = 10;

    keywords.forEach((keyword) => {

      if (text.includes(keyword)) {
        value += 15;
      }

    });

    return Math.min(value, 100);
  };


  return {

    creative: score([
      "design",
      "creative",
      "ui",
      "ux",
      "frontend",
      "visual",
      "website",
      "interface",
      "animation",
      "color",
      "idea"
    ]),


    systems: score([
      "backend",
      "api",
      "database",
      "system",
      "architecture",
      "logic",
      "structure",
      "debug",
      "code",
      "server"
    ]),


    data: score([
      "data",
      "dataset",
      "analysis",
      "analytics",
      "python",
      "machine learning",
      "ml",
      "statistics",
      "chart",
      "visualization"
    ]),


    problem: score([
      "problem",
      "solve",
      "solution",
      "challenge",
      "debug",
      "algorithm",
      "optimization",
      "fix",
      "research",
      "experiment"
    ])

  };

};


/* -------------------------------- */
/* IDENTITY ENGINE */
/* -------------------------------- */

const getIdentity = (
  creative: number,
  systems: number,
  data: number,
  problem: number
): string => {

  const signals = [

    {
      name: "Creative Builder",
      score: creative
    },

    {
      name: "Systems Thinker",
      score: systems
    },

    {
      name: "Data Explorer",
      score: data
    },

    {
      name: "Problem Solver",
      score: problem
    }

  ];


  signals.sort(
    (a, b) => b.score - a.score
  );


  if (
    signals[0].score -
    signals[1].score <= 10
  ) {

    return "Hybrid Builder";

  }


  return signals[0].name;

};


/* -------------------------------- */
/* EVIDENCE RENDERER */
/* -------------------------------- */

const renderEvidence = () => {

  const savedEvidence: EvidenceItem[] =
    JSON.parse(
      localStorage.getItem("abtalks_evidence") || "[]"
    );


  const count =
    document.querySelector("#evidenceCount")!;

  count.textContent =
    String(savedEvidence.length);


  const timeline =
    document.querySelector("#timelineDays")!;

  timeline.textContent =
    String(savedEvidence.length);


  const history =
    document.querySelector("#evidenceHistory")!;


  history.innerHTML =
    savedEvidence
      .slice()
      .reverse()
      .map((item) => {

        return `

          <div class="evidence-history-item">

            <div class="evidence-history-top">

              <strong>
                Day ${item.day}
              </strong>

              <span>
                ${item.date}
              </span>

            </div>

            <h3>
              ${item.build}
            </h3>

            <p>
              ${item.evidence}
            </p>

            <div class="evidence-signals">

              <span>
                🎨 ${item.signals.creative}
              </span>

              <span>
                ⚙️ ${item.signals.systems}
              </span>

              <span>
                📊 ${item.signals.data}
              </span>

              <span>
                🧠 ${item.signals.problem}
              </span>

            </div>

            <div class="evidence-identity">
              ${item.identity}
            </div>

          </div>

        `;

      })
      .join("");

};


/* -------------------------------- */
/* START DAY 1 */
/* -------------------------------- */

document
  .querySelector("#start")!
  .addEventListener("click", () => {

    const mission =
      document.querySelector("#mission")!;


    mission.classList.remove("hidden");


    mission.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });


/* -------------------------------- */
/* COMPLETE DAY 1 */
/* -------------------------------- */
document
  .querySelector("#saveDay")!
  .addEventListener("click", () => {

    const intent =
      (document.querySelector("#intent") as HTMLTextAreaElement)
        .value.trim();

    const build =
      (document.querySelector("#build") as HTMLTextAreaElement)
        .value.trim();

    const evidence =
      (document.querySelector("#evidence") as HTMLTextAreaElement)
        .value.trim();

    const reflection =
      (document.querySelector("#reflection") as HTMLTextAreaElement)
        .value.trim();

    


    /* VALIDATION */

    if (
      !intent ||
      !build ||
      !reflection
    ) {

      alert(
        "Please complete Intent, Build, and Reflection before finishing Day 1."
      );

      return;

    }


    /* SIGNALS */

    const signals =
      calculateSignals(
        intent,
        build,
        evidence,
        reflection
      );


    /* IDENTITY */

    const identity =
      getIdentity(
        signals.creative,
        signals.systems,
        signals.data,
        signals.problem
      );


    /* ADAPTIVE ENGINE */

    const signalList = [

      {
        name: "Creative Thinking",
        score: signals.creative
      },

      {
        name: "Systems Thinking",
        score: signals.systems
      },

      {
        name: "Data Exploration",
        score: signals.data
      },

      {
        name: "Problem Solving",
        score: signals.problem
      }

    ];


    signalList.sort(
      (a, b) => a.score - b.score
    );


    const weakestSignal =
      signalList[0];


    const experiments: Record<
      string,
      {
        reason: string;
        challenge: string;
        instructions: string;
      }
    > = {


      "Creative Thinking": {

        reason:
          "Your current evidence doesn't tell us enough about your creative instincts.",

        challenge:
          "Redesign an existing tool or website for a completely different type of user.",

        instructions:
          "Focus on user experience, visual decisions and how your design changes the way people interact with the product."

      },


      "Systems Thinking": {

        reason:
          "Your current evidence doesn't tell us enough about how you handle structure and systems.",

        challenge:
          "Add a structured data layer or API-driven feature to your existing project.",

        instructions:
          "Focus less on visual design and more on architecture, logic, data flow and how different pieces work together."

      },


      "Data Exploration": {

        reason:
          "We haven't collected much evidence about how you work with data and patterns.",

        challenge:
          "Take a small dataset and turn it into a useful interactive insight.",

        instructions:
          "Focus on finding patterns, choosing useful metrics and explaining what the data actually tells you."

      },


      "Problem Solving": {

        reason:
          "We need stronger evidence about how you approach unfamiliar problems.",

        challenge:
          "Choose a real problem and build the smallest working solution you can.",

        instructions:
          "Don't worry about making it beautiful. Focus on the problem, your reasoning and how you solved it."

      }

    };


    const nextExperiment =
      experiments[weakestSignal.name];


    /* SHOW ADAPTIVE EXPERIMENT */

    document.querySelector("#nextSignal")!
      .textContent =
        weakestSignal.name;


    document.querySelector("#nextReason")!
      .textContent =
        nextExperiment.reason;


    document.querySelector("#nextChallenge")!
      .textContent =
        nextExperiment.challenge;


    document.querySelector("#nextInstructions")!
      .textContent =
        nextExperiment.instructions;


    document.querySelector("#nextDifficulty")!
      .textContent =
        weakestSignal.score < 40
          ? "🟢 EXPLORE"
          : weakestSignal.score < 65
            ? "🟡 STRETCH"
            : "🔴 CHALLENGE";


    document
      .querySelector("#nextExperiment")!
      .classList
      .remove("hidden");


    /* SAVE DAY 1 */

    const date =
      new Date().toLocaleDateString(
        "en-IN",
        {
          day: "numeric",
          month: "short",
          year: "numeric"
        }
      );


    const experiment = {

      day: 1,
      intent,
      build,
      evidence,
      reflection,
      signals,
      identity,
      date

    };


    localStorage.setItem(
      "abtalks_day_1",
      JSON.stringify(experiment)
    );


    /* DASHBOARD */

    document.querySelector("#days")!
      .textContent = "1";


    document.querySelector("#projects")!
      .textContent = "1";


    document.querySelector("#identity")!
      .textContent = identity;


    /* SCORES */

    document.querySelector("#creativeScore")!
      .textContent =
        String(signals.creative);


    document.querySelector("#systemsScore")!
      .textContent =
        String(signals.systems);


    document.querySelector("#dataScore")!
      .textContent =
        String(signals.data);


    document.querySelector("#problemScore")!
      .textContent =
        String(signals.problem);


    /* BARS */

(document.querySelector("#creativeBar") as HTMLElement).style.width =
  `${signals.creative}%`;

(document.querySelector("#systemsBar") as HTMLElement).style.width =
  `${signals.systems}%`;

(document.querySelector("#dataBar") as HTMLElement).style.width =
  `${signals.data}%`;

(document.querySelector("#problemBar") as HTMLElement).style.width =
  `${signals.problem}%`;




    /* RESULT */

    document.querySelector("#resultTitle")!
      .textContent =
        identity;


    const explanations: Record<
      string,
      string
    > = {

      "Creative Builder":
        "Your experiment shows a strong pull toward ideas, design, interfaces, and creating things people can see and use.",

      "Systems Thinker":
        "Your experiment shows a strong interest in logic, structure, architecture, systems, and understanding how things work together.",

      "Data Explorer":
        "Your experiment shows curiosity around data, patterns, analysis, and using information to understand problems.",

      "Problem Solver":
        "Your experiment shows strong curiosity around challenges, debugging, research, and finding practical solutions.",

      "Hybrid Builder":
        "Your experiment shows a combination of strong signals. Keep experimenting to discover which direction becomes strongest."

    };


    document.querySelector("#resultText")!
      .textContent =
        explanations[identity] ??
        "Your first experiment is complete. Keep experimenting to discover stronger signals.";


    /* EVIDENCE */

    const savedEvidence: EvidenceItem[] =
      JSON.parse(
        localStorage.getItem(
          "abtalks_evidence"
        ) || "[]"
      );


    if (evidence) {

      savedEvidence.push({

        day: 1,
        evidence,
        build,
        identity,
        signals,
        date

      });


      localStorage.setItem(
        "abtalks_evidence",
        JSON.stringify(savedEvidence)
      );

    }


    document.querySelector("#evidencePreview")!
      .textContent =
        evidence ||
        "Your experiment was completed without evidence.";


    document.querySelector("#evidenceDate")!
      .textContent =
        `Completed ${date}`;


    renderEvidence();


    /* BUTTON */

    const button =
      document.querySelector(
        "#saveDay"
      ) as HTMLButtonElement;


    button.textContent =
      "Day 1 Completed ✓";


    /* RESULT */

    const result =
      document.querySelector("#result")!;


    result.classList.remove(
      "hidden"
    );


    result.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });


/* -------------------------------- */
/* ACCEPT DAY 2 */
/* -------------------------------- */

document
  .querySelector("#acceptExperiment")!
  .addEventListener("click", () => {

    const day2 =
      document.querySelector(
        "#day2Mission"
      )!;


    day2.classList.remove(
      "hidden"
    );


    day2.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });


/* -------------------------------- */
/* COMPLETE DAY 2 */
/* -------------------------------- */

document
  .querySelector("#completeDay2")!
  .addEventListener("click", () => {


    const intent =
      (
        document.querySelector(
          "#day2Intent"
        ) as HTMLTextAreaElement
      ).value.trim();


    const build =
      (
        document.querySelector(
          "#day2Build"
        ) as HTMLTextAreaElement
      ).value.trim();


    const evidence =
      (
        document.querySelector(
          "#day2Evidence"
        ) as HTMLTextAreaElement
      ).value.trim();


    const reflection =
      (
        document.querySelector(
          "#day2Reflection"
        ) as HTMLTextAreaElement
      ).value.trim();


    /* VALIDATION */

    if (
      !intent ||
      !build ||
      !reflection
    ) {

      alert(
        "Please complete Intent, Build, and Reflection before finishing Day 2."
      );

      return;

    }


    /* SIGNALS */

    const signals =
      calculateSignals(
        intent,
        build,
        evidence,
        reflection
      );


    /* IDENTITY */

    const identity =
      getIdentity(
        signals.creative,
        signals.systems,
        signals.data,
        signals.problem
      );


    const date =
      new Date().toLocaleDateString(
        "en-IN",
        {
          day: "numeric",
          month: "short",
          year: "numeric"
        }
      );


    const experiment = {

      day: 2,
      intent,
      build,
      evidence,
      reflection,
      identity,
      signals,
      date

    };


    localStorage.setItem(
      "abtalks_day_2",
      JSON.stringify(experiment)
    );


    /* UPDATE DASHBOARD */

    document.querySelector("#days")!
      .textContent = "2";


    document.querySelector("#projects")!
      .textContent = "2";


    document.querySelector("#identity")!
      .textContent = identity;


    /* SAVE EVIDENCE */

    const savedEvidence: EvidenceItem[] =
      JSON.parse(
        localStorage.getItem(
          "abtalks_evidence"
        ) || "[]"
      );


    if (evidence) {

      savedEvidence.push({

        day: 2,
        evidence,
        build,
        identity,
        signals,
        date

      });


      localStorage.setItem(
        "abtalks_evidence",
        JSON.stringify(savedEvidence)
      );

    }


    /* REFRESH EVIDENCE */

    document.querySelector("#evidencePreview")!
      .textContent =
        evidence ||
        "Day 2 completed without evidence.";


    document.querySelector("#evidenceDate")!
      .textContent =
        `Completed ${date}`;


    renderEvidence();


    /* BUTTON */

    const button =
      document.querySelector(
        "#completeDay2"
      ) as HTMLButtonElement;


    button.textContent =
      "Day 2 Completed ✓";


    alert(
      "Day 2 complete! Your new identity signal is " +
      identity +
      "."
    );

  });


/* -------------------------------- */
/* LOAD EXISTING EVIDENCE */
/* -------------------------------- */

renderEvidence();