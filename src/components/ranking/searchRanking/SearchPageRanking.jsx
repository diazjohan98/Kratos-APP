import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Styles/SearchRankingStyles.css'

const SearchPageRanking = () => {
  return (
    <div className='containerSearch'>
     <InputGroup className="inputSearch">
        <Form.Control
          placeholder="Buscar por colaborador"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className='inputSelector'
        />
        <Button className='btnPrincipalInput' variant="outline-secondary" id="button-addon2">
          Buscar
        </Button>
      </InputGroup>
     <InputGroup className="inputSearch">
        <Form.Control
          placeholder="Buscar por Score"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className='inputSelector'
        />
        <Button className='btnPrincipalInput' variant="outline-secondary" id="button-addon2">
          Buscar
        </Button>
      </InputGroup>

      

    </div>
  );
}

export default SearchPageRanking;