import React from 'react';
import { useParams } from "react-router-dom";
import CategoryDetailBlock from './catinfoblock';
import PageBreadcrumb from '../breadcrumbs/breadcrumb.component';
import { useGetCategoryDetail } from './catdetail.utils';
import ArticleLists from '../articlelists/article.lists';
import CatCarousel from '../catcarousel/catcarousel.component';
import { Container, Row, Col } from 'react-bootstrap';
import LoadingSpinner  from '../spinner/loadingspinner';
import './catdetail.scss';

const CategoryDetail = () => {
  let { catid } = useParams();
  const { catdetail, error, isLoading } = useGetCategoryDetail(catid);

  if (isLoading) {
    return <LoadingSpinner />
  }
console.log(catdetail);
  return (
    <div className="catdetailwrap">
      <Container>
        <PageBreadcrumb catdetail={catdetail} />
        <Row>
          <Col className="col-lg-4 col-sm-12 col-xs-12">
            <CategoryDetailBlock { ...catdetail } />
          </Col>
          <Col className="col-lg-8 col-sm-12 col-12">
            <ArticleLists />
          </Col>
        </Row>
        
      </Container>
      <CatCarousel currentcat={catdetail.id} />
    </div>
  )
};

export default CategoryDetail;