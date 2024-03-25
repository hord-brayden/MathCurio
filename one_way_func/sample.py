def simple_one_way_function(x, y):
    # This function takes two numbers, x and y, and returns their product.
    # Multiplication is easy, but finding the original x and y from the product (without knowing one of them)
    # is hard if the numbers are large primes.
    return x * y

#easy to run, hard to guess
product = simple_one_way_function(17, 23) 
print(product)

def find_factors(n):
    factors = []
    for i in range(1, int(n**0.5) + 1):
        if n % i == 0:
            factors.append((i, n // i))
    return factors

# Example usage:
number = 323
print(find_factors(number))
