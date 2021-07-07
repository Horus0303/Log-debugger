module.exports = async (context, entity, color) => {
    let format = null

    if( context.includes('sucessfully') || context.includes('correctamente') || context.includes('success') ) {
        format = '\x1b[32m\x1b[1m\x1b[4m\x1b'
    } else if( context.includes('delete') || context.includes('warning') ) {
        format = '\x1b[24m\x1b[4m\x1b[38;5;214m'
        context += ' !'
    } else if( context.includes('error') || context.includes('kill') ) {
        format = '\x1b[41m\x1b[37m\x1b[1m'
        context += ' ..'
    } else {
        format = '\x1b[0m\x1b[24m\x1b[1m\x1b[38;5;' + `${color}m`
    }

    console.log(format + `|***| debugger:${entity} - ${context} |***|`)
}