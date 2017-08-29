import { combineReducers } from "redux"
import filter from "./filter"
import articleContent from "./article_content"
import search from "./search"

const reducers = combineReducers({
  filter,
  articleContent,
  search
})

export default reducers
