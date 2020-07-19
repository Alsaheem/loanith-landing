
import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
    <div className="page-wrap d-flex flex-row align-items-center">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12 text-center">
        <span className="display-1 d-block">404</span>
        <div className="mb-4 lead">The page you are looking for was not found.</div>
        <Link to='/'><a  className="btn btn-link">Back to Home</a></Link>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}
