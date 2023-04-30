import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navigation = ({ account, setAccount }) => {
    const navigate = useNavigate();
    
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }
    
    const sellHandler = async (e) => {
        e.preventDefault()
        navigate('/sell');
    }

    return (
        <nav>
            <div className='nav__brand'>
                <h1 className=''>RET DAPP</h1>
            </div>

            {account ? (
                <div className='nav__buttons items-center justify-center'>
                    <button
                        type="button"
                        className='nav__connect'
                    >
                        {account.slice(0, 6) + '...' + account.slice(38, 42)}
                    </button>
                </div>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}
        </nav>
    );
}

export default Navigation;