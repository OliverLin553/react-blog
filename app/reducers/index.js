import { combineReducers } from "redux"
import filter from "./filter"
import articleContent from "./article_content"

const reducers = combineReducers({
  filter,
  articleContent
})

export default reducers
