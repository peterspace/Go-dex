export function ZDateTimeFormatter(zDate) {
    const date = new Date(zDate);
    const formattedDate = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + '\t' +
        date.getHours() + ':' + date.getMinutes()
    
    return formattedDate;
}

export function FullDateTime(zDate) {
    const date = new Date(zDate);
    const formattedDate = date.toDateString() + ' ' + date.toTimeString();
    return formattedDate;
}
