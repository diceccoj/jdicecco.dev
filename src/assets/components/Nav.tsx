import { useLayoutEffect, useState } from "react";
//react icons
import { BsList, BsListNested } from "react-icons/bs";

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

//scroll to element with specified id (used over refs because implementation was easier in this case)
function scrollToElement(id: string) {
  const element = document.getElementById(id);

  if (element != null) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

//Navbar/hamburger button
const Nav = ({ items }: Props) => {
  const [width, height] = useWindowSize(); //screen ratio
  const [isHamShowing, setIsHamShowing] = useState(false); //shows if hamburger menu is showing

  //return navbar if screen ratio is wide, and a hamburger menu if it is thin
  return (
    <>
      <nav className="flex justify-between mx-5 mt-3">
        <button
          className="small-text-bg"
          onClick={() => {
            window.location.href = "";
          }}
        >
          Jonathan DiCecco
        </button>
        {width / height >= 1.5 /** ratio is wide - Navbar*/ ? (
          <ul className="">
            {items.map((item) => (
              <button key={item}>
                <li
                  className="small-text-bg"
                  onClick={() => {
                    scrollToElement(item);
                  }}
                >
                  {item}
                </li>
              </button>
            ))}
          </ul>
        ) : (
          /** ratio is thin - Hamburger Menu Button */
          <>
            <button onClick={() => setIsHamShowing(!isHamShowing)}>
              {
                /**toggles hamburger menu */
                isHamShowing ? (
                  <BsListNested className="hamburger-button" />
                ) : (
                  <BsList className="hamburger-button" />
                )
              }
            </button>
          </>
        )}
      </nav>
      {
        /**Shows Hamburger Menu when the toggle is on */
        isHamShowing && (
          <div
            id="hamburger-menu"
            className="hamburger-menu bg-slate-300 dark:bg-slate-600 absolute w-80 right-3 rounded-xl pb-3 transition-all"
          >
            <ul>
              {items.map((item) => (
                <li key={item}>
                  <button
                    className="font-bold text-2xl ml-5 mt-7 hover:underline"
                    onClick={() => {
                      scrollToElement(item);
                      setIsHamShowing(false);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )
      }
    </>
  );
};

export default Nav;
