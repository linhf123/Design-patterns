// dog typing  鸭子类型
const duck = {
  duckSingin () {
    console.log('ga ga ga');
  }
}

const tiger = {
  duckSingin () {
    console.log('ga ga ga');
  }
}

const joinChoir = (function () {
  let choir = [];
  return animal => {
    if ( animal && typeof animal.duckSingin === 'function'){
      choir.push(animal)
      console.log('welcome join choir')
    }
  }
}())

// below twice log for welcome join choir 
// 下面打印两次 welcome join choir
joinChoir(duck)
joinChoir(tiger)