let checkCharacterStatus = function (character) {
  if (character.hitPoints <= 0) {
    document.getElementById('attackButton').setAttribute('disabled', 'disabled')

    character.dead = true
    let deadMessage = character.name + ' has been killed!'

    return deadMessage
  } else {
    return false
  }
}

export default checkCharacterStatus
