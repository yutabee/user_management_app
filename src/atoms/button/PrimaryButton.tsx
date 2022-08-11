import { Button } from '@chakra-ui/react'
import React, { FC, ReactNode } from 'react'

type Props = {
    children: ReactNode;
}

const PrimaryButton:FC<Props> = (props) => {
    const { children } = props;

  return (
      <Button bg='teal.500' color='white' _hover={{ opacity: 0.8 }}>
          {children}
      </Button>
  )
}

export default PrimaryButton
