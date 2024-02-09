interface Props {
  src: string; //the image file path in folder public/images/social_media
  size: string; //sizes: medium, small (may implement more later)
}

//A round image with a background. Increases in opacity and size slightly on hover
const RoundImage = ({ src, size }: Props) => {
  if (size == "medium") {
    return (
      <div className="bg-slate-300 dark:bg-slate-600 size-72 rounded-full p-3 m-5 dynamic-opacity hover:shadow-xl hover:scale-105 transition-all">
        <img src={src} />
      </div>
    );
  } else if (size == "small") {
    return (
      <div className="bg-slate-300 dark:bg-slate-600 size-36 rounded-full p-3 m-5 dynamic-opacity hover:shadow-xl hover:scale-105 transition-all">
        <img src={src} />
      </div>
    );
  }
};

export default RoundImage;
