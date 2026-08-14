import { useRef } from "react";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import ChatIntro from "../ChatIntro";
import SuggestedButton from "../SuggestedButton";
import { suggestedBtnText } from "../../../config";

import { motion, AnimatePresence } from "motion/react";

const ChatInterface = ({ chatMessages, sendMessageToAI, isLoading }) => {
  const textAreaRef = useRef(null);
  const hasMessage = chatMessages.length > 0;

  const submitMessage = (e) => {
    e.preventDefault();
    sendMessageToAI(textAreaRef.current.value);

    textAreaRef.current.value = "";
  };

  return (
    <section
      className={`max-w-3xl w-full mx-auto flex flex-col h-full px-4 sm:px-6 md:px-10 gap-6 sm:gap-10 relative justify-center`}
    >
      <AnimatePresence>
        {!hasMessage && (
          <motion.div
            layout
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0.1, transition: { duration: 0.1 } }}
          >
            <ChatIntro />
          </motion.div>
        )}
      </AnimatePresence>

      {hasMessage && (
        <ChatMessages chatMessages={chatMessages} isLoading={isLoading} />
      )}

      <motion.div
        layout="position"
        transition={{
          ease: "easeInOut",
          duration: 0.2,
        }}
      >
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
                onClick={() => sendMessageToAI(button)}
              />
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ChatInterface;
