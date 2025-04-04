import Centered from "./components/ui/Centered";
import Typography from "./components/ui/Typography";

export default function Home() {
  return (
    <main>
      <Centered className="h-screen">
        <Typography className="text-2xl text-[#ededed]">FinTrack</Typography>
      </Centered>
    </main>
  );
}
