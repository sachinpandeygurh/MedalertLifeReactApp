import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container">
  <div className="row">
    <div className="col-md-12">
      <div className="error-template">
        <h1>Oops!</h1>
        <h2>404 Not Found</h2>
        <div className="error-details">
          Sorry, an error has occured, Requested page not found!
        </div>
        <div className="error-actions">
          <Link
            to="/"
            className="btn btn-primary btn-lg"
          >
            <span className="glyphicon glyphicon-home" />
            Take Me Home
          </Link>
          <Link
            to="/contact"
            className="btn btn-default btn-lg"
          >
            <span className="glyphicon glyphicon-envelope" /> Contact Support
          </Link>
        </div>
      </div>
    </div>
  </div>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2343825218133494"
     crossorigin="anonymous"></script>
</div>

  )
}

export default NotFound