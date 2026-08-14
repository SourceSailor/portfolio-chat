import React from "react";

const ChatIntro = () => {
  return (
    <div className="flex flex-col gap-5 max-w-2xl text-center mx-auto">
      <div className="flex justify-center items-center gap-5 text-sm">
        <div className="h-[0.9px] w-9 bg-gray-500" />

        <p className="text-md md:text-lg font-light tracking-widest font-mono-display">
          A portfolio, in conversation
        </p>

        <div className="h-[0.9px] w-9 bg-gray-500" />
      </div>
      <h1 className="md:text-7xl text-5xl font-display font-semibold">
        Hi, I'm Kyle.
        <br />
        Ask me <span className="anything-color">anything</span>.
      </h1>

      <p className="text-sm md:text-lg ">
        Go beyond the résumé. Chat with my personal AI, trained on my work, to
        gain a deeper understanding of who I am, how I think, and what I can
        bring to your team.
      </p>
    </div>
  );
};

export default ChatIntro;
