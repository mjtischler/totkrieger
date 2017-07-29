import EnemyTypes from './EnemyTypes.jsx'

class Enemy {
  constructor (enemyType) {
    this.isEnemy = true
    this.name = enemyType.name
    this.maxHitPoints = enemyType.maxHitPoints
    this.minHitPoints = enemyType.minHitPoints
    this.hitPoints = Math.floor(Math.random() * (this.maxHitPoints - this.minHitPoints) + this.minHitPoints)
    this.maxAttack = enemyType.maxAttack
    this.minAttack = enemyType.minAttack
    this.attackType = enemyType.attackType
    this.attackModifier = enemyType.attackModifier
    this.armorModifier = enemyType.armorModifier
    this.dead = false
  }
}

const enemyStatus = new Enemy(getEnemyType())

function getEnemyType () {
  const enemy = EnemyTypes[Math.floor(Math.random() * EnemyTypes.length)]
  return enemy
}

export default enemyStatus
