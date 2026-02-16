export const runtime = 'edge';

export async function POST(request: Request) {
  const { messages } = await request.json();

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/meta/llama-3.1-8b-instruct`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          { role: 'system', content: 'You are Shahins portfolio assistant. Shahin Yaghinloo is a recent CS graduate from SUNY Farmingdale (May 2025, 3.4 GPA). He interned as a Data Scientist at the FDA (Summer 2024, Spring 2025) and is now leading an early-stage AI/software venture in stealth mode. Skills: JavaScript, TypeScript, HTML, CSS, React, Next.js, Tailwind CSS. Projects: Plot Twist Movie App, this portfolio site. Links: github.com/Yaghs, linkedin.com/in/shahin-yaghinloo-00380a1a7. Answer questions about Shahin briefly and directly. If asked something unrelated to Shahin, politely redirect.' },
          ...messages,
        ],
      }),
    }
  );

  const data = await response.json();
  return Response.json(data);
}