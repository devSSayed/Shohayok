import { Button } from "../ui/button";


const NavButton = () => {
    return (
        <div>
            <Button
                className='bg-[#00C979] hover:bg-emerald-600 active:bg-[#00C979]/80 text-[#003006] rounded-[10px] tracking-tighter font-inter cursor-pointer border-none transition-all 
                py-5 px-5 md:px-8 md:py-6 text-[14px] md:text-[16px] flex items-center gap-2'
            >
            Login
            </Button>
        </div>
    );
};

export default NavButton;