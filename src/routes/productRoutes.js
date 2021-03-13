import { addnewProduct } from "../controllers/productController";

const routes = (app) => {
  app
    .route("/contact")

    // .get((req, res, next) => {
    //   console.log("THE REQ", req);
    //   // middleware
    //   console.log(`Request from: ${req.originalUrl}`);
    //   console.log(`Request type: ${req.method}`);
    //   next();
    // }, getContacts)

    // Post endpoint
    .post(addnewProduct);

  // app
  //   .route("/contact/:contactID")
  //   // get a specific contact
  //   .get(getContactWithID)

  //   // updating a specific contact
  //   .put(updateContact)

  //   // deleting a specific contact
  //   .delete(deleteContact);
};

export default routes;
