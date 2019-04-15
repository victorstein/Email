const date = (query = 'query') => {
  let datetime = new Date()
  let day = datetime.getDate() < 10 ? `0${datetime.getDate()}` : datetime.getDate()
  let monthIndex = datetime.getMonth() + 1 < 10 ? `0${datetime.getMonth() + 1}` : datetime.getMonth() + 1
  let year = datetime.getFullYear()
  let formattedDate = query === 'query' ? `${year}-${monthIndex}-${day}` : `${day}-${monthIndex}-${year}`
  return formattedDate.toString()
}

export default date
