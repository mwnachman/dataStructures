# Find the greatest common denominator of two numbers

import random
import timeit

# Efficient

def gcd(higher, lower):
  if higher < lower:
    higher, lower = lower, higher
  remainder = higher % lower
  if remainder == 0:
    return lower
  return gcd(lower, remainder)


# Naive

def gcd_naive(a, b):
  current_gcd = 1
  for d in range(2, min(a, b) + 1):
    if a % d == 0 and b % d == 0:
      if d > current_gcd:
        current_gcd = d

  return current_gcd


# Compare the two for correct answers and execution time:

def wrapper(func, *args, **kwargs):
  def wrapped():
    return func(*args, **kwargs)
  return wrapped


def stress_test(max):
  while True:
    num1 = random.randint(1, max)
    num2 = random.randint(1, max)
    func1 = wrapper(gcd_naive, num1, num2)
    func2 = wrapper(gcd, num1, num2)
    answer1 = wrapper(gcd_naive, num1, num2)()
    answer2 = wrapper(gcd, num1, num2)()
    time1 = timeit.timeit(func1, number=1000)
    time2 = timeit.timeit(func2, number=1000)
    if answer1 == answer2:
      print('OK', time1, time2)
    else:
      print('Wrong answer: ', answer1, answer2)
      return

stress_test(20000)
