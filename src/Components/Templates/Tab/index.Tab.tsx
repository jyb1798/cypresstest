import React from 'react'
import Results from 'public/data/mockData.json';
// import * as S from './style.Tab'


const Tab = () => {
   console.log(Results)
  return (
        <div>
            <ul>
                    <li style={{position:'relative',left:'10vh'}}>
                        <span >1</span>
                        {/* <span style={styleInfo}>{data.age}</span>
                        <span style={styleInfo}>{data.country}</span> */}
                    </li>
            </ul>
        </div>
      )
  }
export default Tab