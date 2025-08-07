
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Message = ({ messageData }) => {
  if (!messageData) return null;
  const backgroundImageUrl = messageData?.backgroundImage?.fields?.file?.url;

  // Extract the full rich text document (not the innermost value)
  const textDocument = messageData?.text;

  return (
  <div
    className="relative w-full h-[40vh] lg:h-[50vh] bg-cover bg-center flex items-center justify-start"
    style={{ backgroundImage: `url(${backgroundImageUrl})` }}
  >
    <div className="max-w-2xl px-6 sm:px-10">
      <div className="text-white text-2xl sm:text-3xl font-bold leading-snug">
        {documentToReactComponents(textDocument)}
      </div>
    </div>
  </div>
);

};

export default Message;
