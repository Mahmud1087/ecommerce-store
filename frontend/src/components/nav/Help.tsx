import { CircleHelp } from 'lucide-react';
import { useState } from 'react';

const Help = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`${isOpen && 'text-[#3c1323]'} cursor-pointer`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <CircleHelp />
    </aside>
  );
};
export default Help;
