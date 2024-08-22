"use client";

import { useChat } from "ai/react";
import ScrollToBottom from "react-scroll-to-bottom";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, stop, isLoading, error, reload } = useChat();
  return (
    <div className="flex flex-col w-full items-start px-[20vw] gap-4 py-2">
      <ScrollToBottom className="h-[90vh] overflow-auto">
        {messages.map((message) => (
          <div className="flex gap-2 pb-3" key={message.id}>
            <span className="font-bold">{message.role === "user" ? "User: " : "AI: "}</span>
            {message.content}
          </div>
        ))}
      </ScrollToBottom>
      {error && (
        <>
          <div>An error occurred.</div>
          <button type="button" onClick={() => reload()}>
            Retry
          </button>
        </>
      )}
      <form onSubmit={handleSubmit} className="w-full flex">
        <input
          className="rounded p-2 text-black focus-visible:outline-none w-full"
          type="text"
          id="user-input"
          placeholder="Type something..."
          onChange={handleInputChange}
          value={input}
          disabled={isLoading}
        />
        {isLoading ? (
          <button onClick={stop} type="button">
            Stop generating
          </button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
