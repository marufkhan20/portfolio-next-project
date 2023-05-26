const Heading = ({ title, subTitle }) => {
  return (
    <div>
      <span className="text-[17px] text-body uppercase font-medium">
        {subTitle}
      </span>
      <h2 className="font-extrabold text-3xl md:text-4xl mt-4">{title}</h2>
    </div>
  );
};

export default Heading;
