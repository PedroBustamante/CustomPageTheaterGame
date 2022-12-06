import xavierImage from "../images/Xavier.png";
import narcisaImage from "../images/Narcisa.png";
import carlosImage from "../images/Carlos.png";
import { Profile } from "../components";

const RootPage = () => {
  return (
    <section className="pageContainer">
      <div className="profiles">
        <Profile
          profileImage={xavierImage}
          profileName="Xavier"
          correctPassword={"13662358"}
        />
        <Profile
          profileImage={narcisaImage}
          profileName="Narcisa"
          correctPassword={"6244"}
        />
        <Profile
          profileImage={carlosImage}
          profileName="Carlos"
          correctPassword={"1422"}
        />
      </div>
    </section>
  );
};
export default RootPage;
