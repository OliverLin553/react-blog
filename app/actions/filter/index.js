import constants from "../../constants"

export const set = filterName => ({
  type: constants.FILTER,
  data: filterName
})
