export function playerAttack (attack) {
  return {
    type: 'playerAttack',
    attack
  }
}

export function enemyAttack (attack) {
  return {
    type: 'enemyAttack',
    attack
  }
}

export function battleCompleted (attack) {
  return {
    type: 'battleCompleted',
    attack
  }
}

export function deleteAttack (index) {
  return {
    type: 'deleteAttack',
    index
  }
}
