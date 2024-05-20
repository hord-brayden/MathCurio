# What this is
A fun experiment in making a functional w40k bolter, the weights, requirements, and feasibility of such a device.

## Theory
Using modern [EFP](https://en.wikipedia.org/wiki/Explosively_formed_penetrator) knowledge, we can imagine some kind of device that contains a series of prepackaged cylinders or boxes of explosive materials, which are covered by a copper or psuedo-malleable metal capable of hyperplasticity and can engage in the Misnay-Shardin effect.

This would require a superhuman user, or simply scale down the apparatus to a human-usable manner.
### Using extisting EFP Data, let's make a small calculator for bore-size and projectile data
#### Step-by-Step Solution:

1. **Determine the Force Exerted by the 8-inch Apparatus:**

   Given:
   - Mass $( m \)$ = 3 kg
   - Initial Velocity $( v_i \)$ = 0 m/s (assuming it starts from rest)
   - Final Velocity $( v_f \)$ = 2000 m/s
   - Diameter = 8 inches (which we need to convert to meters for consistency)

   The diameter in meters:
   $d = 8 \text{ inches} = 8 \times 0.0254 = 0.2032 \text{ meters}$

   The acceleration $( a \)$ can be determined using the kinematic equation:
   
   $v_f^2 = v_i^2 + 2a \cdot d$
   
   Solving for $( a \)$:

   $( a \) = \frac{v_f^2 - v_i^2}{2 \cdot d} = \frac{(2000)^2 - 0}{2 \cdot 0.2032} = \frac{4000000}{0.4064} \approx 9842519.7 \text{ m/s}^2$

   Now, the force $( F \)$ can be calculated using Newton's second law:
   
   $( F \) = m \cdot a = 3 \cdot 9842519.7 \approx 29527559.1 \text{ N}$

3. **Calculate Force for Smaller Diameters:**

   For a smaller diameter, the acceleration and force will change. Let's consider a 1-inch and a 0.5-inch diameter apparatus:

   - 1 inch = 0.0254 meters
   - 0.5 inches = 0.0127 meters

   The new acceleration $( a' \)$ for different diameters can be calculated as:

   $( a' \) = \frac{v_f^2 - v_i^2}{2 \cdot d'}$

   Then the force $( F' \)$ for each diameter can be calculated using:
   
   $( F' \) = m \cdot a'$

### Calculation Table:

To create a table, we'll need to calculate the force for different diameters and weights.

| Diameter (inches) | Diameter (meters) | Mass (kg) | Acceleration (m/s²) | Force (N)      |
|-------------------|-------------------|-----------|---------------------|----------------|
| 8                 | 0.2032            | 3         | 9842519.7           | 29527559.1     |
| 1                 | 0.0254            | 3         | 78814978.7          | 236444936.1    |
| 0.5               | 0.0127            | 3         | 157629957.5         | 472889872.7    |

### Python Script to Calculate Various Diameters and Weights:

Here's a Python script to generate a table for various diameters and weights:

```python
import pandas as pd

def calculate_force(diameter_inches, mass_kg, final_velocity_m_s=2000):
    diameter_meters = diameter_inches * 0.0254
    acceleration = final_velocity_m_s**2 / (2 * diameter_meters)
    force = mass_kg * acceleration
    return diameter_meters, acceleration, force

# Define diameters in inches and masses in kg
diameters_inches = [8, 1, 0.5, 2, 4, 6]
masses_kg = [3, 2, 1, 0.5]

# Prepare data for the table
data = []
for diameter in diameters_inches:
    for mass in masses_kg:
        diameter_meters, acceleration, force = calculate_force(diameter, mass)
        data.append([diameter, diameter_meters, mass, acceleration, force])

# Create DataFrame
df = pd.DataFrame(data, columns=['Diameter (inches)', 'Diameter (meters)', 'Mass (kg)', 'Acceleration (m/s²)', 'Force (N)'])

# Display DataFrame
import ace_tools as tools; tools.display_dataframe_to_user(name="Force Calculation Table", dataframe=df)
```

This script will produce a table that calculates the acceleration and force for various diameters and weights, allowing you to see how these values change with different parameters.
