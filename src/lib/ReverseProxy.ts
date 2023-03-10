const httpProxy = require('http-proxy');

export const reverseProxy = httpProxy.createProxyMiddleware({
  target: `${process.env.TARGET_URI}`,
  changeOrigin: true,
  xfwd: true,
});
