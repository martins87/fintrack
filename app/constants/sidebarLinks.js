import wallet from "@/app/assets/icons/wallet.svg";
import moneyBag from "@/app/assets/icons/money-bag.svg";
import chart from "@/app/assets/icons/chart.svg";
import profile from "@/app/assets/icons/profile.svg";
import shapes from "@/app/assets/icons/shapes.svg";
import logout from "@/app/assets/icons/logout.svg";

export const sidebarLinks = [
  { label: "DASHBOARD", url: "/dashboard", icon: shapes },
  { label: "TRADE", url: "/trading", icon: chart },
  { label: "COTAÇÕES", url: "/cotacoes", icon: moneyBag },
  { label: "CARTEIRA", url: "/carteira", icon: wallet },
  { label: "PERFIL", url: "/perfil", icon: profile },
  { label: "LOG OUT", url: "/login", icon: logout },
];
