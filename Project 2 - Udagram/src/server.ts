import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';
import { isWebUri } from 'valid-url';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END @TODO1

  /**Retrieve a filtered image specified as a "image_url" query parameter and validate it is HTTP(S) format. If successful, downloads an image to client that is resized, grey-scaled and compressed */
  app.get("/filteredimage", async (req, res) => {
    const { image_url } = req.query;

    /** Perform validation tests BEFORE attempting download  */
    if (!image_url) {
      return res.status(400).send("QUERY Parameter 'image_url' query was not supplied. Please type a valid image URL after the = sign in http://{ElasticBeanStalk_app_URL or localhost}/filteredimage?image_url= ")
    }
    else if (!isWebUri(image_url)) {
      return res.status(422).send("The requested URL is not a valid URL format")
    }
    const imagePath: string = await filterImageFromURL(image_url);
    res.sendFile(imagePath);
    res.on('Completed', () => deleteLocalFiles([imagePath]));
  } );


  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );


  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();
