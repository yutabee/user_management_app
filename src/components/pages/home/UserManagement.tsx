import { Wrap, WrapItem ,Spinner, Center } from "@chakra-ui/react";
import { FC, memo, useEffect } from "react";
import { useAllUsers } from "../../../hooks/useAllUsers";
import UserCard from "../../organisms/user/UserCard";


const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  
  useEffect(() => {
    getUsers()
  }
  // eslint-disable-next-line
    , []);  //getUsersを初回マウント時のみ実行するためuseEffect

  return (
  <>   
        {
          loading ? (
          <Center h='100vh'>
            <Spinner/>
          </Center>
        ) : (
            <Wrap p = {{ base: 4, md: 10 }} >
            {
              users.map((user) => (
                <WrapItem key={user.id} mx='auto'>
                  <UserCard
                    imageUrl="http://source.unsplash.com/random"
                    userName={user.username}
                    fullName={user.name}
                  />
                </WrapItem>
            ))}
             </Wrap >
          )
        }    
   </>
  );
});

export default UserManagement;