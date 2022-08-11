import { Box,  Flex, Heading,  useDisclosure } from '@chakra-ui/react';
import React, { FC, memo, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import MenuIconButton from '../../../atoms/button/MenuIconButton';
import MenuDrawer from '../../molecules/MenuDrawer';

const Header:FC = memo(() => {
    //drawerを管理するstate
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const navigate = useNavigate();
    const onClickHome = useCallback(() => {
        navigate('/home');
        onClose();
    // eslint-disable-next-line
    }, []);
    const onClickUserManagement = useCallback(() => {
        navigate('/home/management');
        onClose();
     // eslint-disable-next-line
    }, []);
    const onClickSetting = useCallback(() => {
        navigate('/home/setting');
        onClose();
     // eslint-disable-next-line
    }, []);

    return (
    <>
        <Flex
        as='nav'
        bg='teal.500'
        color='gray.50'
        align='center'
        justify='space-between'
        padding={{ base:3,md:5 }}        
        >   
        <Flex align='center' as='a' mr={8} _hover={{ cursor:'pointer' }} onClick={onClickHome} >
            <Heading as='h1' fontSize={{base: 'md', md: 'lg'}}>
            ユーザー管理アプリ
        </Heading>
        </Flex>     
        <Flex align='center' fontSize='sm' flexGrow={2} display={{ base:'none', md:'flex' }} >
            <Box pr={4}>
                <Link to='/home/management'>ユーザー一覧</Link>
            </Box>
            <Box pr={4}>
                <Link to='/home/setting' >設定</Link>
            </Box>         
            </Flex>
            <MenuIconButton onOpen={onOpen} />
        </Flex>
            <MenuDrawer
                onClose={onClose}
                isOpen={isOpen}
                onClickHome={onClickHome}
                onClickSetting={onClickSetting}
                onClickUserManagement={onClickUserManagement}
            />
    </>
    )
});

export default Header;
