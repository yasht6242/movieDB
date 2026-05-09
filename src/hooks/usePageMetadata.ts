import { useEffect } from "react";

const updateMetaDescription = (description: string) => {
  if (typeof document === "undefined") return;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", description);
    return;
  }

  const meta = document.createElement("meta");
  meta.name = "description";
  meta.content = description;
  document.head.appendChild(meta);
};

const usePageMetadata = (title: string, description: string) => {
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.title = title;
    updateMetaDescription(description);
  }, [title, description]);
};

export default usePageMetadata;
