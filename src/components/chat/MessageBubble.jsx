import { User, Bot } from "lucide-react";
import MarkdownRenderer from "../MarkdownRenderer";

const MessageBubble = ({ msg }) => {
  const CHAT_ICON_STYLES = " p-2 rounded-full shadow-lg";
  const CHAT_BUBBLE_STYLES =
    "px-4 py-2.5 rounded-2xl leading-relaxed text-md shadow-lg";

  const isUser = msg.role === "user";

  return (
    <div
      key={msg.id}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`flex items-end gap-2 sm:gap-4 max-w-[88%] sm:max-w-[75%] md:max-w-[70%]  ${isUser ? "flex-row-reverse" : "flex-row"}`}
      >
        {isUser ? (
          <div className={`${CHAT_ICON_STYLES} bg-gray-200/50 hidden sm:flex`}>
            <User size={"25px"} />
          </div>
        ) : (
          <div className={`${CHAT_ICON_STYLES} bg-white/60 hidden sm:flex`}>
            <Bot size={"25px"} />
          </div>
        )}

        <div className={`px-4 py-2.5 rounded-2xl leading-relaxed text-md `}>
          {isUser ? (
            <p
              className={`${CHAT_BUBBLE_STYLES} bg-gray-200/50 text-black font-medium rounded-br-sm`}
            >
              {msg.content}
            </p>
          ) : (
            <MarkdownRenderer
              content={msg.content}
              customCSS={`text-black rounded-bl-sm bg-white/60 ${CHAT_BUBBLE_STYLES}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
