import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PWLayout } from '../../layouts';
import Home from '../Home';
import ErrorPage from '../ErrorPage';

export interface IApp { }

export const App: React.FC<IApp> = (props: IApp) => {
  return <div className="App">
    <Router>
      <PWLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </PWLayout>
    </Router>
  </div>;
}