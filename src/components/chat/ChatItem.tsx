import React from "react";
import { useAuth } from "@/context/AuthContext";

type ChatItemProps = {
    content: string;
    role: "user" | "assistant";
};

const extractCodeFromString = (message: string): string[] | null => {
    if (message.includes("```")) {
        const blocks = message.split("```");
        return blocks;
    }
    return null;
};

const isCodeBlock = (str: string): boolean => {
    return (
        str.includes("=") ||
        str.includes(";") ||
        str.includes("[") ||
        str.includes("]") ||
        str.includes("{") ||
        str.includes("}") ||
        str.includes("#") ||
        str.includes("//")
    );
};

const ChatItem = ({ content, role }: ChatItemProps) => {
    const messageBlocks = extractCodeFromString(content);
    const auth = useAuth();

    return (
        <div className={`flex p-2 gap-2 my-1 ${role === "assistant" ? "bg-gray-800" : "bg-textColorDark"} rounded-xl`}>
            <div className="flex items-center justify-center w-12 h-12 bg-textColorMid text-black font-bold rounded-full">
                {role === "assistant" ? (
                    <img src="openai.png" alt="openai" className="w-8 h-8" />
                ) : (
                    <span className="bg-textColorMid">
                        {auth?.user?.name[0]}
                    </span>
                )}
            </div>
            <div className="bg-slate-500 rounded-xl p-2 text-white">
                {!messageBlocks ? (
                    <p className="text-xl bg-slate-500 rounded-xl">{content}</p>
                ) : (
                    messageBlocks.map((block, index) =>
                        isCodeBlock(block) ? (
                            <pre className="bg-gray-900 text-white p-2 rounded-md" key={index}>
                                <code>{block}</code>
                            </pre>
                        ) : (
                            <p className="text-xl" key={index}>{block}</p>
                        )
                    )
                )}
            </div>
        </div>
    );
};

export default ChatItem;