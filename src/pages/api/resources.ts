import type { APIRoute } from 'astro';
import {
  sortArticlesByTitle,
  type Article
} from '../../utils/resources-helpers';
import { resourcesArticles } from '../../data/resources-articles';

// S3 bucket configuration for public access
const BUCKET_NAME = 'hiring-assistant-assets';
const REGION = 'ap-south-1';
const PREFIX = 'qualifyme-console-faq/';
const BASE_URL = `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${PREFIX}`;

// Function to discover files in the S3 bucket by trying common patterns
async function discoverFilesInBucket(): Promise<string[]> {
  const discoveredFiles: string[] = [];
  
  // Common file name patterns for FAQ/help documentation
  const commonPatterns = [
    // Getting started guides
    'Getting_Started.pdf',
    'Getting_Started.html',
    'Getting_Started_Guide.pdf',
    'Getting_Started_Guide.html',
    'Quick_Start.pdf',
    'Quick_Start.html',
    
    // User guides
    'User_Guide.pdf',
    'User_Guide.html',
    'User_Manual.pdf',
    'User_Manual.html',
    'How_To_Use.pdf',
    'How_To_Use.html',
    
    // Feature guides
    'Features.pdf',
    'Features.html',
    'Feature_Guide.pdf',
    'Feature_Guide.html',
    'AI_Features.pdf',
    'AI_Features.html',
    
    // Interview guides
    'Interview_Guide.pdf',
    'Interview_Guide.html',
    'AI_Interview.pdf',
    'AI_Interview.html',
    'Interview_Best_Practices.pdf',
    'Interview_Best_Practices.html',
    
    // Setup guides
    'Setup_Guide.pdf',
    'Setup_Guide.html',
    'Installation_Guide.pdf',
    'Installation_Guide.html',
    'Configuration.pdf',
    'Configuration.html',
    
    // Troubleshooting
    'Troubleshooting.pdf',
    'Troubleshooting.html',
    'FAQ.pdf',
    'FAQ.html',
    'Common_Issues.pdf',
    'Common_Issues.html',
    
    // API and integration
    'API_Documentation.pdf',
    'API_Documentation.html',
    'Integration_Guide.pdf',
    'Integration_Guide.html',
    'Webhook_Guide.pdf',
    'Webhook_Guide.html',
    
    // Security and compliance
    'Security.pdf',
    'Security.html',
    'Privacy_Policy.pdf',
    'Privacy_Policy.html',
    'Compliance.pdf',
    'Compliance.html',
    
    // Advanced topics
    'Advanced_Features.pdf',
    'Advanced_Features.html',
    'Customization.pdf',
    'Customization.html',
    'Best_Practices.pdf',
    'Best_Practices.html'
  ];
  
  console.log('Attempting to discover files in S3 bucket...');
  
  // Try to fetch each potential file
  for (const fileName of commonPatterns) {
    try {
      const fileUrl = `${BASE_URL}${fileName}`;
      const response = await fetch(fileUrl, { method: 'HEAD' });
      
      if (response.ok) {
        discoveredFiles.push(fileName);
        console.log(`Found file: ${fileName}`);
      }
    } catch (error) {
      // File doesn't exist, continue to next
    }
  }
  
  // If we didn't find many files with common patterns, try some variations
  if (discoveredFiles.length < 3) {
    console.log('Trying additional file discovery patterns...');
    
    // Try some variations with different naming conventions
    const additionalPatterns = [
      // QualifyMe specific patterns
      'QualifyMe_Guide.pdf',
      'QualifyMe_Guide.html',
      'QualifyMe_User_Manual.pdf',
      'QualifyMe_User_Manual.html',
      'QualifyMe_FAQ.pdf',
      'QualifyMe_FAQ.html',
      
      // Numbered guides
      'Guide_1.pdf',
      'Guide_1.html',
      'Guide_2.pdf',
      'Guide_2.html',
      'Tutorial_1.pdf',
      'Tutorial_1.html',
      
      // Simple names
      'Help.pdf',
      'Help.html',
      'Documentation.pdf',
      'Documentation.html',
      'Manual.pdf',
      'Manual.html',
      
      // Versioned files
      'v1_Guide.pdf',
      'v1_Guide.html',
      'v2_Guide.pdf',
      'v2_Guide.html'
    ];
    
    for (const fileName of additionalPatterns) {
      try {
        const fileUrl = `${BASE_URL}${fileName}`;
        const response = await fetch(fileUrl, { method: 'HEAD' });
        
        if (response.ok && !discoveredFiles.includes(fileName)) {
          discoveredFiles.push(fileName);
          console.log(`Found additional file: ${fileName}`);
        }
      } catch (error) {
        // File doesn't exist, continue to next
      }
    }
  }
  
  console.log(`Total discovered ${discoveredFiles.length} files:`, discoveredFiles);
  return discoveredFiles;
}

export const GET: APIRoute = async ({ request }) => {
  try {
    // Use the Resources data from the imported file

    // Process Resources data into articles
    const articles: Article[] = resourcesArticles.map((resource, index) => {
      const slug = resource.title
        .toLowerCase()
        .replaceAll(/[^a-zA-Z0-9\s]/g, '') // Remove special characters
        .replaceAll(/\s+/g, '-')           // Replace spaces with hyphens
        .trim();
      const title = resource.title;
      const extension = resource.fileExtension ?? 'html';
      const baseFileName = resource.title.replaceAll(/[^a-zA-Z0-9\s]/g, '').replaceAll(/\s+/g, '-');
      const fileName = `${baseFileName}.${extension}`;
      const type = extension as 'html' | 'pdf';
      const url = `${BASE_URL}${fileName}`;
      return {
        slug,
        title,
        fileName,
        type,
        url,
        lastModified: new Date(),
        description: resource.description
      };
    });

    // Sort articles alphabetically by title
    const sortedArticles = sortArticlesByTitle(articles);

    return new Response(JSON.stringify({ 
      articles: sortedArticles,
      total: sortedArticles.length,
      source: 'real-resources-data', // Flag to indicate this is from real Resources data
      baseUrl: BASE_URL,
      debug: {
        manifestAttempted: false,
        filesFound: resourcesArticles.length,
        discoveredFiles: resourcesArticles.map(resource => resource.title),
        bucketUrl: BASE_URL
      }
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });

  } catch (error) {
    console.error('Error fetching articles:', error);
    
    return new Response(JSON.stringify({ 
      error: 'Failed to fetch articles',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

// Handle OPTIONS request for CORS
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
