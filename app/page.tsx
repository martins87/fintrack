import Typography from "./components/ui/Typography";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center">
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
      </div>
    </main>
  );
}
