import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultsList = (props) => {
  let items, renderAttrs;

  // set up for what type of list we will be rendering
  // new types can later be passed in and given as many attributes it wants.
  if(props.type === "users") {
    items = props.users;
    renderAttrs = ['username']
  }
  if(props.type === "wines") {
    items = props.wines;
    renderAttrs = ['vineyard', 'wine_type', 'year']
  }
  
  // our render is ideally re-usable now as we can make any new search
  // query with an arbitrary amount of attributes we want to render.
  // wine ==> Fetzer Chardonnay 1999
  // user ==> ladiesman167
  return (
    <ul>
      {
        items.map(el => {
          let result = ""
          for (let idx in renderAttrs) {
            result += el[renderAttrs[idx]] + " "
          }
          return (
            <li 
              key={`${props.type}-${el.id}`}
            >{result}</li>
          )
        })
      }
    </ul>
  )
}

export default SearchResultsList;