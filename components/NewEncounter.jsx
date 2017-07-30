import React from 'react'
import PropTypes from 'prop-types'
// MT: Re-enable when/if attack grid is implemented.
// import AttackGrid from '../components/attack-grid/AttackGrid'
import PlayerData from './player-data/PlayerData'
import EnemyData from './enemy-data/EnemyData'

const CardContainer = {
  display: 'flex',
  flexDirection: 'row'
}

const Card = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '308px',
  height: '454px',
  padding: '10px',
  borderRadius: '3px',
  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
}

const BattleCompletedMessage = {
  alignSelf: 'center',
  height: '25%',
  color: '#fff',
  fontSize: '40px',
  textAlign: 'center'
}

const AttackContainer = {
  alignSelf: 'center',
  color: '#fff',
  fontSize: '18px',
  textAlign: 'center'
}

const EnemyCard = {
  backgroundColor: '#7b4a00'
}

const CharacterStats = {
  alignSelf: 'center',
  height: '30%',
  textAlign: 'center',
  fontSize: '28px',
  color: '#fff'
}

const CharacterName = {
  alignSelf: 'center',
  height: '25%',
  fontSize: '32px',
  color: '#fff'
}

const VersusText = {
  alignSelf: 'center',
  width: '100px',
  fontSize: '28px',
  textAlign: 'center'
}

const PlayerCard = {
  backgroundColor: '#003763'
}

const AttackMessage = {
  fontSize: '22px'
}

const NewEncounter = ({ onClick }) => (
  <div>
    <h3>The enemy is upon you!</h3>
    <div style={CardContainer}>
      <div style={Object.assign({}, Card, PlayerCard)}>
        <div style={CharacterName}>
          {PlayerData.name}
        </div>

        <div style={BattleCompletedMessage}>
          {PlayerData.dead &&
            <span>
              YOU DIED
            </span>
            }
        </div>

        <div style={AttackContainer}>
          <input id='attackButton' type='button' value='Viscious Stab' onClick={onClick} />
        </div>

        <div style={CharacterStats}>
          Will to live: {PlayerData.hitPoints}
          <br />
          <span style={AttackMessage}>
            {PlayerData.statusMessage}
          </span>
        </div>
      </div>

      <div style={VersusText}>
        vs.
      </div>

      <div style={Object.assign({}, Card, EnemyCard)}>
        <div style={CharacterName}>
          {EnemyData.name}
        </div>

        <div style={BattleCompletedMessage}>
          {EnemyData.dead &&
            <span>
              DEAD!
            </span>
            }
        </div>

        <div style={AttackContainer}>
          {EnemyData.attackType}
        </div>

        <div style={CharacterStats}>
          Will to live: {EnemyData.hitPoints}
          <br />
          <span style={AttackMessage}>
            {EnemyData.statusMessage}
          </span>
        </div>
      </div>
    </div>
  </div>
)

export default NewEncounter

NewEncounter.propTypes = {
  onClick: PropTypes.func
}
