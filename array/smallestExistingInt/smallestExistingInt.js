export default function solve(A) {
  // var ans = 0; // this is the bug because 0 might not exist in the array
  var ans = A[0]; // the 1st element in the array should be used instead
  for (var i = 0; i < A.length; i++) {
    if (ans > A[i]) {
      ans = A[i];
    }
  }
  return ans;
}
