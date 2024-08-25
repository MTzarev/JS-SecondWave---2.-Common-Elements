function commonElements(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        let word = arr1[i];
        if (arr2.includes(word)) {
            newArr.push(word);
        }
    }
    for (words of newArr) {
        console.log(words);
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']);
