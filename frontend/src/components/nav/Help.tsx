import { CircleHelp } from 'lucide-react';
import { useState } from 'react';

const Help = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className='hover:text-[#3c1323] cursor-pointer relative z-20'
      onClick={() => setIsOpen(!isOpen)}
    >
      <CircleHelp />
    </aside>
  );
};
export default Help;
