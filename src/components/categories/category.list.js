import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import { Link, Route, Switch } from "react-router-dom";
import './categories.component.scss';

const CategoryList = ({ catinfo }) => {
  return (
    <Container>
      <Row>
        {catinfo.map(info => { 
          return (
            <Col key={info.id} className="col-lg-4 col-md-6 col-sm-12 col-12 mr-10">
              <div className="catblock">
                <Link className="catlink" to={`/category/${info.id}`}>
                  <FontAwesomeIcon className="caticon" icon={info.icon} />
                  <h2>{info.title}</h2>
                  <span className="totalarticle">{info.totalArticle} articles</span>
                  <span className="lastupdate">Last update {moment(info.updatedOn).fromNow()}</span>
                </Link>
              </div>
            </Col>
          )
        })}
      </Row>  
    </Container>    
  )
};

export default CategoryList;