import Card from '../views/components/Card'
import React from 'react'
import { createSelector } from 'reselect'

export const spreadsheetsSelector = createSelector(
  state => state.spreadsheet.spreadsheets,
  _displayCards)


export const newSpreadsheetIdSelector = createSelector(
  state => state.spreadsheet.newId,
  _returnId
)

function _displayCards(spreadsheets) {
  const cards = spreadsheets.map(sheet =>(<Card  key={sheet._id} spreadsheet={sheet} />))
  return cards
}

function _returnId(id){ return id}