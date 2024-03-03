import RectangularImage from "./RectangularImage";

interface Props {
  src: string;
  image_size?: string;
  bonus_classes?: string;
  children?: string;
}

const ImageWithDescription = ({
  src,
  image_size = "large",
  bonus_classes = "",
  children = "",
}: Props) => {
  return (
    <>
      <RectangularImage
        src={src}
        size={image_size}
        bonus_classes={bonus_classes + " lg:w-[100%] w-[70%]"}
      />
      <p className="small-text-bg lg:w-[90%] w-[65%] m-4 lg:mb-4 mb-20">
        {children}
      </p>
    </>
  );
};

export default ImageWithDescription;
