import { FC } from "react";
import { HeadingImage } from "./HeadingImage";
import { HeadingSection } from "./HeadingSection";

interface HeadingTileProps
{
  alternateBackground: boolean;
  activeIconBackground: boolean;
  alternatePosition: boolean;
  icon: JSX.Element;
}

export const HeadingTile: FC<HeadingTileProps> = ( {
  alternateBackground = false,
  icon,
  activeIconBackground = true,
  alternatePosition = false
} ) =>
{
  return (
    <div
      className={ `w-full sm:h-96 h-[36rem] grid grid-cols-1 grid-rows-1 pt-12 ${ alternateBackground
        ? 'bg-gray-800' : '' }` }
    >
      <div
        className="grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-1 grid-rows-6"
      >
        { alternatePosition
          ? <HeadingImage
            alternatePosition={ alternatePosition }
          />
          : <HeadingSection
            icon={ icon }
            alternatePosition={ alternatePosition }
            activeIconBackground={ activeIconBackground }
          /> }
        { alternatePosition
          ? <HeadingSection
            activeIconBackground={ activeIconBackground }
            alternatePosition={ alternatePosition }
            icon={ icon }
          />
          : <HeadingImage
            alternatePosition={ alternatePosition }
          /> }
      </div>
    </div>
  )
}
