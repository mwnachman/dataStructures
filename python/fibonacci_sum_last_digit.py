# Find the last digit of a sum of the first n Fibonacci numbers

def fibonacci_sum(n):
  if n <= 1:
    return n

  # Keep track of the last digit of Fibonacci results, the 
  # last digit of their sums, and the current sum
  results = []
  sums = []
  sum = 0

  # The period has a length of 60 (Fib 0 to Fib 59):
  for i in range(60):
    if i <= 1:
      results.append(i)
      sum += i
      sums.append(sum)
    else:
      next_result = (results[i - 2] + results[i - 1]) % 10
      sum += next_result
      sums.append(sum % 10)
      results.append(next_result)
      # If n is less than or equal to the period length,
      # return the sum at n
      if n == i:
        return sums[i]

  # If n is larger than the period length, divide it by
  # 60 and return the digit at the remainder's place in 
  # the sums array
  mod = n % 60
  return sums[mod]
