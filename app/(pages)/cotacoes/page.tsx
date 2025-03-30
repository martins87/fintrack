import Sidebar from "@/app/components/Sidebar";
import Centered from "@/app/components/ui/Centered";
import Typography from "@/app/components/ui/Typography";

const CotacoesPage = () => {
  return (
    <Centered className="min-h-screen">
      <Sidebar />
      <Centered className="min-h-screen flex-1">
        <Typography className="text-xl">Cotações</Typography>
      </Centered>
    </Centered>
  );
};

export default CotacoesPage;
