const menuprem = (prefix) => { 

// NÃO APAGUE ESSE ${prefix}, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa. 

return `
========================================= 
                                 ${NomeDoBot} 
                                  MENU VIP
  =========================================
╎=> 💵 ${prefix}Delete "marcar"
╎=> 💵 ${prefix}Destrava
╎=> 💵 ${prefix}Destrava2
╎=> 💵 ${prefix}DDD "numero"
╎=> 💵 ${prefix}Cep "numero"
╎=> 💵 ${prefix}Gerarcpf
╎=> 💵 ${prefix}cnpj 
╎=> 💵 ${prefix}Premiumlist
╎=> 💵 ${prefix}Lerfoto "marca"   
╎=> 💵 ${prefix}Encurtalink "link" 
╎=> 💵 ${prefix}roubar "figurinha"     
╎=> 💵 ${prefix}gerargp 
╎=> 💵 ${prefix}ping 

╰╼━═━━≺🎠≻━━═━╾╯
`
}

exports.menuprem = menuprem