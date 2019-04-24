// Js get new object for use prototype clone ohter object
// Js 通过克隆其他对象 得到一个新的对象

Object.create = Object.create || function (obj) {
  // create constructor 创建构造函数
  let F = function(){}
  // fix prototype 修改原型链指向
  F.prototype = obj

  // instance object  实例化对象
  return new F()
}