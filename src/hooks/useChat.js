import { useState, useRef } from "react";
// import { APIUserAbortError } from "openai";
import { sendMessage } from "../services/openaiAPI";
import { mapApiError } from "../utils/errors";
// import { createTimeoutSignal } from "../utils/apiTimeout";

// Maximum length for chat messages.trim()
const MAX_INPUT_LENGTH = 50000;

export const useChat = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const abortRef = useRef();

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

      const response = await sendMessage(trimmedMessage, controller);
      console.log("AI RESPONSE: ", response);

      setChatMessages((prev) => [
        ...prev,
        { id: response?.id, role: "assistant", content: response?.output_text },
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
