import { GlobalStyle } from "./GlobalStyle.style";
import { Header } from "./containers/Header.styled";
import { AppContainer } from "./containers/AppContainer.styled";
import { MainContent } from "./containers/MainContent.styled";
import Navigation from "./components/navigation/Navigation";
import Headline from "./components/headline/Headline";
import Content from "./components/content/Content";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";

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
        <Gallery />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
