# QualifyMe — AI Screening (/product/ai-screening)

> **Page purpose:** Convert high-volume hiring teams who are drowning in manual screening. Fast-paced, results-led page. Primary CTA is "Get Started Free" — this is the live product, so all CTAs should push toward signup.

---

## SECTION: HERO

### Layout
Left: Text. Right: Product UI screenshot — candidate ranking view or assessment dashboard.

### Tag
AI Screening · Live Now

### Headline
Stop screening manually.
Let AI do it in minutes.

### Subheadline
QualifyMe auto-generates role-specific assessments, evaluates every response, and delivers a ranked candidate list — before you've opened a single CV.

### CTAs
[Get Started Free] *(primary)*
[See a Demo] *(secondary)*

### Trust Bar *(3 stats, horizontal)*

| Stat | Label |
|------|-------|
| 2,400+ | assessments delivered |
| 70% | faster time-to-shortlist |
| 100% | reproducible, audit-ready scoring |

---

## SECTION: PROBLEM

### Headline
Manual screening doesn't scale. And it was never that accurate to begin with.

### Body
The average job posting gets 250+ applications. Most hiring teams spend hours per role reading CVs, crafting screening questions, and chasing candidates through email.

And after all that effort? The top candidates slip through, the wrong ones get shortlisted, and the process starts again next quarter.

### Problem Grid *(3 cards)*

**Card 1**
**Hours lost to manual review**
Hiring managers spend up to 23 hours screening for a single hire. That's time taken from the work they were actually hired to do.

**Card 2**
**Good candidates lost in the pile**
When screening is manual, the best candidates aren't always the ones that look best on paper. Talent gets filtered out before it's ever evaluated.

**Card 3**
**Inconsistent shortlisting**
No rubric survives contact with 300 applications. Different reviewers, different standards, different results. The shortlist reflects fatigue as much as merit.

### Transition Line
There's a faster, more consistent way — and it doesn't require a recruiter to review every application.

---

## SECTION: HOW AI SCREENING WORKS

### Headline
From job description to ranked shortlist — automatically.

### Layout
Step-by-step flow. Left: step content. Right: UI callout or visual.

### Steps

**Step 1 — Paste your job description**
Upload or paste a JD. QualifyMe reads the role requirements and maps them to the right mix of question formats and difficulty levels. No configuration required.

**Step 2 — Review and customize**
The platform generates a complete assessment — MCQs, coding challenges, and/or descriptive Q&A. Edit any question, adjust weights, add your own questions, or approve the draft as-is.

**Step 3 — Invite candidates**
Send a branded assessment link directly from QualifyMe or integrate with your ATS. Candidates complete on any device, in any timezone, within your defined window.

**Step 4 — AI evaluates every response**
As candidates submit, AI scores each answer in real time. No waiting. No manual marking. Structured rubrics applied consistently to every single response.

**Step 5 — Review your ranked shortlist**
Open your dashboard to a ranked list — each candidate scored, explained, and ready to act on. See where they excelled, where they struggled, and who to move forward.

---

## SECTION: ASSESSMENT FORMATS

### Headline
The right format for every role. Not just multiple choice.

### Body
One-size-fits-all assessments surface the same talent every hiring manager already knows. QualifyMe matches the format to what the role actually requires.

---

### Feature Block: MCQs

**Tag:** Best for domain knowledge, compliance, and technical fundamentals

**Headline:** Auto-generated, role-calibrated MCQs

- Questions generated directly from your job description
- Covers domain knowledge, conceptual understanding, and job-specific scenarios
- Difficulty calibrated to role seniority
- AI-scored instantly — no manual marking
- Anti-cheat detection built in

---

### Feature Block: Coding Tests

**Tag:** Best for engineering, data, and technical roles

**Headline:** Real coding challenges — not LeetCode

- Multi-language support: Python, JavaScript, Java, SQL, and more
- Practical problem-solving over algorithm memorization
- Test cases auto-generated to validate actual output
- Plagiarism and copy-paste detection
- Execution environment runs in-browser — no setup required

