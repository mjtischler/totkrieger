import React from 'react'
import PropTypes from 'prop-types'
// MT: Re-enable when/if attack grid is implemented.
// import AttackGrid from '../components/attack-grid/AttackGrid'

const NewEncounter = ({ onClick }) => (
  <div>
    <h3>The enemy is upon you!</h3>
    <input id='attackButton' type='button' value='Viscious Stab' onClick={onClick} />
  </div>
)

export default NewEncounter

NewEncounter.propTypes = {
  onClick: PropTypes.func
}
