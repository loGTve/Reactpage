import React, {CSSProperties, useEffect} from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Search} from '@styled-icons/boxicons-regular/Search';
import {UserCircle} from '@styled-icons/boxicons-regular/UserCircle';
import logo from './image/star.png';
import sb1 from './image/bucks1.jpg';
import sb2 from './image/bucks2.jpg';
import sb3 from './image/bucks3.jpg';

const Box = styled.div`
  display: flex;
`

const LoginBar = styled.div`
  width: auto;
  height: 30px;
  background: #f1f1f1;
`

const LogRight = styled.button`
  height: auto;
  margin-top: 5px;
  float: right;
  border: 0;
  font-weight: bold;
  font-family: 굴림;
`

const LogLeft = styled.div`
  float: left;
  margin-left: 60px;
  font-weight: bold;
  margin-top: 5px;
  font-family: 굴림;
`
const LogoStyle: CSSProperties = {
    width: '100px',
    height: '100px',
    float: 'left',
    marginLeft: '50px',
    marginTop: '10px'
};

const SearchBar = styled.div`
  float: left;
  padding: 3px;
  border-radius: 20px;
  background: #202020;
  width: 700px;
  height: 20px;
  margin-top: 35px;
  margin-left: 110px;
  box-shadow: 2px 4px 3px;
`

const SearchIcon = styled(Search)`
  float: right;
  width: 20px;
  margin-top: 2px;
  margin-right: 10px;
  color: white;
`
const MyInfo = styled(UserCircle)`
  float: right;
  width: 60px;
  height: 60px;
  margin-top: 20px;
  margin-left: 30px;
`
const SlideSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const SlideBox : CSSProperties = {
    height: '400px',
    width: '1920px',
    overflow: "hidden" //사진 중앙정렬, 넘는 사진 자르게 설정
}

function App() {
    return (
        <html>
        <div>
            <LoginBar>
                <LogLeft>앱 설치하기</LogLeft>
                <LogRight>고객센터</LogRight>
                <LogRight>회원가입</LogRight>
                <LogRight>로그인</LogRight>
            </LoginBar>
        </div>
        <Box>
            <img src={logo} alt="logos" style={LogoStyle}/>
            <SearchBar><SearchIcon/></SearchBar>
            <MyInfo/>
        </Box>
        <div>
            <Slider {...SlideSetting}>
                <div>
                    <img src={sb1} style={SlideBox}/>
                </div>
                <div>
                    <img src={sb2} style={SlideBox}/>
                </div>
                <div>
                    <img src={sb3} style={SlideBox}/>
                </div>
            </Slider>
        </div>
        </html>
    );
}


export default App;