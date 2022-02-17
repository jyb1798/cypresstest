import React from "react";
import * as S from "Components/Templates/SearchBar/style.SearchBar";
import { JsonDataType } from "src/Types";
type SearchBarProps = {
    JsonData: JsonDataType[];
}


const SearchBar = ({JsonData}:SearchBarProps):JSX.Element => {
    console.log(JsonData);
    return(<>
        <S.SearchBox>
            <form>
                <input/>
            </form>
        </S.SearchBox>
    </>);
}

export default SearchBar;