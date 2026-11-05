import {sitePath} from '../utils/paths';
export async function GET({site}) { return new Response(`User-agent: *\nAllow: /\nSitemap: ${new URL(sitePath('sitemap.xml'),site).href}\n`,{headers:{'Content-Type':'text/plain'}}); }
