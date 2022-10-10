import { FC } from "react";
import { MdAccountTree } from "react-icons/md";

interface SectionTileProps
{
  title: string;
  subtitle: string;
  description: string;
  icon: JSX.Element;
}

export const SectionTile: FC<SectionTileProps> = ( {
  subtitle = "Cur brabeuta resistere?",
  description = "Est albus advena, cesaris.Fortis, rusticus bursas sapienter manifestum de secundus, raptus abactus.",
  title = "Section Title",
  icon= <MdAccountTree/>
} ) =>
{
  return (
    <div
      className="relative flex h-64 xxs:w-64 w-48 flex-col items-center justify-center"
    >
      <div
        className="relative mb-5 flex h-full w-full basis-1/4 flex-col items-center justify-center"
      >
        <div
          className="relative h-16 w-16 rounded-full bg-gradient-to-r from-red-600 to-red-500"
        />
        <div
          className="absolute flex flex-col items-center justify-center fill-current text-white  text-3xl"
        >
          { icon }
        </div>
      </div>
      <div
        className="text-ellipsis text-gray-800 text-2xl line-clamp-1"
      >
        { title }
      </div>
      <div
        className="my-2 text-ellipsis text-center text-sm text-gray-400 line-clamp-2"
      >
        { subtitle }
      </div>
      <div
        className="text-ellipsis text-center text-gray-800 text-sm line-clamp-3"
      >
        { description }
      </div>
    </div>
  )
}
