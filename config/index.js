var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + 
        ':' + configValues.pwd + 
        '@ds011755.mlab.com:11755/myapp-to-do';
    }
    
}