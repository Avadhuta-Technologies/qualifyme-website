/**
 * Release Notes Data
 * This file contains all the release notes for the QualifyMe platform.
 * Add new releases at the top of the array (most recent first).
 */

export interface ReleaseFeature {
  title: string;
  description: string;
}

export interface ReleaseNote {
  version: string;
  date: string;
  highlights: string[];
  features: ReleaseFeature[];
  improvements: string[];
  bugFixes: string[];
}

export const releaseNotes: ReleaseNote[] = [
  {
    version: "2.0.3",
    date: "January 13, 2026",
    highlights: [
      "API & SSO Integration Hub for enterprise users",
      "Multi-Currency Pricing Support with automatic region detection",
      "Bulk Email Communication for efficient candidate outreach",
      "Enhanced Assessment Monitoring with camera obstruction detection",
      "Resources Center with FAQ and Release Notes"
    ],
    features: [
      {
        title: "Resources Center",
        description: "A centralized hub for FAQs, Release Notes, and Support access directly within the admin portal."
      },
      {
        title: "API & Integration Hub",
        description: "Create OAuth client credentials, manage API clients, and configure Single Sign-On (SSO) with your identity provider."
      },
      {
        title: "Multi-Currency Pricing",
        description: "Automatic currency detection showing prices in USD or INR based on your region."
      },
      {
        title: "Enterprise Plan Support",
        description: "Request custom enterprise plans tailored to your organization's specific needs."
      },
      {
        title: "Bulk Email Communication",
        description: "Select multiple candidates and send customized emails simultaneously with persistent selections."
      },
      {
        title: "Resume Upload by Admin",
        description: "Administrators can now upload or update resumes on behalf of candidates for profile matching."
      },
      {
        title: "Application Rejection Reasons",
        description: "Clear visibility into rejection reasons with labels like 'Profile Match Failure' or 'Assessment Not Cleared'."
      },
      {
        title: "AI Assessment Template Generator",
        description: "Enhanced custom assessment creation with automatic skills extraction and new Expert difficulty level."
      },
      {
        title: "Enhanced Assessment Monitoring",
        description: "Camera obstruction detection, system audio capture, and improved violation tracking for assessment integrity."
      },
      {
        title: "Assessment Duration Display",
        description: "Candidates can now see estimated duration before starting and track time during assessments."
      }
    ],
    improvements: [
      "Terminology update: 'Interview Rounds' is now 'Assessments' throughout the platform",
      "Logo brightness detection for optimal display",
      "Improved loading states with better feedback messages",
      "Updated PWA icons and manifest for better mobile experience",
      "Dynamic theming improvements in the Candidate Portal",
      "Enhanced ATS integrations for Zoho Recruit and Lever Hire"
    ],
    bugFixes: [
      "Candidate selections now persist when navigating between pages",
      "Profile match status displays correctly after evaluation",
      "Assessment configuration form renders properly",
      "Email scheduling links work correctly",
      "Activity log entries sorted in correct order"
    ]
  },
  {
    version: "2.0.2",
    date: "December 23, 2025",
    highlights: [
      "Improved candidate experience with enhanced UI",
      "Performance optimizations across the platform",
      "Bug fixes and stability improvements"
    ],
    features: [
      {
        title: "Enhanced Candidate Portal",
        description: "Improved navigation and user interface for a smoother candidate experience."
      },
      {
        title: "Performance Optimizations",
        description: "Faster page loads and improved responsiveness across all modules."
      }
    ],
    improvements: [
      "Streamlined job application process",
      "Better error handling and user feedback",
      "Improved email notification templates"
    ],
    bugFixes: [
      "Fixed timezone handling issues",
      "Resolved calendar integration sync issues",
      "Corrected assessment timer display"
    ]
  },
  {
    version: "2.0.1",
    date: "December 10, 2025",
    highlights: [
      "ATS Integration enhancements",
      "Interview scheduling improvements",
      "Mobile responsiveness updates"
    ],
    features: [
      {
        title: "Lever Hire Integration",
        description: "Seamless integration with Lever Hire for synchronized candidate management."
      },
      {
        title: "Google Calendar Sync",
        description: "Enhanced calendar synchronization for interview scheduling."
      }
    ],
    improvements: [
      "Better mobile experience for candidates",
      "Improved notification system",
      "Enhanced dashboard analytics"
    ],
    bugFixes: [
      "Fixed widget embedding issues",
      "Resolved video interview connection problems",
      "Corrected candidate status updates"
    ]
  },
  {
    version: "2.0.0",
    date: "November 28, 2025",
    highlights: [
      "Major platform redesign with new UI",
      "AI-powered assessment generation",
      "Enhanced proctoring capabilities"
    ],
    features: [
      {
        title: "New Platform Design",
        description: "Complete UI overhaul with modern, intuitive interface for better usability."
      },
      {
        title: "AI Assessment Generation",
        description: "Create customized assessments powered by AI based on job requirements."
      },
      {
        title: "Advanced Proctoring",
        description: "Enhanced monitoring capabilities for remote assessments with violation tracking."
      },
      {
        title: "Profile Matching",
        description: "AI-powered resume analysis and candidate-job matching scores."
      }
    ],
    improvements: [
      "Completely redesigned dashboard",
      "New organization settings panel",
      "Improved team member management",
      "Enhanced reporting and analytics"
    ],
    bugFixes: [
      "Various legacy system issues resolved",
      "Performance improvements throughout"
    ]
  }
];
