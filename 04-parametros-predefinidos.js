function calcular_area(base, altura, forma = 'R'){
    switch(forma){
        case 'R':
            return base*altura
        case 'T':
            return  base*altura / 2
        case 'E':
            return  (base/2) * (altura/2) * Math.PI
        default:
            return undefined
    }
}

console.log(`Area retangulo 20x15 ${calcular_area(20, 25,'E')}`)
