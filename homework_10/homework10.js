function Animal(name){
	this._foodAmount = 50;
	this.name = name;

}

Animal.prototype._formatFoodAmount = function(){
    return this._foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this._formatFoodAmount();

		if (amount < 50 || amount > 500) {
			return 'Недопустимое количество корма.';
		}

        this._foodAmount = amount;
};
	
Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};	


function Cat(name) {
	this.name = name;
}
	Cat.prototype = Object.create(Animal.prototype);
	Cat.prototype.constructor = Cat; 

	Cat.prototype.stroke = function() {
		console.log('Гладим кота.');
		return this;
	};
	
	Cat.prototype.feed = function() { 
	  console.log('Кот доволен ^_^');
      return this;
    };	


var barsik = new Cat('Барсик');

console.log(barsik.name);

console.log(barsik.dailyNorm(300));
console.log(barsik.feed());

console.log(barsik.dailyNorm(600));
console.log(barsik.feed());

console.log(barsik.dailyNorm(250));
console.log(barsik.feed());

console.log(barsik.feed(400).stroke());
console.log(barsik.stroke().feed(300).feed().stroke());


barsik = null;