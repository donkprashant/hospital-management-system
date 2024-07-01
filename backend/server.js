import app from "./app.js"
import cloundinary from "cloudinary"
cloundinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

app.listen(process.env.PORT,()=>{
    console.log('server listening on port');
});
