import { StartPage } from "@/areas/StartPage";
import CharacterF2EGif from "@/assets/Character/character_f2e.gif";
import CharacterTeamGif from "@/assets/Character/character_team.gif";
import CharacterUIGif from "@/assets/Character/character_ui.gif";
import UserImg from "@/assets/Common/btn_user.png";
import RoadImg from "@/assets/Common/road.png";
import { Menu } from "@/components/Menu";
import "./App.css";

function App() {
  return (
    <div className="h-screen w-full relative">
      <Menu />
      <img
        src={UserImg}
        alt="user-img"
        className="absolute right-[20px] top-[20px] w-[100px]"
      />
      <img
        src={RoadImg}
        alt="road"
        className="road center-h bottom-0 h-[13%] w-auto object-cover"
      />

      <img
        src={CharacterF2EGif}
        alt="character-f2e-gif"
        className="character-f2e absolute left-1/3 -translate-x-1/2 bottom-[40px] w-[350px]"
      />
      <img
        src={CharacterUIGif}
        alt="character-ui-gif"
        className="character-ui center-h bottom-[40px] w-[370px]"
      />
      <img
        src={CharacterTeamGif}
        alt="character-team-gif"
        className="character-team absolute right-1/3 translate-x-1/2 bottom-[40px] w-[350px]"
      />

      <div className="px-[20px] relative  overflow-auto h-screen w-full">
        <StartPage />
        <StartPage />
      </div>
    </div>
  );
}

export default App;
