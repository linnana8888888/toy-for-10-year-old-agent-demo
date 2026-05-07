// Serverless function that logs its own visits
// Visit: https://toy-for-10-year-old-agent-demo.vercel.app/api/bot-check
// to see if any bots have triggered it

export default function handler(req, res) {
  const ua = req.headers['user-agent'] || 'unknown';
  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  const timestamp = new Date().toISOString();
  
  const botPatterns = [
    'OAI-SearchBot', 'GPTBot', 'ChatGPT-User', 'PerplexityBot',
    'Googlebot', 'Bingbot', 'Google-Extended', 'Bytespider',
    'ClaudeBot', 'Anthropic'
  ];
  
  const isBot = botPatterns.some(p => ua.includes(p));
  
  res.status(200).json({
    timestamp,
    userAgent: ua,
    ip: ip.split(',')[0],
    isKnownBot: isBot,
    matchedBot: botPatterns.find(p => ua.includes(p)) || null,
    message: "This endpoint exists to detect AI crawler visits. Check Vercel Function Logs for historical data."
  });
}
