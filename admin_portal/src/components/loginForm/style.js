import { styled } from "styled-components";

const Wrapper = styled.form`
  form {
    max-width: 24rem;
    /* background-color: #f9f6f0; */
    width: 90%;
    margin: 200px auto;
    background-color: #fff;
    padding: 20px;
    box-shadow: 2px 2px 5px #ccc;
    text-align: center;
    input {
      width: 90%;
      padding: 10px;
      margin: 10px 0;
      border: solid thin #ccc;
      cursor: pointer;
      outline: none;
    }

    #button {
      width: 120px;
      border: none;
      background: #2251cc;
      color: #fff;
      padding: 10px 30px;
      border-radius: 2px;
      margin-top: 30px;
    }
    h1 {
      font-size: 1.6rem;
      padding: 10px 2px;
      /* &:hover {
        border-bottom: 2px solid black;
      } */
    }
  }
`;

export default Wrapper;
