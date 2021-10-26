import styled from "styled-components";

const InputAdm = styled.input`
    background-color: #F3F7F6;

    font-weight: bold;

    border: 1px solid #140018;
    border-radius: 10px;

    cursor: text;

    width: 235px;
    height: 35px;
    
    :focus {
        box-shadow: 0 0 0 0;
        outline: 0;

        border: 2px solid #615f61;
    }
`

const TextAreaAdm = styled.textarea`
    background-color: #F3F7F6;

    font-weight: bold;

    border: 1px solid #140018;
    border-radius: 10px;

    cursor: text;

    resize: none;

    width: 235px;
    height: 178px;
    
    :focus {
        box-shadow: 0 0 0 0;
        outline: 0;

        border: 2px solid #615f61;
    }
`

export { InputAdm, TextAreaAdm }