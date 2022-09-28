import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import styles from '../styles/Home.module.css';

const locales = ['en', 'de'];

const Home: NextPage = () => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.container}>
      <Head>
        <title>{formatMessage({ id: 'front.title' })}</title>
        <meta name="description" content={formatMessage({ id: 'front.description' })} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        {locales.map((locale) => (
          <li key={locale}>
            <Link href={`/?locale=${locale}`}>{locale}</Link>
          </li>
        ))}
      </ul>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {formatMessage({ id: 'front.heading' }, { link: <a href="https://nextjs.org">Next.js!</a> })}
        </h1>

        <p className={styles.description}>
          {formatMessage(
            { id: 'front.subheading' },
            { code: <code className={styles.code}>pages/index.tsx</code> },
          )}
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>{formatMessage({ id: 'front.docs.title' })} &rarr;</h2>
            <p>{formatMessage({ id: 'front.docs.description' })}</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>{formatMessage({ id: 'front.learn.title' })} &rarr;</h2>
            <p>{formatMessage({ id: 'front.learn.description' })}</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
            <h2>{formatMessage({ id: 'front.examples.title' })} &rarr;</h2>
            <p>{formatMessage({ id: 'front.examples.description' })}</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>{formatMessage({ id: 'front.deploy.title' })} &rarr;</h2>
            <p>{formatMessage({ id: 'front.deploy.description' })}</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {formatMessage(
            { id: 'footer.message' },
            {
              logo: (
                <span className={styles.logo}>
                  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
              ),
            },
          )}
        </a>
      </footer>
    </div>
  );
};

export default Home;
