import React, { useState, useEffect } from 'react';

const VirtualAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState('bg-blue-500');
    const [textColor, setTextColor] = useState('text-white');
    const [userMessage, setUserMessage] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setColor('bg-teal-500');
                setTextColor('text-black');
            } else {
                setColor('bg-blue-500');
                setTextColor('text-white');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleChatWindow = () => {
        setIsOpen(prev => !prev);
    };

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (userMessage.trim()) {
            console.log("User's message:", userMessage);
            setUserMessage('');
        }
    };

    return (
        <div className="z-50">
            {/* Floating Button */}
            <div className="fixed bottom-4 right-4 flex items-center md:flex-col z-50">
                <div
                    onClick={toggleChatWindow}
                    className={`w-16 h-16 ${color} text-white flex justify-center items-center rounded-full cursor-pointer shadow-lg transition-all duration-300 ease-in-out`}
                    title="Ask me anything"
                >
                    <span className="text-4xl">🩺</span>
                </div>
                <div className={`ml-3 ${textColor} font-semibold hidden md:block mt-2`}>
                    Virtual Assistant
                </div>
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-20 right-4 bg-white shadow-xl rounded-lg w-80 h-96 p-4 flex flex-col z-50">
                    {/* Header with Close Button */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="font-semibold text-lg">How can I assist you today?</div>
                        <button
                            onClick={toggleChatWindow}
                            className="text-gray-500 hover:text-black text-2xl font-bold"
                        >
                            &times;
                        </button>
                    </div>

                    {/* Chat messages */}
                    <div className="h-full overflow-y-auto flex-grow space-y-4">
                        <div className="bg-gray-100 p-3 rounded-md">
                            Hello! How can I assist you today?
                        </div>
                        {/* More messages here */}
                    </div>

                    {/* User input */}
                    <div className="flex items-center mt-4 space-x-2">
                        <input
                            type="text"
                            placeholder="Ask me something..."
                            className="w-full p-2 border border-gray-300 rounded-md"
                            value={userMessage}
                            onChange={handleUserInput}
                        />
                        <button
                            onClick={handleSendMessage}
                            className="bg-teal-500 text-white p-2 rounded-full"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VirtualAssistant;
