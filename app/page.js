import Capabilities from "@/components/homepage/Capabilities";
import HeroSection2 from "@/components/homepage/HeroSection2";
import ServicesFlow from "@/components/homepage/ServicesFlow";
export const metadata = {
	title: "MATUSE — stavebníctvo & kovovýroba",
	description: "Zateplenie rodinných domov a zákazková kovovýroba.",
};

export default function HomePage() {
	return (
		<main id="homepage" className="bg-white text-slate-900">
			
			{/* <HeroSection /> */}
			<HeroSection2 />

			<ServicesFlow />
            <Capabilities />
		</main>
	);
}
