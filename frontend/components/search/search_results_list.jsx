import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultsList = (props) => {
  let items, renderAttrs, destination;

  // set up for what type of list we will be rendering
  // new types can later be passed in and given as many attributes it wants.
  if(props.type === "users") {
    items = props.users;
    renderAttrs = ['username']
    destination = "/users/"
  }
  if(props.type === "wines") {
    items = props.wines;
    renderAttrs = ['vineyard', 'wine_type', 'year']
    destination = "/wines/"
  }

  // our render is ideally re-usable now as we can make any new search
  // query with an arbitrary amount of attributes we want to render.
  // wine ==> Fetzer Chardonnay 1999
  // user ==> ladiesman167
  return (
    <ul className="results">
      {

        items.map(el => {
          let displayTextHead = "";
          let displayTextBody = "";
          for (let idx in renderAttrs) {
            switch(renderAttrs[idx]) {
              case 'username':
                displayTextHead = el[renderAttrs[idx]]
                break;
              case 'vineyard':
                displayTextBody += el[renderAttrs[idx]] + " "
                break;
              case 'wine_type':
                displayTextHead = el[renderAttrs[idx]]
                break;
              case 'year':
                displayTextBody += el[renderAttrs[idx]] + " "
                break;
            }

          }
          return (
            <li
              key={`${props.type}-${el.id}`}
              className="result"
            >
            <Link to={destination + `${el.id}`} onClick={props.searchBlur}>
              <div>
                <p className="searchtext">{displayTextHead}</p>
                <p className="sub">{displayTextBody}</p>
              </div>
            </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default SearchResultsList;
