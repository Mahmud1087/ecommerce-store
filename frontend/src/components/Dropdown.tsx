import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface DropdownProps {
  title: string;
}

const Dropdown = (props: DropdownProps) => {
  const { title } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      title={`${title} button`}
      type='button'
      aria-label='button'
      className='flex items-center gap-3 group outline-none'
      onClick={() => setIsOpen(!isOpen)}
    >
      <h1>{title}</h1>
      {!isOpen ? (
        <ChevronDown
          size={19}
          className='mt-1 group-hover:rotate-180 custom-transition'
        />
      ) : (
        <ChevronUp size={19} className='mt-1' />
      )}
    </button>
  );
};
export default Dropdown;
