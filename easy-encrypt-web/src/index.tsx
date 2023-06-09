import reactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from 'src/hooks/useGlobalContext';

import HomePage from './UI/pages/Home';
import { LanguageProvider } from './hooks/useLangContext';
import { ThemeTypeProvider } from './hooks/useThemeTypeContext';

const App = () => (
  <GlobalProvider>
    <LanguageProvider>
      <ThemeTypeProvider>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </ThemeTypeProvider>
    </LanguageProvider>
  </GlobalProvider>
);

reactDOM.render(<App />, document.getElementById('root'));
