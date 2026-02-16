"use client"
import {useState, useRef, useEffect} from "react"

interface message{
    role: 'user' | 'assistant'
    content: string
}

export default function ChatWidget(){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [messages, setMessages] = useState<message[]>([])
    const [input, setInput] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    function scrollToBottom(){
        ref.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    useEffect(()=>{
           scrollToBottom() 
    },[messages])

    async function handleSubmit(e: React.SyntheticEvent){
        e.preventDefault()
        if(!input.trim() || isLoading){
            return
        }

        const userMessage :message = {role: 'user', content: input}
        setMessages(prev => {
            return [...prev, userMessage]
        })
        setInput("")
        setIsLoading(true)
        try{
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({messages: [...messages, userMessage]})
            })
            const data = await response.json()

            const assistantMessage: message = {
                role : 'assistant',
                content: data?.response || data?.result?.response || "Sorry, response not found"
                
            }
            setMessages(prev => {
                return [...prev, assistantMessage]
            })

        }catch{
            const error:message ={
                role:'assistant',
                content:'Error connecting to AI. Please try again.'
            }
            setMessages(prev => {
                return [...prev, error]
            })

        }
        finally{
            setIsLoading(false)
        }
    }
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg" onClick={()=> setIsOpen(!isOpen)}>
                {isOpen ? <svg xmlns="http://www.w3.org/2000/svg"
                               className="h-6 w-6"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor">
                                <path strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                            : 
                              <svg xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor">
                                 <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 
                                       12c0 4.418-4.03 8-9 8a9.863 9.863 0 
                                        01-4.255-.949L3 20l1.395-3.72C3.512 
                                        15.042 3 13.574 3 12c0-4.418 4.03-8 
                                        9-8s9 3.582 9 8z"/>
                                </svg>}
            </button>
            {isOpen && 
                <div className="fixed bottom-20 right-4 w-80 sm:w-96 h-125 bg-white rounded-xl shadow-2xl flex flex-col z-50 border">
                    <div className="bg-blue-500 text-white p-4 rounded-t-xl">
                        <h2 className="font-semibold text-lg">AI Assistant</h2>
                        <p className="text-sm opacity-90">Ask me anything!</p>
                        
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                            {messages.length === 0 && <p className="text-gray-500 text-center text-sm">Start a conversation...</p>}
                            {messages.map((message, index)=>{
                                return(
                                    <div className={message.role === 'user'? "flex justify-end" : "flex justify-start"} key={index}>
                                        <div className={`max-w-[75%] p-3 rounded-2xl ${
                                                message.role === 'user'
                                                    ? "bg-blue-500 text-white" 
                                                    : "bg-gray-200 text-gray-800"
                                            }`}>
                                            {message.content}
                                        </div>
                                        
                                    </div>
                                )
                            })}
                            {isLoading && 
                                <div className="flex justify-start">
                                    <div className="bg-gray-100 p-3 rounded-lg">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                
                                </div>}
                                 <div ref={ref} /> 
                    </div>
                    <form onSubmit={handleSubmit} className="p-4 border-t">
                        <div className="flex gap-2">
                            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} disabled={isLoading} className="flex-1 px-3 py-2 border rounded-lg 
                                                                                                                                        focus:outline-none focus:ring-2
                                                                                                                                         focus:ring-blue-500 text-sm"/>
                            <button type="submit" disabled={isLoading} className="px-4 py-2 bg-blue-500
                                                                                 text-white rounded-lg hover:bg-blue-600 
                                                                                 disabled:opacity-50 transition">
                                send 
                            </button>
                        </div>
                    </form>

                </div>
            }
        </div>
    )
    
}