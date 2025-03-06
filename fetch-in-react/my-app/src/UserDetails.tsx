/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { UserCard } from './UserCard';
import type { User } from './Users';

type Props = {
  userId: number;
  // its type takes no parameter and return nothing
  onCancel: () => void;
};

// for each user like catalog challenge
export function UserDetails({ userId, onCancel }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [user, setUser] = useState<User>();

  // or use event handler. We use useEffect() when when component fetch data that is outside react or the App
  useEffect(() => {
    async function loadUser() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        if (!response.ok) {
          throw new Error(`Response status:${response.status}`);
        }
        // else
        const responseUser = (await response.json()) as User;
        setUser(responseUser);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadUser();
  }, [userId]); // constantly running when the ID changes. So, it runs many time
  // if its empty [], it runs once

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error || !user) {
    console.error('Fetch error:', error);
    return (
      <p>Error! {error instanceof Error ? error.message : 'Unknown Error'}</p>
    );
  }

  return (
    <div>
      {/* {() => onCancel()}> we don't care about which user. we just want to close it  */}
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
