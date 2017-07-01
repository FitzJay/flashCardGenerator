'use strict'

function ClozeCard (text, cloze) {
	if (this instanceof CLozeCard) {
		this.fulltext = text;
		this.cloze = cloze;
		this.partialtext = function() {
			if (this.text.includes(this.cloze)) {
				return this.fulltext.replace(this.cloze, "...");
			} else {
				console.log("Error:")
			}
		};
	} else {
		return new ClozeCard (text, cloze);
	}
};

module.exports = ClozeCard;