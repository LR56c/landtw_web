import Image from "next/image";
import { FC } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export const MainBackground: FC = () =>
{
  return (
    <div
      className="relative xs:h-96 xxs:h-[30rem] h-[38rem] w-full sm:h-full"
    >
      <div
        className="absolute z-0 h-full w-full bg-[url('/apple-gf0851a67a_1920.jpg')]
        bg-cover bg-center"
      />

      <div
        className="absolute z-10 h-full w-full bg-red-500 sm:bg-gray-500
        sm:bg-opacity-50 bg-opacity-80 bg-cover bg-center"
      />

      <div
        className="relative z-20 flex h-96 w-full flex-col space-y-4 sm:space-y-16 sm:h-full"
      >
        <div
          className="flex w-full flex-col items-center justify-start space-y-2 sm:justify-center"
        >
          <div
            className="relative h-16 w-16"
          >
            <Image
              className="rounded-xl"
              objectFit="cover"
              layout="responsive"
              width={ 100 }
              height={ 100 }
              src="/favicon.ico"
            />
          </div>
          <p
            className="text-center text-3xl text-white"
          >
            Title app
          </p>
          <div
            className="flex flex-row fill-current text-white space-x-3"
          >
            <FaFacebookF/>
            <FaTwitter/>
          </div>
        </div>
        <div
          className="relative flex w-full flex-row"
        >
          <div
            className="sm:basis-1/2"
          />
          <div
            className="flex w-full flex-col items-center space-y-4 justify-start:center sm:basis-1/2 sm:items-start sm:justify-start sm:pb-16"
          >
            <div
              className="text-center text-2xl font-bold text-white sm:text-start"
            >
              Absolutios potus in virundum!
            </div>
            <p
              className="text-center text-white sm:w-2/3 sm:text-start xxs:line-clamp-none line-clamp-11"
            >
              Cur urbs favere? Sunt acipenseres resuscitabo regius, secundus assimilatioes. A falsis, navis festus lanista. Unda hic ducunt ad camerarius lapsus. Caniss sunt advenas de noster bulla. Mirabilis abactus foris contactuss victrix est. Est placidus abactor, cesaris.
            </p>
            <div
              className="flex w-full flex-row justify-center sm:justify-start"
            >
              <div
                className="relative h-12 w-32"
              >
                <Image
                  objectFit="contain"
                  layout="fill"
                  src="/apple-app-store-icon.png"
                />
              </div>
              <div
                className="relative h-12 w-32"
              >
                <Image
                  objectFit="contain"
                  layout="fill"
                  src="/en_badge_web_generic.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
