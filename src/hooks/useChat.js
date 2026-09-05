import { useState } from "react";
import { sendMessage } from "../services/openaiAPI";
import { mapApiError } from "../utils/errors";

// Maximum length for chat messages.trim()
const MAX_INPUT_LENGTH = 50000;

export const useChat = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [prevResponseId, setPrevResponseId] = useState(null);

  const clearError = () => setError(null);

  const sendMessageToAI = async (inputMessage) => {
    const trimmedMessage = inputMessage.trim();
    if (trimmedMessage.length <= 0) return;
    const userMessageId = crypto.randomUUID();

    const controller = new AbortController();

    try {
      setIsLoading(true);

      // Display optimistic user message
      setChatMessages((prev) => [
        ...prev,
        { id: userMessageId, role: "user", content: inputMessage },
      ]);

      const response = await sendMessage(
        trimmedMessage,
        prevResponseId,
        controller,
      );
      console.log("AI RESPONSE: ", response);

      if (response.id) {
        setPrevResponseId(response.id);
      }

      setChatMessages((prev) => [
        ...prev,
        {
          id: response?.id,
          role: "assistant",
          content: response?.output_text,
        },
      ]);
    } catch (err) {
      console.log("Send Message to AI Error: ", { err });
      setChatMessages((prev) => prev.filter((msg) => msg.id !== userMessageId));

      setError(mapApiError(err));
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setChatMessages([]);
    setError(null);
  };

  return {
    chatMessages,
    error,
    isLoading,
    clearError,
    clearChat,
    sendMessageToAI,
  };
};
