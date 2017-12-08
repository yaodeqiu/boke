module.exports = {
    cookieSecret:'ydq',//cookie加密的时候用的字符串
    db:'blog',//数据库的名称
    host:'localhost',//数据库的地址
    port:27017//数据库的端口号
}
//我们把数据库的配置信息写在这里，为了链接数据库的时候，数据库的名称地址端口号发生变化时，我们只需要改这里