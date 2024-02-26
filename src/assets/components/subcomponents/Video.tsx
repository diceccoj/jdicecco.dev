interface Props {
  src: string;
}

const Video = ({ src }: Props) => {
  return (
    <video
      controls
      src={src}
      className="bg-slate-300 dark:bg-slate-600 rounded-lg p-3 m-5 dynamic-opacity hover:shadow-xl hover:scale-105 transition-all w-[70%]"
    />
  );
};

export default Video;
