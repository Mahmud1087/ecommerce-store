import { CircleUserRound, Heart, User, WalletCards } from 'lucide-react';
import { Dropdown } from '../main';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Account = () => {
  const { logout, loginWithRedirect, user, isLoading } = useAuth0();

  return (
    <div className='flex items-center gap-2 bg-accountBtn_bg text-accountBtn_color py-2 px-4 rounded-md'>
      <CircleUserRound />
      <Dropdown title='Account' width='w-64'>
        <div className='w-full px-8 py-6 text-black flex flex-col gap-4'>
          <section className='flex flex-col gap-2 items-center text-center'>
            {!isLoading && !user && (
              <button
                className='bg-orange-400 rounded-md w-full py-2 text-white text-sm uppercase flex items-center justify-center'
                onClick={() => loginWithRedirect()}
              >
                login
              </button>
            )}
            {!isLoading && user && (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            )}
            <p className='text-sm text-color'>
              New customer?{' '}
              <Link to='signup' className=' text-blue-700'>
                Sign up
              </Link>
            </p>
          </section>

          <hr className='border-black/25 w-full' />

          <section className='flex flex-col gap-4'>
            <Link to='/' className='flex items-center gap-3'>
              <User size={19} />
              My Account
            </Link>
            <Link to='/' className='flex items-center gap-3'>
              <WalletCards size={19} />
              Orders
            </Link>
            <Link to='/' className='flex items-center gap-3'>
              <Heart size={19} />
              Wishlist
            </Link>
          </section>
        </div>
      </Dropdown>
    </div>
  );
};
export default Account;
