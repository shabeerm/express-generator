require('./config-prod.js');

const dbname = 'conFusion';

module.exports = {
    'secretKey': '12345-67890-09876-54321',
    'mongoUrl': `mongodb+srv://conFusion:${DB_PASS}@confusion.lnvgz.mongodb.net/${dbname}?retryWrites=true&w=majority`,
    'facebook': {
        clientId: FB_clientId,
        clientSecret: FB_clientSecret
    }
}