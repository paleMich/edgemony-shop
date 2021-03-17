import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 200px;
  margin-bottom: 50px;
  padding: 30px;
  width: min-content;
  height: min-content;
  display: flex;
  align-items: center;
  background-color: rgb(35, 189, 130);
`;

const Msg404 = styled.span`
  font-size: 4rem;
  font-weight: 1000;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 10px;
  border-right: 4px solid white;
  color: white;
`;

const NotFnd = styled.span`
  font-size: 3rem;
  font-weight: 300;
  padding-left: 15px;
  text-align: left;
  color: white;
`;

const Return = styled.span`
  font-size: 1.1rem;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

function Page404() {
  return (
    <>
      <Wrapper>
        <Msg404>404</Msg404>
        <NotFnd>NOT FOUND</NotFnd>
      </Wrapper>


      <Link to="/">
        <Return>Return to Home</Return>
      </Link>
    </>
  );
}

export default Page404;