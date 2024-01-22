let nome = ["Goku", "Super-man", "He-man"]
let xp = ["10000","500","1000"]
let i = 0;

for (i=0;i<=2;i++){ 


if (xp[i] <= 1000) {
   nivel = "Ferro"
}
else if (xp[i]>=1001 && xp[i]<=2000) {
    
   nivel = "Bronze"
}
else if (xp[i]>=2001 && xp[i]<=5000) {
    
    nivel = "Prata Ouro"
}
else if (xp[i]>=5001 && xp[i]<=8000) {
    
    nivel = "Platina Diamante"
}
else if (xp[i]>=8001 && xp[i]<=9000) {
    
    nivel = "Acendente"
}
else if (xp[i]>=9001 && xp[i]<=10000){
    
     nivel = "Imortal"
}
else if (xp[i]>=10001){
    
    nivel = "Radiante"
}

console.log ("O Herói de nome "+nome[i]+ "está no nível de "+nivel)

}
