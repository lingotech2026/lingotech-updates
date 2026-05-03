export type BlogCategory = 'Development' | 'Design' | 'Business' | 'Technology' | 'Tutorial';

export interface BlogAuthor {
  name: string;
  email?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  featuredImage: string;
  publishedAt: string;
  readingTime: number;
  isFeatured: boolean;
  author: BlogAuthor;
}

export const BLOG_CATEGORIES: { value: BlogCategory; label: string; color: string }[] = [
  { value: 'Development', label: 'Development', color: 'var(--lt-blog-category-dev)' },
  { value: 'Design', label: 'Design', color: 'var(--lt-blog-category-design)' },
  { value: 'Business', label: 'Business', color: 'var(--lt-blog-category-business)' },
  { value: 'Technology', label: 'Technology', color: 'var(--lt-blog-category-tech)' },
  { value: 'Tutorial', label: 'Tutorial', color: 'var(--lt-blog-category-tutorial)' },
];

// Sample blog posts - Replace with your actual content or CMS data
export const BLOG_POSTS: BlogPost[] = [

  {
    id: '1',
    slug: 'building-scalable-web-applications-with-nextjs',
    title: 'Building Scalable Web Applications with Next.js 14',
    excerpt: 'Learn how to leverage Next.js 14\'s latest features to build high-performance, scalable web applications that can grow with your business.',
    content: `
# Building Scalable Web Applications with Next.js 14

Next.js 14 introduces powerful features that make building scalable applications easier than ever. In this article, we'll explore the key concepts and best practices.

## Server Components by Default

One of the most significant changes in Next.js 14 is that Server Components are now the default. This means better performance and smaller bundle sizes out of the box.

## App Router Benefits

The App Router provides:
- Improved routing with nested layouts
- Better data fetching patterns
- Enhanced performance optimizations
- Simplified authentication flows

## Performance Optimization Tips

1. **Use Server Components where possible** - They reduce client-side JavaScript
2. **Implement proper caching strategies** - Leverage Next.js's built-in caching
3. **Optimize images** - Use the Next.js Image component
4. **Code splitting** - Dynamic imports for better performance

## Conclusion

Next.js 14 provides all the tools you need to build modern, scalable web applications. Start implementing these patterns today to see immediate improvements in your application's performance.
    `,
    category: 'Development',
    tags: ['Next.js', 'React', 'Performance', 'Web Development'],
    featuredImage: '/blog/nextjs-scalable-apps.avif',
    publishedAt: '2025-03-01',
    readingTime: 8,
    isFeatured: true,
    author: { name: 'Lingotech Team' },
  },


  {
    id: '2',
    slug: 'modern-ui-design-principles-2025',
    title: 'Modern UI/UX Design Principles for 2025',
    excerpt: 'Discover the latest design trends and principles that will shape user experiences in 2025, from minimalism to micro-interactions.',
    content: `
# Modern UI/UX Design Principles for 2025

The design landscape is constantly evolving. Here are the key principles that will define exceptional user experiences in 2025.

## Minimalism with Purpose

Less is more, but every element must serve a purpose. Modern designs focus on:
- Clear visual hierarchy
- Intentional use of white space
- Typography that enhances readability
- Color palettes that guide user attention

## Micro-interactions Matter

Small animations and transitions can significantly improve user engagement:
- Button hover states
- Loading animations
- Success/error feedback
- Smooth page transitions

## Accessibility First

Design for everyone from the start:
- Proper color contrast ratios
- Keyboard navigation support
- Screen reader compatibility
- Responsive across all devices

## Conclusion

Great design is invisible - it should feel natural and intuitive. By following these principles, you can create experiences that users love.
    `,
    category: 'Design',
    tags: ['UI/UX', 'Design Trends', 'User Experience', 'Accessibility'],
    featuredImage: '/blog/modern-ui-design.jpg',
    publishedAt: '2025-02-28',
    readingTime: 6,
    isFeatured: true,
    author: { name: 'Lingotech Team' },
  },


  {
    id: '3',
    slug: 'digital-transformation-guide-for-businesses',
    title: 'Digital Transformation: A Complete Guide for Businesses',
    excerpt: 'Navigate your digital transformation journey with our comprehensive guide. Learn strategies, common pitfalls, and success metrics.',
    content: `
# Digital Transformation: A Complete Guide for Businesses

Digital transformation is no longer optional - it's essential for staying competitive. Here's your roadmap to success.

## Understanding Digital Transformation

Digital transformation means integrating digital technology into all areas of your business, fundamentally changing how you operate and deliver value to customers.

## Key Steps to Success

1. **Assess Your Current State** - Understand where you are now
2. **Define Clear Goals** - Know what success looks like
3. **Choose the Right Tools** - Technology should support your goals
4. **Train Your Team** - People are your most important asset
5. **Measure and Iterate** - Continuous improvement is key

## Common Challenges

- Resistance to change
- Budget constraints
- Legacy system integration
- Skills gaps

## ROI and Metrics

Track these key metrics:
- Customer satisfaction scores
- Operational efficiency improvements
- Revenue growth
- Employee productivity

## Conclusion

Digital transformation is a journey, not a destination. Start small, measure results, and scale what works.
    `,
    category: 'Business',
    tags: ['Digital Transformation', 'Business Strategy', 'Technology', 'ROI'],
    featuredImage: '/blog/digital-transformation-resized-image.jpg',
    publishedAt: '2025-02-25',
    readingTime: 10,
    isFeatured: false,
    author: { name: 'Lingotech Team' },
  },


  {
    id: '4',
    slug: 'ai-and-machine-learning-in-modern-applications',
    title: 'AI and Machine Learning in Modern Applications',
    excerpt: 'Explore how AI and ML are transforming software development and creating smarter, more intuitive applications.',
    content: `
# AI and Machine Learning in Modern Applications

Artificial Intelligence and Machine Learning are revolutionizing how we build software. Here's what you need to know.

## Current State of AI in Development

AI is being integrated into applications in various ways:
- Natural language processing for better user interactions
- Predictive analytics for business insights
- Image and video recognition
- Recommendation systems
- Automated testing and debugging

## Practical Applications

### Chatbots and Virtual Assistants
Modern chatbots use NLP to understand and respond to user queries naturally.

### Personalization
ML algorithms analyze user behavior to deliver personalized experiences.

### Automation
AI automates repetitive tasks, improving efficiency and reducing errors.

## Getting Started with AI/ML

1. Learn the basics of Python and data science
2. Experiment with popular frameworks (TensorFlow, PyTorch)
3. Start with pre-trained models
4. Build small projects to understand concepts
5. Join AI communities and stay updated

## The Future

AI will continue to evolve, making applications smarter and more capable. Now is the perfect time to start learning.

## Conclusion

AI and ML are not just buzzwords - they're powerful tools that can enhance your applications. Start small and gradually integrate these technologies into your projects.
    `,
    category: 'Technology',
    tags: ['AI', 'Machine Learning', 'Innovation', 'Future Tech'],
    featuredImage: '/blog/ai-ml-applications.jpg',
    publishedAt: '2025-02-15',
    readingTime: 9,
    isFeatured: true,
    author: { name: 'Lingotech Team' },
  },


  {
    id: '5',
    slug: 'responsive-web-design-best-practices',
    title: 'Responsive Web Design: Best Practices for 2025',
    excerpt: 'Master responsive design with modern CSS techniques, mobile-first approach, and performance optimization strategies.',
    content: `
# Responsive Web Design: Best Practices for 2025

Creating websites that work beautifully on all devices is crucial. Here are the latest best practices.

## Mobile-First Approach

Start designing for mobile devices first, then scale up:
- Simpler layouts are easier to adapt
- Forces you to prioritize content
- Better performance on mobile devices

## Modern CSS Techniques

### CSS Grid and Flexbox
\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

### Container Queries
\`\`\`css
@container (min-width: 600px) {
  .card {
    display: flex;
  }
}
\`\`\`

## Fluid Typography

Use clamp() for responsive font sizes:
\`\`\`css
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}
\`\`\`

## Performance Optimization

- Use responsive images with srcset
- Lazy load images below the fold
- Minimize CSS and JavaScript
- Use modern image formats (WebP, AVIF)

## Testing Across Devices

- Test on real devices when possible
- Use browser DevTools for quick checks
- Consider different orientations
- Test with various network speeds

## Conclusion

Responsive design is an evolving discipline. Stay updated with the latest techniques and always prioritize user experience.
    `,
    category: 'Development',
    tags: ['Responsive Design', 'CSS', 'Web Development', 'Performance'],
    featuredImage: '/blog/responsive-design.jpg',
    publishedAt: '2025-02-10',
    readingTime: 7,
    isFeatured: false,
    author: { name: 'Lingotech Team' },
  },
];

// Helper function to get featured posts
export function getFeaturedPosts(): BlogPost[] {
  return BLOG_POSTS.filter(post => post.isFeatured).slice(0, 3);
}

// Helper function to get related posts
export function getRelatedPosts(currentPostId: string, limit: number = 3): BlogPost[] {
  const currentPost = BLOG_POSTS.find(post => post.id === currentPostId);
  if (!currentPost) return [];

  return BLOG_POSTS
    .filter(post => 
      post.id !== currentPostId && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
}

