import { useUser } from "../../userContext";

export const UserMenu = () => {
  //   const { username } = useUser();

  //   return (
  //     <div>
  //       <p>Welcome, {username}</p>
  //       <button>Log out</button>
  //     </div>
  //     );

  const { isLoggedIn, username, logOut, logIn } = useUser() || {};

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>Welcome, {username}</p>
          <button onClick={logOut}>Log out</button>
        </>
      ) : (
        <button onClick={logIn}>Log in</button>
      )}
    </div>
  );
};
