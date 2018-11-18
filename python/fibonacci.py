# Calculate the nth fibonacci number:

def calc_fib(n):
  results = []
  for i in range(n + 1):
    if (i <= 1):
      results.append(i)
    else:
      results.append(results[i - 2] + results[i - 1])
  return results[n]


# Calculate the last digit of a large fibonacci number:

def get_last_fibonacci_digit(n):
    if n <= 1:
        return n

    previous = 0
    current  = 1

    for _ in range(n - 1):
        previous, current = current, int(str(previous + current)[-1])

    return current % 10
