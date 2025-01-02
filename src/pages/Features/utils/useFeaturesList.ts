import { useEffect, useState } from "react";
import winter from "../data/winter.md?raw";
import snowWinds from "../data/snow-winds.md?raw";
import leatherArmor from "../data/leather-armor.md?raw";
import newProps from "../data/new-props.md?raw";
import newEnchants from "../data/new-enchants.md?raw";
import villages from "../data/villages.md?raw";
import bears from "../data/bears.md?raw";
import deepMobs from "../data/deep-mobs.md?raw";
import other from "../data/other.md?raw";

type Feature = {
  title: string;
  content: string;
};

const featuresData: string[] = [
  winter,
  snowWinds,
  leatherArmor,
  newProps,
  newEnchants,
  villages,
  bears,
  deepMobs,
  other,
];

export const useFeaturesList = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  useEffect(() => {
    const parsedFeatures = featuresData
      .map((content) => {
        const data = content.split("|");
        if (data?.length) {
          return { title: data[0], content: data[1] };
        }
        return null;
      })
      .filter((result): result is Feature => result !== null);

    setFeatures(parsedFeatures);
  }, []);
  return features;
};
