import React from "react";
import axios from "axios";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import {SearchContext} from "../App";
import {useDispatch, useSelector} from 'react-redux';
import {setCategoryId, setFilter} from "../redux/slices/filterSlice";
import qs from 'qs';
import {useNavigate} from "react-router-dom";
import {sortList} from "../components/Sort";


const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isMounted = React.useRef(false);
    const isSearch = React.useRef(false);
    const {categoryId, sort} = useSelector((state) => state.filter);
    const {searchValue} = React.useContext(SearchContext);

    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const onChangeCategory = (id) =>
        dispatch(setCategoryId(id));

    const fetchPizzas = ()=>{
        setIsLoading(true);
        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const search = searchValue ? `&search=${searchValue}` : '';

        axios.get(`https://63c98d10904f040a9660abb2.mockapi.io/items?${category}&sortBy=${sort.sortProperty}&order=desc&${search}`)
            .then((res) => {
                setItems(res.data);
                setIsLoading(false);
                console.log('фетч')

            })
    }


//Если первый рендер уже был и параметры поиска изменились
    React.useEffect(() => {
        console.log('3юэ')
        if(isMounted.current){
            console.log('3юэвн')
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
            });
            navigate(`?${queryString}`);
        }
        isMounted.current=true;
    }, [categoryId, sort.sortProperty]);

        //Если был первый рендер, то проверем URL параметры и созраняем в редакс
    React.useEffect(()=>{
        if(window.location.search){
            console.log(window.location.search)
            const params = qs.parse(window.location.search.substring(1))
            const sort = sortList.find((obj)=>obj.sortProperty===params.sortProperty)
            dispatch(
                setFilter({
                    ...params,
                    sort
                })
            );
            isSearch.current=true;
        }
    },[]);





    // Если был первый рендер, то запрашиваем пиццы
    React.useEffect(() => {
        console.log('2юэ')
        window.scrollTo(0,0)
        if(isSearch.current){
            fetchPizzas();
            console.log('2юэв')
        }
        isSearch.current=true;
    }, [categoryId, sort.sortProperty, searchValue]);



    const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>);
    const skeletons = [new Array(6)].map((_, index) => <Skeleton key={index}/>);


    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? skeletons : pizzas}
            </div>
        </div>
    )
}

export default Home;
