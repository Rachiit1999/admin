import { styled } from "styled-components";

const Wrapper = styled.div`
  h1 {
    margin: 10px auto;
    padding: 0 10px;
  }

  input[type="search"] {
    width: 100%;
    padding: 10px;
    border: none;
    background: #fff;
  }

  img.placeholder {
    width: 200px;
    margin: 100px auto;
    display: block;
  }

  .user {
    display: flex;
    background: #fff;
    padding: 10px;
    align-items: center;
    gap: 10px;
    box-shadow: 0 1px 1px #ccc;
    margin-top: 1px;
    .initials {
      background: orange;
      color: #fff;
      height: 32px;
      width: 32px;
      text-align: center;
      line-height: 32px;
      border-radius: 50%;
    }
    .info {
      flex: 1;
    }
    input {
      padding: 10px;
      background-color: green;
      color: #fff;
      border: none;
      border-radius: 3px;
    }
  }
`;

export default Wrapper;
