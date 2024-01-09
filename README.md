Built upon the formula:

Math.sqrt(1/Math.PI) which equates out to a circle with radius of ~ 0.5641895835477563
Which will be referred to as R(α) = 0.5641895835477563

Upon further examination, one can continually extend the original radius of R(α) * n to find the nth perfect square's radius. Which can then be unfolded using the standard formula to find the area of a circle, A = πr^2
E.G:

Where n = 2; R(α) * 2 = 1.1283791670955126 therefore Math.PI * Math.pow(1.1283791670955126,2) = 4
Where n = 6712; R(α) * 6712 = 3786.84048477254 therefore Math.PI * Math.pow(3786.84048477254,2) = 45050944

We can conclude that every n * R(α) is increasing the circle by the next possible perfect square from n. 
Curiously, this can be used in a compound scenario:

(R(α) * 17) + (R(α) * 220) = R(α) + 237
