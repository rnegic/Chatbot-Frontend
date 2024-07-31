'use client'

import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";
import Link from 'next/link'

const Navbar = () => {

    return (
        <div className="mx-10 my-8 flex justify-end gap-4">
            <Button asChild className="w-28 h-10 bg-buttonBg text-textColorDark rounded-xl hover:bg-blue-200">
                <Link href="/signin">
                    Sign in
                </Link>
            </Button>

            <Button asChild className="w-28 h-10 bg-buttonBg text-textColorDark rounded-xl hover:bg-blue-200">
            <Link href="/signup">
                    Sign up
                </Link>
            </Button>

            <LanguageSelector />

        </div>
    );
};

export default Navbar;