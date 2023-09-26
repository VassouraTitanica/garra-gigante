import './ImageGallery.css'
import React from 'react';

const ImageGallery = ({ images }) => {
    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <div key={index} className='image-item'>
                    <h4>{image.miniHeader}</h4>
                    <img src={image.imageURL}
                        alt={image.miniHeader}
                    />
                    <p>{image.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ImageGallery;
