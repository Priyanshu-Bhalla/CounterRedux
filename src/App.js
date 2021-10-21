import './App.css';
import{Provider} from 'react-redux';
import store from './redux/CounterStore';
import CounterRedux from './components/CounterRedux';


function App() {
  return (
    <Provider store={store}>
       <div className="App">
     <CounterRedux/>
    </div>
    </Provider>
   
  );
}

export default App;
