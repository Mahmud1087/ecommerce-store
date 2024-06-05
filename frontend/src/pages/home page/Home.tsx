import { useAuth0 } from '@auth0/auth0-react';
import { LoaderCircle } from 'lucide-react';

const Home = () => {
  const { isAuthenticated, user, isLoading, error } = useAuth0();

  if (isLoading) return <LoaderCircle className='animate-spin' />;

  if (error) return <div>Oops!!!...{error.message}</div>;

  if (isAuthenticated && user)
    return (
      <div>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
      </div>
    );
};
export default Home;
