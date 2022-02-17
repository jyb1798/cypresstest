import React from 'react';
import * as S from './style.Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
//import * as S from './style.Main';


const Nav = ():JSX.Element => {
    const handleOnClick = () =>{

    }
    return(
        <S.NavContainer>
            <S.IconList>
                <S.IconContainer onClick={handleOnClick}>
                 <FontAwesomeIcon icon={faBars} color={"gray"} />
                </S.IconContainer>
                <S.LogoContainer>
                    <img src="https://media.vlpt.us/images/yeonbee/post/649c4072-c9f4-468e-82d4-ad5c343c61e4/5d822a6b9583c3586bdd3249cc09f505.png" alt="로고" />
                </S.LogoContainer>
                <S.IconContainer onClick={handleOnClick}>
                     <FontAwesomeIcon icon={faCartArrowDown} color={"gray"} />
                </S.IconContainer>
            </S.IconList>
    </S.NavContainer>
    )
}

export default Nav