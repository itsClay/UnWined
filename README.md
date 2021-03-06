<img src="http://res.cloudinary.com/do2rg2v7p/image/upload/v1506704723/demo_splash_ae8qv8.png" />

<a href="https://un-wined.herokuapp.com/">
  <img src="http://res.cloudinary.com/do2rg2v7p/image/upload/v1506057090/logo3_hglbdy.png" height="200" align="right" />
</a>

# Un-Wined
#### A social app for wine lovers
<https://un-wined.herokuapp.com/>

This repository contains the application for Un-Wined.
Users can add and edit their favorite or not so favorite wines. Alongside, they may check-in their wines for their friends to see.

### Technologies used
- React
- Redux
- Rails
- jQuery - ajax
- PostgreSQL
- webpack
- Cloudinary


# Features

### Drinks
<img src="http://res.cloudinary.com/do2rg2v7p/image/upload/v1506722248/wine_create_demo_czvtdx.gif" />

Users may navigate to the Cellar to discover new wines or add a new wine to the database. If they decide they don't like their selected image or information provided, they may choose to edit that information on the wine show page. Additional features include error handling and an image preview.


Making forms re-usable by passing in separate actions based upon url params.
``` javascript
let formType = "new";
if (ownProps.match.path == "/wines/:wineId/edit") {
  wine = state.wines[ownProps.match.params.wineId];
  formType = "edit";
}
```

### Authentication
<img src="http://res.cloudinary.com/do2rg2v7p/image/upload/v1506704715/demo_login_dxbsif.png" height="180" />

Single layer authentication was created from scratch utilizing BCrypt modules and SecureRandom hashing for user sessions. Alongside a Guest login has been created for easy viewing.

### Checkins
<img src="http://res.cloudinary.com/do2rg2v7p/image/upload/v1506706713/user_checkin_demo_f0xaco.gif" />

Users may check-in and rate the wines they are having. If they decide they want to change their rating or comment, they may navigate to their profile page and edit their check-ins. Alongside there is a feed available to users to view what other users are having. Currently users have the ability to see the 20 most recent check-ins. If they desire, they may navigate to other users to see what wines they have been having.

An example of handling ratings:
``` javascript              
<Rating
  empty="fa fa-star-o fa-2x"
  full="fa fa-star fa-2x"
  onChange={ (rating) => this.setState({rating: rating}) }
  initialRate={this.state.rating}
/>
```

### Database
Database schema may be found in the [wiki](https://github.com/itsClay/UnWined/wiki/database-schema).
Utilizing Rails and Jbuilder to curate our data, check-ins are the joins table between users and wines.

### Future Features
1. Implement infinite scrolling (from scratch)
2. Profile photos for users.
3. Badges
