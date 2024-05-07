export const extractTimeWithIos = (isoTimeString) => {
    const date = new Date(isoTimeString);
    const hours = date.getHours();
    
    let ampm = hours >= 12 ? 'PM' : 'AM';
    let hour12 = hours % 12;
    hour12 = hour12 ? hour12 : 12; 
    return `${hour12}:00 ${ampm}`;
  };