//standard header for website

interface Props {
  children: string;
}

const Header = ({ children }: Props) => {
  return (
    <div className="flex justify-center animate-phase-in mt-32">
      <h1 className="flex small-text-bg bold p-4 text-4xl text-center">
        {children}
      </h1>
    </div>
  );
};

export default Header;
