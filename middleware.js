// Vercel Edge Middleware — runs on every request
// Logs bot visits to Vercel's Function Logs (visible in dashboard)
export default function middleware(request) {
  const ua = request.headers.get('user-agent') || '';
  
  const bots = ['OAI-SearchBot', 'GPTBot', 'ChatGPT-User', 'PerplexityBot', 
                'Googlebot', 'Bingbot', 'Google-Extended', 'ClaudeBot', 'Anthropic',
                'Bytespider', 'YandexBot', 'DuckDuckBot'];
  
  const matchedBot = bots.find(b => ua.includes(b));
  
  if (matchedBot) {
    console.log(JSON.stringify({
      event: 'BOT_VISIT',
      bot: matchedBot,
      path: new URL(request.url).pathname,
      timestamp: new Date().toISOString(),
      ua: ua.substring(0, 200)
    }));
  }
  
  // Pass through — don't block anything
  return undefined;
}

export const config = {
  matcher: ['/', '/llms.txt', '/llms-full.txt', '/agent-product-feed.json', '/sitemap.xml', '/robots.txt']
};
