import Image from "next/image";
import { useState } from "react";

export const Profile = ({ profileImage, profileName, correctPassword }) => {
  const [password, setPassword] = useState("");

  const submit = () => {
    console.log(password, correctPassword);
    if (password != correctPassword) {
      alert("Senha incorreta! Tente novamente!");
    } else {
      window.location.href = `/${profileName}_${password}`;
    }
  };

  return (
    <div className="profileAndPassword">
      <div className="nameTitle">{profileName}</div>
      <div className="profilePicture">
        <Image src={profileImage} height={150} />
      </div>
      <div className="blockDiv">
        <div className="passwordTitle">Senha</div>
        <input
          name="password"
          type="text"
          value={password}
          className="singleInputField"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <button type="submit" className="signInButton" onClick={() => submit()}>
        Entrar
      </button>
    </div>
  );
};
