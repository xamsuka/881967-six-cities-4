import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

class PropertyGallary extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {photos} = this.props;

    return (
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {photos.map((photo, index) => {
            return (
              <div className="property__image-wrapper" key = {`${photo} ${index}`}>
                <img
                  className="property__image"
                  src={photo}
                  alt="Photo studio"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

PropertyGallary.propTypes = {
  photos: PropTypes.array.isRequired,
};

export default PropertyGallary;
