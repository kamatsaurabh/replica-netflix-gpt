import { Provider } from 'react-redux';
import Body from './components/Body';
import store from './store/store';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Body />
    </Provider>
  );
}

export default App;
