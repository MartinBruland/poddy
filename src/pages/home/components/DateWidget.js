import React, {useState, useEffect} from 'react';



const DateWidget = (props) => {

    const [currentDate, updateDate] = useState('');
    const [weekday, updateWeekday] = useState('');
    const [currentTime, updateTime] = useState('');


    useEffect(() => {
        
        setInterval(
            () => handleDate(),
            1000
          );
    });

    const style = {
        'div': {
            'display': 'flex',
            'flexDirection': 'column',
            'justifyContent': 'center',
            'alignItems': 'flex-start',
            'color': 'white',
        },
        'p' : {
            'color': 'white'
        }
    }

    const handleDate = () => {

        const weekdayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturdat', 'Sunday'];
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const date = new Date();
        const day = date.getDay();
        let today = date.getDate();
        const month = date.getMonth();
        let hours = date.getHours()
        let minutes = date.getMinutes()

        if (today === 0) { today = '00'}
        else if (today < 10) { today = '0' + today}

        if (hours === 0) { hours = '00'}
        else if (hours < 10) { hours = '0' + hours}

        if (minutes === 0) { minutes = '00'}
        else if (minutes < 10) { minutes = '0' + minutes}

        const dayOfWeek = weekdayNames[day - 1];
        const nameOfMonth = monthNames[month];

    
        updateDate(nameOfMonth + ' ' + today);
        updateWeekday(dayOfWeek);
        updateTime(hours + ':' + minutes)
    }


    return (

        <div style={style.div}>
            <p style={style.p}>{weekday}, {currentDate}</p>
            <p style={style.p}>{currentTime}</p>
        </div>

    )
}
export default DateWidget