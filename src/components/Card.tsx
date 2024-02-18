const Card = ({ children }: { children: any }) => {
  const width = "100%";
  const height = "100%";
  return (
    <div
      className={`duration-100 hover:scale-105 min-h-[300px] min-w-[300px] rounded-lg flex justify-center items-center  border-2 w-${width} h-${height}`}
    >
      {children}
    </div>
  );
};

export default Card;
