export const useMarkdownContent = () => {
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
  return { fetchContent };
};
