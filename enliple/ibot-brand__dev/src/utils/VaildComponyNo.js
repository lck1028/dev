const validCheckCompanyNo = companyNo => {
  if ((companyNo = (companyNo + '').match(/\d{1}/g)).length != 10) {
    return false
  }
  let sum = 0
  const vilidKey = [1, 3, 7, 1, 3, 7, 1, 3, 5]

  for (let i = 0; i < 9; i++) {
    sum += vilidKey[i] * Number(companyNo[i])
  }

  let CheckSum = 0
  CheckSum = Math.floor((vilidKey[8] * Number(companyNo[8])) / 10)
  sum += CheckSum
  const reminder = (10 - (sum % 10)) % 10

  if (reminder == Number(companyNo[9])) return true

  return false
}

export default validCheckCompanyNo
