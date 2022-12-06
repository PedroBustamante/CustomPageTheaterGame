import { Button } from "../../components";

const Carlos = () => {
  const buttonFunction = () => window.history.back();
  return (
    <div>
      <div className="carlosSection">
        <div className="buttons">
          <Button buttonFunction={buttonFunction} buttonText="Sair" />
        </div>
      </div>
    </div>
  );
};
export default Carlos;
