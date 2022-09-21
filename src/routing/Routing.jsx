import React from 'react';
import { Route, Routes } from "react-router-dom";
import ErrorPage from '../components/error';
import ProductList from '../pages/product-list-page'
import ProductDetail from '../pages/product-detail-page'
import HomePage from '../pages/home-page'
import AddedToCardPage from '../pages/added-to-card-page';

export const Routing = () => {
  return (
    <div className="container mx-auto px-4">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product-list' element={<ProductList />} />
        <Route path='/product-list/:id' element={<ProductDetail />} />
        <Route path='/added-to-card' element={<AddedToCardPage />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>

  )
}
