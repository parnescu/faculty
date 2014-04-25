#F1000 Test

The goal of this test is to evaluate the way you organize and write your code and workflow.

Every aspect of your solution will be taken into consideration, including coding style and file organization.

Using the data supplied in ```data.json``` (a list of articles) create a javascript application for the browser that renders the following page when calling ```http://localhost:8080#/articles/*articleId*```.

  1. On the **left hand side** display the article information for the requested *articleId*.
  You should display the *title*, the *abstract* and the *publishedDate* (in a readable format like '23 March 2013').

  1.1 **At the bottom** of the page you should show the list of "related articles", 
  including the *title* and *publishedDate* for each item listed.
  The title of each item listed in the "related articles" section will be clickable.
  Clicking on the title will change the url to ```http://localhost:8080#/articles/newId```, starting again from **point 1**.

  2. On the **right hand side** (the sidebar) you should display a list of
  all the articles provided in the ```data.json```. The current article being displayed should be highlighted and in first position.
  For every article in the list it will show the *title* and *publishedDate*.
  The title of every article will be clickable and will navigate to
  ```http://localhost:8080#/articles/newId```, starting again from **point 1**.

You are expected to use the latest technologies and libraries/frameworks available
in the frontend industry. The style of the page is not really relevant (though feel free to make it look 
as nice as possible) but make sure that the actual structure of the page is clearly defined.

When returning your solution please include some brief details as to why you have structured your solution the way you have and any other details you think are relevant.
