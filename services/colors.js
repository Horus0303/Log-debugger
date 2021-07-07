module.exports = async (color, colorsUsed) => {
    /*************
        AVAILABLE COLORS
    *************/
    const mainColors = {
        ['BLUE']: ['21', '26', '27', '32', '33', '38', '39', '69', '75','81'],
        ['CYAN']: ['43', '44', '45', '50', '51', '87', '122', '123', '159', '195'],
        ['GRAY']: ['240', '241', '242', '243', '242', '244', '245', '247', '248', '249', '250'],
        ['GREEN']: ['28', '29', '34', '35', '36', '40', '41', '42', '46', '47', '76', '77', '82', '112', '118'],
        ['MAGENTA']: ['89', '90', '126', '127', '163', '164', '165', '200', '201'],
        ['ORANGE']: ['130', '166', '172', '173', '202', '208', '209', '214', '215'],
        ['PINK']: [
            '132', '133', '161', '162', '168', '169', '170', '171', '176', '177', '197', '198', '199',
            '205', '206', '207', '210', '211', '212', '213', '218', '219'
        ],
        ['PURPLE']: ['56', '57','91', '92', '93', '99', '105', '128', '129', '133', '134', '135', '141', '177'],
        ['YELLOW']: ['11', '184', '190', '220', '221', '222', '226', '227']
    }
    
    /***** Clone main colors *****/
    const cloneMainColors = JSON.parse(JSON.stringify(mainColors))

    let colorSelected = false
    let randomColor = null

    /*************
        Random color algorythm
    *************/
    do {
        randomColor = mainColors[color][Math.floor(Math.random() * mainColors[color].length)];
        
        /***** When all colors are used, re-asing clone to main colors  *****/
        if( randomColor === undefined ) {
            randomColor = cloneMainColors[color][Math.floor(Math.random() * cloneMainColors[color].length)];
            colorSelected = true
            break;
        }

        if( colorsUsed.includes(randomColor) ) {
            const colorUserIndex = mainColors[color].findIndex(r => colorsUsed.indexOf(r) >= 0)
    
            delete mainColors[color][colorUserIndex]
        } else {
            colorSelected = true
        }
    } while (!colorSelected);
    
    return randomColor
}
