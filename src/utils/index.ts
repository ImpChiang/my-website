
const formatTime = (time: any, option?: string) => {
    if (('' + time).length === 10) {
        time = parseInt(time) * 1000
    } else {
        time = +time
    }
    // const cur = new Date()
    const d: any = new Date(time)
    if (option && option == 'format') {
        // return parseTime(time, option)
        const now = Date.now()

        const diff = (now - d) / 1000

        if (diff < 30) {
            return '刚刚'
        } else if (diff < 3600) {
            // less 1 hour
            return Math.ceil(diff / 60) + '分钟前'
        } else if (diff < 3600 * 24) {
            return Math.ceil(diff / 3600) + '小时前'
        } else if (diff < 3600 * 24 * 2) {
            return '1天前'
        }
    } else if (option && option == 'detail'){
        let month = d.getMonth() + 1
        month = month < 10 ? month : month
        let day = d.getDate() < 10 ? '0'+d.getDate() : d.getDate()
        let hour = d.getHours() < 10 ? '0'+d.getHours() : d.getHours()
        let min = d.getMinutes() < 10 ? '0'+d.getMinutes() : d.getMinutes()
        return (
            month+'月'+day+'日'+hour+'时'+min+'分'
        )
    } else {
        let month = d.getMonth() + 1
        month = month < 10 ? '0'+month : month
        let day = d.getDate() < 10 ? '0'+d.getDate() : d.getDate()
        // let hour = d.getHours() < 10 ? '0'+d.getHours() : d.getHours()
        // let min = d.getMinutes() < 10 ? '0'+d.getMinutes() : d.getMinutes()
        // let year = d.getFullYear() == cur.getFullYear() ? '' : d.getFullYear() + '-'
        return (
            month+
            '.' +
            day
        )
    }
}

export {
    formatTime
}
