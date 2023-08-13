import { styled } from "styled-components";

const Wrapper = styled.div`
  border-bottom: solid thin #ccc;
  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    input {
      background: #2251ff;
      color: #fff;
      width: 32px;
      height: 32px;
      text-align: center;
      line-height: 32px;
      border: none;
      font-size: 1rem;
      border-radius: 50%;
    }
  }
`;

export default Wrapper;
