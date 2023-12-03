import React from 'react';


function Categories({value, onChangeCategory}) {

    const [activeIndex, setActiveIndex] = React.useState(0);
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (<div className="categories">

        <ul>
            {categories.map((categoryName, id, ) => (

                <li key={id} onClick={() => onChangeCategory(id)}
                    className={value === id  ? 'active' : ''}>{categoryName} </li>

            ))}

            {/*{categories.map((value, i) => (*/}
            {/* <li onClick={()=> setActiveIndex(i)} className={activeIndex === i?'active' : ''}>{value} </li>))}*/}
        </ul>
    </div>)
}


export default Categories;