/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Suspense, lazy } from 'react'; //컴포넌트가 렌더링하기 전에 다른 작업이 먼저 이루어지도록
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* components */
import Loading from './components/Loading';
import Header from './components/Header';
import Main from './containers/Main';
import Footer from './components/Footer';

/* style */
import GlobalStyle from './style/GlobalStyle';
import './style/Common.scss';

// const Main = lazy(() => import('./containers/Main'));
const Sub01 = lazy(() => import('./containers/Sub01'));
// const Sub02 = lazy(() => import('./containers/Sub02'));
// const Sub03 = lazy(() => import('./containers/Sub03'));
// const Login = lazy(() => import('./containers/Login'));
// const Cart = lazy(() => import('./containers/Cart'));

function App() {
  return (
    <BrowserRouter basename="/">
      <GlobalStyle /> {/* reset css */}
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/sub01" component={Sub01} />
          {/* <Route exact path="/sub02" component={Sub02} />
            <Route exact path="/sub03" component={Sub03} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cart" component={Cart} /> */}
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
