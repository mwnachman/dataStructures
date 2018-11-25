# Find modulus of nth fibonacci number and m:

def get_fibonacci_huge(n, m):
	# if m is 0 or 1, n % m is 0 or 1, respectively
	if m <= 1:
		return m

	# Find the Pisano period - the repeating pattern 
	# starting with 0, 1 of the nth fibonacci % m,
	# by saving the results of the calculations:
	results = []
	modulo_arr = []

	while True:
		for i in range(n + 1):
			if (i <= 1):
				# save the results for 0 & 1
				results.append(i)
				modulo_arr.append(i)

			else:
				# save the nth fibonacci
				current_fib = results[i - 2] + results[i - 1]
				results.append(current_fib)
				# save the nth fibonacci % m
				modulo_arr.append(current_fib % m)

				# if the pattern has started over with 0, 1:
				if modulo_arr[i - 1] == 0 and modulo_arr[i] == 1:
					# The next three steps can be done as one, but
					# for the sake of clarity, let's write it out:

					# Now you know the period length is the
					# length of modulo_arr minus 2, or i minus 1
					period_length = i - 1

					# find what position n is in the period 
					period_index = n % period_length

					# return the modulus stored at that index
					return results[period_index] % m

		# if reach n and we don't have an repeating pattern
		# calculate the modulus of the actual nth fibonacci number:
		return results[n] % m
