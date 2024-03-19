function abreviation(nomComplet) {

    let nomPrenom = nomComplet.split(" ");
    

    let prenomAbrev = nomPrenom[0];
    

    let nomAbrev = nomPrenom[nomPrenom.length - 1].charAt(0);
    let abreviation = prenomAbrev + " " + nomAbrev + ".";
    
    return abreviation;
}


console.log(abreviation("John Doe"));           
console.log(abreviation("Romy adam"));     
console.log(abreviation("Alfred lea"));   
