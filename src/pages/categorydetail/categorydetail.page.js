import React from 'react';
import Search from '../../components/search/search.component';
import CategoryDetail from '../../components/categorydetail/catdetail.component';
import './categorydetail.page.scss';

const CategoryDetailPage = (props) => {
  return (
    <div className="categprydetail mt-3">
      <Search />
      <CategoryDetail />
    </div>
  )
};

export default CategoryDetailPage;