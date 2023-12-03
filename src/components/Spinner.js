import React  from 'react'
import loading from "./Ajax-loader.gif"

const Spinner = () => {

    return (
        <div  className=' text-center' >

            <img className='my-3' src={loading} alt="loading"/>
        </div>
    )
  
}
export default Spinner;
// // class Solution {
//   public int maxArea(int[] height) {
//     int left = 0;
//     int right = height.length - 1;
//     int max = 0;
//     while(left < right){
//         int w = right - left;
//         int h = Math.min(height[left], height[right]);
//         int area = h * w;
//         max = Math.max(max, area);
//         if(height[left] < height[right]) left++;
//         else if(height[left] > height[right]) right--;
//         else {
//             left++;
//             right--;
//         }
//     }
//     return max;
// }
// }
// C++