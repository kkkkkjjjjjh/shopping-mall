import React from 'react';
import { Layout } from './Layout';
import Counter from '../components/Counter';
import Mainslide from '../components/Mainslide';

function Main() {
  return (
    <Layout>
      <div>
        <h2 className="pageTitle">메인페이지</h2>
        <Mainslide />
        <Counter />
      </div>
    </Layout>
  );
}

export default Main;
