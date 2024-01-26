import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useContext } from 'react';
import MenuContext from '../MenuContext';

const Nav = () => {
    const {toggleMenu, setToggleMenu} = useContext(MenuContext);   

    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href='/'>
                    <img
                        src={headerLogo}
                        alt='logo'
                        width={129}
                        height={29}
                        className='m-0 w-[129px] h-[29px]'
                    />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className='font-montserrat leading-normal text-lg text-slate-gray'
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
                    <a href='/' className='text-coral-red'>Sign in</a>
                    <span className='text-slate-gray'>/</span>
                    <a href='/' className='text-coral-red'>Explore now</a>
                </div>
                <div className='hidden max-lg:block'>
                    {toggleMenu
                        ? <RiCloseLine color="gray" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="gray" size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className='flex justify-end items-end flex-col text-right bg-white p-6 z-50 absolute right-4 top-20 mt-0 min-w-[21px] rounded-lg shadow-lg animate-scale-up-center'>
                            <ul className='flex items-center justify-center flex-col gap-6 p-1'>
                                {navLinks.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className='font-montserrat leading-normal text-lg text-coral-red'
                                            onClick={() => setToggleMenu(false)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                                <li className="text-lg border-t border-gray-300 pt-4">
                                    <a href='/' className='text-coral-red'>Sign in</a>
                                    <span className='text-slate-gray px-1'>/</span>
                                    <a href='/' className='text-coral-red'>Explore now</a>
                                </li>
                            </ul>
                        </div>
                    )
                    }
                </div>
            </nav>
        </header>
    );
};

export default Nav;