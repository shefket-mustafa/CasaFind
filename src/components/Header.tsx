        import {Link} from 'react-router'
        import {motion} from "motion/react"
        import { useState } from 'react';
        import { IoClose, IoMenu } from 'react-icons/io5';

        export default function Header(){

            const [isOpen, setIsOpen] = useState(false);

            const toggleMenu = () => setIsOpen(prev => !prev);

            return (

                <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
                className='sticky top-0 z-30 justify-between items-center px-5 h-20 bg-black/90 text-white'>

                <div className='flex justify-between items-center px-6 h-20'>

                {/* Logo */}
                <div className='flex text-3xl'>
                    <Link to='/'>casaFind</Link>
                </div>

                {/* Desktop menu */}
                <nav className='hidden md:flex text-lg gap-10'>
                    <Link to='/catalog'>Find a Home</Link>
                    <Link to='/sell'>Sell</Link>
                    <Link to='contact'>Contact</Link>
                    <Link to='about'>About us</Link>
                </nav>

                {/* Burger icon */}
                <div className='md:hidden text-3xl cursor-pointer' onClick={toggleMenu}>
                    {isOpen ? <IoClose/> : <IoMenu/>}
                </div>
                </div>

                {/* Mobile burger Menu */}
                {isOpen && (
                    <div className='md:hidden bg-black/95 text-white flex flex-col gap-6 px-6 pb-6'>
                    <Link to='/catalog' onClick={toggleMenu}>Find a Home</Link>
                        <Link to='/sell' onClick={toggleMenu}>Sell</Link>
                        <Link to='contact' onClick={toggleMenu}>Contact</Link>
                        <Link to='about' onClick={toggleMenu}>About us</Link>
                    </div>
                )}
                </motion.div>
            )
        }