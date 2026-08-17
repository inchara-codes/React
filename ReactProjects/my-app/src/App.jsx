// function App() {
//   const name = 'second'
//   return (
//     <div>
//       <h1>Hello </h1>
//       <p>My {name} React application</p>
//     </div>
//   );
// }
// export default App;
// import { useState } from "react";

// function App() {
//   // Student Grade
//   const [marks, setMarks] = useState("");
//   const [grade, setGrade] = useState("");

//   const calculateGrade = () => {
//     const m = Number(marks);

//     if (m > 100) {
//       setGrade("Marks cannot be more than 100");
//     } else if (m >= 80) {
//       setGrade("A");
//     } else if (m >= 70) {
//       setGrade("B");
//     } else if (m >= 60) {
//       setGrade("C");
//     } else if (m >= 50) {
//       setGrade("D");
//     } else {
//       setGrade("F");
//     }
//   };

//   // Discount Calculator
//   const [amount, setAmount] = useState("");
//   const [finalAmount, setFinalAmount] = useState("");

//   const calculateDiscount = () => {
//     const cartAmount = Number(amount);

//     if (cartAmount <= 0) {
//       setFinalAmount("Cart Amount cannot be 0 or less");
//     } else if (cartAmount >= 5000) {
//       setFinalAmount(cartAmount - cartAmount * 0.2);
//     } else if (cartAmount >= 2000) {
//       setFinalAmount(cartAmount - cartAmount * 0.1);
//     } else {
//       setFinalAmount(cartAmount);
//     }
//   };

//   // Login System
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginMessage, setLoginMessage] = useState("");

//   const login = () => {
//     const validUsername = "admin";
//     const validPassword = "1234";

//     if (username !== validUsername) {
//       setLoginMessage("Invalid Username");
//     } else if (password !== validPassword) {
//       setLoginMessage("Invalid Password");
//     } else {
//       setLoginMessage("Login Successful");
//     }
//   };

//   // Payment Status
//   const [status, setStatus] = useState("");
//   const [statusMessage, setStatusMessage] = useState("");

//   const checkStatus = () => {
//     if (status === "Success") {
//       setStatusMessage("Order Confirmed");
//     } else if (status === "Failed") {
//       setStatusMessage("Transaction Failed");
//     } else if (status === "Pending") {
//       setStatusMessage("Awaiting Payment Confirmation");
//     } else {
//       setStatusMessage("Invalid Status");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>React Practice Programs</h1>

//       {/* Student Grade */}
//       <h2>Student Grade Calculator</h2>
//       <input
//         type="number"
//         placeholder="Enter Marks"
//         value={marks}
//         onChange={(e) => setMarks(e.target.value)}
//       />
//       <button onClick={calculateGrade}>Check Grade</button>
//       <p>Grade: {grade}</p>

//       <hr />

//       {/* Discount Calculator */}
//       <h2>Discount Calculator</h2>
//       <input
//         type="number"
//         placeholder="Enter Cart Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <button onClick={calculateDiscount}>Calculate</button>
//       <p>Final Amount: {finalAmount}</p>

//       <hr />

//       {/* Login System */}
//       <h2>Login System</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <br /><br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br /><br />
//       <button onClick={login}>Login</button>
//       <p>{loginMessage}</p>

//       <hr />

//       {/* Payment Status */}
//       <h2>Payment Status Handler</h2>
//       <input
//         type="text"
//         placeholder="Success / Failed / Pending"
//         value={status}
//         onChange={(e) => setStatus(e.target.value)}
//       />
//       <button onClick={checkStatus}>Check Status</button>
//       <p>{statusMessage}</p>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";

