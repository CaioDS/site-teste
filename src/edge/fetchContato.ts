import fetch from 'node-fetch';

module.exports = async (event: any, context: any) => {
  console.log(event, context);
  const url = `${process.env.TARGET_URI}/contato`;
  const response = await fetch(url);
  const data = await response.text();

  return new Response(data, {
    headers: {
      'content-type': 'text/html',
    },
  });
};
