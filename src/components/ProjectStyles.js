import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
  
export const FieldSet = styled.fieldset`
  box-shadow: 3px 3px 15px rgba(80, 78, 78, 0.5);
  border: 0;
  padding: 2rem 0;
  width: 30%;
  background: #f9f9f9;
  height: 95vh;
  overflow:scroll;
`;

export const ClipBoard = styled.div`
display: flex;
font-size: 8vh;
justify-content: space-between;
  color: white;
`;

 export const HeaderForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 25vh;
  justify-content: space-evenly;
  margin: 1.5rem 3rem;
  padding: 2.5rem;
  background: #F174DC;	
  `;
  
export const HeaderText = styled.div`
  align-items: start;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  overflow: hidden;
`;

export const ImgContainer = styled.div`
  width: 120px;
  height: 130px;
  justify-self: end;
`;

export const GridContainer = styled.section`
display: grid;
justify-items: end;
grid-template-rows: auto;
margin: 3rem;
padding: 3rem;
row-gap: 4rem;
`;

export const GridContainer2 = styled.section`
display: grid;
grid-template-columns: 1fr 2fr;
column-gap: 2rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 2rem;
  padding-bottom: 0;
}
`;
export const Card = styled.div`
padding: 1rem;
width: 400px;
background-color: #e0e0e0;
@media ${(props) => props.theme.breakpoints.sm} {
  width: 100%;
}
`;

export const ConfirmationCard = styled.div`
  float:right;
  padding: 2rem;
  background-color: #e0e0e0;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  `;

  export const DataEntered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 450px;
  padding: 2rem;
  border-radius: 5px;
  background-color: #F174DC;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  `;

  export const Write = styled.p`
    margin: ${(props) => (props.title ? "2rem" : "")}
  `

export const TitleContent = styled.div`
  z-index: 20;
  width: 100%;
  margin: 1.5rem 0 0 2rem;
`;

export const HeaderTitle = styled.h3`
  font-weight: bold;
  letter-spacing: 1px;
  color: #4f4f4f;
  font-size: ${(props) => (props.title ? "2.5rem" : "2.2rem")};
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const InputContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 70px;
  border: 1px solid #bbbbbb;
  background: #e0e0e0;
  padding: 0 1.5rem;
`;

export const ButtonInit = styled.input`
  border: none;
  border-radius: 5px;
  color:#e1e1e1;
  background-color: #F64283;
  width: 90%;
  padding: 1.8rem;
  font-weight: bold;
  justify-self: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  `;	

  export const FinalData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  width: 100%;
  padding: 2rem;
  background-color: #F174DC;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  `;
