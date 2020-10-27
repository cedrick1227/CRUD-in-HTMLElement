# CRUD-in-HTMLElement
State Management option in SPA web app.

While there is plenty of options in managing states of a SPA web app, These recipe is useful in some scenarios.

HOW TO USE?

In any html element, there will be a method called .storage() exposed in each of it, this method returns an object, containing CRUD operations.
ex.
  let body = document.body;
  body.storage().set({sidebaropen: true}); // setting a state of sidebaropen into true;
  body.storage().get('sidebaropen'); //returns true;
  body.storage().trash('sidebaropen');
  
