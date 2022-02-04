import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from 'store/createStore';
import theme from 'style/theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div>game</div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
