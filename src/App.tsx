import { GlobalStyle } from "./styles/globalTheme"
import styled, {ThemeProvider} from 'styled-components';
import { SteamCardHover } from "./components/SteamCard";


const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  width: 100vw;
  height: 100vh;
`
  


function App() {

  return (
    <ThemeProvider theme={{color: 'black'}}>
      <GlobalStyle />
      <CardsContainer>
        <SteamCardHover 
          imgUrl="https://images.unsplash.com/photo-1607796884038-3638822d5ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        />
        <SteamCardHover
          imgUrl="https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        />
          <SteamCardHover
          imgUrl="https://images.unsplash.com/photo-1536029058117-75fb5c1c4c46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80"
        />
          <SteamCardHover
          imgUrl="https://images.unsplash.com/photo-1560419284-6c2d2b5e0483?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
       
      </CardsContainer>
    </ThemeProvider>
  )
}

export default App
