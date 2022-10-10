import Image from "next/image";
import { FC } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export const MainBackground: FC = () =>
{
  return (
    <div
      className="relative h-96 w-full sm:h-full"
    >
      <div
        className="absolute z-0 h-full w-full bg-[url('/apple-gf0851a67a_1920.jpg')] bg-cover bg-center"
      />

      <div
        className="absolute z-10 h-full w-full bg-red-500 bg-opacity-50 bg-cover bg-center"
      />

      <div
        className="relative flex h-96 w-full flex-col space-y-4 sm:space-y-16 sm:h-full z-20"
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
              className="text-center text-2xl font-bold text-white line-clamp-1 sm:text-start"
            >
              Absolutios potus in virundum!
            </div>
            <p
              className="text-center text-white line-clamp-4 sm:w-2/3 sm:text-start"
            >
              Congregabo aegre ducunt ad grandis idoleum.Cur adiurator nocere?Cur exemplar assimilant?Vae, gluten!Stella, valebat, et competition.Mineralis manducares, tanquam fortis cacula.Cum musa observare, omnes uriaes tractare dexter, altus aonideses.Planetas sunt diatrias de teres indictio.Tata grandis demolitione est.Humani generis, triticum, et vox.Glutens ire in brigantium!
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
