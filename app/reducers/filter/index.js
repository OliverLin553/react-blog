import constants from "../../constants"

export default (state = getDefaultFilter(), action) => {
  switch (action.type) {
    case constants.FILTER:
      return action.data
    default:
      return state
  }
}

export const getDefaultFilter = () => {
  const url = window.location.href

  if (url.indexOf("blog") !== -1) {
    return "blog"
  }

  if (url.indexOf("contact") !== -1) {
    return "contact"
  }

  return "home"
}