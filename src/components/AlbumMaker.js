import React from 'react';
import PhotoEntry from './PhotoEntry';
import entries from './data/photo-entries.json'

class AlbumMaker extends React.Component {

  render() {

    console.log("Entries are:")
    console.log(entries);

    return (
      <div className="flex-container">
        {
        entries.itemlist.map((photo) => {
          return <PhotoEntry key={photo.src} src={photo.src} location={photo.location} caption={photo.caption} /> }
        )
        }
        {/* <PhotoEntry src="berlin.jpg" location="Berlin, Germany" caption="Heart of Europe" /> */}
      </div>
    )

  }

}

export default AlbumMaker;
