// MT: todo: Implement an attack grid (maybe)
// import React from 'react'
// import { connect } from 'react-redux'

const attackGrid = {
  columns: 0,
  rows: 0
}

determineColumns()
determineRows()

function determineColumns () {
  const max = 6
  const min = 3
  const columns = Math.floor(Math.random() * (max - min) + min)

  attackGrid.columns = columns
}

function determineRows () {
  const max = attackGrid.columns + 1
  const min = attackGrid.columns
  const rows = Math.floor(Math.random() * (max - min) + min)

  attackGrid.rows = rows
}

export default attackGrid
