// Helper function to format seconds into HH:mm:ss
export const formatTime = (seconds) => {
   // Ensure that seconds are between 0 and 59
   seconds = Math.max(0, Math.min(seconds, 59));

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
  
    // const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(remainingSeconds)}`;
    const formatNumber = (num) => `0${num}`.slice(-2)
    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(remainingSeconds)}`;
    // return formattedTime
  };
  
  // Helper function to pad zero for single-digit numbers
  // const padZero = (num) => (num < 10 ? `0${num}` : num);