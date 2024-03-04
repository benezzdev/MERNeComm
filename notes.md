RoadMap

Deals page :

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
