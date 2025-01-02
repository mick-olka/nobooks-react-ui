import { useEffect, useState } from "react";

export const useMarkdownContent = () => {
  //   const [content, setContent] = useState<string>("");
  //   const [err, setErr] = useState<string | null>(null);

  const fetchContent = async (filePath: string) => {
    try {
      const module = await import(filePath);
      const response = await fetch(module.default);
      const text = await response.text();
      return text;
    } catch (error) {
      console.error(error as string);
    }
  };
  //   useEffect(() => {
  //     };

  // fetchContent();

  return { fetchContent };
};
