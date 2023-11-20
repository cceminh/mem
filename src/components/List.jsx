import React from "react";
import styled from "styled-components";
import img from "../assets/three.png";
import { Link } from "react-router-dom";

const DummyLi = styled.li`
  margin: 10px;
  padding: 20px;
  width: 500px;
  height: 300px;
  border-radius: 20px;
  background-color: #9e4005;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
`;

const ContentWrap = styled.div`
  border: 2px solid white;
  padding: 30px;
  border-radius: 10px;
  margin-top: 10px;
`;
const AvatarWrap = styled.div`
  margin-right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 30px;
`;
export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px;
`;
export const H3 = styled.h2`
  color: white;
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 25px;
  margin-top: 10px;
`;
const Time = styled.time`
  font-size: 20px;
  color: white;
`;
export const H2 = styled.h3`
  color: white;
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 15px;
`;

function List({ name, letter, setLetter }) {
  return (
    <section>
      <ul style={{ display: "flex" }}>
        {letter
          .filter((ea) => {
            return ea.writedTo.includes(name);
          })
          .map((ea) => {
            return (
              <Link
                key={ea.id}
                style={{
                  textDecoration: "none",
                }}
                to={`/detail/${ea.id}`}
                // 단축속성명사용
                state={{ letter }}
              >
                <DummyLi>
                  <ContentWrap>
                    <AvatarWrap>
                      <Avatar src={ea.avatar}></Avatar>
                    </AvatarWrap>
                    <Time>
                      {new Date(ea.createdAt).toLocaleDateString("ko", {
                        year: "2-digit",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      }) ?? "작성시간"}
                    </Time>
                    <H3>{ea.nickname}</H3>
                    <H2>{ea.content}</H2>
                  </ContentWrap>
                </DummyLi>
              </Link>
            );
          })}
      </ul>
    </section>
  );
}

export default List;
