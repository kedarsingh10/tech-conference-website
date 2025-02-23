# Tech Conference Website

A modern, responsive conference website built with SvelteKit and Bootstrap, featuring dark mode support and dynamic content management.

## Features

### 1. Dynamic Content
- countdown timer to event date
- Dynamic speaker profiles and session schedules
- Flexible sponsorship tier management
- Responsive design for all screen sizes

### 2. Theme Support
- Light/Dark mode toggle
- Consistent styling across components
- Custom CSS variables for easy theme customization
- Bootstrap 5 integration with theme support

### 3. Interactive Components
- Animated cards and buttons
- Responsive navigation with mobile support
- Custom scrollbars for schedule view
- Interactive sponsorship tiers display

### 4. Key Pages
- Home: Event countdown and featured speakers
- Speakers: Comprehensive speaker profiles
- Schedule: Interactive event timeline
- Sponsors: Tiered sponsorship packages
- About: Conference information
- Contact: Inquiry form

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm or pnpm

### Installation

1. Clone the repository

$bash
git clone <repository-url>
cd tech-conference-website

2. Install dependencies

$bash
npm install

3. Start the development server

$bash
npm run dev

4. Build for production

$bash
npm run build


## Project Structure

src/
├── lib/
│ ├── components/ # Reusable components
│ └── utils/ # Helper functions
├── routes/ # SvelteKit pages
├── stores/ # Svelte stores
├── app.css # Global styles
└── app.html # HTML template


## Styling

The project uses a combination of:
- Bootstrap 5 for layout and components
- Custom CSS for unique styling
- CSS variables for theming
- Global styles in app.css
- Component-specific styles

### Theme Customization

Modify theme variables in `app.css`:

css
:root {
--bs-body-color: #212529;
--bs-body-bg: #fff;
--bs-secondary-color: #6c757d;
}


## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- SvelteKit for the framework
- Bootstrap for the UI components
- Svelte community for inspiration and support
