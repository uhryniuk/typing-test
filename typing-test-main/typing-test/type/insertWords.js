class insertWords{
    constructor(wordArray){
        let newDivElements = this.createDiv(wordArray);
        return this.createRow(newDivElements);
    }
    /**
     * Create array of div elements.
     * @param { Array } wordArray 
     */
    createDiv(wordArray){
        let wordDivs = [];
        for(let i=0; i <12; i++){
            let newDiv = document.createElement('div');
            newDiv.className = "word";
            newDiv.textContent = wordArray[i];
            // still need at add unqiue id
            wordDivs.push(newDiv);
        }
        return wordDivs;
    }

    /**
     * 
     * @param { Array } divList Array of the 12 Divs with values.
     */
    createRow(divList){
        let row = document.createElement('div');
        row.className = "row";
        for(let i=0; i < 12; i++){
            row.appendChild(divList[i]);
        }
        return row;
    }
}