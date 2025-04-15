"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Typography from "@/app/components/ui/Typography";
import Centered from "@/app/components/ui/Centered";
import Logo from "@/app/components/Logo";
import { sidebarLinks } from "@/app/constants/sidebarLinks";

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => router.push("/login");

  return (
    <Centered
      className="w-64 min-h-screen bg-[#1C1D21] p-10 gap-y-5"
      direction="col"
      items="start"
      justify="start"
    >
      <Logo className="mb-14" white />
      {sidebarLinks.slice(0, -1).map((link) => (
        <Link key={link.label} href={link.url}>
          <Centered justify="start" className="gap-x-4">
            <Image className="w-5" src={link.icon} alt="" />
            <Typography className="text-white tracking-wider">
              {link.label}
            </Typography>
          </Centered>
        </Link>
      ))}
      <Centered
        className="gap-x-4 mt-auto hover:cursor-pointer"
        items="end"
        justify="start"
        onClick={handleLogout}
      >
        <Image
          className="w-5"
          src={sidebarLinks[sidebarLinks.length - 1].icon}
          alt=""
        />
        <Typography className="text-white tracking-wider">
          {sidebarLinks[sidebarLinks.length - 1].label}
        </Typography>
      </Centered>
    </Centered>
  );
};

export default Sidebar;
