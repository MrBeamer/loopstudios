import { GlobalStyle } from "./GlobalStyle.style";
import { Header } from "./containers/Header.styled";
import { AppContainer } from "./containers/AppContainer.styled";
import { MainContent } from "./containers/MainContent.styled";
import { Footer } from "./containers/Footer.styled";
import Navigation from "./components/navigation/Navigation";
import Headline from "./components/headline/Headline";
import Content from "./components/content/Content";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header>
        <Navigation />
        <Headline />
      </Header>
      <MainContent>
        <Content />
      </MainContent>
      <Footer>
        <h2>Footer</h2>
      </Footer>
    </AppContainer>
  );
}

export default App;
