// Insert a new iPhone
app.post("/addiphones", (req, res) => {
  // console.log(bodyparser.json);
  // console.log(req.body.iphoneId);
  let Id = req.body.iphoneId;
  let img = req.body.imgPath;
  let Url = req.body.iphoneLink;
  let Title = req.body.iphoneTitle;
  let Brief = req.body.briefDescription;
  let StartPrice = req.body.StartPrice;
  let PriceRange = req.body.priceRange;
  let Description = req.body.fullDescription;

  let sqlAddToProducts =
    "INSERT INTO Products (product_url, product_name) VALUES ('" +
    Id +
    "', '" +
    Title +
    "' )";

  let addedProductId = 0;

  mysqlConnection.query(sqlAddToProducts, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  mysqlConnection.query(
    "SELECT * FROM Products WHERE product_url = '" + Id + "' ",
    (err, rows, fields) => {
      let addedProductId = rows[0].product_id;
      // console.log(addedProductId);
      if (!err) console.log(err);

      if (addedProductId != 0) {
        // console.log("here");
        let sqlAddToProductDescription =
          "INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES ('" +
          addedProductId +
          "', '" +
          Brief +
          "', '" +
          Description +
          "', '" +
          img +
          "', '" +
          Url +
          "' )";

        mysqlConnection.query(sqlAddToProductDescription, function (
          err,
          result
        ) {
          if (err) throw err;
          console.log("Product description inserted");
        });
      }
      if (addedProductId != 0) {
        console.log("here");
        let sqlAddToProductPrice =
          "INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES ('" +
          addedProductId +
          "', '" +
          StartPrice +
          "', '" +
          PriceRange +
          "' )";

        mysqlConnection.query(sqlAddToProductPrice, function (err, result) {
          if (err) throw err;
          console.log("Product price inserted");
        });
      }
    }
  );

  res.end("Product added");
});

//Get all iphones
app.get("/iphones", (req, res) => {
  mysqlConnection.query("SELECT * FROM Products", (err, rows, fields) => {
    let iphones = { products: [] };
    iphones.products = rows;
    var stringIphones = JSON.stringify(iphones);
    if (!err) res.end(stringIphones);
    else console.log(err);
  });
});

app.listen(3001, () => console.log("Listening to : 3001"));