import { createProxyMiddleware } from 'http-proxy-middleware';

export const reverseProxy = createProxyMiddleware({
  target: `${process.env.TARGET_URI}`,
  changeOrigin: true,
  xfwd: true,
});
