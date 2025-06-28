# AI Software Engineer Portfolio - Static Site

A modern, responsive static website showcasing AI software engineering expertise and system setup documentation.

## Project Structure

```
ramanuj-dad.github.io/
├── css/                    # Stylesheets
│   ├── main.css           # Main site styles (index.html)
│   └── docs.css           # Documentation page styles
├── js/                     # JavaScript files
│   ├── main.js            # Main site functionality
│   └── docs.js            # Documentation page functionality
├── assets/                 # Static assets
│   └── images/            # Image files (future use)
├── index.html             # Main portfolio page
├── access-steps.html      # SSH and remote access documentation
├── virtualization-steps.html # KVM/QEMU virtualization guide
├── access-steps.txt       # Text version of access steps
├── virtualization-steps.txt # Text version of virtualization steps
├── git-commands.sh        # Git command reference
└── README.md              # This file
```

## Features

### Main Portfolio (`index.html`)
- **Responsive Design**: Mobile-first approach with sidebar navigation
- **Modern UI**: Clean, professional design with animations
- **Interactive Elements**: 
  - Collapsible sidebar navigation
  - Animated geometric graphics
  - Hover effects and transitions
- **Tech Stack Showcase**: Icons and descriptions of technologies
- **Fedora Linux Announcement**: Download link for latest release

### Documentation Pages
- **Access Steps** (`access-steps.html`): SSH and remote desktop setup
- **Virtualization Steps** (`virtualization-steps.html`): KVM/QEMU configuration
- **Interactive Features**:
  - Copy-to-clipboard functionality for commands
  - Responsive command blocks with syntax highlighting
  - Information boxes with different styles (info, warning, success)
  - Step-by-step numbered instructions

## CSS Organization

### `css/main.css`
- Main site layout and navigation
- Header animations and geometric graphics
- Responsive sidebar functionality
- Color scheme and typography
- Mobile responsiveness

### `css/docs.css`
- Documentation page styling
- Command block formatting
- Information box variations
- Feature grid layouts
- Copy button styling

## JavaScript Organization

### `js/main.js`
- Sidebar toggle functionality
- Navigation handling
- Home content display logic
- Mobile responsiveness controls

### `js/docs.js`
- Copy-to-clipboard functionality
- Command block header generation
- Smooth scrolling for anchor links
- Tooltip functionality

## Design System

### Color Palette
- **Primary**: `#2d3436` (Dark gray)
- **Accent**: `#00cec9` (Teal)
- **Text**: `#2d3436` (Dark gray)
- **Background**: `#f5f6fa` (Light gray)
- **Success**: `#48bb78` (Green)
- **Warning**: `#ed8936` (Orange)

### Typography
- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Line Height**: 1.6
- **Responsive**: Scales appropriately on mobile devices

### Components
- **Sidebar Navigation**: Fixed position with smooth transitions
- **Command Blocks**: Dark theme with copy functionality
- **Info Boxes**: Color-coded for different message types
- **Feature Cards**: Grid layout for showcasing features
- **Buttons**: Hover effects and state changes

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## Performance

- External CSS and JS files for better caching
- Optimized animations using CSS transforms
- Minimal JavaScript for enhanced performance
- CDN-hosted Font Awesome icons

## Development

To modify the site:

1. **Styles**: Edit files in the `css/` directory
2. **Functionality**: Modify files in the `js/` directory
3. **Content**: Update HTML files directly
4. **Assets**: Add images to `assets/images/` directory

## Deployment

This is a static site that can be deployed to:
- GitHub Pages (current)
- Netlify
- Vercel
- Any static hosting service

No build process required - just upload the files and they're ready to serve. 