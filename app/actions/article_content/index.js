import constants from "../../constants"

export const fetch = () => {
  return (dispatch) => {
    const data = [
      {
        id: "1",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        "title": "node常用包",
        "date": "2017/3/9",
        "comment": "0",
        "Views": "137"
      },
      {
        id: "2",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        "title": "node常用包",
        "date": "2017/3/9",
        "comment": "0",
        "views": "137"
      },
      {
        id: "3",
        src: "http://blog.styxzp.com/wp-content/themes/Kratos/images/default_thumbnail.jpg",
        "title": "node常用包",
        " date": "2017/3/9",
        "comment": "0",
        "views": "137"
      }
    ]

    dispatch({
      type: constants.ARTICLE_CONTENT,
      payload: data
    })
  }
}