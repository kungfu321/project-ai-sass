"use client";

import { useChat } from "ai/react";
import { Send } from "lucide-react";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import UserMessage from "@/components/dashboard/user-message";
import AiResponse from "@/components/dashboard/ai-response";
import { Textarea } from "@/components/ui/textarea";
import MarkdownResponse from "@/components/dashboard/markdown-response";
import ToolsNavigation from "@/components/dashboard/tools-navigation";
import { useProStore } from "@/stores/pro-store";

const CodePage = () => {
  const { handleOpenOrCloseProModal } = useProStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop, error } = useChat({
    api: "/api/code"
  });

  useEffect(() => {
    if (error) {
      const errorParsed = JSON.parse(error?.message);
      if (errorParsed?.status === 403) {
        handleOpenOrCloseProModal();
      }
    }
  }, [error, handleOpenOrCloseProModal]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="h-full relative flex flex-col justify-between">
      <div
        ref={containerRef}
        className="h-[calc(100vh-180px)] overflow-y-auto space-y-10 scroll-smooth">
        {messages.length > 0
          ? messages.map(m => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === 'user' ?
                <UserMessage>
                  <MarkdownResponse content={m.content} />
                </UserMessage>
                :
                <AiResponse>
                  <MarkdownResponse content={m.content} />
                </AiResponse>
              }
            </div>
          ))
          : <ToolsNavigation />}
      </div>
      <div className="mr-2">
        <form
          onSubmit={isLoading ? stop : handleSubmit}
          className="flex items-center w-full relative"
        >
          <Textarea
            placeholder="Create a beautiful button using Tailwind and React."
            value={input}
            className="min-h-1 resize-none"
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            disabled={!input}
            className="absolute right-2 gradient-btn">
            {
              isLoading
                ? "Stop"
                : <Send />
            }
          </Button>
        </form>
      </div>
    </div>
  )
}

export default CodePage;
