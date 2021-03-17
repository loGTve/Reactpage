import React from "react";
import styled from "styled-components";
import {Search} from '@styled-icons/boxicons-regular/Search';
import logo from './image/star.png';


const Loginbar = styled.div`
  width: auto;
  height: 30px;
  background: #f1f1f1;
`

const Logright = styled.button`
  height: auto;
  margin-top: 0.2%;
  float: right;
  border: 0;
  font-weight: bold;
  font-family: 맑은고딕;
`

const Logleft = styled.div`
  float: left;
  margin-left: 5%;
  font-weight: bold;
  margin-top: 0.2%;
  font-family: 맑은고딕;
`

// eslint-disable-next-line
const Searchbar = styled.div`
  width: 40%;
  height: 20px;
  border-radius: 20px;
  margin: 10px 0;
  padding: 20px 25px;
  background: #404040;
`
// eslint-disable-next-line
const SearchIcon = styled(Search)`
  position: absolute;
  left: 15px;
  top: 22px;
  margin: 0;
`

const Logostyle = styled.img`
  width: 30px;
  height: 30px;
  float: left;
  margin-left: 5%;
`

function App() {
    return (
        <html>
        <div>
            <Loginbar>
                <Logleft>앱 설치하기</Logleft>
                <Logright>고객센터</Logright>
                <Logright>회원가입</Logright>
                <Logright>로그인</Logright>
            </Loginbar>
        </div>

        <div>
            <img src={logo}  alt="logos" className={Logostyle}/>
        </div>
        </html>
    );
}


export default App;