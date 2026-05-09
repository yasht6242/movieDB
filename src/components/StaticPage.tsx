import usePageMetadata from "../hooks/usePageMetadata";
import { getSiteConfig, PageSection } from "../config/siteConfig";

type StaticPageProps = {
  pageKey: "about" | "disclaimer" | "contact" | "privacy";
};

const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;

const renderTextWithEmailLink = (text: string) => {
  const parts = text.split(emailRegex);
  return parts.map((part, index) => {
    if (emailRegex.test(part)) {
      return (
        <a
          key={index}
          href={`mailto:${part}`}
          className="text-yellow-400 underline"
        >
          {part}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

const renderSection = (section: PageSection, index: number) => {
  return (
    <div key={index} className="space-y-4">
      {section.heading && (
        <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
      )}
      {section.paragraphs?.map((paragraph, paragraphIndex) => (
        <p key={paragraphIndex} className="text-lg leading-8 text-slate-200">
          {renderTextWithEmailLink(paragraph)}
        </p>
      ))}
      {section.list && (
        <ul className="list-disc list-inside space-y-2 text-slate-200">
          {section.list.map((item, itemIndex) => (
            <li key={itemIndex}>{renderTextWithEmailLink(item)}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const StaticPage = ({ pageKey }: StaticPageProps) => {
  const config = getSiteConfig();
  const page = config.pages[pageKey];
  usePageMetadata(`${page.title} | ${config.siteLabel}`, config.metaDescription);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-slate-900 p-10 shadow-xl text-white">
          <h1 className="mb-6 text-4xl font-bold text-yellow-400">{page.title}</h1>
          <div className="space-y-8">
            {page.sections.map((section, index) => renderSection(section, index))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticPage;
