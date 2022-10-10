import { FC } from "react";
import { CustomIcon } from "./CustomIcon";

interface HeadingSectionProps
{
  alternatePosition: boolean;
  classNameIcon: string;
  activeIconBackground: boolean;
  icon: JSX.Element;
}

export const HeadingSection: FC<HeadingSectionProps> = ( {
  classNameIcon = "text-white",
  icon,
  activeIconBackground = true,
  alternatePosition = false
} ) =>
{
  return (
    <div
      className="grid xl:grid-cols-12 sm:grid-cols-8 grid-cols-1 sm:grid-rows-1
       grid-rows-6 sm:row-auto row-span-3 space-x-2"
    >
      <div
        className={ `${ alternatePosition ? '' : 'xl:col-start-5 sm:col-start-3 col-start-1' }
         grid sm:items-start items-center sm:justify-items-end justify-items-center` }
      >
        <CustomIcon
          classNameMain="w-8 h-8"
          classNameContainer="rounded-lg"
          classNameIcon={ `text-2xl ${ classNameIcon ?? '' }` }
          icon={ icon }
          backgroundActive={ activeIconBackground }
        />
      </div>
      <div
        className="xl:col-span-7 sm:col-span-5"
      >
        <p
          className="font-bold text-white text-xl mb-3 text-center sm:text-start"
        >
          Heading here
        </p>
        <p
          className="text-white text-ellipsis sm:line-clamp-8 line-clamp-5"
        >
          Secundus vigils ducunt ad tus.Est ferox agripeta, cesaris.Sunt byssuses imperium peritus, regius cursuses.Ubi est rusticus victrix?Eheu, fidelis impositio!Ecce, peritus historia!Fidess observare!Sunt toruses acquirere magnum, raptus finises.Cur lactea mori?Est barbatus sectam, cesaris.Domesticus, bassus eposs sed mire fallere de albus, regius contencio.Salvus ventuss ducunt ad lura.
        </p>
      </div>
    </div>
  )
}
