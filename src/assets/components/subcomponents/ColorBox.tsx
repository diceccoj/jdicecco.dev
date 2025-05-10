//a colored box to display jobs and/or projects

interface Props {
  color: string;
  title: string;
  subtitle?: string;
  children?: string[] | string;
  can_rotate?: boolean; //enables/disables rotating effect
  languages?: string[]; //the paths for the language images at public/languages_and_programs
  bonus_classes?: string;
  text_box_classes?: string;
}

const ColorBox = ({
  color,
  title,
  subtitle,
  children = "",
  can_rotate = false,
  languages = [],
  bonus_classes = "",
  text_box_classes = "",
}: Props) => {
  //deciding background color (yes its messy but i dont wanna change it)
  let base_classes =
    bonus_classes +
    " group text-white bg-gradient-to-t rounded-xl justify-center transition-all outline outline-white outline-4 m-5 ";

  switch (color) {
    case "grey":
      base_classes =
        base_classes + "bg-gradient-to-t from-zinc-600 to-zinc-500 ";
      break;
    case "indigo":
      base_classes =
        base_classes + "bg-gradient-to-t from-indigo-600 to-indigo-500";
      break;
    case "purple":
      base_classes =
        base_classes + "bg-gradient-to-t from-violet-600 to-violet-500";
      break;
    case "blue":
      base_classes = base_classes + "bg-gradient-to-t from-sky-500 to-sky-400";
      break;
    case "teal":
      base_classes =
        base_classes + "bg-gradient-to-t from-teal-600 to-teal-500";
      break;
    default:
      base_classes =
        base_classes + "bg-gradient-to-t from-pink-600 to-pink-500"; //pink
  }

  //rotation effect
  base_classes = can_rotate ? base_classes + " hover:rotate-3" : base_classes;

  return (
    <div className={base_classes}>
      <h1 className={`pt-2 text-xl text-center font-bold `}>{title}</h1>
      {subtitle != "" && ( //gives space for a subtitle only when necessary
        <h2 className="m-1 pt-1 text-sm font-bold text-center font-mono">
          {subtitle}
        </h2>
      )}
      {typeof children === "string" ? ( //is child is string, put it in a paragraph
        <p className={`px-3 py-2 text-sm font-mono ` + text_box_classes}>
          {children}
        </p>
      ) : (
        //otherwise put it in a list
        <ul
          className={
            `list-disc px-5 py-2 text-sm font-mono ` + text_box_classes
          }
        >
          {children.map((e) => {
            return <li className="py-1" key={e}>{e}</li>;
          })}
        </ul>
      )}

      {languages.length != 0 && ( //gives space for a language field only when necessary
        <>
          <div className="flex h-24 justify-center flex-row scale-50">
            {languages.map((image) => (
              <img
                key={image}
                src={`/languages_and_programs/` + image}
                className="m-1"
              />
            ))}
          </div>
          <p className="flex text-xs justify-center text-center pb-1">
            relevant languages and programs
          </p>
        </>
      )}
    </div>
  );
};

export default ColorBox;
