function checkNumbersArray(arr) {
    let nullCount = 0;
    let oddCount = 0;
    let evenCount = 0;
    let someCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((typeof arr[i] == 'number') && (!isNaN(arr[i]))) {
            if (arr[i] == 0) {
                nullCount++;
            } else if (arr[i] % 2 === 1) {
                oddCount++;
            } else if (arr[i] % 2 === 0){
                evenCount++;
            }
        } else someCount++
    }
    console.log(`Null elements - ${nullCount}`);
    console.log(`Odds elements - ${oddCount}`);
    console.log(`Evens elements - ${evenCount}`);
    console.log(`Not-numbers elements - ${someCount}`);
}
checkNumbersArray(array)