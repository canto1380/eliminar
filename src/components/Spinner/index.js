import React from 'react'
import { Spinner } from 'react-bootstrap'
const Spinn = ({type}) => (
    type === 'data' ? (
      <Spinner animation="border" role="status" variant='secondary'>
      <span className="visually-hidden">Loading...</span> 
    </Spinner>
    ) : (
      <Spinner className='' animation="grow" variant="success" />
    )
)
export default Spinn
