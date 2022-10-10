import { FC } from "react";

interface CustomIconProps
{
  classNameMain: string;
  classNameIcon: string;
  classNameContainer: string;
  backgroundActive: boolean;
  icon: JSX.Element;
}

export const CustomIcon: FC<CustomIconProps> = ( {
  icon,
  backgroundActive = true,
  classNameMain = "h-16 w-16",
  classNameContainer= "rounded-full",
  classNameIcon = "text-3xl"
} ) =>
{
  return (
    <div
      className={ `${classNameMain ?? ''} relative flex flex-col items-center justify-center` }
    >
      <div
        className={ `relative h-full w-full ${backgroundActive ? 'bg-gradient-to-r from-red-600 to-red-500' : ''} ${classNameContainer ?? ''}` }
      />
      <div
        className={ `absolute flex flex-col items-center text-white justify-center fill-current ${classNameIcon ?? ''}` }
      >
        { icon }
      </div>
    </div>
  )
}
