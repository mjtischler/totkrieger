import Immutable from 'immutable'
import CharacterState from './CharacterStateHandler'
import PlayerData from '../components/player-data/PlayerData'
import EnemyData from '../components/enemy-data/EnemyData'

const battleEndedMessage = 'The battle is over!'

export default (state = Immutable.List(['A ' + EnemyData.name + ' attacks!']), action) => {
  switch (action.type) {
    case 'playerAttack':
      let playerAttack = attack(PlayerData, EnemyData)

      if (CharacterState(EnemyData)) {
        return state.unshift(
                  playerAttack + ' ' + CharacterState(EnemyData)
                )
      } else {
        return state.unshift(
                  playerAttack
                )
      }
    case 'enemyAttack':
      let enemyAttack = attack(EnemyData, PlayerData)

      if (CharacterState(PlayerData)) {
        return state.unshift(
                  enemyAttack + ' ' + CharacterState(PlayerData)
                )
      } else {
        return state.unshift(
                  enemyAttack
                )
      }
    case 'deleteAttack':
      return state.filter((attack, index) => index !== action.index)

    case 'battleCompleted':
      return state.unshift(
              battleEndedMessage
            )
    default:
      return state
  }
}

function attack (attacker, victim) {
  let attackRoll = Math.floor(Math.random() * (20 - 1 + 1)) + 1
  let attackOutcome = attackRoll + attacker.attackModifier

  if (attackRoll === 1) {
    let criticalMissDamage = doDamage(attacker, victim, true)

    return criticalMissDamage
  } else if (attackOutcome >= victim.armorModifier) {
    return doDamage(attacker, victim)
  } else {
    return attacker.name + ' misses!'
  }
}

function doDamage (attacker, victim, isCriticalMiss) {
  let max = attacker.maxAttack
  let min = attacker.minAttack
  let damage = Math.floor(Math.random() * (max - min) + min)
  let damageMessage = attacker.name + ' hits ' + victim.name + ' with ' + attacker.attackType + ' for ' + damage + ' damage!'

  if (isCriticalMiss) {
    attacker.hitPoints = attacker.hitPoints - damage
    let criticalMissMessage = 'CRITICAL MISS! ' + attacker.name + ' hit itself for ' + damage + ' damage!'

    if (!CharacterState(attacker)) {
      return criticalMissMessage
    } else {
      return criticalMissMessage + ' ' + CharacterState(attacker)
    }
  } else {
    victim.hitPoints = victim.hitPoints - damage

    if (!CharacterState(victim)) {
      return damageMessage
    } else {
      return damageMessage + ' ' + battleEndedMessage
    }
  }
}
