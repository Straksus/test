function filter_list(lists) {
    for(let keys = 0; keys < lists.length; keys++){
        console.log(lists[keys])
    }
}

filter_list([1,2,'aasf','1','123',123],[1,2,123]);

let ms = +'2';

console.log(typeof(ms))