/**
 * Progressively more efficient algorithms to find the max sum
 * of subvector of an array; For instance, if we have an array
 * [1, 5, -2, 3, 8, -9], the max sum would be 14 (5 + -2 + 3 + 8);
 * These examples do not return the starting and ending indices of
 * the subvector, but that could be easily added.
 * @author meredithnachman
 *
 */
public class MaxContiguousSubvector {
	
	/**
	 * A needlessly naive solution that takes O(n^3) time
	 * @param arr - the array
	 * @return Max sum of a subarray
	 */
	public static int bruteForce(int[] arr) {
		int maxSoFar = Integer.MIN_VALUE;
		
		for (int i = 0; i < arr.length; i++) {
			for (int j = 0; j < arr.length; j++) {
				int sum = 0;
				for (int k = i; k <= j; k++) {
					sum += arr[k];
				}
				maxSoFar = Math.max(maxSoFar, sum);
			}
		}
		
		return maxSoFar;
	}
	
	/**
	 * Quadratic algo that calculates every possible combination - O(n^2)
	 * @param arr - the array
	 * @return The max sum of a subarray
	 */
	public static int slightlyBetterAlgo(int[] arr) {
		int maxSoFar = Integer.MIN_VALUE;
		
		for (int i = 0; i < arr.length; i++) {
			int sum = 0;
			for (int j = i; j < arr.length; j++) {
				sum += arr[j];
				maxSoFar = Math.max(maxSoFar, sum);
			}
		}
		
		return maxSoFar;
	}

	/**
	 * This quadratic algo first calculates the difference between
	 * adjacent items in the array, then adds the differences to see
	 * whether the difference at the next index creates a higher max;
	 * This technique is not appreciably more efficient than the 
	 * other quadratic solution above, but the technique will be
	 * useful in the linear solution (scanningAlgo, or Kadane's
	 * algorithm) below
	 * @param arr - the array
	 * @return Max sum of a subarray
	 */
	public static int alternativeSlightlyBetterAlgo(int[] arr) {
		int maxSoFar = Integer.MIN_VALUE;
		int[] cumarr = new int[arr.length + 1];
		cumarr[0] = 0;
		
		// Create an array showing total contiguous sum
		// starting from beginning of array
		for (int i = 1; i < arr.length + 1; i++) {
			cumarr[i] = cumarr[i-1] + arr[i-1];
		}

		for (int i = 1; i < arr.length + 1; i++) {
			int sum = 0;
			for (int j = i; j < arr.length + 1; j++) {
				// Sum is the accumulation at index j, minus whatever accumulated
				// before whatever index i is at this point
				sum = cumarr[j] - cumarr[i-1];
				maxSoFar = Math.max(maxSoFar, sum);
			}
		}
		
		return maxSoFar;
	}
	
	/**
	 * Recursive divide and conquer - O(n log n), because for every
	 * element, we perform log n operations (because we divide the
	 * array - and then subarray - in half when we recurse), so that
	 * T(n) = 2T(n/2) + O(n) = O(n log n)
	 * @param arr - array or subarray
	 * @param l - low index (initially 0)
	 * @param h - high index (initially the highest index is array)
	 * @return Highest sum of a subarray
	 */
	public static int divideAndConquer(int[] arr, int l, int h) {

		// Base case for recursion
		// If l == h, there is just one number to sum
		if (l == h) {
			return arr[l];
		}
		
		// Find the midpoint's index (m) to recurse on left and
		// right halves:
		int m = (l + h)/2;
		
		// We need the max sum that includes indices from both
		// sides as well, so for each level of recursion we have
		// to calculate the largest sum that includes the index
		// adjacent to the division of left and right, including:
		// Elements on left of midpoint. 
        int sum = 0; 
        int leftSum = Integer.MIN_VALUE; 
        for (int i = m; i >= l; i--) { 
            sum = sum + arr[i]; 
            if (sum > leftSum) leftSum = sum; 
        } 
        // And...
        // Elements on right of midpoint.
        sum = 0; 
        int rightSum = Integer.MIN_VALUE; 
        for (int i = m + 1; i <= h; i++) { 
            sum = sum + arr[i]; 
            if (sum > rightSum) rightSum = sum; 
        }
		
		// Find the max of the left side, right side, and between sides
		return Math.max(Math.max(divideAndConquer(arr, l, m),
								 divideAndConquer(arr, m + 1, h)),
								 leftSum + rightSum);
	}
	
	/**
	 * Linear time algorithm for computing max sum of a subvector,
	 * also known as Kadane's algorithm;  Keep in mind that we
	 * assume that there will never be a negative maximum, because
	 * the sum of the empty vector is zero; so the maxEndingHere
	 * will be reset to zero if it ends up negative 
	 * @param arr - the array
	 * @return Max sum of subvector
	 */
	public static int scanningAlgo(int[] arr) {
		// Max so far in scanning entire array
		int maxSoFar = 0;
		int maxEndingHere = 0;
		
		for (int i = 0; i < arr.length; i++) {
			// Before the first assignment of maxEndingHere in each
			// loop, maxEndingHere contains the value of the max sum
			// of the subvector ending at the previous index
			maxEndingHere = Math.max(maxEndingHere + arr[i], 0);
			maxSoFar = Math.max(maxEndingHere, maxSoFar);
		}
		
		return maxSoFar;
	}
	
	
	public static void main(String[] args) {
		int[] sampleList = {31, -41, 59, 26, -53, 58, 97, -93, -23, 84, 31, -41, 59, 26, -53, 58, 97, -93, -23, 84, 31, -41, 59, 26, -53, 58, 97, -93, -23, 84, 31, -41, 59, 26, -53, 58, 97, -93, -23, 84, 31, -41, 59, 26, -53, 58, 97, -93, -23, 84, 31, -41, 59, 26, -53, 58, 97, -93, -23, 84, 31, -41, 59, 26, -53, 58, 97, -93, -23, 84, 31, -41, 59, 26, -53, 58, 97, -93, -23, 84};
		long start = System.nanoTime();
		long end = System.nanoTime();
		
		// Brute force method - O(n^3) time
		start = System.nanoTime();
		int bruteForceResult = bruteForce(sampleList);
		end = System.nanoTime();
		System.out.println("Brute force method returned: " + bruteForceResult + " and took: " + (end - start) + " ns.");
		
		// Slightly better algo - O(n^2)
		start = System.nanoTime();
		int slightlyBetterResult = slightlyBetterAlgo(sampleList);
		end = System.nanoTime();
		System.out.println("Slightly better method returned: " + slightlyBetterResult + " and took: " + (end - start) + " ns.");
	
		// Alternative slightly better algo - O(n^2)
		start = System.nanoTime();
		int alternativeSlightlyBetterResult = alternativeSlightlyBetterAlgo(sampleList);
		end = System.nanoTime();
		System.out.println("Alternative slightly better method returned: " + alternativeSlightlyBetterResult + " and took: " + (end - start) + " ns.");
			
		// Divide and conquer - O(n log n)
		start = System.nanoTime();
		int dAndCResult = divideAndConquer(sampleList, 0, sampleList.length - 1);
		end = System.nanoTime();
		System.out.println("Divide and conquer method returned: " + dAndCResult + " and took: " + (end - start) + " ns.");
		
		// Scanning Algo - O(n)
		start = System.nanoTime();
		int scanningResult = scanningAlgo(sampleList);
		end = System.nanoTime();
		System.out.println("Scanning method returned: " + scanningResult + " and took: " + (end - start) + " ns.");
		
	}

}
