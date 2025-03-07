/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { UserDetails } from './UserDetails';
import { UserCard } from './UserCard';
import './Users.css';

export type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
};
export function Users() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>();

  // we use useEffect when we want to fetch data outside React like an API
  // use effect runs when your component mount and when the dependencies changes like if we have
  // elements inside the dependencies array , [])

  useEffect(() => {
    async function loadUser() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        if (!response.ok) {
          // if response is
          throw new Error(`Response status:${response.status}`);
          // ('Could not fetch)
        }
        // else
        const responseUsers = (await response.json()) as User[]; // the data we getting back as an array of users object
        // since typescript doesn't know what kind of data we are using 'as' is converting string to type User
        setUsers(responseUsers); // updating each element in the array with response data
        // console.log(responseUsers);
        // setUsers(), update the cache and trigger the rerender. It reflect the changes
        // on the page
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadUser();
  }, []); // empty [] , so it runs once

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return (
      <p>Error! {error instanceof Error ? error.message : 'Unknown Error'}</p>
    );
  }
  return (
    <div className="container">
      {/* onClick={(user) => setUser(user)} we use use parameter because we care about which user to click on */}
      <UserList users={users} onClick={(user) => setUser(user)} />
      {user && (
        <UserDetails userId={user.id} onCancel={() => setUser(undefined)} />
      )}
    </div>
  );
}

type ListProps = {
  users: User[];
  onClick: (user: User) => void;
};
function UserList({ users, onClick }: ListProps) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}
