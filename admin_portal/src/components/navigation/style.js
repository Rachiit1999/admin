import { styled } from "styled-components";

const Wrapper = styled.nav`
  .inner {
    ul {
      display: flex;
      gap: 1px;
      li {
        flex: 1;
        a {
          width: 100%;
          display: inline-block;
          text-align: center;
          padding: 15px 0;
          background: #2251ff;
          color: #fff;
        }
      }
    }
  }
`;

export default Wrapper;
