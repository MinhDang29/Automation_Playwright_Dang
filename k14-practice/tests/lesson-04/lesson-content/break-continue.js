// continue
/*
- gap continue => chay tiep den vong lap tiep theo
*/
// for (let i = 1; i <= 5; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }

//     console.log(i);
// }
/*
i = 1
Khong chia het cho 2 => console.log("1");

i = 2 
Chia het cho 2 => gap continue => i = 3
*/

// break
const arr = [11, 23, 22, 55];

for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
        break;
    }

    console.log(arr[i]);
}

// OUTPUT: 11, 23