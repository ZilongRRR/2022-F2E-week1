import React from "react";

interface IMenuItemProps {
  imgUrl: string;
  title: string;
}

const MenuItem = ({ imgUrl, title }: IMenuItemProps) => {
  return (
    <div className="flex flex-col items-center m-[10px] cursor-pointer">
      <img src={imgUrl} alt="title" className="w-[45px] mb-[5px]" />
      <p className="text-[#FFC37D] text-[12px]">{title}</p>
    </div>
  );
};

export default MenuItem;
