class GenerateWords{

    /**
     * Generates list of 12 random wors.
     * @param { Array } newList Variable that will contain the random words
     */
    constructor(){
        console.log("Generate Words Created!");
    }
    
}
/**
* Creates Array of 12 random numbers
* @return { Array } numberList 
*/
function getNumbers(){
   let numberList = [];
   for(let i=0; i < 20; i++){
       // Generetes a number between one and 199 for Array
       let randomNumber = Math.floor((Math.random() * 199));
       
       numberList.push(randomNumber);
   }
   
   return numberList;
}

    /**
     * Creates Array of 12 random words.
     * @param { Array } numbers Array of 12 numbers
     * @return { Array } newWordList - 12 Random words.
     */
    function makeList(numbers){
        let newWordList = [];
        let normalWordBank = ['the', 'be', 'of', 'and', 'a', 'to', 'in', 'he', 'have', 'it', 
        'that', 'for', 'they', 'I', 'with', 'as', 'not', 'on', 'she', 'at', 
        'by', 'this', 'we', 'you', 'do', 'but', 'from', 'or', 'which', 'one', 
        'would', 'all', 'will', 'there', 'say', 'who', 'make', 'when', 'can', 'more', 
        'if', 'no', 'man', 'out', 'other', 'so', 'what', 'time', 'up', 'go', 
        'about', 'than', 'into', 'could', 'state', 'only', 'new', 'year', 'some', 'take', 
        'come', 'these', 'know', 'see', 'use', 'get', 'like', 'then', 'first', 'any', 
        'work', 'now', 'may', 'such', 'give', 'over', 'think', 'most', 'even', 'find', 
        'day', 'also', 'after', 'way', 'many', 'must', 'look', 'before', 'great', 'back', 
        'through', 'long', 'where', 'much', 'should', 'well', 'people', 'down', 'own', 'just', 
        'because', 'good', 'each', 'those', 'feel', 'seem', 'how', 'high', 'too', 'place', 
        'little', 'world', 'very', 'still', 'nation', 'hand', 'old', 'life', 'tell', 'write', 
        'become', 'here', 'show', 'house', 'both', 'between', 'need', 'mean', 'call', 'develop', 
        'under', 'last', 'right', 'move', 'thing', 'general', 'school', 'never', 'same', 'another', 
        'begin', 'while', 'number', 'part', 'turn', 'real', 'leave', 'might', 'want', 'point', 
        'form', 'off', 'child', 'few', 'small', 'since', 'against', 'ask', 'late', 'home', 
        'interest', 'large', 'person', 'end', 'open', 'public', 'follow', 'during', 'present', 'without', 
        'again', 'hold', 'govern', 'around', 'possible', 'head', 'consider', 'word', 'program', 'problem', 
        'however', 'lead', 'system', 'set', 'order', 'eye', 'plan', 'run', 'keep', 'face', 
        'fact', 'group', 'play', 'stand', 'increase', 'early', 'course', 'change', 'help', 'line', 
        ];
        for(let i=0; i < 20; i++){
            newWordList.push(normalWordBank[numbers[i]]);
        }
        return newWordList;
    }