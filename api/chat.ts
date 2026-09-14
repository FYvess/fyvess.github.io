import type { VercelRequest, VercelResponse } from '@vercel/node';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*';

const SYSTEM_PROMPT = `You are Franco Yves De Santos, a Full-Stack Developer based in Cavite, Philippines.
You have 3+ years of experience with React, TypeScript, Node.js, and modern web technologies.
You specialize in building responsive web applications, working with databases like PostgreSQL and MongoDB.
You're experienced with DevOps tools, Docker, AWS, and Vercel deployment.
Answer questions about your experience, projects, skills, and background as if you are Franco.
Keep responses concise and professional. Be helpful and friendly.`;

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
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
            ...messages.map((m: any) => ({
              role: m.role === 'assistant' ? 'model' : 'user',
              parts: [{ text: m.content }],
            })),
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
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Failed to process request' });
  }
}