function App() {

  // Program 1: Print all array elements
  const [result1, setResult1] = useState("");
  const program1 = () => {
    const arr = [10, 20, 30, 40, 50];
    const allElements = arr[0] + ", " + arr[1] + ", " + arr[2] + ", " + arr[3] + ", " + arr[4];
    setResult1(allElements);
  };

  // Program 2: Find sum
  const [result2, setResult2] = useState("");
  const program2 = () => {
    const arr = [5, 10, 15, 20, 25, 30];
    let sum = 0;
    sum = sum + arr[0];
    sum = sum + arr[1];
    sum = sum + arr[2];
    sum = sum + arr[3];
    sum = sum + arr[4];
    sum = sum + arr[5];
    setResult2("Sum = " + sum);
  };

  // Program 3: Find largest
  const [result3, setResult3] = useState("");
  const program3 = () => {
    const arr = [15, 8, 42, 23, 16];
    let largest = arr[0];
    if (arr[1] > largest) largest = arr[1];
    if (arr[2] > largest) largest = arr[2];
    if (arr[3] > largest) largest = arr[3];
    if (arr[4] > largest) largest = arr[4];
    setResult3("Largest = " + largest);
  };

  // Program 4: Find smallest
  const [result4, setResult4] = useState("");
  const program4 = () => {
    const arr = [15, 8, 42, 23, 16];
    let smallest = arr[0];
    if (arr[1] < smallest) smallest = arr[1];
    if (arr[2] < smallest) smallest = arr[2];
    if (arr[3] < smallest) smallest = arr[3];
    if (arr[4] < smallest) smallest = arr[4];
    setResult4("Smallest = " + smallest);
  };

  // Program 5: Count even numbers
  const [result5, setResult5] = useState("");
  const program5 = () => {
    const arr = [2, 5, 8, 12, 15, 20, 24, 30];
    let evenCount = 0;
    if (arr[0] % 2 === 0) evenCount = evenCount + 1;
    if (arr[1] % 2 === 0) evenCount = evenCount + 1;
    if (arr[2] % 2 === 0) evenCount = evenCount + 1;
    if (arr[3] % 2 === 0) evenCount = evenCount + 1;
    if (arr[4] % 2 === 0) evenCount = evenCount + 1;
    if (arr[5] % 2 === 0) evenCount = evenCount + 1;
    if (arr[6] % 2 === 0) evenCount = evenCount + 1;
    if (arr[7] % 2 === 0) evenCount = evenCount + 1;
    setResult5("Even Numbers Count = " + evenCount);
  };

  // Program 6: Count odd numbers
  const [result6, setResult6] = useState("");
  const program6 = () => {
    const arr = [2, 5, 8, 12, 15, 20, 24, 30];
    let oddCount = 0;
    if (arr[0] % 2 !== 0) oddCount = oddCount + 1;
    if (arr[1] % 2 !== 0) oddCount = oddCount + 1;
    if (arr[2] % 2 !== 0) oddCount = oddCount + 1;
    if (arr[3] % 2 !== 0) oddCount = oddCount + 1;
    if (arr[4] % 2 !== 0) oddCount = oddCount + 1;
    if (arr[5] % 2 !== 0) oddCount = oddCount + 1;
    if (arr[6] % 2 !== 0) oddCount = oddCount + 1;
    if (arr[7] % 2 !== 0) oddCount = oddCount + 1;
    setResult6("Odd Numbers Count = " + oddCount);
  };

  // Program 7: Calculate average
  const [result7, setResult7] = useState("");
  const program7 = () => {
    const arr = [10, 20, 30, 40, 50];
    let sum = 0;
    sum = sum + arr[0];
    sum = sum + arr[1];
    sum = sum + arr[2];
    sum = sum + arr[3];
    sum = sum + arr[4];
    let totalElements = 5;
    let average = sum / totalElements;
    setResult7("Average = " + average);
  };

  // Program 8: Push
  const [result8, setResult8] = useState("");
  const program8 = () => {
    const arr = [1, 2, 3];
    arr.push(4);
    arr.push(5);
    setResult8("Array = " + arr[0] + ", " + arr[1] + ", " + arr[2] + ", " + arr[3] + ", " + arr[4]);
  };

  // Program 9: Pop
  const [result9, setResult9] = useState("");
  const program9 = () => {
    const arr = [10, 20, 30, 40, 50];
    arr.pop();
    setResult9("Array = " + arr[0] + ", " + arr[1] + ", " + arr[2] + ", " + arr[3]);
  };

  // Program 10: Unshift
  const [result10, setResult10] = useState("");
  const program10 = () => {
    const arr = [2, 3, 4, 5];
    arr.unshift(1);
    setResult10("Array = " + arr[0] + ", " + arr[1] + ", " + arr[2] + ", " + arr[3] + ", " + arr[4]);
  };

  // Program 11: Shift
  const [result11, setResult11] = useState("");
  const program11 = () => {
    const arr = [10, 20, 30, 40, 50];
    arr.shift();
    setResult11("Array = " + arr[0] + ", " + arr[1] + ", " + arr[2] + ", " + arr[3]);
  };

  // Program 12: All operations
  const [result12, setResult12] = useState("");
  const program12 = () => {
    const arr = [2, 3, 4, 5];
    arr.push(6);
    arr.pop();
    arr.shift();
    arr.unshift(1);
    setResult12("Final Array = " + arr[0] + ", " + arr[1] + ", " + arr[2] + ", " + arr[3]);
  };

  // Program 13: Print in reverse
  const [result13, setResult13] = useState("");
  const program13 = () => {
    const arr = [10, 20, 30, 40, 50];
    let reversed = "";
    reversed = reversed + arr[4] + ", ";
    reversed = reversed + arr[3] + ", ";
    reversed = reversed + arr[2] + ", ";
    reversed = reversed + arr[1] + ", ";
    reversed = reversed + arr[0];
    setResult13("Reversed = " + reversed);
  };

  // Program 14: Even indexed elements
  const [result14, setResult14] = useState("");
  const program14 = () => {
    const arr = [10, 20, 30, 40, 50, 60, 70];
    let evenIndexed = "";
    evenIndexed = evenIndexed + arr[0] + ", ";
    evenIndexed = evenIndexed + arr[2] + ", ";
    evenIndexed = evenIndexed + arr[4] + ", ";
    evenIndexed = evenIndexed + arr[6];
    setResult14("Even Indexed = " + evenIndexed);
  };

  // Program 15: Odd indexed elements
  const [result15, setResult15] = useState("");
  const program15 = () => {
    const arr = [10, 20, 30, 40, 50, 60, 70];
    let oddIndexed = "";
    oddIndexed = oddIndexed + arr[1] + ", ";
    oddIndexed = oddIndexed + arr[3] + ", ";
    oddIndexed = oddIndexed + arr[5];
    setResult15("Odd Indexed = " + oddIndexed);
  };


  // Program 16: Sum of elements at even indexes
  const [result16, setResult16] = useState("");
  const program16 = () => {
    // Array:  [5,  10, 15, 20, 25, 30]
    // Index:   0   1   2   3   4   5
    // Even indexes = 0, 2, 4
    const arr = [5, 10, 15, 20, 25, 30];
    let sumEvenIndex = 0;
    // Add element at index 0
    sumEvenIndex = sumEvenIndex + arr[0]; // 0 + 5 = 5
    // Add element at index 2
    sumEvenIndex = sumEvenIndex + arr[2]; // 5 + 15 = 20
    // Add element at index 4
    sumEvenIndex = sumEvenIndex + arr[4]; // 20 + 25 = 45
    setResult16("Sum of even indexed elements = " + sumEvenIndex);
  };

  // Program 17: Sum of elements at odd indexes
  const [result17, setResult17] = useState("");
  const program17 = () => {
    // Array:  [5,  10, 15, 20, 25, 30]
    // Index:   0   1   2   3   4   5
    // Odd indexes = 1, 3, 5
    const arr = [5, 10, 15, 20, 25, 30];
    let sumOddIndex = 0;
    // Add element at index 1
    sumOddIndex = sumOddIndex + arr[1]; // 0 + 10 = 10
    // Add element at index 3
    sumOddIndex = sumOddIndex + arr[3]; // 10 + 20 = 30
    // Add element at index 5
    sumOddIndex = sumOddIndex + arr[5]; // 30 + 30 = 60
    setResult17("Sum of odd indexed elements = " + sumOddIndex);
  };

  // Program 18: Search for a number and print its index
  const [result18, setResult18] = useState("");
  const program18 = () => {
    const arr = [10, 20, 30, 40, 50];
    const searchNumber = 30; // We want to find this number
    let foundIndex = -1; // -1 means not found
    
    // Check each element
    if (arr[0] === searchNumber) foundIndex = 0;
    if (arr[1] === searchNumber) foundIndex = 1;
    if (arr[2] === searchNumber) foundIndex = 2;
    if (arr[3] === searchNumber) foundIndex = 3;
    if (arr[4] === searchNumber) foundIndex = 4;
    
    if (foundIndex === -1) {
      setResult18("Number " + searchNumber + " not found");
    } else {
      setResult18("Number " + searchNumber + " found at index = " + foundIndex);
    }
  };

  // Program 19: Count how many times a number occurs
  const [result19, setResult19] = useState("");
  const program19 = () => {
    const arr = [1, 2, 2, 3, 1, 2, 3, 3, 3];
    const numberToCount = 3; // Count how many times 3 appears
    let count = 0;
    
    // Check each element
    if (arr[0] === numberToCount) count = count + 1;
    if (arr[1] === numberToCount) count = count + 1;
    if (arr[2] === numberToCount) count = count + 1;
    if (arr[3] === numberToCount) count = count + 1;
    if (arr[4] === numberToCount) count = count + 1;
    if (arr[5] === numberToCount) count = count + 1;
    if (arr[6] === numberToCount) count = count + 1;
    if (arr[7] === numberToCount) count = count + 1;
    if (arr[8] === numberToCount) count = count + 1;
    
    setResult19("Number " + numberToCount + " occurs " + count + " times");
  };

  // Program 20: Find second largest element
  const [result20, setResult20] = useState("");
  const program20 = () => {
    const arr = [15, 8, 42, 23, 16];
    
    // Step 1: Find largest
    let largest = arr[0];
    if (arr[1] > largest) largest = arr[1];
    if (arr[2] > largest) largest = arr[2];
    if (arr[3] > largest) largest = arr[3];
    if (arr[4] > largest) largest = arr[4];
    // largest = 42
    
    // Step 2: Find second largest (largest excluding the maximum)
    let secondLargest = -1;
    if (arr[0] < largest && arr[0] > secondLargest) secondLargest = arr[0];
    if (arr[1] < largest && arr[1] > secondLargest) secondLargest = arr[1];
    if (arr[2] < largest && arr[2] > secondLargest) secondLargest = arr[2];
    if (arr[3] < largest && arr[3] > secondLargest) secondLargest = arr[3];
    if (arr[4] < largest && arr[4] > secondLargest) secondLargest = arr[4];
    // secondLargest = 23
    
    setResult20("Second Largest = " + secondLargest);
  };

  // Program 21: Find second smallest element
  const [result21, setResult21] = useState("");
  const program21 = () => {
    const arr = [15, 8, 42, 23, 16];
    
    // Step 1: Find smallest
    let smallest = arr[0];
    if (arr[1] < smallest) smallest = arr[1];
    if (arr[2] < smallest) smallest = arr[2];
    if (arr[3] < smallest) smallest = arr[3];
    if (arr[4] < smallest) smallest = arr[4];
    // smallest = 8
    
    // Step 2: Find second smallest (smallest excluding the minimum)
    let secondSmallest = 999999; // Very large number
    if (arr[0] > smallest && arr[0] < secondSmallest) secondSmallest = arr[0];
    if (arr[1] > smallest && arr[1] < secondSmallest) secondSmallest = arr[1];
    if (arr[2] > smallest && arr[2] < secondSmallest) secondSmallest = arr[2];
    if (arr[3] > smallest && arr[3] < secondSmallest) secondSmallest = arr[3];
    if (arr[4] > smallest && arr[4] < secondSmallest) secondSmallest = arr[4];
    // secondSmallest = 15
    
    setResult21("Second Smallest = " + secondSmallest);
  };

  // Program 22: Check if array is sorted in ascending order
  const [result22, setResult22] = useState("");
  const program22 = () => {
    const arr = [10, 20, 30, 40, 50];
    let isSorted = true;
    
    // Compare each element with next element
    // If current > next, then not sorted
    if (arr[0] > arr[1]) isSorted = false; // 10 > 20? No
    if (arr[1] > arr[2]) isSorted = false; // 20 > 30? No
    if (arr[2] > arr[3]) isSorted = false; // 30 > 40? No
    if (arr[3] > arr[4]) isSorted = false; // 40 > 50? No
    
    if (isSorted) {
      setResult22("Array is sorted in ascending order ✓");
    } else {
      setResult22("Array is NOT sorted");
    }
  };

  // Program 23: Reverse array without using reverse()
  const [result23, setResult23] = useState("");
  const program23 = () => {
    const arr = [10, 20, 30, 40, 50];
    
    // Create a new reversed array manually
    const reversed = [];
    reversed[0] = arr[4]; // reversed[0] = 50
    reversed[1] = arr[3]; // reversed[1] = 40
    reversed[2] = arr[2]; // reversed[2] = 30
    reversed[3] = arr[1]; // reversed[3] = 20
    reversed[4] = arr[0]; // reversed[4] = 10
    
    setResult23("Reversed = " + reversed[0] + ", " + reversed[1] + ", " + reversed[2] + ", " + reversed[3] + ", " + reversed[4]);
  };

  // Program 24: Copy array into another array
  const [result24, setResult24] = useState("");
  const program24 = () => {
    const arr1 = [10, 20, 30];
    
    // Create a new empty array
    const arr2 = [];
    
    // Copy each element manually
    arr2[0] = arr1[0]; // arr2[0] = 10
    arr2[1] = arr1[1]; // arr2[1] = 20
    arr2[2] = arr1[2]; // arr2[2] = 30
    
    setResult24("Original = " + arr1[0] + ", " + arr1[1] + ", " + arr1[2] + " | Copy = " + arr2[0] + ", " + arr2[1] + ", " + arr2[2]);
  };

  // Program 25: Find difference between largest and smallest
  const [result25, setResult25] = useState("");
  const program25 = () => {
    const arr = [15, 8, 42, 23, 16];
    
    // Find largest
    let largest = arr[0];
    if (arr[1] > largest) largest = arr[1];
    if (arr[2] > largest) largest = arr[2];
    if (arr[3] > largest) largest = arr[3];
    if (arr[4] > largest) largest = arr[4];
    // largest = 42
    
    // Find smallest
    let smallest = arr[0];
    if (arr[1] < smallest) smallest = arr[1];
    if (arr[2] < smallest) smallest = arr[2];
    if (arr[3] < smallest) smallest = arr[3];
    if (arr[4] < smallest) smallest = arr[4];
    // smallest = 8
    
    // Find difference
    let difference = largest - smallest; // 42 - 8 = 34
    
    setResult25("Difference = " + difference);
  };

  // Program 26: Move all zeros to end
  const [result26, setResult26] = useState("");
  const program26 = () => {
    const arr = [1, 0, 2, 0, 3, 0];
    const result = [];
    let resultIndex = 0;
    
    // Step 1: Add all non-zero elements first
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        result[resultIndex] = arr[i];
        resultIndex = resultIndex + 1;
      }
    }
    // result = [1, 2, 3], resultIndex = 3
    
    // Step 2: Add zeros at the end
    let zeroCount = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) zeroCount = zeroCount + 1;
    }
    // zeroCount = 3
    
    for (let i = 0; i < zeroCount; i++) {
      result[resultIndex] = 0;
      resultIndex = resultIndex + 1;
    }
    // result = [1, 2, 3, 0, 0, 0]
    
    setResult26("Result = " + result.join(", "));
  };

  // Program 27: Remove duplicate elements
  const [result27, setResult27] = useState("");
  const program27 = () => {
    const arr = [1, 2, 2, 3, 1];
    const uniqueArr = [];
    let uniqueIndex = 0;
    
    // Check each element of original array
    for (let i = 0; i < arr.length; i++) {
      let isDuplicate = false;
      
      // Check if already added to unique array
      for (let j = 0; j < uniqueIndex; j++) {
        if (arr[i] === uniqueArr[j]) {
          isDuplicate = true;
          break;
        }
      }
      
      // If not duplicate, add it
      if (!isDuplicate) {
        uniqueArr[uniqueIndex] = arr[i];
        uniqueIndex = uniqueIndex + 1;
      }
    }
    
    setResult27("Original = [1, 2, 2, 3, 1] | Unique = " + uniqueArr.join(", "));
  };

  // Program 28: Merge two arrays
  const [result28, setResult28] = useState("");
  const program28 = () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const merged = [];
    
    // Copy first array
    merged[0] = arr1[0]; // 1
    merged[1] = arr1[1]; // 2
    merged[2] = arr1[2]; // 3
    
    // Copy second array
    merged[3] = arr2[0]; // 4
    merged[4] = arr2[1]; // 5
    merged[5] = arr2[2]; // 6
    
    setResult28("Array 1 = [1, 2, 3] | Array 2 = [4, 5, 6] | Merged = " + merged.join(", "));
  };

  // Program 29: Find frequency of each element
  const [result29, setResult29] = useState("");

