import { Button } from "../../components";

const Xavier = () => {
  const buttonFunction = () => window.history.back();
  return (
    <div>
      <div className="xavierSection">
        <div className="buttons">
          <Button buttonFunction={buttonFunction} buttonText="Sair" />
        </div>
      </div>
    </div>
  );
};
export default Xavier;
