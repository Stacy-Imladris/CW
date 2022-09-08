const getPercentage = (sent, limit = 1000) => !sent ? 'No e-mails sent' : sent >= limit 
  ? 'Daily limit is reached' : Math.floor(sent / limit * 100) + '%'