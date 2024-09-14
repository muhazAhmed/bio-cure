import HeroLanding from "@/pages/Home/HeroLanding";
import HeroReasons from "@/pages/Home/HeroReasons";
import HeroServices from "@/pages/Home/HeroServices";

export default function Home() {
  return (
    <div className="w-full min-h-[90vh]">
      <HeroLanding />
      <HeroServices />
      <HeroReasons />
    </div>
  );
}
