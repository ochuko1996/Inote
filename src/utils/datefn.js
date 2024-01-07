function getCurrentDateTime() {
    const now = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      // timeZoneName: 'short',
    };
    
    return now.toLocaleString('en-US', options);
  }
  
export const currentDateTime = getCurrentDateTime;