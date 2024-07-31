'use client'

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from 'next/link';
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import {
    deleteUserChats,
    getUserChats,
    sendChatRequest,
} from "../../app/api/api-communicator";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import ProfileBlock from "./ProfileBlock";
import ChatItem from "./ChatItem";

type Message = {
    role: "user" | "assistant";
    content: string;
};

const ChatBlock = () => {
    const { toast } = useToast();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const auth = useAuth();
    const [chatMessages, setChatMessages] = useState<Message[]>([]);

    const handleSubmit = async () => {
        const content = inputRef.current?.value as string;
        if (inputRef && inputRef.current) {
            inputRef.current.value = "";
        }
        const newMessage: Message = { role: "user", content };
        setChatMessages((prev) => [...prev, newMessage]);
        const chatData = await sendChatRequest(content);
        setChatMessages([...chatData.chats]);
    };

    const handleDeleteChats = async () => {
        try {
            await deleteUserChats();
            setChatMessages([]);
            toast({
                title: "Chats deleted successfully!",
            });
        } catch (error) {
            console.log(error);
            toast({
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with deleting chats",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
        }
    };

    useLayoutEffect(() => {
        if (auth?.isSignedin && auth.user) {
            getUserChats()
                .then((data: any) => {
                    setChatMessages([...data.chats]);
                    toast({
                        title: "Successfully loaded chats!",
                    });
                })
                .catch((err: Error) => {
                    console.log(err);
                    toast({
                        title: "Oops! Something went wrong!",
                    });
                });
        }
    }, [auth]);

    useEffect(() => {
        if (!auth?.user) {
            window.location.href = "/signin";
        }
    }, [auth]);

    return (
        <div className="flex flex-1 w-full h-full mt-3 gap-3">
            <div className="hidden md:flex flex-col flex-0.2 gap">
                <div className="flex flex-col gap-5 mt-20 ml-5">
                    <ProfileBlock />
                    <Button
                        onClick={handleDeleteChats}
                        className="bg-buttonBg text-textColorDark rounded-xl hover:bg-blue-200"
                    >
                        Clear Conversation
                    </Button>
                </div>
            </div>
            <div className="flex flex-col xs:flex-1 sm:flex-1 px-3 gap-10">
                <div className="text-4xl text-textColorMid mb-2 mx-auto font-semibold">
                    Model: GPT-4o
                </div>
                <div className="w-full h-60vh rounded-xl flex flex-col overflow-scroll overflow-x-hidden overflow-y-auto scroll-smooth">
                    {chatMessages.map((chat, index) => (
                        <ChatItem content={chat.content} role={chat.role} key={index} />
                    ))}
                </div>
                <div className="w-full rounded-2xl bg-textColorDark flex mx-auto">
                    <input
                        ref={inputRef}
                        type="text"
                        className="w-full bg-transparent p-3 border-none outline-none text-textColorMid text-2xl"
                    />
                    <Button onClick={handleSubmit} className="text-textColorLight mt-2">
                        Send
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ChatBlock;