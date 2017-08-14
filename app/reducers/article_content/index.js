import constants from "../../constants"

export default (state = [], action) => {
  switch (action.type) {
    case constants.ARTICLE_CONTENT: {
      return action.payload
    }
    default: {
      return state
    }
  }
}
