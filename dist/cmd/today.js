const ora = require('ora')
const getWeather = require('../../utils/weather')
const getLocation = require('../../utils/location')
module.exports = async (args) => {
  const spinner = ora().start()
  try {
    const location = args.location || args.l || await getLocation()
    console.log('getLocation',location)
    const weather = await getWeather(location)

    spinner.stop()

    console.log(`Current conditions in ${location}:`)
    console.log(`\t${(weather.condition.temp-32)/1.8}° ${weather.condition.text}`)
  } catch (err) {
    spinner.stop()

    console.error(err)
  }

}