const colors = require('./services/colors')
const redis = require('./services/redis')
const build = require('./services/build')

module.exports = async (context, entity, color) => {
    /***** Main objects *****/
    let randomColor = null
    entity = entity.toString().toLowerCase()
    color = color.toString().toUpperCase()

    /***** Check if entity exist in list of keys of redis ******/
    const entityExists = await redis.keys(entity);
    const colorsUsed = await redis.lrange('colors', 0, -1,); 
    
    
    if( entityExists.length < 1 ) {
        randomColor = await colors(color, colorsUsed)
        console.log('EL COLOR ES: ' + randomColor);
        redis.hset(entity.toString(), 'colors', randomColor)
        redis.hset(entity.toString(), 'type', color)
        redis.lpush('colors', randomColor);
    } else {
        const entities = await redis.hgetall(entity);
        if( entities.type !== color ) {
            randomColor = await colors(color, colorsUsed) 
            
            if( !colorsUsed.includes(randomColor) ) {
                redis.del(entity.toString());
                
                redis.hset(entity.toString(), 'colors', randomColor)
                redis.hset(entity.toString(), 'type', color)

            }
            
        } else {
            randomColor = entities.colors
        }
    }

    await build(context, entity, randomColor)

    // redis.del(entity.toString());

    // await redis.flushdb();
}