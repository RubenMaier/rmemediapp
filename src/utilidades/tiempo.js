function formatearTiempo(tiempo) { // [tiempo] esta en segundos
    if(tiempo == null) return `00:00`
    const minutos = formatearDigitos(parseInt(tiempo / 60, 10)) // formato decimal (base 10)
    const segundos = formatearDigitos(parseInt(tiempo % 60, 10)) // % lo que sobra
    return `${minutos}:${segundos}`
}

function formatearDigitos(tiempo) {
    return tiempo < 10 ? `0${tiempo}` : tiempo
}

module.exports = {
    formatearDigitos,
    formatearTiempo
}