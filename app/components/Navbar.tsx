import Logo from "./Logo";
import MobileMenuToggle from "./MobileMenuToggle";
import Centered from "./ui/Centered";

const Navbar = () => {
  return (
    <Centered className="md:hidden border-b border-b-[#DDE2E7] h-14">
      <Centered className="relative w-[95%] h-full">
        <MobileMenuToggle />
        <Logo />
      </Centered>
    </Centered>
  );
};

export default Navbar;
