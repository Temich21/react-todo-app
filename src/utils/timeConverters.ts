export const unixTimeStampConverter = (time: string) => {
    const unixTimeStamp = new Date(time)
    return String(Math.floor(unixTimeStamp.getTime()) / 1000)
}

export const readableTimeConverter = (time: string) => {
    const redableTime = new Date(Number(time) * 1000)
    const day = redableTime.getDate()
    const month = redableTime.getMonth() + 1
    const year = redableTime.getFullYear()
    const hours = redableTime.getHours()
    const minutes = redableTime.getMinutes()
    return `${day}.${month}.${year} ${hours}:${minutes < 10 ? '0' + String(minutes) : minutes}`
}