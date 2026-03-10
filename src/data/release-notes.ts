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
    version: "2.0.6",
    date: "March 10, 2026",
    highlights: [
      "Assessment Rate Limiting and quota management",
      "Subscription limit warnings with proactive alerts",
      "Enhanced Analytics Dashboard with hiring metrics",
      "Improved ATS integration reliability",
      "Better candidate portal with application tracking"
    ],
    features: [
      {
        title: "Assessment Rate Limiting",
        description: "Track assessment usage and prevent exceeding subscription quotas with automatic enforcement."
      },
      {
        title: "Subscription Limit Warnings",
        description: "Proactive daily notifications via email when approaching subscription limits with upgrade recommendations."
      },
      {
        title: "Assessment Completion Tracking",
        description: "Better visibility into candidate assessment completion status and expiration dates with automatic reminders."
      },
      {
        title: "Enhanced Analytics Dashboard",
        description: "Comprehensive hiring metrics including assessment performance, time-to-hire, and candidate source analytics."
      },
      {
        title: "Improved ATS Integration",
        description: "More robust synchronization with error handling, automatic retries, and data integrity validation."
      },
      {
        title: "Improved Notification Structure",
        description: "Better structured notification data for reliable integration with external systems and ATS platforms."
      }
    ],
    improvements: [
      "Candidate portal improvements with clearer application status tracking",
      "Enhanced API documentation with real-world code samples",
      "Better error handling and reporting for ATS syncs",
      "Daily subscription usage checks with detailed breakdown",
      "Terminology update: 'Interview Round Expiration' is now 'Assessment Expiration'"
    ],
    bugFixes: [
      "Fixed assessment expiry handling across all job posts",
      "Corrected bulk upload file path handling",
      "Fixed candidate portal API for active job posts",
      "Improved resume parsing error handling",
      "Fixed job application status updates in ATS",
      "Corrected notification event type consistency",
      "Fixed subscription limit evaluation logic",
      "Improved assessment session management"
    ]
  },
  {
    version: "2.0.5",
    date: "February 24, 2026",
    highlights: [
      "Free Profile Screening for candidates",
      "Optional Profile Matching for flexible workflows",
      "Enhanced user onboarding with guided wizards",
      "Improved job post organization and filtering",
      "Better AI job description generation"
    ],
    features: [
      {
        title: "Free Profile Screening",
        description: "Public screening tool allows candidates to evaluate fit before applying without requiring login."
      },
      {
        title: "Optional Profile Matching",
        description: "Flexible workflow controls to make profile matching optional or disable it entirely per job post."
      },
      {
        title: "Enhanced User Onboarding",
        description: "Improved step-by-step guidance for recruiters with contextual help and data pre-filling."
      },
      {
        title: "Better Job Post Listing",
        description: "Improved organization with 'My Job Posts' vs 'All Posts' views and enhanced filtering options."
      },
      {
        title: "Enhanced AI Job Description",
        description: "Improved AI-powered generation with better error feedback and customization options."
      },
      {
        title: "Integrated Resume Processing",
        description: "Streamlined resume uploads during job creation with batch processing and better feedback."
      },
      {
        title: "Improved Data Separation",
        description: "Better organization to prevent confusion between job posts with clearer navigation and filtering."
      },
      {
        title: "Enhanced Theme Configuration",
        description: "Improved organization branding with automatic logo optimization and better color management."
      }
    ],
    improvements: [
      "Streamlined job creation wizard with progress tracking",
      "Better navigation between personal and team job posts",
      "Faster job creation with data pre-filling",
      "Improved SSO configuration handling",
      "Better PDF size optimization for faster uploads",
      "Enhanced responsive design for smaller screens"
    ],
    bugFixes: [
      "Fixed authentication checks appearing multiple times",
      "Resolved table height issues on smaller screens",
      "Corrected styling for job application rounds",
      "Fixed notification message wording",
      "Improved SSO configuration error handling",
      "Fixed navigation flow in onboarding"
    ]
  },
  {
    version: "2.0.4",
    date: "February 10, 2026",
    highlights: [
      "Improved error messages with actionable guidance",
      "Enhanced resume upload handling and detection",
      "Assessment expiration management with notifications",
      "Central notification service for consistent updates",
      "Better bulk upload error reporting"
    ],
    features: [
      {
        title: "Improved Error Messages",
        description: "Clear, actionable error messages with specific error codes for faster support and easier troubleshooting."
      },
      {
        title: "Enhanced Resume Upload",
        description: "Better detection of image-only PDFs, empty files, complex layouts, and unsupported languages."
      },
      {
        title: "Assessment Expiration",
        description: "Configurable assessment expiry with email notifications and automatic deadline management."
      },
      {
        title: "Central Notification Service",
        description: "Unified notification system for reliable job application updates, interview scheduling, and assessment events."
      },
      {
        title: "Enhanced Bulk Upload",
        description: "Detailed feedback on upload success/failure with progress tracking and retry capability."
      },
      {
        title: "Improved Error UI/UX",
        description: "Better error state handling with visual feedback, contextual help, and consistent design patterns."
      }
    ],
    improvements: [
      "Clearer error states throughout the application",
      "Better loading indicators and skeleton screens",
      "Improved handling of corrupted or empty files",
      "Language detection for non-English resumes",
      "Enhanced file format validation",
      "Better user guidance for error recovery"
    ],
    bugFixes: [
      "Fixed resume parsing failures for image-only PDFs",
      "Improved handling of corrupted PDF files",
      "Fixed assessment expiration notifications",
      "Corrected bulk upload error accuracy",
      "Fixed unexpected loading spinner appearance",
      "Improved authentication error prevention",
      "Better unsupported file format handling"
    ]
  },
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
