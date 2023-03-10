import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import GraphQlServer from '@/config/GraphQlServer';
import { gql } from '@apollo/client';
import { BlockRenderer } from '@/components/BlockRenderer/BlockRenderer';
import { cleanAndTransformBlocks } from '@/utils/cleanAndTransformBlocks';
import '@wordpress/block-library/build-style/style.css';

const inter = Inter({ subsets: ['latin'] });

export const getStaticProps = async () => {
  const { data } = await GraphQlServer.query({
    query: gql`
      query NewQuery {
        nodeByUri(uri: "/hello-test") {
          ... on Page {
            id
            title
            blocksJSON
          }
        }
      }
    `,
  });

  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);

  return {
    props: {
      blocks,
      propsTeste: 'Isso é um teste estático de props',
      propsNaoPassar: 'Isso é um teste',
    },
  };
};

interface IHomeProps {
  blocks: any;
  propsTeste: string;
}

export default function Home({ blocks, propsTeste }: IHomeProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <BlockRenderer blocks={blocks} />
      </main>
    </>
  );
}
