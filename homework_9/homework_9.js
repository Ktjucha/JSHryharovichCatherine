function Animal(name){
 var foodAmount = 50, self = this;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    self.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    self.name = name;

    self.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };	
}

function Cat(name) {
	Animal.apply(this, arguments);
	
	this.stroke = function() {
		console.log('Гладим кота.');
		return this;
	}
	
	var parentFeed = this.feed; 
	
	this.feed = function() { 
      parentFeed(); 
	  console.log('Кот доволен ^_^');
      return this;
    }
	

   
}

var barsik = new Cat('Барсик');


console.log(barsik.feed(400).stroke());
console.log(barsik.stroke().feed(300).feed(250).stroke());


barsik = null;























