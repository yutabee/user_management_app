import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack } from '@chakra-ui/react'
import React, { ChangeEvent, FC, memo, useEffect, useState } from 'react'
import PrimaryButton from '../../../atoms/button/PrimaryButton';
import { User } from '../../../types/api/user';

type Props = {
    user: User | undefined ;
    isOpen: boolean;
    isAdmin: boolean|undefined;
    onClose: () => void;
}

const UserDetailModal: FC<Props> = memo((props) => {
    const { user, isOpen, isAdmin = false, onClose } = props;
    
    const [username, setUserName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    }
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }

    useEffect(() => {
        setUserName(user?.username ?? '');
        setName(user?.name ?? '');
        setEmail(user?.email ?? '');
        setPhone(user?.phone ?? '');
    }, [user]);


    const onClickUpdate = () => {
        console.log(username);
        console.log(name);
        console.log(email);
        console.log(phone);
    };

    return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
        <ModalOverlay>
          <ModalContent pb={6}>
            <ModalHeader>ユーザー情報</ModalHeader>
              <ModalBody mx={4}>
                <Stack spacing={4}>
                  <FormControl>
                  <FormLabel>名前</FormLabel>
                  <Input value={username} isReadOnly={!isAdmin} onChange={onChangeUserName} />
                  </FormControl>
                  <FormControl>
                  <FormLabel>フルネーム</FormLabel>
                  <Input value={name} isReadOnly={!isAdmin} onChange={onChangeName} />
                  </FormControl>
                  <FormControl>
                  <FormLabel>MAIL</FormLabel>
                  <Input value={email} isReadOnly={!isAdmin} onChange={onChangeEmail} />
                  </FormControl>
                  <FormControl>
                  <FormLabel>TEL</FormLabel>
                  <Input value={phone} isReadOnly={!isAdmin} onChange={onChangePhone} />
                  </FormControl>
                </Stack>
              </ModalBody>
            <ModalCloseButton />
            {isAdmin && (
            <ModalFooter>
                <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            </ModalFooter>     
            )}              
          </ModalContent>   
        </ModalOverlay>
      </Modal>
  )
})

export default UserDetailModal
