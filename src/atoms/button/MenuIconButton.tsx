import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import React, { FC, memo } from 'react'

type Props = {
    onOpen: () => void;
}

const MenuIconButton: FC<Props> = memo((props) => {
    const { onOpen } = props; 

  return (
    <div>
      <IconButton
            aria-label='メニューボタン'
            icon={<HamburgerIcon />}
            size='sm'
            variant='unstyled'
            display={{ base: 'block', md: 'none' }}
            onClick={onOpen}    
        />    
    </div>
  )
})

export default MenuIconButton
