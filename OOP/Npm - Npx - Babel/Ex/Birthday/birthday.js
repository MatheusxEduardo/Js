const dayjs = require("dayjs");

function birthday(date) {
   const birthday = dayjs(date)
   const today = dayjs()

   const ageInYears = today.diff(birthday, `year`)
   const nextBirthday = birthday.add(ageInYears + 1, `year`)
   const dayToNextBirthday = nextBirthday.diff(today, `day`) + 1

   console.log(`Idade: ${ageInYears}`)
   console.log(`Próximo aniversario: ${nextBirthday.format("DD/MM/YYYY")}`)
   console.log(`Dias até o proximo aniversario: ${dayToNextBirthday}`)
}

birthday("1999-06-1999")