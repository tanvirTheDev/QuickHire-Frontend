import CompaniesLogo from "@/components/home/CompaniesLogo";
import ExploreCategories from "@/components/home/ExploreCategories";
import HeroSection from "@/components/home/HeroSection";
import LatestJobOpen from "@/components/home/LatestJobOpen";
import StartPosting from "@/components/home/StartPosting";
import FeaturedJobs from "@/components/jobs/FeaturedJobs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompaniesLogo />
      <ExploreCategories />
      <StartPosting />
      <FeaturedJobs />
      <LatestJobOpen />
    </>
  );
}
