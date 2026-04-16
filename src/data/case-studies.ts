export interface CaseStudyMetricItem {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  company: string;
  industry: string;
  teamSize?: string;
  headline: string;
  hookLine: string;       // Punchy one-liner that tells the story in a sentence
  pullQuote: string;      // The core pain point — intrigues the reader
  summary: string;
  keyMetric: string;
  keyMetricLabel: string;
  accentColor: "indigo" | "violet" | "cyan" | "emerald";
  challenge: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    description: string;
    changes: string[];
  };
  impact: {
    description: string;
    example?: {
      label: string;
      items: CaseStudyMetricItem[];
    };
  };
  outcomes: string[];
  whyItWorked: string;
  conclusion: {
    description: string;
    points: string[];
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "avadhuta",
    company: "Avadhuta Technologies",
    industry: "Software Services",
    headline: "Reduced Hiring Noise and Closed Roles Faster",
    hookLine: "450 applicants. 4 interviews. Role closed.",
    pullQuote: "Engineers were spending hours interviewing candidates who never should have passed the first filter. Founder involvement in every hire was slowing everything down.",
    summary:
      "By replacing manual resume screening with QualifyMe assessments, Avadhuta Technologies cut candidates reaching interview stage by 90%+ and eliminated founder involvement in screening.",
    keyMetric: "90%+",
    keyMetricLabel: "reduction in candidates at interview stage",
    accentColor: "indigo",
    challenge: {
      title: "High Volume, Low Signal",
      description:
        "Avadhuta Technologies relied on platforms like Naukri and LinkedIn for hiring. Their hiring funnel had a critical inefficiency:",
      points: [
        "Each job opening attracted 250–300 applications",
        "Only ~40% of candidates were actually qualified",
        "Manual resume screening required founder involvement",
        "Engineers were spending significant time interviewing unfit candidates",
      ],
    },
    solution: {
      description:
        "Avadhuta Technologies implemented QualifyMe as the first step in their hiring process. Instead of relying on resumes, candidates were evaluated through role-specific assessments designed to measure actual capability.",
      changes: [
        "Every applicant was required to complete a QualifyMe assessment",
        "Only top-performing candidates were shortlisted for interviews",
        "Interview decisions were based on performance, not claims",
      ],
    },
    impact: {
      description:
        "Across multiple roles, QualifyMe delivered immediate results — only 5–10% of applicants qualified after assessment.",
      example: {
        label: "Example: Software Testing Fresher Role",
        items: [
          { label: "Total Applicants", value: "450" },
          { label: "Qualified via QualifyMe", value: "~20" },
          { label: "Final Interviews Conducted", value: "4" },
          { label: "Outcome", value: "Role successfully closed" },
        ],
      },
    },
    outcomes: [
      "90%+ reduction in candidates reaching interview stage",
      "Significant time savings for engineering teams",
      "Faster hiring cycles across all roles",
      "Higher confidence in candidate quality",
      "Engineers spent more time on productive work",
    ],
    whyItWorked:
      "QualifyMe shifted hiring from resume-based filtering to performance-based selection. Instead of asking 'Does this candidate look good on paper?', Avadhuta Technologies could now answer: 'Can this candidate actually perform the job?'",
    conclusion: {
      description:
        "For a growing software services company where engineering time is critical, QualifyMe enabled:",
      points: [
        "Precision hiring with measurable signal",
        "Efficient use of internal resources",
        "Faster and better hiring decisions at scale",
      ],
    },
  },
  {
    slug: "rubick",
    company: "RubickAI",
    industry: "AI-powered Retail Ecosystem",
    headline: "Streamlined Fresher Hiring and Reduced On-Ground Effort",
    hookLine: "From 50+ applicants to 5 candidates — without a single office visit.",
    pullQuote: "Every hiring cycle meant coordinating candidates to the office, running on-site assessments — before even knowing if they were qualified. The logistics were killing the team.",
    summary:
      "RubickAI replaced offline, location-dependent assessments with QualifyMe's remote screening, reducing their candidate pool from 50+ to 5 high-quality candidates and eliminating all on-site assessment logistics.",
    keyMetric: "90%",
    keyMetricLabel: "reduction in candidates reaching interview stage",
    accentColor: "violet",
    challenge: {
      title: "High Effort, Offline Hiring Bottleneck",
      description:
        "RubickAI followed a resume-first, offline assessment approach that created significant operational overhead:",
      points: [
        "Candidates shortlisted from resumes were called to the office",
        "Assessments were conducted physically, on-site",
        "Engineers had to coordinate communication and supervise assessments",
        "Many candidates invited were not truly qualified",
      ],
    },
    solution: {
      description:
        "RubickAI implemented QualifyMe to automate their initial screening process, moving all evaluation online.",
      changes: [
        "Candidates completed assessments remotely before any office visit",
        "No need to call applicants to the office for initial evaluation",
        "Only top performers were shortlisted for interviews",
      ],
    },
    impact: {
      description:
        "With QualifyMe in place, RubickAI achieved a dramatically leaner hiring funnel with zero on-site logistics.",
      example: {
        label: "Hiring Funnel Results",
        items: [
          { label: "Total Applicants", value: "50+" },
          { label: "Qualified via QualifyMe", value: "~5" },
          { label: "On-site Assessments Required", value: "0" },
          { label: "Outcome", value: "1 candidate quickly hired" },
        ],
      },
    },
    outcomes: [
      "90% reduction in candidates reaching interview stage",
      "Eliminated need for offline assessment logistics entirely",
      "Significant reduction in engineering coordination effort",
      "Faster hiring decisions with better candidate quality",
    ],
    whyItWorked:
      "QualifyMe replaced a manual, location-dependent process with a scalable, automated evaluation layer. Candidates were filtered before any physical interaction, allowing engineers to engage only when it truly mattered.",
    conclusion: {
      description:
        "For companies hiring at scale from distributed locations, QualifyMe enabled:",
      points: [
        "Remote-first hiring workflows",
        "Reduced operational complexity",
        "Faster and more efficient hiring decisions",
      ],
    },
  },
  {
    slug: "softtech",
    company: "SoftTech Engineers Limited",
    industry: "Engineering Software & Technology",
    teamSize: "600+ employees",
    headline: "Scaled Screening Across Regions with Consistent Quality",
    hookLine: "20+ open roles. Multiple regions. One consistent screening standard.",
    pullQuote: "With candidates pouring in from Naukri, agencies, and multiple regions, every team was evaluating differently. Inconsistency was costing them speed, quality, and strong candidates.",
    summary:
      "SoftTech Engineers adopted QualifyMe as a unified screening layer across 20+ active roles and multiple regions, standardizing candidate evaluation and dramatically accelerating their hiring pipeline.",
    keyMetric: "20+",
    keyMetricLabel: "active roles screened consistently across regions",
    accentColor: "cyan",
    challenge: {
      title: "Distributed Hiring, Slower Screening",
      description:
        "With multiple roles open simultaneously and candidates coming from various sources, SoftTech faced significant challenges:",
      points: [
        "High volume of resumes across roles and regions",
        "Lack of a standardized screening mechanism",
        "Delays in shortlisting due to manual filtering",
        "Inconsistent evaluation quality across different hiring teams",
      ],
    },
    solution: {
      description:
        "SoftTech Engineers implemented QualifyMe as a unified screening layer across all roles and regions.",
      changes: [
        "All candidates, regardless of source, were routed through role-based assessments",
        "Screening became standardized across regions and teams",
        "Recruiters received pre-qualified candidate pools instead of raw resumes",
      ],
    },
    impact: {
      description:
        "After adopting QualifyMe, SoftTech achieved faster, more consistent hiring across all their active roles — with no variance by region or source.",
    },
    outcomes: [
      "Faster screening cycles across 20+ active roles",
      "Standardized evaluation process across all regions",
      "Reduced manual dependency on resume filtering",
      "Improved ability to handle large-scale hiring efficiently",
    ],
    whyItWorked:
      "QualifyMe introduced a centralized, performance-driven screening layer that worked across multiple job roles, geographies, and candidate sources. Instead of fragmented manual processes, SoftTech achieved uniform evaluation, faster decision-making, and scalable hiring operations.",
    conclusion: {
      description:
        "For a large, distributed organization, QualifyMe enabled:",
      points: [
        "Scalable hiring across regions with one platform",
        "Faster and more reliable screening",
        "Consistency in candidate quality regardless of source",
      ],
    },
  },
  {
    slug: "vnurt",
    company: "VNurt Technology Solutions",
    industry: "HR Sourcing & Software Services",
    teamSize: "10+ years of experience",
    headline: "Improved Candidate Quality and Increased Placement Success",
    hookLine: "Better candidates. Faster closures. Measurable revenue growth.",
    pullQuote: "Revenue only comes when a placement succeeds. Manual screening was slow and unreliable — every delay was a deal slipping to a competitor.",
    summary:
      "VNurt Technology Solutions integrated QualifyMe into their recruitment workflow, replacing time-intensive manual screening with automated assessments that improved candidate quality and directly increased their deal success rate and revenue.",
    keyMetric: "Higher",
    keyMetricLabel: "placement success rate and client satisfaction",
    accentColor: "emerald",
    challenge: {
      title: "High Stakes, Low Margin for Error",
      description:
        "VNurt operates in a performance-driven recruitment model where revenue is generated only when a role is successfully closed:",
      points: [
        "Heavy reliance on manual interviews to ensure candidate quality",
        "Time-intensive screening process across multiple roles",
        "Delays in sending candidates to clients led to missed opportunities",
        "High effort with uncertain outcomes — more effort didn't guarantee better results",
      ],
    },
    solution: {
      description:
        "VNurt integrated QualifyMe into their recruitment workflow across all roles.",
      changes: [
        "Every candidate went through automated assessments first",
        "Only candidates who demonstrated real capability were shortlisted",
        "Recruiters focused only on high-quality, pre-qualified candidates",
      ],
    },
    impact: {
      description:
        "After implementing QualifyMe, VNurt achieved faster closures and higher-quality candidate delivery to clients.",
    },
    outcomes: [
      "Higher candidate quality submitted to clients",
      "Faster turnaround time for candidate shortlisting",
      "Increased deal success rate across all roles",
      "Revenue growth due to more successful placements",
      "Improved client satisfaction and repeat business",
    ],
    whyItWorked:
      "QualifyMe introduced a consistent, performance-based filtering layer before human intervention. Instead of relying on subjective judgment early in the process, VNurt could objectively evaluate all candidates at scale and prioritize only those who meet role expectations — moving faster without compromising on quality.",
    conclusion: {
      description:
        "For a recruitment-driven business where quality directly impacts revenue, QualifyMe enabled:",
      points: [
        "Scalable screening without increasing team effort",
        "Faster and more reliable candidate delivery to clients",
        "Stronger client outcomes and repeat business",
      ],
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export type AccentColor = CaseStudy["accentColor"];
