import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useGetArticleLists } from './article.lists.utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoadingSpinner  from '../spinner/loadingspinner';
import './article.lists.scss';

const ArticleLists = ({ catdetail }) => {

  const { articles, error, isLoading } = useGetArticleLists();

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="articlelists">
      <ListGroup>
      {articles.map(article => 
        <ListGroup.Item key={article.id}>
          <FontAwesomeIcon className="articlelisticon" icon={article.icon} />
            <h4>{article.title}</h4>
          <FontAwesomeIcon className="angleright" icon="angle-right" />
        </ListGroup.Item>)}          
      </ListGroup>
    </div>
  )
};

export default ArticleLists;