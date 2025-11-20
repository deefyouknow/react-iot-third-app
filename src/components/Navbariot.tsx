import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbariot() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-sky-600 row-span-full h-15 flex justify-center items-center">
      <div className='flex text-white'>
      <ul className="flex justify-center">
        <li className="mx-4">
          <Link to="/">หน้าหลัก</Link>
        </li>
        <li className="mx-4">
          <Link to="/pageb">เกี่ยวกับ</Link>
        </li>
        <li className="mx-4">
          <Link to="/pagec">ติดต่อ</Link>
        </li>
        <li className="mx-4">
          <Link to="/paged">บริการ</Link>
        </li>
      </ul>        
      </div>
    </nav>
  );
}
