const { FileLogger } = require('../logger')

const log = new FileLogger('server', 'server.log')

log.debug('this is a debug')
log.info('this is a info')
log.warn('this is a warn')
log.error('this is a error')
log.fatal('this is a fatal')