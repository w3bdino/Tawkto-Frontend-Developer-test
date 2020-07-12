import React from 'react';
import { Container } from 'react-bootstrap';
import Search from '../../components/search/search.component';
import CategoryLists from '../../components/categories/categories.component';
import './home.page.scss';

const HomePage = (props) => {
  return (
    <div className="homepage mt-3">
      <h1>Knowledge does'nt have to be boring</h1>
      <h5>Everything you need to Manage you Messaging</h5>
      <Search />
      <CategoryLists />
    </div>
  )
};

export default HomePage;