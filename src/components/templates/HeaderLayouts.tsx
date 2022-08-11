import React, { FC, memo, ReactNode } from 'react'
import Header from '../organisms/layout/Header';

type Props = {
    children: ReactNode;
}

const HeaderLayouts: FC<Props> = memo((props) => {

    const { children } = props;

  return (
    <>
        <Header />
        {children}  
    </>
  )
})

export default HeaderLayouts
