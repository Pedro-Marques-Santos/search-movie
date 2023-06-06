interface IHeaderProps {
  typeHeader: string;
}

import Image from "next/image";

import logo from "../../assets/login/LOGO.svg";
import news from "../../assets/icons/news.png";

import { RxTextAlignJustify } from "react-icons/rx";
import { AiOutlineMessage } from "react-icons/ai";

export function Header({ typeHeader }: IHeaderProps) {
  return (
    <div>
      {typeHeader === "standard" && (
        <div className="pt-8 max-w-screen-lg mx-auto pr-2 pl-2 flex justify-between">
          <Image src={logo} alt={"logo"} />
          <div className="flex items-center">
            <AiOutlineMessage className="text-[25px] text-white mr-4" />
            <div className="w-[25px] h-[25px] bg-white mr-4 rounded-full"></div>
            <RxTextAlignJustify className="text-[28px] text-white" />
          </div>
        </div>
      )}
      {}
    </div>
  );
}
