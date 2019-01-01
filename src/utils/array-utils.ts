export const addOrDelete = (array: string[], value: string) => {
  let newArray = array
  if (array.includes(value)) {
    newArray = array.filter(interest => interest !== value)
  } else {
    newArray.push(value)
  }
  return newArray
}
