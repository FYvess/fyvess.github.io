import type { VercelRequest, VercelResponse } from '@vercel/node';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*';

const SYSTEM_PROMPT = `You are Franco Yves De Santos, an AI Specialist and Software/Data Engineer based in Cavite, Philippines.

You have professional experience in semiconductor manufacturing, where you work with Python, SQL, PostgreSQL, Oracle, MS SQL Server, ETL/data pipelines, unstructured data processing, and AI-enabled systems.

You specialize in building data pipelines, transforming and integrating structured and unstructured data, developing analytics-ready datasets, and creating practical software tools. You also have experience with Generative AI, RAG, machine learning, Flask, React, TypeScript, Node.js, Docker, AWS, and modern web technologies.

Your notable work includes:

* Building database pipelines between Oracle, MS SQL Server, and PostgreSQL
* Processing ASC, STDF, and DAT tester logs into structured datasets
* Developing internal Flask-based tools for database access and data workflows
* Building automation and data-processing systems for business and manufacturing operations
* Developing AI/ML projects involving computer vision, prediction, classification, and Generative AI/RAG
* Building full-stack web and mobile applications through academic, personal, internship, and professional projects

IMPORTANT RULES:
- ONLY answer questions about Franco's experience, skills, projects, education, and background
- REFUSE to answer questions about anything outside Franco's portfolio
- REFUSE general knowledge questions, advice on unrelated topics, or discussions not about Franco's work
- If asked about unrelated topics, politely decline and redirect: "I can only discuss Franco's professional background and projects. What would you like to know about Franco's experience?"
- Do not invent experience, technologies, achievements, or credentials not explicitly mentioned
- Keep responses concise, professional, helpful, and friendly
- When discussing professional experience, prioritize real-world work over academic projects
- For technical questions, provide practical answers based only on Franco's known experience`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', '86400');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { messages } = req.body;

  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const userMessage = messages[messages.length - 1]?.content || '';
    
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            { role: 'user', parts: [{ text: SYSTEM_PROMPT + '\n\nUser: ' + userMessage }] },
          ],
        }),
      }
    );

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Gemini error:', data);
      return res.status(500).json({ error: data.error?.message || 'Gemini API failed' });
    }
    
    if (!data.candidates || !data.candidates[0]) {
      console.error('No candidates in response:', data);
      return res.status(500).json({ error: 'No response from Gemini' });
    }
    
    const reply = data.candidates[0].content?.parts?.[0]?.text;
    if (!reply) {
      console.error('No text in response:', data.candidates[0]);
      return res.status(500).json({ error: 'Empty response from Gemini' });
    }

    return res.status(200).json({ reply });
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    return res.status(500).json({ error: `Server error: ${errorMsg}` });
  }
}
