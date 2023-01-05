function invert(array) {
    let newArray = []
    array.forEach((x) => {
      newArray.push(-x)
    })
    return newArray
}