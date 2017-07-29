import React from 'react'
import PropTypes from 'prop-types'
// MT: Re-enable when/if attack grid is implemented.
// import AttackGrid from '../components/attack-grid/AttackGrid'
import PlayerData from './player-data/PlayerData'
import EnemyData from './enemy-data/EnemyData'

const EnemyBackground = '/assets/cards/enemy-cards/empty-enemy.png'
const PlayerBackground = '/assets/cards/player-cards/empty-player.png'

const CardContainer = {
  display: 'flex',
  flexDirection: 'row'
}

const Card = {
  position: 'relative',
  width: '308px',
  height: '454px'
}

const BattleCompletedMessage = {
  position: 'absolute',
  top: '37%',
  width: '100%',
  color: '#fff',
  fontSize: '40px',
  textAlign: 'center'
}

const AttackButton = {
  position: 'absolute',
  top: '54%',
  width: '100%',
  color: '#fff',
  fontSize: '40px',
  textAlign: 'center'
}

const EnemyCard = {
  backgroundImage: `url(${EnemyBackground})`
}

const EnemyStats = {
  position: 'absolute',
  width: '100%',
  top: '72%',
  textAlign: 'center',
  fontSize: '28px',
  color: '#fff'
}

const CharacterName = {
  position: 'absolute',
  width: '100%',
  top: '3.5%',
  textAlign: 'center',
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
  backgroundImage: `url(${PlayerBackground})`
}

const PlayerStats = {
  position: 'absolute',
  width: '100%',
  top: '72%',
  textAlign: 'center',
  fontSize: '28px',
  color: '#fff'
}

const AttackMessage = {
  padding: '10px',
  textAlign: 'center',
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

        {PlayerData.dead &&
        <div style={BattleCompletedMessage}>
          YOU DIED
        </div>
        }

        <div style={AttackButton}>
          <input id='attackButton' type='button' value='Viscious Stab' onClick={onClick} />
        </div>

        <div style={PlayerStats}>
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

        {EnemyData.dead &&
        <div style={BattleCompletedMessage}>
          DEAD!
        </div>
        }

        <div style={EnemyStats}>
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
