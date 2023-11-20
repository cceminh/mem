import React from "react";
import styled from "styled-components";
// import "../App.css";
import { useState } from "react";
import dummyData from "../shared/DummyData";
import List from "../components/List";
import uuid from "react-uuid";

// set all
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// header
const Header = styled.header`
  height: 500px;
  background-image: url("https://blog.kakaocdn.net/dn/xCKds/btroPr8Ef0B/LvWAm5dOr8AbD0Y9AiGcW1/img.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: contain;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`;
const Headerh2 = styled.h2`
  font-size: 50px;
  margin-bottom: 50px;
`;
const HeaderUl = styled.ul`
  list-style: none;
  margin-bottom: 10px;
  display: flex;
  padding: 10px;
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
`;
const Hlist = styled.li`
  border-radius: 10px;
  color: black;
  background-color: white;
  padding: 10px;
  margin-right: 10px;
  margin-left: 10px;
`;

// Form
const FormBox = styled.form`
  background-color: #9e0518;
  margin-bottom: 10px;
  margin-top: 20px;
  width: 500px;
  padding: 20px;
  border-radius: 20px;
`;
const Fdiv = styled.div`
  justify-content: ${(props) => props.justfy};
  display: flex;
  margin-bottom: 10px;
`;
const Finput = styled.input`
  padding: 10px;
  width: 100%;
`;
const Fselect = styled.select`
  height: 30px;
  margin-left: 10px;
`;
const FtextArea = styled.textarea`
  padding: 10px;
  width: 100%;
  height: 50px;
`;
const Flabel = styled.label`
  width: ${(props) => props.widthsize};
`;
const Fbtn = styled.button`
  padding: 10px;
  background: white;
  border-radius: 10px;
`;

function Home() {
  //1. Letter
  //1-1 letter state
  const [letter, setLetter] = useState(dummyData);

  // 1-2 초기화면 letter
  const [sentSpiderTobi, setTobi] = useState(true);
  const [sentSpiderAndrew, setAndrew] = useState(false);
  const [sentSpiderTom, setTom] = useState(false);

  //2. Form
  //2-1 Form state
  const [id, setID] = useState("");
  const [contents, setContents] = useState("");
  //2-2 select state
  const [spider, setSpider] = useState("토비 맥과이어");
  //2-3 letter 추가 + validation check.
  function OnSubmitHandler(e) {
    e.preventDefault();

    //letter 체크
    const newLetter = {
      avatar:
        "https://w7.pngwing.com/pngs/14/608/png-transparent-spider-man-logo-superhero-spiderman-face-fictional-character-mask-spiderman-face-clipart-thumbnail.png",
      createdAt: new Date(),
      nickname: id,
      content: contents,
      writedTo: spider,
      id: uuid(),
    };

    //validation check
    if (id.length <= 0) return alert("이름을 입력해주세요.");
    else if (contents.length <= 0) return alert("내용을 입력해주세요");
    else setLetter([...letter, newLetter]);
    alert("등록이 완료되었습니다.");
    setID("");
    setContents("");
  }

  //조건부 초기화면세팅
  function ShowSpiderLetter(a, b, c) {
    setTobi(a);
    setAndrew(b);
    setTom(c);
  }

  return (
    <>
      <Container>
        {/* header영역 */}
        <Header>
          <Headerh2>스파이더맨</Headerh2>
          <HeaderUl>
            <Hlist onClick={() => ShowSpiderLetter(true, false, false)}>
              토비 맥과이어
            </Hlist>
            <Hlist onClick={() => ShowSpiderLetter(false, true, false)}>
              앤드류 가필드
            </Hlist>
            <Hlist onClick={() => ShowSpiderLetter(false, false, true)}>
              톰 홀랜드
            </Hlist>
          </HeaderUl>
        </Header>

        {/* form 영역 */}
        <FormBox onSubmit={(e) => OnSubmitHandler(e)}>
          <Fdiv>
            <Flabel widthsize={"100px"}>이름:</Flabel>
            <Finput
              maxLength={20}
              type="text"
              value={id}
              onChange={(event) => setID(event.target.value)}
            />
          </Fdiv>
          <Fdiv>
            <Flabel widthsize={"100px"}>내용:</Flabel>
            <FtextArea
              size={50}
              maxLength={100}
              type="text"
              value={contents}
              onChange={(event) => setContents(event.target.value)}
            />
          </Fdiv>
          <Fdiv>
            <div style={{ marginTop: "20px" }}>
              <Flabel widthsize={"170px"}>누구한테 투표할거임?</Flabel>
              <Fselect onChange={(event) => setSpider(event.target.value)}>
                <option value={"토비 맥과이어"}>토비맥과이어</option>
                <option value={"앤드류가필드"}>앤드류가필드</option>
                <option value={"톰홀랜드"}>톰홀랜드</option>
              </Fselect>
            </div>
          </Fdiv>
          <Fdiv justfy={"flex-end"}>
            <Fbtn type="submit"> 팬레터등록</Fbtn>
          </Fdiv>
        </FormBox>

        {/* list 영역 */}
        {sentSpiderTobi === false ? (
          ""
        ) : (
          <List
            letter={letter}
            setLetter={setLetter}
            name={"토비 맥과이어"}
          ></List>
        )}
        {sentSpiderAndrew === true ? (
          <List
            letter={letter}
            setLetter={setLetter}
            name={"앤드류가필드"}
          ></List>
        ) : (
          ""
        )}
        {sentSpiderTom === false ? (
          ""
        ) : (
          <List letter={letter} setLetter={setLetter} name={"톰홀랜드"}></List>
        )}
        {/* 푸터 영역 */}
        <footer>이곳은 푸터 영역</footer>
      </Container>
    </>
  );
}

export default Home;
