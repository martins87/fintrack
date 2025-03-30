import wallet from "@/app/assets/icons/wallet.svg";
import moneyBag from "@/app/assets/icons/money-bag.svg";
import chart from "@/app/assets/icons/chart.svg";
import profile from "@/app/assets/icons/profile.svg";
import shapes from "@/app/assets/icons/shapes.svg";

export const sidebarLinks = [
  { label: "DASHBOARD", url: "#", icon: shapes },
  { label: "TRADE", url: "#", icon: chart },
  { label: "COTAÇÕES", url: "/cotacoes", icon: moneyBag },
  { label: "CARTEIRA", url: "#", icon: wallet },
  { label: "PERFIL", url: "#", icon: profile },
];
