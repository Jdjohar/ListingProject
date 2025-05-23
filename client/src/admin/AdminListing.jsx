import React, {useState} from 'react'
import AdminNavbar from './AdminNavbar'
import AdminForm from './AdminForm'
import { useNavigate } from 'react-router-dom';

const AdminListing = () => {
  const [propertyName, setPropertyName] = useState('');
  const [address, setAddress] = useState('');
  const [saleType, setSaleType] = useState('For Sale');
  const [featured, setFeatured] = useState('no');
  const [areaSq, setAreaSq] = useState('');
  const [propertyType, setPropertyType] = useState('residential');
  const [neighbourhood, setNeighbourHood] = useState('bronte');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [addedCoverPhotos, setCoverAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState([])
  const [beds, setBeds] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleEditorChange = (event, editor) => {
    console.log('handleEditorChange start');
    const data = editor.getData();
     // Remove the <p> tags
    //  const strippedData = data.replace(/<\/?p>/g, '');

    setDescription(data);
    console.log(data, "data");
};
   const handleSubmit = async (e) => {
    e.preventDefault();


    console.table([
       propertyName,
        address,
                saleType,
                featured,
                areaSq,
                propertyType,
                 neighbourhood,
               beds,
                 bathroom,
              description,
              price
            ]
    );

    try {
        const formData = new FormData();
        // Append image files to FormData
        for (const file of addedPhotos) {
            formData.append('images', file);
        }

        // Make a separate request to upload images
        const uploadResponse = await fetch("https://estate-tm2d.onrender.com/api/upload", {
            method: 'POST',
            body: formData,
        });

        const uploadedImages = await uploadResponse.json();
        console.log('Uploaded images:', uploadedImages);

        // Assuming you get back an array of image URLs from the server
        const imageUrls = uploadedImages.imageUrls || [];

        // Get cover image
        const coverFormData = new FormData();
        coverFormData.append('coverImage', addedCoverPhotos);

        const coverUploadResponse = await fetch("https://estate-tm2d.onrender.com/api/upload-cover", {
        method: 'POST',
        body: coverFormData,
        });
        const uploadedCoverImage = await coverUploadResponse.json();
        console.log('Uploaded cover image:', uploadedCoverImage);
        const coverImageUrl = uploadedCoverImage.coverImageUrl || '';

        const response = await fetch("https://estate-tm2d.onrender.com/api/addproperty", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                PropertyName: propertyName,
                Address: address,
                SaleType: saleType,
                Featured: featured,
                Area: areaSq,
                PropertyType: propertyType,
                NeighbourHood: neighbourhood,
                NumofBeds: beds,
                Price: price,
                NumofBathrooms: bathroom,
                Description: description,
                imageUrls: imageUrls,
                coverImageUrl: coverImageUrl,
            })
        });

        const json = await response.json();
        console.log( json, "Json Data after submit");
        if (json.Success) {
            console.log("Property successfully added");
            navigate("/");
        } else {
            console.error('Error adding property:', json.message);
        }
    } catch (error) {
        console.error('Error adding property:', error);
    }
};

  return (
    <div>
        <AdminNavbar/>
        <div>
        <AdminForm
        type="Create"
        handleSubmit={handleSubmit}
        handleEditorChange={handleEditorChange}
        propertyName={propertyName}
        setPropertyName={setPropertyName}
        address={address}
        setAddress={setAddress}
        saleType={saleType}
        setSaleType={setSaleType}
        featured={featured}
        setFeatured={setFeatured}
        areaSq={areaSq}
        setAreaSq={setAreaSq}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        neighbourhood={neighbourhood}
        setNeighbourHood={setNeighbourHood}
        addedPhotos={addedPhotos}
        setAddedPhotos={setAddedPhotos}
        addedCoverPhotos={addedCoverPhotos}
        setCoverAddedPhotos={setCoverAddedPhotos}
        photoLink={photoLink}
        setPhotoLink={setPhotoLink}
        beds={beds}
        setBeds={setBeds}
        bathroom={bathroom}
        setBathroom={setBathroom}
        setPrice={setPrice}
        description={description}
        setDescription={setDescription}
        />
        </div>
    </div>
  )
}

export default AdminListing