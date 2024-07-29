import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/context/AuthContext";

const ProfileBlock = () => {

    const auth = useAuth();

    <div className="flex justify-between rounded-xl">
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>
                {auth?.user?.name[0]}
            </AvatarFallback>
        </Avatar>
        <div className="">
            {auth?.user?.name}'s profile
        </div>
    </div>
};

export default ProfileBlock;