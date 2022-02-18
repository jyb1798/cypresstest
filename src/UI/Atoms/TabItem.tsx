import React from 'react';
import styled from 'styled-components'

const TabItem:React.FC = ({children=''}) => { 
  return <Li>{children}</Li>
}

const Li = styled.li``

export default TabItem;