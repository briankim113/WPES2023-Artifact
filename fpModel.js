const mongoose = require('mongoose');

const Fp = mongoose.Schema({
    date : {type : Date, default : Date.now},
    info : Object // fingerprint JSON
})

const FpModel = mongoose.model('fps', Fp);
module.exports = FpModel;


// const CssMod = mongoose.Schema({
//     property: String, //key for modification
//     baselineValue: String,
//     triggerValue: String
// })

// const CssTrig = mongoose.Schema({
//     tid : String, //key for trigger
//     modifications: [CssMod]
// })

// const CssExt = mongoose.Schema({
//     eid : String, //key for extension
//     triggers : [CssTrig]
// });

// const CssFp = mongoose.Schema({
//     extensions : [CssExt]
// })

// const DomExt = mongoose.Schema({
//     eid : String, //key for extension
//     properties : Object
// });

// const DomFp = mongoose.Schema({
//     extensions : [DomExt]
// })

// const Ext = mongoose.Schema({
//     eid : String,
//     triggers : [Object],
//     properties : Object
// })