//Desafio da DIO para criar variárives com laços e operadores
let xp = 10001;
let name = "Big Miguel";
let nível;
// saída será O Herói de nome **{nome}** está no nível de **{nivel}**
if (xp <= 1000) {
    nível = "Ferro";
    console.log(`O Herói de nome: ${name} tem ${xp} de XP e está no nível de ${nível}`);
}
else if (xp >= 1001 && xp <= 2000) {
    nível = "Bronze";
    console.log(`O Herói de nome: ${name} tem ${xp} de XP e está no nível de ${nível}`);
}
else if (xp >= 2001 && xp <= 5000) {
    nível = "Prata";
    console.log(`O Herói de nome: ${name} tem ${xp} de XP e está no nível de ${nível}`);
}
else if (xp >= 5001 && xp <= 7000) {
    nível = "Ouro";
    console.log(`O Herói de nome: ${name} tem ${xp} de XP e está no nível de ${nível}`);
}
else if (xp >= 7001 && xp <= 8000) {
    nível = "Platina";
    console.log(`O Herói de nome: ${name} tem ${xp} de XP e está no nível de ${nível}`);
}
else if (xp >= 8001 && xp <= 9000) {
    nível = "Ascendente";
    console.log(`O Herói de nome: ${name} tem ${xp} de XP e está no nível de ${nível}`);
}
else if (xp >= 9001 && xp <= 10000) {
    nível = "Imortal";
    console.log(`O Herói de nome: ${name} tem ${xp} de XP e está no nível de ${nível}`);
}
else if (xp >=10001){
    nível = "Radiante";
    console.log(`O Herói de nome: ${name} tem ${xp} de XP e está no nível de ${nível}`);
}