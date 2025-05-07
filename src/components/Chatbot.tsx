
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const presetResponses: { [key: string]: string } = {
  "hi": "Hello! How can I help you with your cloud and DevOps needs today?",
  "hello": "Hi there! How can I assist you with your cloud infrastructure or DevOps questions?",
  "services": "We offer a range of cloud and DevOps services including Cloud Infrastructure, DevOps Automation, Database Management, Server Management, Security Solutions, System Integration, 24/7 Monitoring, and Technical Consulting. Would you like more details about any specific service?",
  "contact": "You can reach our support team at support@goftech.com or call us at +1 (234) 567-890. Would you like us to have someone contact you?",
  "pricing": "Our pricing is customized based on your specific needs and requirements. Please contact our sales team for a personalized quote.",
  "support": "Our technical support is available 24/7. You can email us at support@goftech.com or use the contact form on our website.",
  "help": "I'm here to help! You can ask me about our services, contact information, or schedule a consultation. What would you like to know?",
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! I'm GofTech's virtual assistant. How can I help you with your cloud and DevOps needs today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (message: string): string => {
    const lowerCase = message.toLowerCase();
    
    for (const key in presetResponses) {
      if (lowerCase.includes(key)) {
        return presetResponses[key];
      }
    }
    
    return "Thanks for your message! One of our cloud specialists will get back to you soon. Is there anything else I can help you with?";
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      text: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse: Message = {
        text: getResponse(input),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat button */}
      <Button
        className={`fixed bottom-6 right-6 rounded-full w-14 h-14 p-0 shadow-lg z-50 transition-all ${
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-gradient-blue hover:opacity-90"
        }`}
        onClick={toggleChat}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-xl shadow-xl z-50 flex flex-col border border-gray-200 overflow-hidden">
          {/* Chat header */}
          <div className="bg-gradient-tech p-4 text-white">
            <h3 className="font-bold flex items-center">
              <Bot className="mr-2" size={20} /> GofTech Support Chat
            </h3>
          </div>

          {/* Chat messages */}
          <div className="flex-grow overflow-y-auto p-4 max-h-96 bg-gray-50">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? "bg-gradient-blue text-white rounded-br-none"
                        : "bg-white border border-gray-200 shadow-sm rounded-bl-none"
                    }`}
                  >
                    <div className="flex items-center mb-1">
                      {!message.isUser && <Bot size={16} className="mr-1 text-blue-500" />}
                      <span className="text-xs opacity-70">
                        {message.isUser ? "You" : "GofTech Bot"}
                      </span>
                      {message.isUser && <User size={16} className="ml-1 opacity-70" />}
                    </div>
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Chat input */}
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="rounded-r-none"
              />
              <Button 
                className="rounded-l-none bg-gradient-blue hover:opacity-90"
                onClick={handleSendMessage}
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
