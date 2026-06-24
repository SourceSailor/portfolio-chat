import { FileUser, Eraser, Mail } from "lucide-react";

const TEXTSIZE = "text-sm";
const ICONSIZE = "w-4";

const ChatHeader = ({ clearChat }) => {
  return (
    <header className="flex justify-center gap-2 py-4 font-mono-display">
      <div className="flex flex-1 justify-between px-4 sm:px-6 md:px-10">
        <div className={`flex items-center ${TEXTSIZE}`}>
          <p>Kyle Pickard |</p>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mx-1" />
          <p>Accepting new commits</p>
        </div>

        <div className={`flex gap-6 ${TEXTSIZE}`}>
          <ButtonAnimation
            onClick={clearChat}
            text="Clear chat"
            icon={<Eraser className={`${ICONSIZE}`} />}
          />
          <ButtonAnimation
            text="Resume"
            icon={<FileUser className={`${ICONSIZE}`} />}
          />
          <ButtonAnimation
            text="Reach out"
            icon={<Mail className={`${ICONSIZE}`} />}
          />
        </div>
      </div>
    </header>
  );
};

const ButtonAnimation = ({ text, icon, onClick }) => {
  return (
    <div className="group flex gap-1">
      <button onClick={onClick} className="fill-text header-btn">
        {text}
      </button>
      {icon && <span className="header-btn-icon">{icon}</span>}
    </div>
  );
};

export default ChatHeader;
