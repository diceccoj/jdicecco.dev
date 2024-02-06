import { useLayoutEffect, useState } from "react";
import { BsList } from "react-icons/bs";

interface Props {
  items: string[];
}

//grabs/updates window size
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

//Navbar/hamburger button
const Nav = ({ items }: Props) => {
  const [width, height] = useWindowSize(); //screen ratio
  //return navbar if screen ratio is wide, and a hamburger menu if it is thin
  return (
    <>
      <nav className="flex justify-between m-5">
        <h1 className="m-1 inline mx-3.5 font-bold text-xl">
          Jonathan DiCecco
        </h1>
        {width / height >= 1.0 /** ratio is wide */ ? (
          <ul>
            {items.map((item) => (
              <li className="m-1 inline mx-3.5 font-bold text-xl hover:underline underline-offset-2">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          /** ratio is thin */
          <BsList className="bg-slate-400 rounded-full h-5 w-5 bg bg-opacity-0 hover:scale-125 hover:bg-opacity-20" />
        )}
      </nav>
    </>
  );
};

export default Nav;
