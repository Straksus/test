function checkExam(array1, array2) {
    let bal = 0;
    for (let i = 0; i < array1.lenght; i++){
        for (let j = 0; j < array2.lenght; j++){
            if(array1[i] == array2[j]){
                bal +4;
            }
        }
    }
   }

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])