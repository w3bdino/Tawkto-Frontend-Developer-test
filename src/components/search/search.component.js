import React from 'react';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './search.scss';

const Search = (props) => {
  return (
    <Container>
      <Form inline className="w-75 m-auto searchform">
        <FormControl type="text" placeholder="Search for answers" className="w-100" />
        <Button variant="success"><FontAwesomeIcon icon={faSearch} /></Button>
      </Form>
    </Container>
  )
};

export default Search;