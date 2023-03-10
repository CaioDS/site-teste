import { NextRequest } from 'next/server';
import fetch from 'node-fetch';

export const config = {
  runtime: 'edge',
};

export default async (request: NextRequest, context: any) => {
  const url = `${process.env.TARGET_URI}${request.nextUrl.pathname}${request.nextUrl.search}`;
  console.log('Evento: ', request, 'Contexto: ', context, 'URL', url);
  const response = await fetch(url);
  const data = await response.text();

  return new Response(data, {
    headers: {
      'content-type': 'text/html',
    },
  });
};

// type Data = {
//   name: string;
// };

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' });
// }
