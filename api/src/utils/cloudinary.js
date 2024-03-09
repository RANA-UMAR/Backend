import {v2 as cloudinary} from 'cloudinary';
import { CLOUDINARY_API_KEY, CLOUDINARY_CLOUD_NAME, CLOUDINARY_SECRET } from '../config';
          
cloudinary.config({ 
  cloud_name:CLOUDINARY_CLOUD_NAME, 
  api_key: CLOUDINARY_API_KEY, 
  api_secret:CLOUDINARY_SECRET

});

const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if(!localFilePath) return null
        // upload the file on the cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{resource_type:'auto'})

        // file has been sucessfully uploaded
        console.log("file has been sucessfully uploaded",response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath)
        //remove the locally saved temporary files operation failed
        return null;
    }

}
export {
    uploadOnCloudinary
}