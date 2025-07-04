
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Message = ({ messageData }) => {
  if (!messageData) return null;
  const backgroundImageUrl = messageData?.backgroundImage?.fields?.file?.url;

  // Extract the full rich text document (not the innermost value)
  const textDocument = messageData?.text;

  return (
    <div
      className="relative flex min-h-screen bg-cover bg-center bg-transparent"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="relative max-w-2xl px-10">
        <div className="text-white text-3xl font-bold py-20">
          {documentToReactComponents(textDocument)}
        </div>
      </div>
    </div>
  );
};

export default Message;
