import React from "react";
import Link from "next/link";
import Image from "next/image";

import Typography from "@/app/components/ui/Typography";
import Centered from "@/app/components/ui/Centered";
import Logo from "@/app/components/Logo";
import { sidebarLinks } from "@/app/constants/sidebarLinks";

const Sidebar = () => {
  return (
    <Centered
      className="w-64 min-h-screen bg-[#1C1D21] p-10 gap-y-4"
      direction="col"
      items="start"
      justify="start"
    >
      <Logo className="mb-14" white />
      {sidebarLinks.map((link) => (
        <Link key={link.label} href={link.url}>
          <Centered justify="start" className="gap-x-4">
            <Image className="w-5" src={link.icon} alt="" />
            <Typography className="text-white tracking-wider">
              {link.label}
            </Typography>
          </Centered>
        </Link>
      ))}
    </Centered>
  );
};

export default Sidebar;
