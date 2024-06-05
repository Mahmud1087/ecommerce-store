import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { PropsWithChildren, useState } from 'react';

interface DropdownProps {
  title: string;
  width: string;
  children: React.ReactNode;
}

const Dropdown = (props: PropsWithChildren<DropdownProps>) => {
  const { title, width, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative z-10 group'>
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

      <article className='hidden group-hover:flex hover:flex absolute top-0 right-1/2 left-1/2 -translate-x-1/2 h-fit w-fit pt-10 -z-10 justify-center'>
        <section
          className={`${width} rounded-md bg-white shadow-lg shadow-black/30 border border-black/15 relative`}
        >
          {children}
          <div className='absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 border-x-[0.65rem] border-transparent border-b-[0.65rem] border-b-black/40 -z-[1]'></div>
        </section>
      </article>
    </div>
  );
};

export default Dropdown;
