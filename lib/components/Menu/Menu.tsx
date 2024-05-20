import {Dispatch, MouseEventHandler, ReactNode, SetStateAction, useEffect, useRef} from 'react';


interface MenuProps {
    menuTrigger: ReactNode;
    children: ReactNode;
    showState: [boolean, Dispatch<SetStateAction<boolean>>];
}


const Menu = ({menuTrigger, showState, children}: MenuProps) => {
    const menuRef = useRef(null);
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (showState[0] && !document.getElementById("menu")?.contains(e.target as Node)) {
                showState[1](false)
            }
        }

        if (showState[0]) {
            setTimeout(() => document.addEventListener("click", handleClick), 100)
            const el = menuRef.current as unknown as HTMLElement | undefined;
            const rect = el?.getBoundingClientRect();
            if (rect && rect.right > window.innerWidth) {
                // If it is, set the right CSS property to 0 to move it to the left
                el!.style.right = '0';
            } else {
                // Otherwise, remove the right property to let it default to its normal position
                el!.style.right = 'auto';
            }
        }

        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, [showState]);


    return <div className="relative">

        <div onClick={() => showState[1](prev => !prev)}>
            {menuTrigger}
        </div>

        {showState[0] && <nav ref={menuRef} id="menu"
                              className="menu-animation absolute top-12 z-10 w-48 rounded-xl border-2 border-gray-100 bg-white p-3 text-gray-700 shadow-sm">

            {children}
        </nav>}
    </div>

}

Menu.displayName = 'Menu';

export {Menu};

export type {MenuProps};


interface MenuItemProps {
    onClick: MouseEventHandler<HTMLButtonElement>
    children: ReactNode;
    className?: string;
}

const MenuItem = ({children, onClick, className}: MenuItemProps) => {
    return <div className="mb-1">
        <button onClick={onClick}
                className={"btn-animation rounded-lg px-2 py-4 text-left w-full font-medium leading-none last:mb-0 flex items-center text-gray-700 hover:bg-gray-50 md:flex " + className + " "}>
            {children}
        </button>
    </div>
}

MenuItem.displayName = 'MenuItem';

export {MenuItem};

export type {MenuItemProps};