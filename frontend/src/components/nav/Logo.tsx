import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' className=' flex items-center '>
      <h1 className=' font-oswald font-semibold text-2xl -tracking-tighter'>
        Fashion
      </h1>
      <h1 className=' font-dancing_scipt text-5xl -ml-5 font-extrabold text-orange-400'>
        Hub
      </h1>
    </Link>
  );
};
export default Logo;
