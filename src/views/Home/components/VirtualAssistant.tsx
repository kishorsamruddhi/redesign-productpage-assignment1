import React, { useState, useEffect } from 'react';

const VirtualAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState('bg-blue-500'); // Color state for the floating icon
    const [textColor, setTextColor] = useState('text-white'); // Text color for the label
    const [userMessage, setUserMessage] = useState(''); // State for user input

    // Toggle the chat window open/close
    const toggleChatWindow = () => {
        setIsOpen(!isOpen); // Toggle chat window visibility
    };

    // Change the color of the floating icon and label text based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setColor('bg-teal-500'); // Change to teal when scrolled down
                setTextColor('text-black'); // Change text color to black when scrolled down
            } else {
                setColor('bg-blue-500'); // Default blue color
                setTextColor('text-white'); // Keep text white when at the top
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup on component unmount
        };
    }, []);

    const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserMessage(e.target.value); // Update user message
    };

    const handleSendMessage = () => {
        if (userMessage.trim()) {
            // Placeholder for sending the message (could integrate with an API here)
            console.log("User's message:", userMessage);
            setUserMessage(''); // Clear input field after sending the message
        }
    };

    return (
        <div>
            {/* Floating Icon with Label */}
            <div className="fixed bottom-4 right-4 flex items-center justify-between md:flex-col">
                <div
                    onClick={toggleChatWindow}
                    className={`w-16 h-16 ${color} text-white flex justify-center items-center rounded-full cursor-pointer shadow-lg transition-all duration-300 ease-in-out`}
                    title="Ask me anything"
                >
                    <span className="text-4xl">🩺</span> {/* Smaller icon size */}
                </div>
                <div className={`ml-3 ${textColor} font-semibold hidden md:block mt-2`}>Virtual Assistant</div> {/* Label color changes based on scroll */}
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-16 right-4 bg-white shadow-lg rounded-lg w-80 h-96 p-4 flex flex-col">
                    <div className="font-semibold text-lg mb-4">How can I assist you today?</div>
                    <div className="h-full overflow-y-auto flex-grow space-y-4">
                        {/* Chat messages */}
                        <div className="bg-gray-100 p-3 rounded-md">Hello! How can I assist you today?</div>
                        {/* Add additional chat messages here */}
                    </div>

                    {/* User input area */}
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
