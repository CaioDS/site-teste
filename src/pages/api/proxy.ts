import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export const config = {
  runtime: 'edge',
};

export default async (event: any, context: any) => {
  console.log('Evento: ', event, 'Contexto: ', context);
  const url = `${process.env.TARGET_URI}/contato`;
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
