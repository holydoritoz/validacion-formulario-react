
import PropTypes from 'prop-types'

function SocialButton( {facebook, github, linkedin} ) { 

  return (
    <div className="d-flex flex-column align-items-center p-2">
        <h1>Crea una cuenta</h1>
        <div className="social-media w-25 d-flex justify-content-between">
          <a className="fs-2" role="button"><i className = {facebook}></i></a>
          <a className="fs-2" role="button"><i className = { github }></i></a>
          <a className="fs-2" role="button"><i className = { linkedin}></i></a>
        </div>
        <p>O usa tu email para registrarte</p>
    </div>
  )
}

SocialButton.propTypes = {
  facebook: PropTypes.string,
  github:PropTypes.string,
  linkedin:PropTypes.string,
}

export default SocialButton