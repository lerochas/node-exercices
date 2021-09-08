var obj = {
  name: 'Calvino',
  greet: function() {
    console.log(`Hello ${this.name}`);
  }
}

obj.greet();
obj.greet.call({ name: "Armínio" });
obj.greet.apply({ name: "Armínio" });