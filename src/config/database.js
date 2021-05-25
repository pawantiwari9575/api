const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL,{
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( () =>console.log('DB connection established'))
.catch( (err) => console.log(`Eroor in DB ${err}`));