# Small project of mine using **whole numbered radix modulo operators** to determine which base has the most prime isolation per residue class. 

## Notes ##
- Any prime numbered residue class will contain only * *1 vein* * that is not prime, due to self-rendered primality
- A **vein** is described as containing primes when those primes are > 5.
- Non-Prime Odd numbers typically underperform quite extensively, if the goal is to isolate primes into the minimal amount of veins possible. I've listed a few here in the table to illustrate their underperforming characteristics.

Will Update the following with a list of the bases in question, in addition to their 'veins' of primes to determine a convergence at which a specific integer returns the most useful residue class configuration for a prime-counting/guessing function.

| Radix (Expressed in Modulo Base) | Prime Veins | % of residue classes contain primes | 
| :--- | :---: | ---: |
| base<sub>**78**</sub> | *24 veins* | 30.76% of all residue classes will be contain primes. Inversely, 69.24% of all residue classes will never contain a prime.|
| base<sub>**52**</sub> | *24 veins* | 46.15% of all residue classes will be contain primes. Inversely, 53.85% of all residue classes will never contain a prime.|
| base<sub>**50**</sub> | *22 veins* | 44% of all residue classes will be contain primes. Inversely, 56% of all residue classes will never contain a prime.|
| base<sub>**48**</sub> | *16 veins* | 33.33% of all residue classes will be contain primes. Inversely, 67% of all residue classes will never contain a prime.|
| base<sub>**46**</sub> | *22 veins* | 47% of all residue classes will contain primes.  Inversely, 53% of all residue classes will never contain a prime.|
| base<sub>**44**</sub> | *20 veins* | 45.45% of all residue classes will contain primes.  Inversely, 55% of all residue classes will never contain a prime.|
| base<sub>**42**</sub> | *12 veins* | 28.57% of all residue classes will contain primes.  Inversely, 71.43% of all residue classes will never contain a prime.|
| base<sub>**40**</sub> | *16 veins* | 40% of all residue classes will contain primes.  Inversely, 60% of all residue classes will never contain a prime.|
| base<sub>**38**</sub> | *18 veins* | 47% of all residue classes will contain primes.  Inversely, 53% of all residue classes will never contain a prime.|
| base<sub>**36**</sub> | *12 veins* | 33.33% of all residue classes will be contain primes. Inversely, 67% of all residue classes will never contain a prime.|
| base<sub>**34**</sub> | *16 veins* | 47% of all residue classes will contain primes.  Inversely, 53% of all residue classes will never contain a prime.|
| base<sub>**32**</sub> | *16 veins* | 50% of all residue classes will contain primes.  Inversely, 50% of all residue classes will never contain a prime.|
| base<sub>**30**</sub> | *8 veins* | 26.66% of all residue classes will contain primes.  Inversely, 74% of all residue classes will never contain a prime.|
| base<sub>**28**</sub> | *12 veins* | 42% of all residue classes will contain primes.  Inversely, 58% of all residue classes will never contain a prime.|
| base<sub>**26**</sub> | *12 veins* | 46% of all residue classes will contain primes.  Inversely, 54% of all residue classes will never contain a prime.|
| base<sub>**25**</sub> | *20 veins* | 80% of all residue classes will contain primes.  Inversely, 20% of all residue classes will never contain a prime.|
| base<sub>**24**</sub> | *8 veins* | 33.33% of all residue classes will contain primes.  Inversely, 67% of all residue classes will never contain a prime.|
| base<sub>**22**</sub> | *10 veins* | 45.45% of all residue classes will contain primes.  Inversely, 55% of all residue classes will never contain a prime.|
| base<sub>**20**</sub> | *8 veins* | 40% of all residue classes will contain primes.  Inversely, 60% of all residue classes will never contain a prime.|
| base<sub>**18**</sub> | *6 veins* | 33.33% of all residue classes will contain primes.  Inversely, 67% of all residue classes will never contain a prime.|
| base<sub>**16**</sub> | *8 veins* | 50% of all residue classes will contain primes.  Inversely, 50% of all residue classes will never contain a prime.|
| base<sub>**14**</sub> | *6 veins* | 42% of all residue classes will contain primes.  Inversely, 58% of all residue classes will never contain a prime.|
| base<sub>**12**</sub> | *4 veins* | 33.33% of all residue classes will contain primes.  Inversely, 67% of all residue classes will never contain a prime.|
| base<sub>**10**</sub> | *4 veins* | 40% of all residue classes will contain primes.  Inversely, 60% of all residue classes will never contain a prime.|
| base<sub>**8**</sub> | *4 veins* | 50% of all residue classes will contain primes.  Inversely, 50% of all residue classes will never contain a prime.|
| base<sub>**6**</sub> | *2 veins* | 33.33% of all residue classes will contain primes.  Inversely, 67% of all residue classes will never contain a prime.|
| base<sub>**4**</sub> | *2 veins* | 50% of all residue classes will contain primes.  Inversely, 50% of all residue classes will never contain a prime.|