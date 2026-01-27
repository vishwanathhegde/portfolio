import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

const cvContext = `
Vishwanath Hegde is a Working Student in Software Development, currently pursuing a Master's degree in Applied Computer Science at Hochschule Schmalkalden, Germany. He is available immediately for 20 hrs/week and is open to relocation within Germany.

Contact Information:
- Location: Schmalkalden, Germany
- Email: vishwanathmhegde23@gmail.com
- Phone: +49 155 10733721
- LinkedIn and GitHub profiles available

Professional Summary:
Master's student in Applied Computer Science with 3+ years of industry experience as a Software Engineer building and maintaining production-scale web and mobile applications. Strong expertise in Angular, Flutter, and TypeScript, with a proven record of delivering scalable features, improving performance, and collaborating across cross-functional teams.

Technical Skills:
- Frontend & Mobile: Angular (13+), Flutter, Ionic, React, HTML5, CSS3, Tailwind CSS, TypeScript, JavaScript, RxJS
- Backend & APIs: Node.js, Express.js, REST APIs
- Databases: MySQL, MongoDB
- Tools & Platforms: Git, GitHub, GitLab, Jenkins, Jira, Confluence, Postman, VS Code, Android Studio, Xcode
- AI and Tools: OpenAI GPT-4, Langchain, RAG, Pinecone, n8n, Cursor, Claude, Ollama
- Engineering Practices: Clean Architecture, Performance Optimization, Agile/Scrum
- Languages: English (Professional), German (A1 – Learning)

Professional Experience:
Software Engineer at Robosoft Technologies, India:
- Owned end-to-end development of production-grade features for large-scale Flutter and Angular applications
- Designed scalable UI architectures using clean architecture principles, improving maintainability and reducing regression issues
- Implemented Google Analytics and event tracking to enable data-driven decisions and increase user engagement by 20%
- Developed and optimized FinTech workflows including SIP, Lumpsum, goal planning, and profile management
- Led Angular upgrades (13+) and performance optimizations, improving long-term stability
- Collaborated with backend, QA, and product teams to integrate REST APIs and resolve production issues

Selected Projects:
1. PGIM India Mutual Funds (Angular): Developed investor and distributor workflows with self-certification modules and role-based access
2. UTI Mutual Fund (Angular): Implemented transaction and non-transaction flows, smart search, dashboards, and API integrations
3. Afiya – Healthcare App (Flutter): Built appointment booking and management, integrated analytics, and handled Android/iOS store releases
4. Lixil Tomcat – Health Tracking App (Flutter): Implemented Bluetooth device communication and real-time health data visualization

Education:
- M.Sc. Applied Computer Science at Hochschule Schmalkalden, Germany (Oct 2025 – Present)
- B.E. Information Science and Engineering at Bapuji Institute of Engineering and Technology, India (Aug 2018 – Jul 2022)

Activities:
- Conducted technical workshops on Flutter and programming fundamentals
- Mentored undergraduate students in technical and interview preparation for campus placements
`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are a helpful AI assistant that answers questions about Vishwanath Hegde's professional background, experience, skills, projects, and education. Use the following CV information to answer questions accurately and professionally:

${cvContext}

Be concise, friendly, and professional in your responses. If asked about something not in the CV, politely say you don't have that information.`,
        },
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const response = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat message' },
      { status: 500 }
    );
  }
}
