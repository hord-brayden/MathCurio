// Choose Two large prime numbers: p, q; 
// N = p * q; and r = (p-1)*(q-1);
// Calculate numbers equivalent to 1 mod r. Or, (p-1)(q-1) + 1 ... 1+ r(inf).
// -- Basically rolling over the odometer by 1 figure.
// r will always end in 1, 3, 5, or 7 so != r % 2
// Using a result of 1 mod r; or K= 1 + mod(p-1)(q-1), Factor K: K!
