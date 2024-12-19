export function formatDate(time: number | Date, type?: number) {
    if(!time) {
        return '--'
    }
    
    const myDate = typeof time === 'number' ? new Date(time * 1000) : time
    const y = myDate.getFullYear()
    const m = (myDate.getMonth() + 1).toString().padStart(2, '0')
    const d = myDate.getDate().toString().padStart(2, '0')//日
    const hh = myDate.getHours().toString().padStart(2, '0')
    const mm = myDate.getMinutes().toString().padStart(2, '0')
    const ss = myDate.getSeconds().toString().padStart(2, '0')

    if(type == 1) {//yyyy-mm
        return [y, m].join('-')
    } else if(type == 2) {//yyyy-mm-dd
        return [y, m, d].join('-')
    } else if(type == 3) {//2020年02月
        return y + '年' + m + '月'
    } else if(type == 4) {//2020.02.02 00:00:00
        return [y, m, d].join('.') + ' ' + [hh, mm, ss].join(':')
    } else if(type == 5) {//2020.02.02
        return [y, m, d].join('.')
    }
    
    //2020-02-02 00:00:00
    return [y, m, d].join('-') + ' ' + [hh, mm, ss].join(':')
}