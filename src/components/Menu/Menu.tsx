import React, { useState } from "react";
import MenuConfig from "./MenuConfig";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenClick = () => {
    setOpen((pre) => !pre);
  };

  return (
    <div className="absolute h-screen flex flex-row">
      {open && (
        <div className="h-full bg-[#007FAB] w-[80px] flex flex-col pl-[8px] pt-[10px]">
          {MenuConfig.map((config) => (
            <MenuItem imgUrl={config.imgUrl} title={config.title} />
          ))}
        </div>
      )}
      {/* right click are*/}
      <div className="relative h-full bg-[#007FAB] left-0 w-[20px]">
        <div
          className="absolute left-[12px] top-1/2 h-[60px] w-[60px] border-[#007FAB] border-[8px] bg-[#FFB65C] cursor-pointer flex items-center justify-center"
          onClick={handleOpenClick}
        >
          <p className="text-[#0080AC] text-[30px] font-bold">
            {open ? "<" : ">"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
