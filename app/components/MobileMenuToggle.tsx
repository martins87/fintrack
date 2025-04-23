import Image from "next/image";

import { useSidebarStore } from "@/app/store/useSidebarStore";
import hamburger from "@/app/assets/icons/hamburger.svg";

const MobileMenuToggle = () => {
  const { toggle } = useSidebarStore();

  return (
    <Image
      className="absolute left-0"
      src={hamburger}
      alt="hamburger icon"
      onClick={toggle}
    />
  );
};

export default MobileMenuToggle;
