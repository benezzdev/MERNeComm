const testFunction = async (req, res) => {
  console.log("test function");
  console.log("req", req);
  //use here a mongoose method to acces your database
  // const allDeals = await dealsModel.find()
  res.status(200).json({
    message: "this is a test route",
    // allDeals
  });
};

export { testFunction };
