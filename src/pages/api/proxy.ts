import type { NextApiRequest, NextApiResponse } from 'next';
import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  runtime: 'edge',
};

module.exports = createProxyMiddleware({
  target: `${process.env.TARGET_URI}/contato`,
  changeOrigin: true,
  xfwd: true,
});

// type Data = {
//   name: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' });
// }
