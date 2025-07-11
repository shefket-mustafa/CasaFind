import {Link} from 'react-router'

export default function Header(){

    return (

        <div className='flex justify-between items-center px-15 h-20 bg-gray-900 text-white'>

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
            <p >User</p>
        </div>

        </div>
    )
}