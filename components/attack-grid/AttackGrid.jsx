// MT: todo: Implement an attack grid (maybe)
import React from 'react'
import { connect } from 'react-redux'

var attackGrid = {
  columns: 0,
  rows: 0
}

determineColumns()
determineRows(attackGrid)

function determineColumns () {
  var max = 6
  var min = 3
  var columns = Math.floor(Math.random() * (max - min) + min)

  attackGrid.columns = columns
}

function determineRows (attackGrid) {
  var max = attackGrid.columns + 1
  var min = attackGrid.columns
  var rows = Math.floor(Math.random() * (max - min) + min)

  attackGrid.rows = rows
}

export default attackGrid
