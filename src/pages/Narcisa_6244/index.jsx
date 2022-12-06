import { Button } from "../../components";

const Narcisa = () => {
  const buttonFunction = () => window.history.back();
  const emailFunction = () => (window.location.href = `Narcisa_6244/emails`);
  return (
    <div>
      <div className="narcisaSection">
        <div className="buttons">
          <Button buttonFunction={emailFunction} buttonText="Emails" />
          <Button buttonFunction={buttonFunction} buttonText="Sair" />
        </div>
      </div>
    </div>
  );
};
export default Narcisa;
