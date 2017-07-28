import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NewEncounter from './NewEncounter'
import { playerAttack, enemyAttack, deleteAttack, battleCompleted } from '../actions'
import PlayerData from './player-data/PlayerData'
import EnemyData from './enemy-data/EnemyData'
import CharacterState from '../reducers/CharacterStateHandler'

const Attacks = ({attacks, dispatch}) => (
  <div>
    <h1>Attack!</h1>
    <NewEncounter onClick={event => {
      if (event.type === 'click') {
        if (CharacterState(PlayerData) || CharacterState(EnemyData)) {
          dispatch(battleCompleted(event.target.value))
          event.target.value = ''
        } else {
          if (!CharacterState(EnemyData)) {
            dispatch(playerAttack(event.target.value))
            event.target.value = ''
          }

          if (CharacterState(EnemyData)) {
            dispatch(battleCompleted(event.target.value))
            event.target.value = ''
          } else if (!CharacterState(PlayerData)) {
            dispatch(enemyAttack(event.target.value))
            event.target.value = ''
          }
        }
      }
    }} />
    { attacks.map((attack, index) => <p key={index}>{attack} <button onClick={event => {
      dispatch(deleteAttack(index))
    }}>X</button></p>) }
  </div>
)

function mapStateToProps (attacks) {
  return {
    attacks
  }
}

export default connect(mapStateToProps)(Attacks)

Attacks.propTypes = {
  attacks: PropTypes.object,
  dispatch: PropTypes.func
}
