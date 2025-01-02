import { useEffect, useState } from "react";
import { useMarkdownContent } from "./useMarkdownContent";

type Feature = {
  title: string;
  content: string;
};

const featuresFiles = [
  "winter.md",
  "snow-winds.md",
  "leather-armor.md",
  "new-props.md",
  "new-enchants.md",
  "villages.md",
  "bears.md",
  "deep-mobs.md",
  "other.md",
];

export const useFeaturesList = () => {
  const { fetchContent } = useMarkdownContent();
  const [features, setFeatures] = useState<Feature[]>([]);
  useEffect(() => {
    // Use Promise.all to wait for all fetches to complete
    Promise.all(
      featuresFiles.map((file) =>
        fetchContent(`../data/${file}`)
          .then((content) => {
            const data = content?.split("|");
            if (data?.length) {
              console.log(data[1]);
              return { title: data[0], content: data[1] };
            }
            return null;
          })
          .catch((err) => {
            console.error(err);
            return null;
          }),
      ),
    ).then((results) => {
      // Filter out any null results and set all features at once
      setFeatures(
        results.filter((result): result is Feature => result !== null),
      );
    });
  }, []);
  return features;
};
