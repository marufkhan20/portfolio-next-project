const Button = ({ children, type }) => {
  return type === "secondary" ? (
    <button className="py-[10px] px-11 rounded-md hover:bg-primary hover:text-white font-normal border inline-block border-primary text-lg transition-all bg-transparent text-body">
      {children}
    </button>
  ) : (
    <button className="py-[10px] px-11 rounded-md bg-primary text-white font-normal border inline-block border-primary text-lg transition-all hover:bg-transparent hover:text-body">
      {children}
    </button>
  );
};

export default Button;
