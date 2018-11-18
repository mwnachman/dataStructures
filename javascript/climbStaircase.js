/**
== Instructions ==

** There is a staircase with 'n' number of steps. A child
** walks by and wants to climb up the stairs, starting at
** the bottom step and ascending to the top.

** Of course, the child wants to have fun, too, so instead
** of taking 1 step at a time, it will vary between taking
** either 1, 2 or 3 steps at a time.

** Please complete the 'countSteps' method below so that
** given 'n' number of steps it will return the number of
** unique combinations the child could traverse.

** An example would be countSteps(3) == 4:

** 1 1 1
** 2 1
** 1 2
** 3
*/

/**
 * Given n steps, returns the number of possible permutations
 * to climb the staircase.
 *
 * Returns 0 when n is <= 0.
 */
function countSteps(n) {
  const stepOptions = [1, 2, 3]
  
  let permutations = 0
  
  function countStepsRecursion(stepsLeft, stepOptionsIndex) {
    // Base case:
    if (stepOptionsIndex === 0) {
      console.log('permutations', permutations)
      return permutations++
    } 
    while (stepsLeft >= 0) {
      countStepsRecursion(stepsLeft, stepOptionsIndex - 1)
      stepsLeft -= stepOptions[stepOptionsIndex]
    }
  
  }
  countStepsRecursion(n, stepOptions.length - 1)
  
  return permutations;
}
