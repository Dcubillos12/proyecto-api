const infoClean = (array) => {
    return array.map(user => { // funciones generu¿icas se generan en utils
        return {
            name: user.name,
            email: user.email,
            phone: user.phone,
            created: false
        }
    })
}

module.exports = { infoClean }