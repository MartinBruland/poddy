import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css';
import PoddyBackend from './backend/PoddyBackend';
import Home from './pages/home/Home';
import Bookmarks from './pages/bookmarks/Bookmarks';
import Playground from './Playground'
import Startpage from './pages/startpage/Startpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PoddyBackend />} />
      <Route path="/startpage" element={<Startpage />} />


      <Route path="/podbrowser" element={<Home />} />
      <Route path="/marketplace" element={<Home />} />
      <Route path="/rss" element={<Home />} />
      <Route path="/homesystem" element={<Home />} />
      <Route path="/connections" element={<Home />} />
      <Route path="/calendar" element={<Home />} />
      <Route path="/reminders" element={<Home />} />
      <Route path="/notes" element={<Home />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/about" element={<Home />} />
    </Routes>
  </BrowserRouter>
);