import React from 'react';
import CategoryList from './category.list';
import LoadingSpinner  from '../spinner/loadingspinner';
import { useGetCategoriesLists } from './categories.utils';
import './categories.component.scss';

const CategoryLists = () => {

  const { response, error, isLoading } = useGetCategoriesLists();
  
  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="categorylists">
      <CategoryList catinfo={ response } />
    </div>
  )
};

export default CategoryLists;