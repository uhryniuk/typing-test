class insertWords{
    constructor(wordArray, IdNumberCount){  
        let newDivElements = this.createDiv(wordArray, IdNumberCount);
        return this.createRow(newDivElements);
    }
    /**
     * Create array of div elements.
     * @param { Array } wordArray 
     */
    createDiv(wordArray, IdNumberCount){
        let wordDivs = [];
        for(let i=0; i < 20; i++){
            let newDiv = document.createElement('div');
            if(i % 2 == 0){
                newDiv.className = "space";
                newDiv.id = IdNumberCount;
                newDiv.innerHTML = "&nbsp;";
                wordDivs.push(newDiv);
            }else{
                newDiv.className = "word";
                newDiv.id = IdNumberCount;
                newDiv.textContent = wordArray[i];
                wordDivs.push(newDiv);
            }
            
        }
        console.log(wordDivs);
        return wordDivs;
    }

    /**
     * 
     * @param { Array } divList Array of the 12 Divs with values.
     */
    createRow(divList){
        let row = document.createElement('div');
        row.className = "row";
        for(let i=0; i < 20; i++){
            
            row.appendChild(divList[i]);
        }
        return row;
    }
}