import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/bailey-zindel-unsplash.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        heigh: 100%;
    }
    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin:0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }
    
    * {
    box-sizing: border-box;
    font-family:  'Catamaran', sans-serif;
    }
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
aling-items: center;

> p {
    color: #fff;
}

.score {
    color: #092b33;
    font-size: 2rem;
    margin: 0;
}

h1 {
    font-family: Quicksand Inline, Haettenschweiler, 'Arial Narrow Bold', 'sans-serif';
    background-image: linear-gradient(180deg, #125666, #a0bbc2);
    background-size: 100%;
    backgrounf-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #e7eef0)
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
}

.start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #662212, #a37a71);
    border: 2px solid #662212;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0; 
    padding: 0 40px;
    font-size:  1.5rem;
    color: #fff
}

.start {
    max-width: 200px;
    
}
`;
