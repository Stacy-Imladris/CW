const heggeleggleggo = word => [...word].map(m => /[^aeiou ]/.test(m.toLowerCase()) ? `${m}egg` : m).join('')