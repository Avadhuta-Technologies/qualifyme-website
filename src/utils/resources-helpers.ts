/**
 * Utility functions for Resources/Knowledge Base functionality
 */

export interface Article {
  slug: string;
  title: string;
  fileName: string;
  type: 'pdf' | 'html';
  url: string;
  lastModified?: Date;
  description?: string;
}

/**
 * Convert file name to URL-friendly slug
 * Example: "How_To_Use_QualifyMe.pdf" → "how-to-use-qualifyme"
 */
export function convertFileNameToSlug(fileName: string): string {
  return fileName
    .replace(/\.(pdf|html)$/i, '') // Remove extension
    .replaceAll('_', '-')           // Replace underscores with hyphens
    .replaceAll(/\s+/g, '-')        // Replace spaces with hyphens
    .toLowerCase();                 // Convert to lowercase
}

/**
 * Convert file name to readable title
 * Example: "How_To_Use_QualifyMe.pdf" → "How To Use QualifyMe"
 */
export function convertFileNameToTitle(fileName: string): string {
  return fileName
    .replace(/\.(pdf|html)$/i, '')
    .replaceAll('_', ' ');          // Replace underscores with spaces
}

/**
 * Determine file type from file name
 */
export function getFileType(fileName: string): 'html' | 'pdf' {
  const extension = fileName.toLowerCase().split('.').pop();
  return extension === 'html' ? 'html' : 'pdf';
}

/**
 * Generate S3 public URL for a file
 */
export function getS3PublicUrl(bucketName: string, fileName: string, region: string = 'ap-south-1'): string {
  return `https://${bucketName}.s3.${region}.amazonaws.com/qualifyme-console-faq/${fileName}`;
}

/**
 * Parse S3 object key to extract file name
 */
export function parseS3Key(key: string): string {
  // Remove the prefix and get just the file name
  return key.replace('qualifyme-console-faq/', '');
}

/**
 * Validate if file is a supported article type
 */
export function isSupportedArticle(fileName: string): boolean {
  const supportedExtensions = ['.pdf', '.html'];
  const extension = fileName.toLowerCase().substring(fileName.lastIndexOf('.'));
  return supportedExtensions.includes(extension);
}

/**
 * Generate article excerpt from content (for HTML files)
 */
export function generateExcerpt(content: string, maxLength: number = 150): string {
  // Remove HTML tags and get plain text
  const plainText = content.replaceAll(/<[^>]*>/g, '');
  
  if (plainText.length <= maxLength) {
    return plainText;
  }
  
  // Find the last complete word within the limit
  const truncated = plainText.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  
  return lastSpaceIndex > 0 
    ? truncated.substring(0, lastSpaceIndex) + '...'
    : truncated + '...';
}

/**
 * Calculate estimated reading time for content
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const plainText = content.replaceAll(/<[^>]*>/g, '');
  const wordCount = plainText.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Sort articles by title alphabetically
 */
export function sortArticlesByTitle(articles: Article[]): Article[] {
  return articles.sort((a, b) => a.title.localeCompare(b.title));
}

/**
 * Sort articles by last modified date (newest first)
 */
export function sortArticlesByDate(articles: Article[]): Article[] {
  return articles.sort((a, b) => {
    if (!a.lastModified || !b.lastModified) return 0;
    return b.lastModified.getTime() - a.lastModified.getTime();
  });
}
