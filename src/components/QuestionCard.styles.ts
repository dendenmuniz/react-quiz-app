import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #d0dde0;
  border-radius: 10px;
  border: 2px solid #0e4552;
  padding: 20px;
  box-shadow: 5p 5px 10px rgba(0, 0, 0, 0.5);
  text-align: center;

  p {
    font-size: 1.5rem;
  }
`;

type ButtonWrapperProps = {
  $correct: boolean;
  $userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 1.5rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ $correct, $userClicked }) =>
      $correct
        ? "linear-gradient(90deg, #56FFA4, #59BC86)"
        : !$correct && $userClicked
        ? "linear-gradient(90deg, #FF5656, #C16868)"
        : "linear-gradient(90deg, #37a8c2, #ebf6f9)"};
    border: 3px solid #0e4552;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color: #000;
    font-weigth: 400;
    text-shadow: 0px 1px 0px rgba(18,86,102,1.000);
  }
`;
