import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from '../../layouts';
import Home from '../Home';
import ErrorPage from '../ErrorPage';
import { E_Layout } from '../../layouts/Layout';
import { AboutUs } from '../AboutUs/AboutUs';

export interface IApp { }

export const App: React.FC<IApp> = (props: IApp) => {
  return <div className="App">
    <Router>
      <Layout layout={E_Layout.PANACHE}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </Router>
  </div>;
}