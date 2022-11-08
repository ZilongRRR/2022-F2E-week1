import LogoTextImg from "@/assets/Common/logo_text.png";
import StartImg from "@/assets/Common/start.png";
import TrafficLightImg from "@/assets/StartPage/traffic_light.png";
import React from "react";
import UserItem from "./UserItem";

const UsersConfig = [
  {
    title: "前端工程師",
    number: "920",
  },
  {
    title: "UI 設計師",
    number: "120",
  },
  ,
  {
    title: "團體組",
    number: "920",
  },
];

const StartPage = () => {
  return (
    <div className="relative h-screen w-full">
      <img
        src={StartImg}
        alt="start-flag"
        className="center-h top-0 h-full w-auto object-cover"
      />
      <div className="center-v -right-[20px] w-[275px] h-[108px]">
        <img
          src={TrafficLightImg}
          alt="traffic-light"
          className="absolute z-10"
        />
        <div className="white-1 absolute rounded-full w-[50px] aspect-square bg-[#FF5235] left-[30px] top-[30px] z-0" />
        <div className="white-2 absolute rounded-full w-[50px] aspect-square bg-[#FF8100] left-[100px] top-[30px] z-0" />
        <div className="white-3 absolute rounded-full w-[50px] aspect-square bg-[#7EBF62] left-[160px] top-[30px] z-0" />
      </div>
      <div className="flex flex-col items-center full">
        <img
          src={LogoTextImg}
          alt="logo-text"
          className="max-w-[680px] w-1/3 mt-[40px] z-10"
        />
        <div className="rounded-full bg-[#FF5136] px-[40px] py-[8px] z-10">
          <p className="text-[32px] text-white">互動式網頁設計</p>
        </div>
        <div className="flex flex-row justify-between w-1/2 mt-[50px]">
          {UsersConfig.map((config) => (
            <UserItem title={config?.title} number={config?.number} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartPage;
