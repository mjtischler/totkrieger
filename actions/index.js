export function playerAttack (playerAttack) {
  return {
    type: 'playerAttack',
    playerAttack
  }
}

export function enemyAttack (enemyAttack) {
  return {
    type: 'enemyAttack',
    enemyAttack
  }
}

export function battleCompleted (battleCompleted) {
  return {
    type: 'battleCompleted',
    battleCompleted
  }
}

export function deleteAttack (index) {
  return {
    type: 'deleteAttack',
    index
  }
}
