// get moreStatic for use inherit
// 使用继承获得多态

// first create once abstract class in Animal
// 首先创建一个 Animal 抽象类

class Animal {
  makeSound() {
    /**
     * if not makeSound methods for child class but use it methods for throw error
     * 如果子类没有创建 makeSound 方法就使用，则报错，起约束作用
     */
    throw new Error(`don't create makeSound for ${this.name}`)
  }
}

class Duck extends Animal{
  constructor(name) {
    super(name)
    this.name = name
  }
}

class Tiger extends Animal{
  constructor(name) {
    super(name)
    this.name = name
  }
  makeSound() {
    console.log('hu hu hu')
  }
}

let duck = new Duck('duck')
let tiger = new Tiger('tiger')

tiger.makeSound()
// hu hu hu

duck.makeSound()
//  don't create makeSound for duck
