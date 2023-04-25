import 'antd/dist/reset.css';
import './App.css';
import { Provider } from 'react-redux';
import Routers from './Routers';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient,QueryClientProvider,} from '@tanstack/react-query'

/*import { feedProducts } from './api';
feedProducts();*/
const queryClient = new QueryClient()

function App() {

  //最外層一定要用Provider包起來(意指Provider外不能有任何東西)不然會出事

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routers />
        </PersistGate>
      </Provider>
    </QueryClientProvider>


  )
}

export default App
