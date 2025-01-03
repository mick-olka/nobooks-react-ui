import { useEffect, useState } from "react";

type Feature = {
  title: string;
  content: string;
};

export const useFeaturesList = (mdContentList: string[]) => {
  const [features, setFeatures] = useState<Feature[]>([]);
  useEffect(() => {
    const parsedFeatures = mdContentList
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
