# GymPax Landing Page

A modern, responsive landing page for the GymPax workout tracking app. Built with clean HTML, CSS, and JavaScript focusing on performance and user experience.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with a dark theme that reflects the "no-BS" approach
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle animations and transitions for better UX
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized assets and minimal dependencies
- **Interactive Elements**: Hover effects, smooth scrolling, and button animations

## 📁 File Structure

```
GymPaxWebsite/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── Photos/
    ├── icon.png        # App icon (32x32px recommended for nav)
    └── splash.png      # App mockup/screenshot
```

## 🎨 Design Features

### Color Scheme
- **Primary**: `#ff6b35` (Orange gradient)
- **Background**: Dark gradient (`#0f0f0f` to `#1a1a1a`)
- **Text**: White with various opacities
- **Accents**: Orange gradients and glows

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Sections
1. **Navigation**: Fixed header with smooth scroll links
2. **Hero**: Main value proposition with CTA buttons
3. **Features**: 6-card grid showcasing core features
4. **Download**: Call-to-action with platform buttons
5. **Footer**: Simple branding and copyright

## 🛠️ Customization

### Updating Content

#### App Information
Edit the content in `index.html`:
- Change the hero title and subtitle
- Update feature descriptions
- Modify download button text

#### Styling
Modify `styles.css`:
- Update colors by changing CSS custom properties
- Adjust spacing and sizing
- Customize animations

#### Functionality
Enhance `script.js`:
- Add real download links
- Implement analytics tracking
- Add form submissions

### Adding Your App Store Links

Replace the placeholder alerts in `script.js`:

```javascript
// Replace in the download button click handler
downloadButtons.forEach(button => {
    button.addEventListener('click', function() {
        const platform = this.classList.contains('ios') ? 'iOS' : 'Android';
        
        if (platform === 'iOS') {
            window.open('https://apps.apple.com/your-app-link', '_blank');
        } else {
            window.open('https://play.google.com/store/apps/your-app-link', '_blank');
        }
    });
});
```

### Updating Images

Replace the images in the `Photos/` folder:
- `icon.png`: Your app icon (32x32px for nav, but higher res recommended)
- `splash.png`: App screenshot or mockup

## 📱 Responsive Design

The landing page is fully responsive with breakpoints at:
- **Desktop**: 1200px+ (default)
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

## 🌐 Deployment

### Option 1: GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify
1. Drag and drop your folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository for automatic deployments

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### Option 4: Traditional Web Hosting
Upload all files to your web hosting provider's public folder (usually `public_html` or `www`).

## 🔧 Performance Optimization

The landing page is already optimized for performance:
- Minimal external dependencies (only Google Fonts)
- Optimized CSS with efficient selectors
- Lightweight JavaScript with modern browser APIs
- Compressed and optimized images

### Further Optimizations
- Compress images further using tools like TinyPNG
- Implement lazy loading for images
- Add service worker for offline functionality
- Use WebP format for images (with fallbacks)

## 📊 Analytics

To add Google Analytics or other tracking:

```html
<!-- Add to <head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📄 License

This landing page template is free to use and modify for your project.

## 💡 Tips

1. **Test on Multiple Devices**: Use browser dev tools to test responsiveness
2. **Optimize Images**: Ensure your images are properly sized and compressed
3. **Update Links**: Replace all placeholder links with real ones
4. **SEO**: Update meta descriptions and add structured data
5. **Performance**: Test loading speed with tools like PageSpeed Insights

## 🤝 Contributing

Feel free to submit issues or pull requests to improve this landing page template.

---

**Built for GymPax** - Your no-BS workout tracker 💪 