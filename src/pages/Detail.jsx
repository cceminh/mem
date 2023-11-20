import React, { useState } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: gray;
  opacity: 0.8;
  background-image: url("https://blog.kakaocdn.net/dn/xCKds/btroPr8Ef0B/LvWAm5dOr8AbD0Y9AiGcW1/img.jpg");
  background-position: center;
  background-size: cover;
  object-fit: contain;
`;

const HomeBox = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
`;
const HomeBtn = styled.button`
  width: 150px;
  height: 100px;
  border-radius: 30px;
`;

//modal2

const Modal2 = styled.div`
  width: 40%;
  background-color: transparent;
  border: 20px solid white;
  border-radius: 40px;
  padding: 20px;
  margin: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: contain;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Time = styled.time`
  font-weight: 700;
  margin-right: 20px;
  font-size: 20px;
`;
const Div = styled.div`
  display: flex;
  align-items: center;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
`;
const Img = styled.img`
  margin-right: 30px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px;
`;
const Span = styled.span`
  padding: 10px;

  background-color: white;
  font-size: 40px;
  margin-left: 30px;
  border-radius: 20px;
`;
const P = styled.p`
  background-color: white;
  font-size: 40px;
  margin-top: 40px;
  margin-left: 30px;
  height: 340px;
  padding: 30px;
  border-radius: 30px;
`;

//section
const Section = styled.section`
  display: flex;
  justify-content: flex-end;
`;
const Btn = styled.button`
  width: 70px;
  height: 60px;
  margin: 20px 0px 0px 20px;
  border-radius: 50px;
`;

function Detail() {
  const navigate = useNavigate();
  const param = useParams();
  const location = useLocation();
  const datas = location.state.letter;
  const [letters, setletter] = useState(datas);
  const Foundletter = letters.find((letter) => letter.id === param.id);

  //삭제 버튼
  // function DeleteBtnHandler() {
  //   let filteredLetter = letters.filter((ea) => {
  //     return ea.id !== letters.id;
  //   });
  //   setletter(filteredLetter);
  //   const answer = window.confirm("정말 삭제하시겠습니까?");
  //   if (!answer) return;
  //   else return navigate("/");
  // }
  return (
    <>
      <Modal
        style={{
          border: "2px soild red",
        }}
      >
        <HomeBox>
          <Link to={`/`}>
            <HomeBtn>홈으로</HomeBtn>
          </Link>
        </HomeBox>
        1
        <Modal2>
          <div style={{ width: "100%", height: "100%" }}>
            <Header>
              <Div>
                <Div width={"140px"} height={"130px"} padding={"25px"}>
                  <Img src="https://w7.pngwing.com/pngs/14/608/png-transparent-spider-man-logo-superhero-spiderman-face-fictional-character-mask-spiderman-face-clipart-thumbnail.png" />
                </Div>
                <h1 style={{ fontSize: "40px" }}>{Foundletter.nickname}</h1>
              </Div>
              <Time>
                {new Date(Foundletter.createdAt).toLocaleDateString("ko", {
                  year: "2-digit",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </Time>
            </Header>
            <Span>TO:{Foundletter.writedTo}</Span>
            <P>{Foundletter.content}</P>
          </div>
          <Section>
            <div>
              <Btn>
                <span style={{ fontSize: "15px" }}>수정</span>
              </Btn>
            </div>
            <div>
              <Btn>
                <span style={{ fontSize: "15px" }}>삭제</span>
              </Btn>
            </div>
          </Section>
        </Modal2>
      </Modal>
    </>
  );
}

export default Detail;
