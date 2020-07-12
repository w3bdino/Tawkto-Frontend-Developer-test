import React from 'react';
import Carousel from 'react-multi-carousel';
import { Container } from 'react-bootstrap';
import { useGetOtherCategories } from './catcarousel.utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoadingSpinner  from '../spinner/loadingspinner';
import moment from 'moment';
import { Link } from "react-router-dom";
import 'react-multi-carousel/lib/styles.css';
import './catcarousel.scss';

const CatCarousel = ({ currentcat }) => {

  const { othercategories, error, isLoading } = useGetOtherCategories(currentcat);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1
    }
  };

  if (isLoading) {
    return <LoadingSpinner />
  }  

  return (
    <Container className="categorycarousel">
      <hr />
      <h4>Other Categories</h4>
      <Carousel responsive={responsive}>
        {othercategories.map(info => { 
          return (
            <div key={info.id} className="carouselitem mr-10">
              <div className="catblock">
                <Link className="catlink" to={`/category/${info.id}`} replace>
                  <FontAwesomeIcon className="caticon" icon={info.icon} />
                  <h2>{info.title}</h2>
                  <span className="totalarticle">{info.totalArticle} articles</span>
                  <span className="lastupdate">Last update {moment(info.updatedOn).fromNow()}</span>
                </Link>
              </div>
            </div>
          )
        })}
      </Carousel>
    </Container>
  )
};

export default CatCarousel;