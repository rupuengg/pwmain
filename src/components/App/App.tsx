import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from '../../layouts';
import Home from '../../pages/Home';
import ErrorPage from '../ErrorPage';
import { E_Layout } from '../../layouts/Layout';
import { AboutUs } from '../../pages/AboutUs/AboutUs';
import { Services } from '../../pages/Services';
import { Contact } from '../../pages/Contact';

export interface IApp { }

export const App: React.FC<IApp> = (props: IApp) => {
  return <div className="App">
    <Router>
      <Layout layout={E_Layout.PANACHE}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </Router>
  </div>;
}