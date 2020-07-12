import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import './catdetail.scss';

const CategoryDetailBlock = ({ id , title, updatedOn, icon, description }) => {
  return (
    <div className="categorydetail">
      <div className="catblock">
        <FontAwesomeIcon className="caticon" icon={icon} />
        <h2>{title}</h2>
        <span className="lastupdate">Updated {moment(updatedOn).fromNow()}</span>
        <hr />
        <FontAwesomeIcon className="catinfo" icon="info-circle" />
        <span className="catdesc">{description}</span>
      </div>
    </div>
  )
};

export default CategoryDetailBlock;