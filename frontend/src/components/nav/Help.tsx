import { CircleHelp, MessageSquareDot } from 'lucide-react';
import { Dropdown } from '../main';
import { Link } from 'react-router-dom';

const list = [
  { id: 1, name: 'Help center', link: '/help-center' },
  { id: 2, name: 'Place an order', link: '/place-order' },
  { id: 3, name: 'Track an order', link: '/track-order' },
  { id: 4, name: 'Cancel an order', link: '/cancel-order' },
  { id: 5, name: 'FAQs', link: '/faqs' },
];

const Help = () => {
  return (
    <aside className='relative z-20'>
      <section className='flex gap-2'>
        <CircleHelp className='cursor-pointer' />
        <Dropdown title='Help' width='w-52'>
          <div className='py-3 px-6 flex flex-col gap-6'>
            <ul className='flex flex-col gap-3'>
              {list.map((item) => {
                return (
                  <li key={item.id}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>

            <hr className='border-black/25 w-full' />

            <Link
              to='live-chat'
              className='flex gap-4 items-center bg-orange-400 justify-center py-2 rounded-md text-white text-sm uppercase font-semibold'
            >
              <MessageSquareDot />
              Live chat
            </Link>
          </div>
        </Dropdown>
      </section>
    </aside>
  );
};
export default Help;
