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
        bonus_classes={bonus_classes}
      />
      <p className="small-text-bg w-[90%] m-4 lg:mb-4 mb-20">{children}</p>
    </>
  );
};

export default ImageWithDescription;