---

### Feature Block: Descriptive Q&A

**Tag:** Best for communication, reasoning, and open-ended evaluation

**Headline:** Open-ended questions. Typed or spoken — candidate's choice.

- Custom question prompts built from the role's communication and reasoning demands
- Candidates answer by typing a written response or submitting a voice recording — their choice
- AI evaluates response quality, structured thinking, and clarity regardless of format
- Eliminates scheduling friction — no live calls, no coordination, no time-zone constraints
- Reviewer tools: side-by-side response comparison, AI summary, scoring rubric

---

## SECTION: WORKFLOW

### Headline
Fits into how your team already works.

### Layout
Feature checklist + UI visual

**Branded candidate portal**
Your logo. Your colors. Candidates experience your employer brand throughout.

**Multi-round workflows**
Build multi-stage assessment sequences. Pass/fail logic between rounds. Custom thresholds per stage.

**Role libraries**
Save and reuse assessment templates across hiring campaigns. Build a library of your best assessments over time.

**ATS integration**
Push results directly to your existing ATS or export to CSV. API available on all plans.

**Team collaboration**
Invite hiring managers, coordinators, and reviewers. Assign roles and visibility by team.

**Candidate communication**
Automated email sequences — invite, reminder, completion confirmation. Configurable per campaign.

---

## SECTION: RESULTS

### Headline
Real outcomes from teams like yours.

### Cards *(3 metrics)*

**75% faster shortlisting**
A FinTech startup went from days of manual screening to shortlisting in hours — without adding headcount to the hiring team.

**3 hires in 10 days**
A growing startup used QualifyMe to run multiple parallel campaigns simultaneously, with minimal coordination overhead.

**Zero manual resume reviews**
One hiring team automated their entire screening process — AI surfaced candidates that resume review would have missed entirely.

> **Note to dev:** Replace with named companies and logos as soon as client permissions are secured.

---

## SECTION: UPGRADE PATH (SIMULATIONS TEASER)

### Layout
Highlighted banner / card

### Tag
When screening isn't enough

### Headline
Screening tells you who passed. Simulations tell you who'll perform.

### Body
For senior roles and high-stakes decisions, a ranked score isn't the whole answer. Cognitive Simulations drop your shortlisted candidates into realistic work scenarios — revealing how they think, decide, and recover under real pressure.

### CTA
[Explore Cognitive Simulations →] *(links to /product/simulations)*

---

## SECTION: FINAL CTA

### Headline
Your first assessment in under 5 minutes.

### Subheadline
No credit card. No onboarding call. Just paste a job description and go.

### CTAs
[Get Started Free] *(primary)*
[Book a Demo] *(secondary)*

### Subtext
Used by teams across fintech, SaaS, and enterprise hiring. Free plan available.

---

# IMPLEMENTATION NOTES FOR CODING AGENT

### Visual priorities
1. **Dashboard UI screenshot** — Hero needs a real product screenshot: the candidate ranking view, assessment dashboard, or JD-to-assessment generation flow. This is the most important visual on the page.
2. **Step flow** — Steps 1–5 should have a visual component per step. Either a small UI callout or an icon. Consider a side-by-side layout: step text left, visual right.
3. **Assessment format icons** — MCQ / Coding / Descriptive Q&A sections should each have a distinct icon or illustration. Keep them consistent in style.
4. **Metrics section** — Stat cards with large typography. If anonymized for now, use placeholder company descriptors ("FinTech startup", "SaaS company").

### Tags
- All CTAs on this page should push toward "Get Started Free" — this is the live product.
- Simulations teaser section: amber "Early access" tag.

### Responsive behavior
- Problem grid: 3 columns → stacked on mobile
- Assessment format blocks: alternating left/right → stacked on mobile
- Workflow features: 2-column checklist → single column on mobile
- Metrics: 3 cards → stacked on mobile

### Linking
- "Explore Cognitive Simulations →" → /product/simulations
- "See a Demo" → /contact or demo booking link
- Trust bar stats → optionally link to /customers/results

---

# END
