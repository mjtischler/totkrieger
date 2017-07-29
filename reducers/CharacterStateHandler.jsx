const checkCharacterStatus = function (character) {
  if (character.hitPoints <= 0) {
    document.getElementById('attackButton').setAttribute('disabled', 'disabled')

    character.dead = true
    const deadMessage = character.name + ' has been killed!'

    return deadMessage
  } else {
    return false
  }
}

export default checkCharacterStatus
