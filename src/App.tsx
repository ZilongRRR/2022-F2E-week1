import { StartPage } from "@/areas/StartPage";
import RoadImg from "@/assets/Common/road.png";
import { Menu } from "@/components/Menu";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-[#FFC37D] relative">
      <Menu />
      <img
        src={RoadImg}
        alt="road"
        className="absolute-center bottom-0 h-[13%] w-auto object-cover"
      />
      <div className="flex flex-col px-[20px]">
        <StartPage />
      </div>
    </div>
  );
}

export default App;
