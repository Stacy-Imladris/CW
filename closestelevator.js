const elevator = (left, right, call) => call === left && call !== right || 
      call === 2 && right < left ||
      call === 0 && right > left ? 'left' : 'right'