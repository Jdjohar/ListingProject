import React, {useState} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const AdminForm = ({ type, handleSubmit, addedPhotos, setAddedPhotos, propertyName, 
                      setPropertyName, propertyType, setPropertyType, address, setAddress, 
                      saleType, setSaleType, featured, setFeatured, areaSq, setAreaSq, 
                      neighbourhood, setNeighbourHood, photoLink, setPhotoLink, beds, 
                      setBeds, bathroom, price, setPrice, setBathroom, description, setDescription,addedCoverPhotos,
                      setCoverAddedPhotos, handleEditorChange,
  }) => {
   
  return (
    <div className='mx-4 py-5'>
      <div className="container py-2">
        <div className="row">
          <div className="col-lg-10 col-12 mx-auto">
            <h2 className="text-center mb-4">{type} a Property</h2>
            <div className="tab-content shadow-lg mt-5" id="nav-tabContent">
              <form onSubmit={handleSubmit} enctype="multipart/form-data" className='mx-4 items-center justify-center'>
                <div className="row">
                  <div className="col-12 col-md-6 col-sm-6 col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Property Name</label>
                      <input type="text" value={propertyName} name='PropertyName' onChange={(e) => setPropertyName(e.target.value)} className="form-control" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-sm-6 col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <input type="text" value={address} name='Address' onChange={(e) => setAddress(e.target.value)} className="form-control" />
                    </div>  
                  </div>
                  <div className="col-12 col-md-6 col-sm-6 col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Sale Type</label>
                      <select 
                      name='SaleType'
                      className="form-select"
                      value={saleType}
                      onChange={(e) => setSaleType(e.target.value)}>
                      <option value="For Sale">For Sale</option>
                      <option value="Rent">Rent</option>
                      <option value="Sold Out">Sold Out</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-sm-6 col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Featured</label>
                      <select 
                      name='Featured'
                      className="form-select" 
                      value={featured}
                      onChange={(e) => setFeatured(e.target.value)}>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-sm-6 col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Area Sq.feet</label>
                      <input type="text" name='Area' value={areaSq} onChange={(e) => setAreaSq(e.target.value)} className='form-control w-100 py-3' style={{border:'1px solid rgb(197 197 197)'}} />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-sm-6 col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Property Type</label>
                      <select 
                        name='PropertyType'
                        className="form-select w-100" 
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}>
                        <option value="residential">Residential</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="condo">Condo</option>
                        <option value="commercial">Commercial</option>
                        <option value="multifamily">Multi-Family</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-sm-6 col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">NeighbourHood</label>
                      <select 
                        name='NeighbourHood'
                        className="form-select w-100"
                        value={neighbourhood}
                        onChange={(e) => setNeighbourHood(e.target.value)} >
                        <option value="bronte">Bronte</option>
                        <option value="brontecreek">Bronte Creek</option>
                        <option value="burlington">Burlington</option>
                        <option value="oakville">OakVille</option>
                        <option value="clearview">ClearView</option>
                        <option value="collegepark">College Park</option>
                        <option value="mississauga">Mississauga</option>
                        <option value="brampton">Brampton</option>
                        <option value="restofgta">Rest Of GTA</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-sm-6 col-lg-6">
                    <div className='mb-3'>
                      <label className='form-label'>Choose Multiple Image</label>
                      <input type="file" multiple ="image/*" 
                        onChange={(e) => {
                            const files = e.target.files;
                            const allFiles = [...addedPhotos];
                        
                            for (let i = 0; i < files.length; i++) {
                            allFiles.push(files[i]);
                        }
                        setAddedPhotos(allFiles);
                        }}
                      />

                      <div className='d-flex flex-column w-50 outer-pic'>
                      <div className='pic-div'>
                        {photoLink.map((photo, index)=>(
                          <img src={photo} key={`index-${index}`} className='img-fluid' alt='property' />
                        ))}
                      </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-sm-6 col-lg-6">
                    <div className='mb-3'>
                      <label className='form-label'>Choose Cover Image</label>
                      <input type="file" onChange={(e) => setCoverAddedPhotos(e.target.files[0])}/>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-sm-6 col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">No. of Beds</label>
                      <input type="text" name='NumofBeds' value={beds} onChange={(e) => setBeds(e.target.value)} className="form-control w-100 py-3" style={{border:'1px solid rgb(197 197 197)'}} />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-sm-6 col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">No. of Bathrooms</label>
                      <input type="text" name='NumofBathrooms' value={bathroom} onChange={(e) => setBathroom(e.target.value)} className="form-control w-100 py-3" style={{border:'1px solid rgb(197 197 197)'}} />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-sm-6 col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Price</label>
                      <input type="text" name='Price' value={price} onChange={(e) => setPrice(e.target.value)} className="form-control w-100 py-3" style={{border:'1px solid rgb(197 197 197)'}} />
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-sm-12 col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                     
                       <CKEditor
                                    editor={ ClassicEditor }
                                    data={description}
                                    // onReady={ editor => {
                                    //     console.log( 'Editor is ready to use!', editor );
                                    // } }
                                    
                                    onChange={handleEditorChange}
                                    onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                    } }
                                />
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary mb-5">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   </div>
  )
}

export default AdminForm