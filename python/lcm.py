# Python2
import random 

# Helper function to find greatest common denominator:
def gcd(higher, lower):
  if higher < lower:
    higher, lower = lower, higher
  remainder = higher % lower
  if remainder == 0:
    return lower
  return gcd(lower, remainder)


# Efficient process that employs Euclidean helper function:
def lcm(a, b):
  if a < b:
    a, b = b, a
  if a % b == 0:
    return a
  prod = a * b
  ab_gcd = gcd(a, b)
  return prod / ab_gcd


# Inefficient process that returns correct answer:
def lcm_slow(a, b):
  if a < b:
    a, b = b, a
  if a % b == 0:
    return a
  for i in range(2, b + 1):
    prod = a * i
    if prod % b == 0:
      return prod


# Test
def stress_test(max):
  while True:
    num1 = random.randint(1, max)
    num2 = random.randint(1, max)
    result1 = lcm_slow(num1, num2)
    result2 = lcm(num1, num2)
    if result1 == result2:
      print('OK')
    else:
      print('Wrong answer: ', result1, result2, num1, num2)
      return
