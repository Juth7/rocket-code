import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
`;
  
export const FieldSet = styled.fieldset`
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  border: 0;
  padding: 0;
  width: 28vw;
  background: #f9f9f9;
  margin: 0;
  height: 100%;
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
  height: 20vh;
  justify-content: space-evenly;
  margin: 3rem;
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
export const BlogCard = styled.div`
  padding: 1rem;
  width: 400px;
  background-color: #e0e0e0;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  `;
  export const DataEntered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  width: 450px;
  background-color: #F174DC;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  z-index: 20;
  width: 100%;
  margin: 2.5rem 0 0 2rem;
`;

export const HeaderThree = styled.h3`
  font-weight: bold;
  letter-spacing: 1px;
  color: #4f4f4f;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "2.5rem" : "2.2rem")};
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
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

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`;

export const ExternalLinks = styled.a`
  color: #ececec;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  margin: 0 3rem;
  background: ${({ alt }) =>
    alt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
  opacity: 0.9;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    opacity: 1;
    box-shadow: 0px 0px 10px 8px rgba(80, 78, 78, 0.5);
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  `;
  
  export const Input = styled.input`
  width: 100%;
  height: 70px;
  border: 1px solid #bbbbbb;
  background: #e0e0e0;
  padding: 0 1.5rem;
`;
