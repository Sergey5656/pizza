import React, {useState} from 'react';


function Categories({value, onChangeCategory}) {

    // const [activeIndex, setActiveIndex] = React.useState(0);
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']


    return (<div className="categories">
        <ul>
            {categories.map((catygoryName, i) => (
                <li key={i} onClick={() => onChangeCategory(i)}
                    className={value == i ? 'active' : ''}>{catygoryName}</li>
            ))}
        </ul>
    </div>)
}


export default Categories;