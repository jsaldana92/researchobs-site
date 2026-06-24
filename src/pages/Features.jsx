// src/pages/Features.jsx

import FeaturesHeroSection from "../FeaturesComponents/FeaturesHeroSection";
import CoreFeaturesSection from "../FeaturesComponents/FeaturesCoreSection";
import FeaturesAnimalProfileSection from "../FeaturesComponents/FeaturesAnimalProfileSection";
import FeatureStorageSection from "../FeaturesComponents/FeatureStorageSection";
import FeatureProjectSection from "../FeaturesComponents/FeatureProjectSection";
import FeatureSocialNetworkAnalysisSection from "../FeaturesComponents/FeatureSocialNetworkAnalysisSection";
import FeatureHeatmapsSection from "../FeaturesComponents/FeatureHeatmapsSection";

export default function Features() {
  return (
    <main className="bg-[#08110c] text-slate-100">
      <FeaturesHeroSection />
      <CoreFeaturesSection />
      <FeaturesAnimalProfileSection />
      <FeatureStorageSection />
      <FeatureSocialNetworkAnalysisSection />
      <FeatureHeatmapsSection />
      <FeatureProjectSection />
    </main>
  );
}
