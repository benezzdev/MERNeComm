RoadMap

## Deals page :

Backend :
1st: Deals collection : description, image, price, userName who created it ... lets create initially a basic version of the document. Create 3, 4 documents in the mongoDB, manually.
2st: create Model with mongoose
3nd Route:
a) create base URL in our indes
b)create router for that collection (dealsRouter).
c)inside the router, create endpints : initially create the girst get endpont to retrieve all the documents
d) create cotroller function to get all documents from DB using our mongoose model.

-Test endopint in postman . IF it is working...we move on the client.

Client:

1st: build a view/page/componet that makes a fetch to the endpoint and stores vaules in a sate variable, and display then in JSX

TO do list :

CLIENT:
-Routing system with react router dom
-Context : at least an auth context to manage everzthing related with login/register/user status
-Once auth context is ready, we should also build a Protected Route

## Deal detail page :

Backend :
a) create a get route, with a URL that admits a dynamic field (params)
b) create a controller function that gets the id/name of the Deal from the request (usually inside req.params) and does a request to the database to find that document (e.g. model.findById(id))
c) return the found document to the client in the response

Client:
a) insert a clickable link (that takes us to a dzynamic URL) in each of the deals in the Home/view with all Deals
b) create a component (e.g. dealsDetail) that renders when we navigate to the dynamic url
c) grab id/name from the deal from the url (using useLocation hook).
e) build a fetch function to the backend's endpoint including the id
