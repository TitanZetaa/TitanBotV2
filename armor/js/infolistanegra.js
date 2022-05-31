const infolistanegra = (prefix, pushname) => {
return `
Olá ${pushname} deseja saber como funciona o comando listanegra?, vamos lá. 

existe esses 3 comandos 

${prefix}autoban 

${prefix}listanegra

${prefix}tirardalista


--------------------------------

Como isso funciona? 

esse comando, por exemplo, se alguém envia algo no seu grupo, vamos supor, um link, e sai rápido, você vai digitar o seguinte 

${prefix}listanegra numero-junto-da-pessoa

vai colocar o número junto da pessoa que saiu, sem o + lembrando, e sem o -. 

pra remover ele da lista é simples:

${prefix}tirardalista numero-junto-da-pessoa

mesmos detalhes de add.. 

--------------------------------

Depois de ter adicionado, você tem que ativar a função por grupo, que é o seguinte. 

${prefix}autoban 1  

e pra desligar a ação de banir quem está na listanegra é só por 0 de vez ser 1..

é isso aí, boa sorte amigo..
M.Scheyot domina🔥💎
`
}

exports.infolistanegra = infolistanegra