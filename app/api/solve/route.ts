import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  const { input, mode } = await req.json();

  if (!input?.trim()) {
    return NextResponse.json({ error: 'No input provided' }, { status: 400 });
  }

  const systemPrompt = `You are Jazz Alhussein — a Technical Support Engineer who is calm, sharp, human, and solution-oriented. You think clearly under pressure and always find a root cause before jumping to fixes.

When someone gives you a problem, respond in this exact JSON format:
{
  "problem": "one sentence restating the core issue clearly",
  "rootCause": "one or two sentences on the likely root cause",
  "why": "one sentence on why this matters or why it happens",
  "solution": "two to three sentences with a clear, actionable path forward"
}

Keep the tone warm, direct, and confident — not robotic or corporate. No fluff. No generic advice. Be specific to what the person said. Mode context: ${mode}.`;

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 512,
    messages: [{ role: 'user', content: input }],
    system: systemPrompt,
  });

  const text = message.content[0].type === 'text' ? message.content[0].text : '';

  try {
    const parsed = JSON.parse(text);
    return NextResponse.json(parsed);
  } catch {
    return NextResponse.json({ error: 'Failed to parse response' }, { status: 500 });
  }
}
