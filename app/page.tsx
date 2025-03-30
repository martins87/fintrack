import Centered from "./components/ui/Centered";
import Typography from "./components/ui/Typography";

export default function Home() {
  return (
    <main>
      <Centered>
        <Typography className="text-6xl text-white">FinTrack</Typography>
        <Typography className="text-6xl text-white" weight="500">
          FinTrack
        </Typography>
        <Typography className="text-6xl text-white" weight="600">
          FinTrack
        </Typography>
        <Typography className="text-6xl text-white" weight="700" font="sora">
          FinTrack
        </Typography>
      </Centered>
    </main>
  );
}
