"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { twMerge } from "tailwind-merge";

// import { useSidebarStore } from "@/app/store/useSidebarStore";
import Typography from "@/app/components/ui/Typography";
import Centered from "@/app/components/ui/Centered";
import Logo from "@/app/components/Logo";
import { sidebarLinks } from "@/app/constants/sidebarLinks";
import closeIcon from "@/app/assets/icons/close.svg";

const Sidebar = () => {
  const router = useRouter();
  // const { isOpen, close } = useSidebarStore();

  const handleLogout = () => router.push("/login");

  return (
    <Centered
      // className={twMerge(
      //   "hidden md:flex w-64 min-h-screen bg-[#1C1D21] p-4 md:p-10 gap-y-5 transition-transform duration-300 ease-in-out",
      //   isOpen
      //     ? "flex fixed md:static top-0 left-0 translate-x-0"
      //     : "-translate-x-full"
      // )}
      className="hidden md:flex w-64 min-h-screen bg-[#1C1D21] p-10 gap-y-5"
      direction="col"
      items="start"
      justify="start"
    >
      <Logo className="hidden md:flex mb-14" white />
      <Image
        className="md:hidden -ml-1"
        src={closeIcon}
        alt="close icon"
        onClick={close}
      />
      {sidebarLinks.slice(0, -1).map((link) => (
        <Link key={link.label} href={link.url} onClick={close}>
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
