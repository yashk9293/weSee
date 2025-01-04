import React from "react";

const ChatMessage = ({ question, streamingAnswer, isAi }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-end mb-2">
        <div className="max-w-[80%] bg-purple-100 text-white rounded-2xl p-4">
          {question}
        </div>
      </div>
      <div className="flex justify-start">
        {isAi && (
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white mr-3">
            AI
          </div>
        )}
        <div
          className="max-w-[80%] bg-white border border-gray-200 rounded-2xl p-4"
          dangerouslySetInnerHTML={{ __html: streamingAnswer }}
        />
      </div>
    </div>
  );
};

export default ChatMessage;
