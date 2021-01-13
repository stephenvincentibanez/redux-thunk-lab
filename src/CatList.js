import React from 'react';

const CatList = (props) => {
    const renderCats = () => {
        return props.catPics.map(cat => {return <img src={cat.url} alt="ut oh" key={cat.id}/>})
    }

    return (
        <div>
            {renderCats()}
        </div>
    );
}

export default CatList;
