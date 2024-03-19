The following expression is recorded in the file [simpleRSAkeygen.js](https://github.com/hord-brayden/MathCurio/main/RadixCheck/RSE-construct/simpleRSAkeygen.js). It represents the numerical evaluation of the expression:

$$
\log_2\left(e^{\left(\frac{64}{9} \log(2^{2048})\right)^{\frac{1}{3}} \left(\log(\log(2^{2048}))\right)^{\frac{2}{3}}}\right)
$$

*Note: The expression above should be evaluated to a numeric result.*
This represents a 2048 digit key, pertaining to the [NIST 800-57 standard](http://csrc.nist.gov/publications/nistpubs/800-57/sp800-57_part1_rev3_general.pdf). Specifically, §5.6.1 p.62–64 records and signifies a correspondence between RSA modulus size $\mathit{n}$ and expected security strength $\mathit{s}$ in bits: 

| Strength | RSA modulus size |
| ------------- | ------------- |
|80 | 1024 |
|112 | 2048 |
|128 | 3072 |
|192 | 7680 |
|256 |15360 |

The following can be surmised: 
