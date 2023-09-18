function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0
        let attempts = 0
        while (headsCount<5 && attempts<=100) {
            attempts++
            let result = Math.random() > 0.5 ? "heads":"tails"
            console.log(`${ result } was flipped`)
            if(result==="heads"){ 
                headsCount++ 
            }
        }
    
        if(headsCount>=5) {
            resolve(`It took ${ attempts } tries to flip five "heads"`)
        } else {
            reject('The coin has been flipped more than 100 times without five "heads"')
        }    
    });
}

fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) )
console.log( "When does this run now?" )