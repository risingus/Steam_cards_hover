import { CardContainer, CardImgContainer, Container, } from "./styles";

interface SteamCardHoverProps {
  imgUrl: string
}


export function SteamCardHover({imgUrl}: SteamCardHoverProps) {
  return (
    <Container>
      <CardContainer>
        <CardImgContainer url={imgUrl}/>
      </CardContainer>
    </Container>
  )
}