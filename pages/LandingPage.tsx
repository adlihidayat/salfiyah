import Collection from "@/components/landingPage/Collection";
import FeatureItem from "@/components/landingPage/FeatureItem";
import Highlight from "@/components/landingPage/Highlight";
import React from "react";
type Props = {
  beautyInTheSun: (event: React.MouseEvent<HTMLElement>) => void;
  noService: (event: React.MouseEvent<HTMLElement>) => void;
};
function LandingPage({ beautyInTheSun, noService }: Props) {
  return (
    <div className="">
      <FeatureItem beautyInTheSun={beautyInTheSun} />
      <Highlight />
      <Collection noService={noService} />
    </div>
  );
}

export default LandingPage;
