import creds from './timelines-37f65eca9874.json'
import GoogleSpreadsheet from 'google-sheets-node-api'

const sheetId = '1McniDRimAOf4fT40pbYgGMP_8pK8JSFL40EnA2Sj6G0'
const sheet = new GoogleSpreadsheet(sheetId)
const ssFields = ['year', 'name', 'desc', 'url']

function demo () {
  const worksheetName = 'physics'
  const newEvent = {
    year: 1872,
    name: 'year of the Frank',
    desc: 'much pain and suffering',
    url: 'http://www.yahoo.com'
  }

  // get spreadsheet with all worksheets
  getSpreadsheet()
    .then((data) => {
      header('getSpreadsheet()')
      // log(data)
    })
    // createRow
    .then(() => {
      return createRow(worksheetName, newEvent)
        .then(() => readRows(worksheetName))
        .then((data) => {
          header('createRow(worksheetName, rowObject)')
          log(data)
        })
    })
    // readRows
    .then(() => {
      return readRows(worksheetName)
        .then((data) => {
          header('readRows(worksheetName)')
          log(data)
        })
    })
    // updateRow
    .then(() => {
      newEvent.desc = 'much joy and jubilation'
      return updateRow(worksheetName, 2, newEvent)
        .then(() => readRows(worksheetName))
        .then((data) => {
          header('updateRow(worksheetName, 2, rowObject)')
          log(data)
        })
    })
    // deleteRow
    .then(() => {
      return deleteRow(worksheetName, 2)
        .then(() => readRows(worksheetName))
        .then((data) => {
          header('deleteRow(worksheetName, 2)')
          log(data)
        })
    })
    .then(() => log('finished'))
    .catch(log)
}

demo()
