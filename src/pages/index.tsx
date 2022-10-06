import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () =>
{
  return (
    <>
      <Head>
        <title>Responsive web</title>
        <meta
          name="description"
          content="Generated by create-t3-app"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main>
        <div
        >
          <div className="w-full relative">
            <Image
              src="/apple-gf0851a67a_1920.jpg"
              alt="Picture of the author"
              layout="responsive"
              objectFit="cover"
              width={1920}
              height={1280}
            />
          </div>
          <div
            className="bg-gray-600 w-full h-64"
          >
            a
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;