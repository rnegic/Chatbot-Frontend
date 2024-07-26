'use client'

import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {

    const setLanguage = () => {
        return 0;
    };

    return (
        <div className="mx-10 my-8 flex justify-end gap-4">
            <Button className="w-28 h-10 bg-buttonBg text-textColorDark rounded-xl hover:bg-blue-200">
                Log in
            </Button>

            <Button className="w-28 h-10 bg-buttonBg text-textColorDark rounded-xl hover:bg-blue-200">
                Sign up
            </Button>

            <LanguageSelector onLanguageChange={setLanguage} />

        </div>
    );
};

export default Navbar;