function mergeSort (arr) {
    const l = arr.length;
    const m = Math.floor(l/2);

    if(l==2){return merge(arr.slice(0,1),arr.slice(1))}
    else if(l==3){return merge(mergeSort(arr.slice(0,2)),arr.slice(2))}
    else{return merge(mergeSort(arr.slice(0,m)),mergeSort(arr.slice(m)))}
}


function merge (ar1,ar2) {
    const l1 = ar1.length;
    const l2 = ar2.length; 
    if(l1==0){return ar2}
    if(l2==0){return ar1}
        
    if(ar1[0]<ar2[0]){
        return [ar1.shift()].concat(merge(ar1,ar2));
    }
    else{
        return [ar2.shift()].concat(merge(ar1,ar2));
    }
}
        
