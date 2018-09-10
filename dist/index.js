const minimist = require('minimist')

module.exports = () => {
  let args = minimist(process.argv.slice(2))
  let cmd = args._[0] || 'help'
  if(args.version || args.v){
    cmd = 'version'
  }
  if(args.help || args.h){
    cmd = 'help'
  }
  switch (cmd){
    case 'today':
      require('./cmd/today')(args)
      break
    
    case 'version':
      require('./cmd/version')(args)
      break
    
    case 'help':
      require('./cmd/help')(args)
      break

    case 'forecast':
      require('./cmd/forecast')(args)
      break 
      
    default:
      console.error(`"${cmd}" is not a vailb command!`)
      break
  }
}