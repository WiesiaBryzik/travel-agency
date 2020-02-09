export const formatTime = (seconds) => {
  if (typeof seconds == 'undefined') {
    return null;
  } else if (typeof seconds === 'string') {
    return null;
  } else if (typeof seconds === 'function') {
    return null;
  } else if (seconds < 0) {
    return null;
  } else if (typeof seconds === 'number') {
    const ss = Math.floor(seconds % 60).toString().padStart(2, '0');
    const mm = Math.floor((seconds/60) % 60).toString().padStart(2, '0');
    const hh = Math.floor(seconds/3600).toString().padStart(2, '0');

    return `${hh}:${mm}:${ss}`;
  }
};
