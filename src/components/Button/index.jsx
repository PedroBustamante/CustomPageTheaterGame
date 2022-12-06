export const Button = ({ buttonText, buttonFunction }) => {
  return (
    <button onClick={buttonFunction} className="button">
      <div>{buttonText}</div>
    </button>
  );
};