const program29 = () => {
  const arr = [1, 2, 2, 3, 1, 2, 3, 3, 3];

  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === 1) {
      count1++;
    }

    if (arr[i] === 2) {
      count2++;
    }

    if (arr[i] === 3) {
      count3++;
    }

  }

  let frequency =
    "1 -> " + count1 + " times | " +
    "2 -> " + count2 + " times | " +
    "3 -> " + count3 + " times";

  setResult29(frequency);
};


  // Program 30: Rotate array one position to right
  const [result30, setResult30] = useState("");
  const program30 = () => {
    const arr = [1, 2, 3, 4, 5];
    const rotated = [];
    
    // Move last element to first
    rotated[0] = arr[4]; // rotated[0] = 5
    
    // Shift all other elements one position right
    rotated[1] = arr[0]; // rotated[1] = 1
    rotated[2] = arr[1]; // rotated[2] = 2
    rotated[3] = arr[2]; // rotated[3] = 3
    rotated[4] = arr[3]; // rotated[4] = 4
    
    setResult30("Original = [1, 2, 3, 4, 5] | Rotated = " + rotated.join(", "));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>


      <h2> Print All Array Elements</h2>
      <button onClick={program1}>Click to Print</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result1}</p>
      <hr />

      <h2> Find Sum</h2>
      <button onClick={program2}>Calculate Sum</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result2}</p>
      <hr />

      <h2> Find Largest</h2>
      <button onClick={program3}>Find Largest</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result3}</p>
      <hr />

      <h2> Find Smallest</h2>
      <button onClick={program4}>Find Smallest</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result4}</p>
      <hr />

      <h2> Count Even Numbers</h2>
      <button onClick={program5}>Count Even</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result5}</p>
      <hr />

      <h2> Count Odd Numbers</h2>
      <button onClick={program6}>Count Odd</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result6}</p>
      <hr />

      <h2> Calculate Average</h2>
      <button onClick={program7}>Calculate Average</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result7}</p>
      <hr />

      <h2> Push Operation</h2>
      <button onClick={program8}>Push 4 and 5</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result8}</p>
      <hr />

      <h2> Pop Operation</h2>
      <button onClick={program9}>Pop Last Element</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result9}</p>
      <hr />

      <h2> Unshift Operation</h2>
      <button onClick={program10}>Unshift at Start</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result10}</p>
      <hr />

      <h2> Shift Operation</h2>
      <button onClick={program11}>Shift from Start</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result11}</p>
      <hr />

      <h2> All Operations</h2>
      <button onClick={program12}>All Operations</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result12}</p>
      <hr />

      <h2> Reverse Array</h2>
      <button onClick={program13}>Reverse</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result13}</p>
      <hr />

      <h2> Even Indexed Elements</h2>
      <button onClick={program14}>Get Even Indexes</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result14}</p>
      <hr />

      <h2> Odd Indexed Elements</h2>
      <button onClick={program15}>Get Odd Indexes</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result15}</p>
      <hr />


      <h2> Sum of Even Indexed Elements</h2>
      <p>Array: [5, 10, 15, 20, 25, 30]</p>
      <p>Indexes 0, 2, 4 → Elements 5, 15, 25</p>
      <button onClick={program16}>Calculate Sum</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result16}</p>
      <hr />

      <h2> Sum of Odd Indexed Elements</h2>
      <p>Array: [5, 10, 15, 20, 25, 30]</p>
      <p>Indexes 1, 3, 5 → Elements 10, 20, 30</p>
      <button onClick={program17}>Calculate Sum</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result17}</p>
      <hr />

      <h2> Search for Number and Find Index</h2>
      <p>Array: [10, 20, 30, 40, 50]</p>
      <p>Search for: 30</p>
      <button onClick={program18}>Search</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result18}</p>
      <hr />

      <h2> Count Occurrences of a Number</h2>
      <p>Array: [1, 2, 2, 3, 1, 2, 3, 3, 3]</p>
      <p>Count occurrences of: 3</p>
      <button onClick={program19}>Count</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result19}</p>
      <hr />

      <h2> Find Second Largest Element</h2>
      <p>Array: [15, 8, 42, 23, 16]</p>
      <button onClick={program20}>Find Second Largest</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result20}</p>
      <hr />

      <h2> Find Second Smallest Element</h2>
      <p>Array: [15, 8, 42, 23, 16]</p>
      <button onClick={program21}>Find Second Smallest</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result21}</p>
      <hr />

      <h2> Check if Array is Sorted (Ascending)</h2>
      <p>Array: [10, 20, 30, 40, 50]</p>
      <button onClick={program22}>Check Sorted</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result22}</p>
      <hr />

      <h2> Reverse Array (Without reverse())</h2>
      <p>Array: [10, 20, 30, 40, 50]</p>
      <button onClick={program23}>Reverse</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result23}</p>
      <hr />

      <h2> Copy Array Into Another Array</h2>
      <p>Copy [10, 20, 30] into new array</p>
      <button onClick={program24}>Copy Array</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result24}</p>
      <hr />

      <h2> Difference Between Largest and Smallest</h2>
      <p>Array: [15, 8, 42, 23, 16]</p>
      <button onClick={program25}>Find Difference</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result25}</p>
      <hr />

      <h2> Move All Zeros to End</h2>
      <p>Input: [1, 0, 2, 0, 3, 0]</p>
      <button onClick={program26}>Move Zeros</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result26}</p>
      <hr />

      <h2> Remove Duplicate Elements</h2>
      <p>Input: [1, 2, 2, 3, 1]</p>
      <button onClick={program27}>Remove Duplicates</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result27}</p>
      <hr />

      <h2> Merge Two Arrays</h2>
      <p>Array 1: [1, 2, 3] | Array 2: [4, 5, 6]</p>
      <button onClick={program28}>Merge Arrays</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result28}</p>
      <hr />

      <h2> Find Frequency of Each Element</h2>
      <p>Array: [1, 2, 2, 3, 1, 2, 3, 3, 3]</p>
      <button onClick={program29}>Find Frequency</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result29}</p>
      <hr />

      <h2> Rotate Array One Position to Right</h2>
      <p>Input: [1, 2, 3, 4, 5]</p>
      <button onClick={program30}>Rotate Right</button>
      <p style={{ color: "green", fontSize: "18px" }}>{result30}</p>
      <hr />
    </div>
  );
}

export default App;
