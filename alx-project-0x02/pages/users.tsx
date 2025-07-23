import React from 'react';
import { UserProps } from '@/interfaces';
import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <>
      {/* <Header /> */}
      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </>
  );
};

// Static generation function
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;








// import React, { useEffect, useState } from 'react';
// import { UserProps } from '@/interfaces';
// import UserCard from '@/components/common/UserCard';
// import Header from '@/components/layout/Header';

// const UsersPage: React.FC = () => {
//   const [users, setUsers] = useState<UserProps[]>([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       const res = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await res.json();
//       setUsers(data);
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <>
//       {/* <Header /> */}
//       <div className="p-6 space-y-4">
//         <h1 className="text-2xl font-bold mb-4">Users</h1>
//         {users.map((user) => (
//           <UserCard
//             key={user.id}
//             id={user.id}
//             name={user.name}
//             email={user.email}
//             address={user.address}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default UsersPage;
