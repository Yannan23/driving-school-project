const CallButton = () => {
  const handleClick = () => {
    window.location.href = "tel:+61469819246";
  };

  return (
    <button className="!bg-transparent hover:bg-transparent">
      <p
        onClick={handleClick}
        className="hover:text-amber-400 hover:underline cursor-pointer font-Roboto-Condensed text-amber-400 text-lg lg:text-2xl font-bold underline"
      >
        +61 469819246
      </p>
    </button>
  );
};

export default CallButton;
