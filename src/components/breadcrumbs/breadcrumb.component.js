import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import './breadcrumb.scss';

const PageBreadcrumb = ({ catdetail }) => {
console.log(catdetail)
  return (
    <div className="pagebreadcrumb">
      <Breadcrumb>
        <Breadcrumb.Item href={`/`}>All Categories</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
};

export default PageBreadcrumb;