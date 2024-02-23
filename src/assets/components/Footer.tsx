const Footer = () => {
  return (
    <div className="p-12 mt-20 bg-slate-300 dark:bg-slate-600 flex justify-center opacity-95">
      <div className="grid grid-cols-1 place-items-center">
        <h2 className="font-bold text-center text-2xl">Contact Me!</h2>
        <p className="font-mono text-center mt-1">
          jonathan.dicecco@outlook.com | 416-268-4810
        </p>
        <button
          className=" underline font-mono text-center mt-1"
          onClick={() => {
            window.location.href =
              "https://www.linkedin.com/in/jonathan-dicecco-b9529a234/";
          }}
        >
          Linkedin
        </button>
        <p className="text-center mt-10">
          *Every asset on this website has been made by me, other than any
          company logos.
        </p>
      </div>
    </div>
  );
};

export default Footer;
