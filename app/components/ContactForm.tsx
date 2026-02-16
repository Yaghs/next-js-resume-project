"use client"
import React, { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setResult("Sending....");
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY!);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      setResult("Error");
    }
  };

   return (
    <div className="rounded-xl  bg-card text-card-foreground shadow-2xl bg-white">
        <div className="flex flex-col space-y-1.5 p-6 text-center">
            <h1 className="font-semibold tracking-tight text-3xl">Contact Me</h1>
            <p className="text-muted-foreground text-lg">Have a question or feedback? I&apos;d love to hear form you</p>
        </div>
            <form onSubmit={onSubmit} className="flex flex-col text-left gap-4 max-w-md mx-auto p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm font-medium pb-2">Name</label>
                        <span className="text-red-500">*</span>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder=" Your name"
                            required
                            className="flex h-9 w-full rounded-md border border-input bg-transparent px-1 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium pb-2">Email</label>
                        <span className="text-red-500">*</span>
                        <input 
                             type="email" 
                             name="email" 
                             placeholder="Your email"
                             required
                             className="flex h-9 w-full rounded-md border bg-transparent px-1 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                         />  
                    </div>
                    
                </div>
                <textarea 
                    name="message" 
                    placeholder="Message"
                    required
                    className="border border-black rounded px-4 py-2 min-h-30 focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
                <button 
                    type="submit"
                    className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition cursor-pointer"
                >
                    Submit Form
                </button>
                <span className="text-center">{result}</span>
        </form>
    </div>
    
  );
}