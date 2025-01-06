import React from "react";

const ChatMessage = ({ question, streamingAnswer, isAi }) => {
  return (
    <div className="mb-6">
      {/* Question from the user */}
      <div className="flex justify-end mb-2">
        <div className="max-w-[80%] bg-purple-100 text-white rounded-2xl p-4">
          {question}
        </div>
      </div>

      {/* AI's response */}
      {isAi && (
        <div className="flex justify-start">
          <div
            className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white mr-3"
            aria-label="AI avatar"
          >
            AI
          </div>
          <div
            className="max-w-[80%] bg-white border border-gray-200 rounded-2xl p-4"
          >
            {/* Show loader while streamingAnswer is empty */}
            {streamingAnswer ? (
              <div
                dangerouslySetInnerHTML={{ __html: streamingAnswer }}
              />
            ) : (
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
