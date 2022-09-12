/**
 * changes the value of  kind key into different expected performances
 * @param {Number} value 
 * @returns the value of  kind key into different expected performances
 */

export function formatAngleAxis(value) {
    if (value === 1) return 'Cardio'
    if (value === 2) return 'Energie'
    if (value === 3) return 'Endurance'
    if (value === 4) return 'Force'
    if (value === 5) return 'Vitesse'
    if (value === 6) return 'Intensité'
    return value
}

/**
 * converts the value of the day key to a letter  
 * @param {Number} item 
 * @returns the value of the day key in letters 
 */

export const days = (item) => {
    const daysLetters = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return `${daysLetters[item - 1]}`;
}

/**
   * changes the date format to fr
   * @param {String} tickItem 
   * @returns the date format to fr
   */

export const dateFormat = (tickItem) => {
    const options = { day: 'numeric' };
    const formatedDate = new Date(tickItem)
    return formatedDate.toLocaleDateString('fr-FR', options)
}