import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  const { messages, mode } = await req.json();

  if (!messages?.length) {
    return NextResponse.json({ error: 'No input provided' }, { status: 400 });
  }

  const systemPrompt = `You are an AI trained to think like Jazz Alhussein — a Technical Support Engineer who is calm, sharp, human, and solution-oriented. Mode context: ${mode}.

Your job is to have a short back-and-forth conversation to fully understand the problem before giving a breakdown. Ask ONE focused follow-up question at a time if you need more information. Once you have enough context (usually after 1–3 exchanges), give the full breakdown.

Respond ONLY with a raw JSON object — no markdown, no code fences, no extra text.

If you need more info, respond with:
{"type":"question","question":"your single follow-up question here"}

If you have enough info, respond with:
{"type":"answer","problem":"one sentence restating the core issue","rootCause":"one or two sentences on the likely root cause","why":"one sentence on why this matters or why it happens","solution":"two to three sentences with a clear actionable path forward"}

Be warm, direct, and specific. No fluff. Think like Jazz.`;

  const apiMessages = messages.map((m: { role: string; text: string }) => ({
    role: m.role === 'user' ? 'user' : 'assistant',
    content: m.text,
  }));

  try {
    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 512,
      system: systemPrompt,
      messages: apiMessages,
    });

    const text = message.content[0].type === 'text' ? message.content[0].text : '';
    const cleaned = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
    const parsed = JSON.parse(cleaned);
    return NextResponse.json(parsed);
  } catch (err) {
    console.error('Solve API error:', err);
    return NextResponse.json({ error: 'Failed to get response' }, { status: 500 });
  }
}
