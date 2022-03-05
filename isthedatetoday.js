const isToday = (date) => date.getFullYear() === new Date().getFullYear() && 
    date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth()