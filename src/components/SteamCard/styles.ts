import styled from 'styled-components';


interface CardImgContainerProps {
  url: string
}


export const Container = styled.div`
  perspective: 1000px;
` 

export const CardContainer = styled.div`
  cursor: pointer;
  border-radius: 0.4rem;
  box-shadow: 10px 10px 10px 0px rgba(0,0,0,0.5);
  overflow: hidden;
  width: 25rem;
  position: relative;
  transition:all .35s ease-out;

  :hover {
    box-shadow: 15px 20px 15px 0px rgba(0,0,0,0.3);
    transform: rotateX(5deg);
    scale: 1.01;
  }
`;

export const CardImgContainer = styled.div<CardImgContainerProps>`
  border-radius: 0.4rem;
  width: 100%;
  aspect-ratio: 5/7;
  background-size: cover;
  background-repeat: no-repeat;
  transition:all .35s ease-out;

  background-image: ${({url}) => `url(${url})`};

  &::after {
    content: '';
    border-radius: 0.4rem;
    position: absolute;
    top:0;
    left:0;
    width:100%;
    opacity: .5;
    height:100%;
    background: linear-gradient(30deg, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 85%, rgba(255,255,255,0) 100%);
    background-size: 200% 110%;
    transition: all .35s ease-out;
  }

  :hover {
    scale: 1.05;

    
    ::after{
      background-size: 200% 170%;
      opacity: .45;
    }
  }
`


  

