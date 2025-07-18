import {Link} from 'react-router'
import {motion} from "motion/react"

export default function Header(){

    return (

        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.3, ease: "easeOut" }}
       viewport={{ once: true }}
        className='flex sticky top-0 z-30 justify-between items-center px-15 h-20 bg-black/90 text-white'>

        <div className='flex text-3xl'>
            <Link to='/'>casaFind</Link>
        </div>

        <div className='flex text-lg gap-10'>
            <Link to='/catalog'>Find a Home</Link>
            <Link to='/sell'>Sell</Link>
            <Link to='contact'>Contact</Link>
            <Link to='about'>About us</Link>
        </div>

        <div>
            {/* <p>Guest</p> */}
        </div>

        </motion.div>
    )
}