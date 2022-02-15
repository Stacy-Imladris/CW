const DNAStrand = (dna) => dna.split('').map(m => m === 'A' ? 'T' : m === 'T' ? 'A' 
                           : m === 'C' ? 'G' : 'C').join('')