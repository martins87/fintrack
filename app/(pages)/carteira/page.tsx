import Sidebar from "@/app/components/Sidebar";
import Centered from "@/app/components/ui/Centered";
import Page from "@/app/components/ui/Page";
import Typography from "@/app/components/ui/Typography";

const CarteiraPage = () => {
  return (
    <Centered className="min-h-screen">
      <Sidebar />
      <Page title="Carteira">
        <Typography>Carteira page</Typography>
      </Page>
    </Centered>
  );
};

export default CarteiraPage;
