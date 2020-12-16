const co = require('./carswecareabout.json')

for (const make of Object.keys(co)) {
  for (const model of Object.keys(co[make])) {
    const yearl = Object.keys(co[make][model])
    const years =
      yearl.length > 1 ? yearl[0] + '-' + yearl[yearl.length - 1] : yearl[0]
    console.log(
      '"' + years,
      make.charAt(0).toUpperCase() + make.slice(1),
      model.charAt(0).toUpperCase() + model.slice(1) + '"'
    )
  }
}
