const xl = require('xlsx')
const book = xl.readFile('./sheet.xlsx')
const sheet = book.Sheets[book.SheetNames[0]]

console.log('vehicles = [')
for (var row = 4; row < 51; row++) {
  line = ''
  for (var coli = 0; coli < 4; coli++) {
    const col = ['B', 'C', 'D', 'E'][coli]
    const cell = sheet[`${col}${row}`]
    //console.log(cell)
    if (!cell) continue
    line =
      line +
      cell.v
        .toString()
        .replace('/ ', ',')
        .replace('/', ',')
        .replace(/[^\x20-\x7E]/g, '') +
      ' - '
  }

  console.log("  '" + line.slice(0, -3) + "',")
}
console.log(']')
