import CompaniesLogo from "@/components/home/CompaniesLogo";
import ExploreCategories from "@/components/home/ExploreCategories";
import HeroSection from "@/components/home/HeroSection";
import StartPosting from "@/components/home/StartPosting";
import FeaturedJobs from "@/components/jobs/FeaturedJobs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompaniesLogo />
      <ExploreCategories />
      <FeaturedJobs />
      <StartPosting />
    </>
  );
}
