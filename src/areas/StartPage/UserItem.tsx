import UserImg from "@/assets/StartPage/users.png";
import React from "react";

interface IUserItemProps {
  title?: string;
  number?: string;
}

const UserItem = ({ title, number }: IUserItemProps) => {
  return (
    <div className="flex flex-col items-center text-[24px]">
      <p className="text-[#007FAB] font-bold">{title}</p>
      <div className="flex flex-row items-center bg-[#007FAB] rounded-full px-[28px] py-[4px] mt-[8px]">
        <img
          src={UserImg}
          alt="user-icon"
          className="w-[22px] h-[22px] mr-[15px]"
        />
        <p className="text-white">{number}</p>
      </div>
    </div>
  );
};

export default UserItem;
