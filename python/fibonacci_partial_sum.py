# Helper function to add up ranges and keep only one digit:
def sum_range(m, n, sum, arr):
  for i in range(m, n + 1):
    sum += arr[i]
    sum %= 10
  return sum


def fibonacci_partial_sum(m, n):
  results = []

  # The period of Fibonacci sums is 60:
  for i in range(61):
    if i <= 1:
      results.append(i)
    else:
      next_result = (results[i - 2] + results[i - 1]) % 10
      results.append(next_result)
      # If n is less than or equal to the period, return
      # the sum of the previous numbers
      # 
      if n == i:
        return sum_range(m, n, 0, results)

  # If n is higher than 60, return the sum of Fibonacci
  # numbers between m modulo 60 and 60, inclusive, plus the sum
  # of Fibonacci numbers between 0 and n modulo 60, inclusive
  n_mod = n % 60
  m_mod = m % 60
  first_half_sum = sum_range(m_mod, 59, 0, results)
  return sum_range(0, n_mod, first_half_sum, results) % 10
  