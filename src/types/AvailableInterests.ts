import { INTEREST_CATEGORIES } from 'theme/constants'

export default class AvailableInterests {
  "Arts & Entertainment": string[]
  "Business & Career": string[]
  "Cultures & Languages": string[]
  "Education": string[]
  "Health & Wellness": string[]
  "Hobbies": string[]
  "Social": string[]
  "Sports & Recreation": string[]
  "Technology": string[]

  constructor(data) {
    this["Arts & Entertainment"] = data["Arts & Entertainment"]
    this["Business & Career"] = data["Business & Career"]
    this["Cultures & Languages"] = data["Cultures & Languages"]
    this["Education"] = data["Education"]
    this["Health & Wellness"] = data["Health & Wellness"]
    this["Hobbies"] = data["Hobbies"]
    this["Social"] = data["Social"]
    this["Sports & Recreation"] = data["Sports & Recreation"]
    this["Technology"] = data["Technology"]
  }

  filter(func: Function) { //non-mutating
    return new AvailableInterests(INTEREST_CATEGORIES.reduce((filteredInterests: any, interestGroup: string) => {
      if (this[interestGroup] instanceof Array) {
        filteredInterests[interestGroup] = this[interestGroup].filter(func)
      }
      return filteredInterests
    }, {}))
  }
}
