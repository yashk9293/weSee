import React, { useState, useEffect, useRef } from 'react';

const ChatClient = () => {
  const [message, setMessage] = useState('');
  const [responses, setResponses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const eventSourceRef = useRef(null);
  const [allResponsesReceived, setAllResponsesReceived] = useState(false);

  const handleSubmit = () => {
    if (!message.trim()) {
      setError('Message cannot be empty.');
      return;
    }

    setLoading(true);
    setError(null);
    setResponses([]);
    setAllResponsesReceived(false); // Reset this state on new submission

    // tell me how to create a template for preventive maintenance

    try {
      const newEventSource = new EventSource(
        `/scrape?message=${encodeURIComponent(message)}`
      );
      eventSourceRef.current = newEventSource;

      newEventSource.onopen = () => console.log('SSE connection opened');

      newEventSource.onmessage = (event) => {
        console.log('data:', event.data);
        const content = event.data.trim();
        setResponses((prevResponses) => [...prevResponses, content]);
      };

      newEventSource.onerror = (error) => {
        console.error('EventSource error:', error);
        setError('Failed to connect to the server or stream ended.');
        closeConnection();
        setLoading(false);
      };

      newEventSource.onclose = () => {
        console.log('SSE connection closed');
        closeConnection();
        setLoading(false);
        setAllResponsesReceived(true);
      };
    } catch (err) {
      console.error('Request failed:', err);
      setError('Failed to connect to the server.');
      closeConnection();
      setLoading(false);
    }
  };

  const closeConnection = () => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      closeConnection();
    };
  }, []);

  return (
    <div>
      <h1>Chat Client</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {responses.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
      {allResponsesReceived && <p>All Responses Received</p>}
    </div>
  );
};

export default ChatClient;