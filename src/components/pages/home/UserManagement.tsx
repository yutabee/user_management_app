import { Wrap, WrapItem ,Spinner, Center, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react";
import { useAllUsers } from "../../../hooks/useAllUsers";
import { useLoginUser } from "../../../hooks/useLoginUser";
import { useSelectUser } from "../../../hooks/useSelectUser";
import UserCard from "../../organisms/user/UserCard";
import UserDetailModal from "../../organisms/user/UserDetailModal";


const UserManagement: FC = memo(() => {
  const { isOpen , onClose , onOpen} = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { selectedUser, onSelectUser } = useSelectUser();
  
  const { loginUser } = useLoginUser();
  console.log(loginUser);
  
  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },[users,onSelectUser,onOpen]);
  
  useEffect(() => getUsers()
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
                    id={user.id}
                    imageUrl="http://source.unsplash.com/random"
                    userName={user.username}
                    fullName={user.name}
                    onClick={onClickUser}
                  />
                </WrapItem>
            ))}
             </Wrap >
        )
      }   
     <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
   </>
  );
});

export default UserManagement;