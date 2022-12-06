import { Button } from "../../../components";

const Narcisa = () => {
  const buttonFunction = () => (window.location.href = `/`);
  const searchFunction = () => (window.location.href = `/Narcisa_6244`);
  return (
    <div>
      <div className="narcisaEmailSection">
        <div className="buttons">
          <Button buttonFunction={searchFunction} buttonText="Busca" />
          <Button buttonFunction={buttonFunction} buttonText="Sair" />
        </div>
      </div>
      <div className="emailReSection"></div>
      <div className="emailReReSection"></div>
      <div className="emailReReReSection"></div>
    </div>
  );
};
export default Narcisa;
