# This function returns the last digit of a number a to the power b.
# For instance, last_digit(3621234, 81352) returns the last digit of 3621234^81352.

import math
 
def last_digit(a, b) :

	a = str(a)
	b = str(b)
 
	if (b == '0') :
		return 1
 
	if (a == '0') :
		return 0
 
	if((int(b)%4 == 0)) :
		exp = 4
	else : 
		exp = int(b)%4
 
	res = math.pow((int)(a[len(a) - 1]), exp)
 
	return res % 10

