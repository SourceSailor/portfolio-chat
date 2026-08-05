import { useRef } from "react";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import ChatIntro from "../ChatIntro";
import SuggestedButton from "../SuggestedButton";
import { suggestedBtnText } from "../../../config";

import { motion, AnimatePresence } from "framer-motion";

const ChatInterface = ({ chatMessages, sendMessageToAI, isLoading }) => {
  const textAreaRef = useRef(null);
  const hasMessage = chatMessages.length > 0;

  const submitMessage = (e) => {
    e.preventDefault();
    sendMessageToAI(textAreaRef.current.value);
    textAreaRef.current.value = "";
  };

  return (
    <motion.section
      layout
      className="max-w-3xl w-full mx-auto flex flex-col justify-center h-full px-4 sm:px-6 md:px-10 gap-6 sm:gap-10 relative"
    >
      <AnimatePresence mode="popLayout">
        {!hasMessage && (
          <motion.div
            key="intro"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ChatIntro />
          </motion.div>
        )}
      </AnimatePresence>

      {hasMessage && (
        <ChatMessages chatMessages={chatMessages} isLoading={isLoading} />
      )}

      <motion.div layout transition={{ duration: 0.4, ease: "easeInOut" }}>
        <ChatInput
          textAreaRef={textAreaRef}
          onSubmit={submitMessage}
          isLoading={isLoading}
          hasMessage={hasMessage}
        />

        {!hasMessage && (
          <motion.div layout className="flex flex-wrap justify-center">
            {suggestedBtnText.map((button, i) => (
              <SuggestedButton
                key={i}
                btnText={button}
                onClick={() => sendMessageToAI(button)}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
};

export default ChatInterface;
