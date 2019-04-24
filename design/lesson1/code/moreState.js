// moreState 多态

function Monkey() {
}

Monkey.prototype.sound = () => {
  console.log('xi xi xi');
}

function Tiger() {
}

Tiger.prototype.sound = () => {
  console.log('hu hu hu');
}

// only animal get sound methods so don't animal type
// 不关心对象的类型，只要传入的对象拥有 sound 方法就可以
const makeSound = animal => {
    animal && animal.sound()
}

makeSound( new Monkey() );
makeSound( new Tiger() );