import React from 'react'
import Logo from './Logo';
import { ThemeSwitcherButton } from './ThemeSwitcherButton';

function Navbar() {
  return (<>
    <DesktopNavbar />
  </>);
}


function DesktopNavbar(){
    return (
        <div className="hidden border-separate border-b bg-background md:block">
            <nav className="container flex items-center justify-between px-8">
                <div className="flex h-[80px] min-h-[60px] items-center gap-x-4" >
                    <Logo/>
                </div>
                <div className="flex items-center gap-2">
                    <ThemeSwitcherButton/>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

