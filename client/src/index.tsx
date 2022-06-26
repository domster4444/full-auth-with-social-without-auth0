import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

//? styled-components
import { createGlobalStyle } from 'styled-components';

//? redux toolkit config
import { Provider } from 'react-redux';
import { store } from './redux/store';

//? redux persist config
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

const GlobalStyle = createGlobalStyle`
  


  :root{
    font-size:10px;
    --primary-green: #2ecc71;
    --primary-dark-green: #25a25a;
    --primary-white: #ffffff;
    --primary-navy:  #102b7b;
    --primary-navy-light:  #1f44b4; /*used for herosection bg-color*/ 
    --primary-black: black;
    --primary-grey: #767683;
    --secondary-lightsky: cyan;
  //? Devices
  --phone:360px;
  --tablet:768px;
  --desktop:1366px;
  --lgdesktop:1920px;
  
  }
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}



`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

