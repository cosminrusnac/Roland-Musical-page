# FakeStore App

FakeStore App is an online store app built with vanilla JS, Bootstrap for styling and making it responsive, jQuery, HTML5, CSS3.  

The app display a list of products and upon selecting a product display details for the product: title, price, description, image, category, rating, all of this only if the client is logged in properly.

Products are listed through API call and the login process is based on information from the URL source fakestoreapi.com. 

## Installation

No special needs.

## Usage

The access to site should start from Login Page.

Once that the user enters the correct credentials (username and password) he will have access to all features and will be redirected to Home Page, and all the tabs will be active. 

Username and password verified on the server will generate a token which will be stored in localstorage and will give access to continue session. Whenever the user wants to log out or change the account, he will have the "log out" button active.

Examples of username & password combination that works (from fakestoreapi.com): 

username: johnd, password: m38rmF$ 
username: kevinryan, password: kev02937@
username: kate_h, password: kfejk@*_

## Features
- Each product has his own page with details generated with API,
- Client-side search filter on the products list page to filter displayed products by title, 
- Category selection, 
- Client-side product sortings,
- View-options (grid, list-view),
- Editable favorites list, 
- Add-to-cart feature (modal with: update number of products, remove option, get location automatically), 
- Up-button, 
- Google-enhanced search bar, 
- Chat-bot for help-assistant,
- Testimonial carousel in Home Page, based on API calls.

## License

Cosmin Rusnac - 21/04/2023 for tech-test at Ensemble Software