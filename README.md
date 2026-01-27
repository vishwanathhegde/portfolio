# Vishwanath Hegde - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring an AI-powered chatbot.

## Features

- 🎨 Modern, sleek design with glassmorphism effects
- 📱 Fully responsive across all devices
- 🤖 AI chatbot powered by OpenAI (GPT-3.5-turbo)
- ✨ Smooth animations and transitions
- 🎯 All sections: Home, About, Experience, Projects, Education, Achievements, Contact
- 🌈 Beautiful gradient effects and modern UI

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- OpenAI API key (for chatbot functionality)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory:
```bash
OPENAI_API_KEY=your_openai_api_key_here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
vishwa-portfolio/
├── app/
│   ├── api/
│   │   └── chat/          # OpenAI API route
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page with all sections
├── components/
│   ├── Navigation.tsx     # Navigation bar
│   └── Chatbot.tsx        # AI chatbot component
└── package.json
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **OpenAI API** - Chatbot functionality
- **Lucide React** - Icons

## Sections

1. **Home** - Hero section with introduction
2. **About** - Professional summary and skills
3. **Experience** - Work experience at Robosoft Technologies
4. **Projects** - Selected projects showcase
5. **Education** - Academic background
6. **Achievements** - Accomplishments and activities
7. **Contact** - Contact information and quick facts

## Chatbot

The AI chatbot at the bottom of the page can answer questions about:
- Professional experience
- Technical skills
- Projects
- Education
- Contact information
- And more!

Make sure to add your OpenAI API key in `.env.local` for the chatbot to work.

## Build for Production

```bash
npm run build
npm start
```

## License

This project is private and personal.
