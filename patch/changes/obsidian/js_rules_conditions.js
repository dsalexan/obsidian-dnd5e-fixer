// js/rules/conditions.js

// LINHA 12
Token.prototype.toggleEffect = function () {
  const cached = Token.prototype.toggleEffect
  return function (texture) {
    const condition = /\/([^./]+)\./.exec(texture)[1] // ADD

    // MODIFY
    if (!this.actor || CONDITION_ICONS.includes(condition) === false) {
      return cached.apply(this, arguments)
    }

    // const condition = /\/([^./]+)\./.exec(texture)[1] // REMOVE
    if (condition === 'exhaustion') {
      //...
    }
    //...
  }
  //...
}

// LINHA 35
if (this.actor && this.actor.data.obsidian) {
  this.data.effects = Object.entries(this.actor.data.obsidian.conditions)
    // ...
    .concat(this.data.effects.filter((effect) => CONDITION_ICONS.includes(/\/([^./]+)\./.exec(effect)[1]) === false)) // ADD
}

cached.apply(this, arguments)
//...
