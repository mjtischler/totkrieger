class Player {
  constructor () {
    this.isPlayer = true
    this.name = 'Der Totkrieger'
    this.maxHitPoints = 30
    this.minHitPoints = 20
    this.hitPoints = Math.floor(Math.random() * (this.maxHitPoints - this.minHitPoints) + this.minHitPoints)
    this.maxAttack = 20
    this.minAttack = 1
    this.attackType = 'Viscious Stab'
    this.attackModifier = 3
    this.statusMessage = ''
    this.armorModifier = 10
    this.dead = false
  }
}

const playerStatus = new Player()

export default playerStatus
