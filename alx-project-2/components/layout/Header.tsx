// components/layout/Header.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
    { label: 'Posts', path: '/posts' },
    { label: 'users', path: '/users' },
  ];

  return (
    <header className="bg-gray-800 text-white px-6 py-4">
      <nav className="flex space-x-6">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <span
              className={`cursor-pointer hover:underline ${
                router.pathname === item.path ? 'font-bold text-yellow-400' : ''
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;





// import Link from 'next/link';
// import React from 'react';

// const Header: React.FC = () => {
//   return (
//     <header style={{ padding: '1rem', background: 'green' }}>
//       <nav>
//         <Link href="/home" style={{ marginRight: '1rem' }}>Home</Link>
//         <Link href="/about">About</Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;
