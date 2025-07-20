const sqrt1 = (sqrt) => {
    if (sqrt < 2) return sqrt;
    let l = 2;
    let r = Math.floor(n/2);

    while (l <= r) {
        let mid = Math.floor((r-l)/2) + l;
        if (sqrt === (mid*mid)) {
            return mid;
        } else if (sqrt < (mid*mid)) {
            r = mid-1;
        } else {
            l=mid+1;
        }
    }

    return r;
}