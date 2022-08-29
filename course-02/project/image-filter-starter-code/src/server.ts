import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';
import {Request, Response} from 'express'
import {send} from 'process'
import {RSA_NO_PADDING} from 'constants'

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  
      
    });

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT

  // GET /filteredimage?image_url={{URL}}
  


  // endpoint to filter an image from a public url.
  // IT SHOULD
  // 
  //    1. validate the image_url query
  
   // const image_url = req.query.image_url as string;
   // const {image_url } :{image_url:string} = req.query
     
  //    2. call filterImageFromURL(image_url) to filter the image
  
  //return res.send(filteredpath);
  //    3. send the resulting file in the response
  

  //    4. deletes any files on the server on finish of the response

  // QUERY PARAMATERS
    
  //    image_url: URL of a publicly accessible image
 //const image_url: 'https://www.bing.com/images/search?view=detailV2&ccid=fs03VYi7&id=9043669274ADC6C96BFEF1445B7718475D7D64D1&thid=OIP.fs03VYi78kJokUkzUbxLbwHaEo&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.7ecd375588bbf2426891493351bc4b6f%3frik%3d0WR9XUcYd1tE8Q%26riu%3dhttp%253a%252f%252fimages6.fanpop.com%252fimage%252fphotos%252f40500000%252fCat-cats-40547181-1680-1050.jpg%26ehk%3dKNZ7duAcgmF%252bdcotrZDFwruaI13MrwEAvB7vNo4TpxA%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1050&expw=1680&q=cat&simid=608036824029164686&FORM=IRPRST&ck=58E4621BDAD9AF532E02573F14EF9093&selectedIndex=1&ajaxhist=0&ajaxserp=0'
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END @TODO1

  //download image
 // app.get( "/downloadImage", async ( req, res ) => {
   // let {image_url}= req.query;

    //if (!image_url)
   // {
      //throw new Error('No data Found');
      
    //}

    //const result = await filterImageFromURL(image_url);
    
   // return(result);

  //} );

  
 
 
  
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