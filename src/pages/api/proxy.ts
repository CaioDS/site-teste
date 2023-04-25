import fetch, { Headers as FetchHeaders } from 'node-fetch';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: NextRequest, context: any) => {
  const url = `${process.env.TARGET_URI}${request.nextUrl.pathname}${request.nextUrl.search}`;
  console.log('Evento: ', request, 'Contexto: ', context, 'URL', url);

  const requestHeaders = new FetchHeaders();
  requestHeaders.append('X-Origin', `${process.env.PROXY_URI}`);
  requestHeaders.append(
    'Access-Control-Allow-Origin',
    `https://siteteste.dtidigital.com.br`
  );

  const response = await fetch(url, {
    headers: requestHeaders,
  });
  const data = await response.text();

  const responseHeaders = new Headers();
  response.headers.forEach((value, key) => {
    responseHeaders.append(key, value);
  });

  return new Response(data, {
    headers: responseHeaders,
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
