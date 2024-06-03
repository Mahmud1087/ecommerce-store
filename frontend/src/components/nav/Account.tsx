import { CircleUserRound } from 'lucide-react';
import Dropdown from '../Dropdown';

const Account = () => {
  return (
    <div className='flex items-center gap-2 bg-accountBtn_bg text-accountBtn_color py-2 px-4 rounded-md'>
      <CircleUserRound />
      <Dropdown title='Account' />
    </div>
  );
};
export default Account;
