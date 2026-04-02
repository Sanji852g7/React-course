import { useState, useEffect } from 'react';
import dayjs from 'dayjs';


export function Clock() {
  const [time, setTime] = useState(dayjs().format('HH:mm:ss'));

  useEffect(() => {
    setInterval(() => {
      // console.log('run code');
      setTime(dayjs().format('HH:mm:ss'));
    }, 1000);
  }, []);

  return (
    <p>Current time: {time}</p>
  );
}