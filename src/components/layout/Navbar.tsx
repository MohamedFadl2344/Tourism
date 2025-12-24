import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from './navbar/Logo';
import NavLinks from './navbar/NavLinks';
import AuthButtons from './navbar/AuthButtons';
import MobileSidebar from './navbar/MobileSidebar';

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#101622]/80 backdrop-blur-md">
                <div className="layout-container flex flex-col mx-auto max-w-[1200px] px-4 md:px-10">
                    <div className="flex items-center justify-between h-20">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="md:hidden text-2xl text-white hover:text-[#D4AF37] transition-colors"
                            aria-label="فتح القائمة"
                        >
                            <FaBars />
                        </button>

                        {/* Logo */}
                        <Logo />

                        {/* Desktop Navigation */}
                        <NavLinks />

                        {/* Auth Buttons */}
                        <AuthButtons />
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <MobileSidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
        </>
    );
}
