import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react'
import React, { FC, memo } from 'react'

type Props = {
    onClose: () => void;
    isOpen: boolean;
    onClickHome: () => void;
    onClickUserManagement: () => void;
    onClickSetting: () => void;
}

const MenuDrawer: FC<Props> = memo((props) => {
    const { onClose, isOpen ,onClickHome, onClickUserManagement, onClickSetting} = props;

  return (
    <Drawer placement='left' size='xs' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
            <DrawerContent>
                <DrawerBody>
                    <Button w='100%' onClick={onClickHome}>TOP</Button> 
                    <Button w='100%' onClick={onClickUserManagement}>ユーザー一覧</Button>
                    <Button w='100%' onClick={onClickSetting}>設定</Button>    
                </DrawerBody>
            </DrawerContent>
        </DrawerOverlay> 
    </Drawer>
  )
})

export default MenuDrawer
