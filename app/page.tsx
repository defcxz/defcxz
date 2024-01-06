import GradientBackground from "./components/GradientBackground/page";
import Text from './components/LandingText/page';

export default function Home() {
  return (
    <main className={'flex min-h-screen items-center justify-center select-none'}>
      <GradientBackground />
      <div className="container py-16 ">
        <Text />
      </div>
    </main>
  );
}
