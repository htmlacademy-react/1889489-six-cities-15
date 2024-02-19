import PageMain from '../../pages/page-main/page-main';

type AppScreenProps = {
  citiesPlacesCount: number;
}

function App({citiesPlacesCount}: AppScreenProps): JSX.Element {
  return (
    <PageMain citiesPlacesCount={citiesPlacesCount} />
  );
}

export default App;
