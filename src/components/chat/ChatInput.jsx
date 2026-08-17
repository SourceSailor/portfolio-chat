import { ArrowUp } from "lucide-react";
import { inputOrbs, activeInputOrbs } from "../../../config";
import GradientOrb from "../GradientOrb";

import { motion } from "motion/react";

const ChatInput = ({ textAreaRef, onSubmit, isLoading, hasMessage }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <div className="group">
      {/* Resting orbs: visible by default, fade out on hover */}
      {!hasMessage && (
        <div className="transition-opacity duration-300 group-hover:opacity-0">
          {inputOrbs.map((orb, i) => (
            <GradientOrb
              key={i}
              size={orb.size}
              width={orb.width}
              top={orb.top}
              left={orb.left}
              color={orb.color}
              opacity={orb.opacity}
            />
          ))}
        </div>
      )}

      {/* Active orbs: hidden by default, fade in on hover */}
      {!hasMessage && (
        <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {activeInputOrbs.map((orb, i) => (
            <GradientOrb
              key={i}
              size={orb.size}
              width={orb.width}
              top={orb.top}
              left={orb.left}
              color={orb.color}
              opacity={orb.opacity}
            />
          ))}
        </div>
      )}

      <form className="flex pb-5" onSubmit={onSubmit} aria-label="Send message">
        <div className="flex-1 flex justify-between gap-2 rounded-2xl p-2 backdrop-blur-xl bg-white/60 border border-gray-300 backdrop-filter-md backdrop-brightness-100 drop-shadow-sm px-4 py-3">
          <textarea
            rows={1}
            autoFocus
            ref={textAreaRef}
            placeholder="Ask me anything..."
            onKeyDown={handleKeyDown}
            className="flex-1 field-sizing-content bg-transparent px-3 py-2.5 text-[15px] text-neutral-700 placeholder:text-neutral-500 focus:outline-none"
          />
          <motion.button
            initial={{
              scale: 1,
              background:
                "linear-gradient(45deg, #ff6a00d7 0%, #ff6a00d7 100%)",
            }}
            whileHover={{
              scale: 1.1,
              background:
                "linear-gradient(135deg, #ff6b00cc 0%, #8250ffcc 100%)",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            type="submit"
            id="input-button"
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ff6a00d7] ${isLoading && "cursor-not-allowed"}`}
            disabled={isLoading}
          >
            <ArrowUp className="text-neutral-100" size={"20px"} />
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
