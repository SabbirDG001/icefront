# ICEFronT 2026 Conference Website - Multi-Page Version

This is a restructured version of the ICEFronT 2026 conference website with each section as a separate HTML page.

## Project Structure

```
conference-site/
├── index.html              # Home page with hero section
├── about.html              # About the conference
├── call-for-papers.html    # Call for papers
├── scopes.html             # Conference scopes and tracks
├── speakers.html           # Keynote speakers
├── program.html            # Conference program (Day 1 & 2)
├── committee.html          # Organizing, Technical & Advisory committees
├── reviewers.html          # Program Committee members
├── submission.html         # Paper submission guidelines
├── registration.html       # Registration fees and options
├── dates.html              # Important dates
├── contact.html            # Contact information
├── conference.css          # Main stylesheet
├── conference.js           # JavaScript functionality
└── public/                 # Images and assets (you'll need to add these)
    ├── MBSTU_logo.png
    ├── conference_logo.png
    └── (speaker images, etc.)
```

## Pages Overview

### 1. **index.html** - Home Page
- Hero section with conference title and key details
- Call-to-action buttons for registration and submission
- Conference logo display

### 2. **about.html** - About ICEFronT 2026
- Conference objectives and mission
- Six key focus areas (Innovation, Responsible Technology, UN SDG Alignment, etc.)
- Information about IEEE publication

### 3. **call-for-papers.html** - Call for Papers
- Research invitation
- Conference scope overview
- Publication information (IEEE Digital Library)

### 4. **scopes.html** - Conference Scopes
- Track 1: Artificial Intelligence and Machine Learning
- Track 2: Software Engineering and Data Science
- Track 3: Cybersecurity and Privacy
- Track 4: Internet of Things (IoT) and Smart Systems
- Track 5: Communication and Emerging Technologies
- Track 6: Digital Transformation and Information Systems
- Track 7: Miscellaneous (Textiles, Energy, Robotics, etc.)

### 5. **speakers.html** - Keynote Speakers
- Keynote speaker profiles
- Dynamically loaded speaker information
- Speaker images and affiliations

### 6. **program.html** - Conference Program
- Day 1 (June 25) schedule
- Day 2 (June 26) schedule
- Tab-based navigation between days
- Session times and descriptions

### 7. **committee.html** - Committee
- Organizing Committee
- Technical Program Committee
- International Advisory Committee
- Tab-based navigation between committee types

### 8. **reviewers.html** - PC Members
- Program Committee members list
- Pagination support for large lists
- Affiliate information

### 9. **submission.html** - Submission Guidelines
- Paper submission system (Microsoft CMT)
- IEEE formatting requirements
- Template links (Overleaf and IEEE)
- Plagiarism and ethics guidelines
- Camera-ready submission instructions
- Publication and virtual participation details

### 10. **registration.html** - Registration
- National registration fees (BDT)
- International registration fees (USD)
- Different categories (Students, Authors, Non-authors)
- Tab-based navigation between national and international

### 11. **dates.html** - Important Dates
- Paper submission deadline: March 7, 2026
- Notification of acceptance: April 7, 2026
- Camera-ready submission: May 7, 2026
- Registration deadline: May 28, 2026
- Conference dates: June 25-26, 2026

### 12. **contact.html** - Contact Information
- Conference chair details
- Email and phone contact
- University address
- Contact form
- Google Maps embed

## Features

### Navigation
- **Top Navigation Bar**: Sticky header with MBSTU logo, conference title, and important dates banner
- **Secondary Navigation**: Sticky menu with links to all pages
- **Mobile-Responsive**: Hamburger menu for mobile devices
- **Active Page Highlighting**: Current page is highlighted in navigation

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktops
- Responsive navigation with mobile ticker for dates
- Optimized layouts for all screen sizes

### Interactive Elements
- Tab-based content switching (Program, Committee, Registration)
- Pagination for large lists (Committee members, PC members)
- Modal windows for registration
- Smooth scroll behavior
- Hover effects and animations

### Key Dates Banner
- Displays all important dates at the top of every page
- Color-coded by event type:
  - Submission (Orange)
  - Notification (Red)
  - Camera Ready (Purple)
  - Registration (Dark Purple)
  - Conference (Green)
- Animated glowing border effect on hover
- Mobile ticker version for smaller screens

## Setup Instructions

1. **Extract the files** to your web server or local directory

2. **Add images** to the `public/` folder:
   - `MBSTU_logo.png` - University logo
   - `conference_logo.png` - Conference logo
   - Speaker images (as referenced in conference.js)

3. **No build process required** - Pure HTML, CSS, and JavaScript

4. **Open in browser**:
   - Simply open `index.html` in a web browser
   - Or deploy to any static hosting service

## Technical Details

### CSS Framework
- Custom CSS with no external dependencies (except Font Awesome icons)
- Uses CSS Grid and Flexbox for layouts
- Custom properties for theming
- Smooth animations and transitions

### JavaScript
- Vanilla JavaScript (no frameworks)
- Dynamic content loading for speakers and committees
- Tab navigation functionality
- Mobile menu toggle
- Form handling (ready for backend integration)
- Pagination for large lists

### External Dependencies
- **Font Awesome 6.0.0** - For icons
- **Google Fonts** - Inter font family

## Customization

### Colors
The main color scheme can be modified in the CSS file:
- Primary Blue: #1e40af, #1976d2
- Secondary colors for date banners (defined per event type)

### Content
- Speaker data: Modify the `speakers` array in `conference.js`
- Committee data: Modify the committee arrays in `conference.js`
- Static content: Edit the HTML files directly

### Dates
Update important dates in:
1. Top navigation banner (in each HTML file)
2. Footer (in each HTML file)
3. Dates page content

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes for Deployment

1. **Images**: Ensure all images in the `public/` folder are properly uploaded
2. **Links**: Update any external links (submission system, IEEE templates, etc.)
3. **Forms**: Connect contact and registration forms to a backend service
4. **Email protection**: Update email addresses (currently using placeholder format)
5. **Social media**: Add actual social media URLs in footer

## Future Enhancements
- Backend integration for forms
- Search functionality
- Language selection (Bengali/English)
- Downloadable PDF schedules
- Live session streaming links
- Photo gallery from past conferences

## Support
For questions about the website structure or customization, refer to the inline comments in the code files.

---

**Conference Website for ICEFronT 2026**
*Mawlana Bhashani Science and Technology University*
*June 25-26, 2026 | Tangail, Bangladesh*
