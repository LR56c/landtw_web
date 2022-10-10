import { FC } from "react";
import Image from "next/image";

interface HeadingImageProps
{
  alternatePosition: boolean;
}

export const HeadingImage: FC<HeadingImageProps> = ( { alternatePosition } ) =>
{
  return (
    <div
      className="grid lg:grid-cols-3 grid-cols-1 grid-rows-1 row-start-4
      sm:row-auto row-span-3 items-end justify-items-center"
    >
      <div
        className={ `relative lg:col-span-2 ${alternatePosition ? 'lg:col-start-2' : ''}` }
      >
        <Image
          src="/iphone-g56e442c36_1920.jpg"
          objectFit="cover"
          layout="fixed"
          width={ 200 }
          height={ 250 }
        />
      </div>
    </div>
  )
}
