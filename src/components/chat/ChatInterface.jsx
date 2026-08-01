import { useRef } from "react";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import ChatIntro from "../ChatIntro";
import SuggestedButton from "../SuggestedButton";
import { suggestedBtnText } from "../../../config";

const ChatInterface = ({ chatMessages, sendMessageToAI, isLoading }) => {
  const textAreaRef = useRef(null);

  const hasMessage = chatMessages.length > 0;

  const submitMessage = (e) => {
    e.preventDefault();

    const textValue = textAreaRef.current.value;

    sendMessageToAI(textValue);

    textAreaRef.current.value = "";
  };

  const submitSuggestion = (message) => {
    sendMessageToAI(message);
  };

  return (
    <section
      className={`max-w-3xl w-full mx-auto flex flex-col h-full px-4 sm:px-6 md:px-10 gap-6 sm:gap-10 relative ${hasMessage ? "justify-between" : "justify-center"}`}
    >
      {hasMessage ? (
        <ChatMessages chatMessages={chatMessages} isLoading={isLoading} />
      ) : (
        <ChatIntro />
      )}

      <ChatInput
        textAreaRef={textAreaRef}
        onSubmit={submitMessage}
        isLoading={isLoading}
        hasMessage={hasMessage}
      />

      {!hasMessage && (
        <div className="flex flex-wrap justify-center">
          {suggestedBtnText.map((button, i) => (
            <SuggestedButton
              key={i}
              btnText={button}
              onClick={() => submitSuggestion(button)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ChatInterface;
