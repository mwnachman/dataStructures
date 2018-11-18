import random

# Compares two algorithms, one slow and one fast, 
# for determining the highest product of any two
# numbers in an array.  The stress test creates
# test data to compare the solutions to ensure
# the faster solution is correct.


# Slow solution
def max_pairwise_product_slow(numbers):
    n = len(numbers)
    max_product = 0
    for first in range(n):
        for second in range(first + 1, n):
            max_product = max(max_product,
                              numbers[first] * numbers[second])
    return max_product


# Fast solution
def max_pairwise_product(numbers):
  n = len(numbers)
  max_product = 0
  highest = 0
  second_highest = 0
  for i in range(n):
    number = numbers[i]
    if number > highest:
      second_highest = highest
      highest = number
    elif number > second_highest:
      second_highest = number
  return highest * second_highest


# Generate test data and compare two algorithms for accuracy
# Inputs are the length of the input arrays and the the range
# of numbers of the array's items.
def stress_test(n, m):
  while True:
    n = random.randint(2, n)
    arr = []
    for i in range(n+1):
      arr.append(random.randint(0, m))
    result1 = max_pairwise_product_slow(arr)
    result2 = max_pairwise_product(arr)
    if result1 == result2:
      print("OK")
    else:
      print("Wrong answer: ", result1, result2)
      return

stress_test(5, 9)