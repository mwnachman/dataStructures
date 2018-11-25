# Find the last digit of the sum of squares of n Fibonacci numbers:

def fibonacci_sum_squares(n):
  if n <= 1:
    return n

  results = []
  squared_sums = []

  for i in range(60):
    if i <= 1:
      results.append(i)
      squared_sums.append(i)
    else:
      next_result = (results[i - 2] + results[i - 1]) % 10
      squared_sums.append((next_result * next_result) % 10)
      results.append(next_result)
      if n == i:
        return sum(squared_sums[i] for i in range(i + 1)) % 10

  mod = n % 60
  return sum(squared_sums[i] for i in range(mod + 1)) % 10
