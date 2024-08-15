import NavBar from "../NavBar/NavBar";
import styled from "styled-components";

const HomepageBackground = styled.div`
  flex: 1;
`;

function Homepage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavBar />
      <HomepageBackground></HomepageBackground>
    </div>
  );
}

export default Homepage;
