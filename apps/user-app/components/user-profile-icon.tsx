import { RiUser2Fill, RiUser2Line } from "@remixicon/react";

export const UserProfileIcon = () => {
  return (
    <div className="z-10 w-[3.95rem] h-[3.05rem] px-4 py-3 border-[#56A430] border-[2px]  hover:border-none  hover:bg-[#123524] transform duration-300 group-ease-in-out transition-colors rounded-full group flex justify-center items-center cursor-pointer">
      <RiUser2Line className="text-gray-500 group-hover:text-white group-hover:hidden" />
      <RiUser2Fill className="group-hover:flex hidden fill-white" />
    </div>
  );
};
