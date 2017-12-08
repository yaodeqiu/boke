//链接数据库
var setting = require('../setting');
//引入mongodb下的Db对象
var Db = require('mongodb').Db;

var Server = require('mongodb').Server;

//数据库实例对象
module.exports = new Db(setting.db,new Server(setting.host,setting.port),{safe:true})