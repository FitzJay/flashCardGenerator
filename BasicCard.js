var BasicCard =  function(front, back){
	this.front = front;
	this.back = back
}

BasicCard.prototype.Card =  function(){
	console.log("Question: " + this.front + "\nAnswer: " + this.back);
}

BasicCard.prototype.Front = function(){
	console.log(this.front);
}
BasicCard.prototype.Back = function(){
	if (guess === this.back) {
		console.log("WOW! You are so much Taco: " + "this.back" + " Correctly!")
	} else {
		console.log("Nope, the answer is: " + this.back)
	}
}

module.exports = BasicCard;