import Collection from "@/components/landingPage/Collection";
import FeatureItem from "@/components/landingPage/FeatureItem";
import Highlight from "@/components/landingPage/Highlight";
import React from "react";
type Props = {
  beautyInTheSun: (event: React.MouseEvent<HTMLElement>) => void;
  noService: (event: React.MouseEvent<HTMLElement>) => void;
  collectionList: (event: React.MouseEvent<HTMLElement>) => void;
};
function LandingPage({ beautyInTheSun, noService, collectionList }: Props) {
  return (
    <div className="">
      <FeatureItem beautyInTheSun={beautyInTheSun} />
      <Highlight noService={noService} />
      <Collection noService={noService} collectionList={collectionList} />
    </div>
  );
}

export default LandingPage;
