// package change 封装变化

// function scope 函数作用域

const myObject = (function() {
  const _name = 'sven'  // private variable  私有变量
  return {
    getName() {
      return _name
    }
  }
})

console.log( myObject.getName() )
// seven

console.log( myObject._name )
// undifined

