let x = [-3, 5, 1, 3, 2, 10];
let begin = 0;
let end = x.length - 1;
while (begin < end) {
    let b = x[begin];
    x[begin] = x[end];
    x[end] = b;
    begin++;
    end--;
}
document.write(x);