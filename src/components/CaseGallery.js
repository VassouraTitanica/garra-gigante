import './CaseGallery.css'
import React from 'react';

const CaseGallery = ({ images }) => {
    return (
        <div className="case-gallery">
            {images.map((image, index) => (
                <div key={index} className='case-image-item'>
                    <div>
                        <img
                            src={image.imageURL}
                            alt={image.miniHeader}
                            />
                    </div>
                            <p>{image.miniHeader}</p>
                    <span className='case-description'>{image.description}</span>
                </div>
            ))}
        </div>
    );
}

export default CaseGallery;