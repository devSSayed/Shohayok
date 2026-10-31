import { IoLogIn } from "react-icons/io5";
import { Button } from "../ui/button";


const NavButton = () => {
    return (
        <div>
            <Button className={'bg-[#0F172A] cursor-pointer hover:bg-violet-600 active:bg-violet-600/80 hover:text-white hover:px-4 px-4 py-5 md:hover:px-6 md:px-6 md:py-6 text-[#FAFAFA] text-[14px] md:text-[16px] font-inter'} 
            variant="outline"><IoLogIn /> Log in</Button>
        </div>
    );
};

export default NavButton;