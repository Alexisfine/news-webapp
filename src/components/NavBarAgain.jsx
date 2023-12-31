import React from 'react'
import PropTypes from 'prop-types'
import {NavBar} from 'antd-mobile'

const NavBarAgain = (props) => {
  let {title} = props  
  const handleBack = () => {

  }
  return (
    <NavBar onBack={handleBack}>
        {title}
    </NavBar>
  )
}

NavBarAgain.defaultProps = {
    title: 'personal center'
}
NavBarAgain.propTypes = {
    title: PropTypes.string
}

export default NavBarAgain