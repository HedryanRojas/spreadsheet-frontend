import { Parser as FormulaParser } from 'hot-formula-parser'
import columnTitles from '../static/ColumnTitles.json'

const ROWS = 1000
const COLUMNS = 1000

class FormulaUtility {
    ERROR_NOT_AVAILABLE = 'OUT OF INDEX'
    ERROR_REF = 'CIRCULAR REFERENCE'

    constructor() {
      if (!FormulaUtility.instance) {
        console.log('creando instancia')
        this.parser = new FormulaParser()
        FormulaUtility.instance = this

        this.parser.on('callCellValue', (cell, done) => {
          const row = cell.row.index + 1
          const column = cell.column.index + 1
          const label = cell.label
          console.log('store call', this.parser.storeData)

          if (row > ROWS || column > COLUMNS) throw this.parser.Error()
          if (this.parser.cell.row === row && this.parser.cell.column === column)
            throw this.parser.Error()

          try {
            if (this.parser.storeData[label]) {
              done(this.parser.storeData[label].display)
            }
          } catch (error) {
            done('')
          }
        })

        this.parser.on('callRangeValue', (startCell, endCell, done) => {
          const startColumn = startCell.column
          const startRow = startCell.row
          const endColumn = endCell.column
          const endRow = endCell.row
          const fragment = [] 
                 
          for(let iRow = startRow.index + 1; iRow <= endRow.index + 1; iRow++){
            const colFragment = []
            for(let iColumn= startColumn.index + 1; iColumn <= endColumn.index + 1; iColumn++){
              try {
                const label = columnTitles[iColumn] + iRow
                const value = this.parser.storeData[label].display
                colFragment.push(value)
                console.log('callRange :', colFragment)
              } catch (error) {
                colFragment.push('')
              }
            }
            fragment.push(colFragment)
          }
                
          if(fragment){
            done(fragment)
          }
        })

      }

      return FormulaUtility.instance
    }

    determinateDisplay(cell, storeData) {
      const { row, column, value } = cell

      if (value.slice(0, 1) === '=') {
        const formula = this._runFormula({ row, column }, value.slice(1), storeData)
        if (formula.error !== null) {
          return formula.error
        }
        return formula.result
      }

      return value
    }

    _runFormula(cell, value, storeData) {
      this.parser.cell = cell
      this.parser.storeData = storeData
      let res = this.parser.parse(value)
      if (res.error != null) return res
      if (res.result.toString() === '') return res
      if (this._isFormula(res.result.toString()) === '=') {
        res = this.runFormula(cell, res.result.slice(1))
      }

      return res
    }

    _isFormula(value) {
      return value.slice(0, 1) === '='
    }

}

const instance = new FormulaUtility()
Object.freeze(instance)
export default instance