import Heading from './components/Heading';
import Text from './components/Text';

function App() {
  return (
    <div className="container">
      <Heading text="헤딩입니다" level="h1" />
      <Heading text="헤딩입니다" level="h2" />
      <Heading text="헤딩입니다" level="h3" />
      <Heading text="헤딩입니다" level="h4" />
      <Heading text="헤딩입니다" level="h5" />
      <Heading text="헤딩입니다" level="h6" />
      <Text size="lg">텍스트입니다.</Text>
      <Text size="md">텍스트입니다.</Text>
      <Text size="sm">텍스트입니다.</Text>
      <Text size="xs">텍스트입니다.</Text>
      <Text size="xxs">텍스트입니다.</Text>
    </div>
  );
}

export default App;
