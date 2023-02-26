import React from "react";
import styles from './Search.module.css'
import searchSvg from '../../assets/img/search_icon.png'
import closeSvg from '../../assets/img/close_icon.png'
import {SearchContext} from "../../App";
import debounce from 'lodash.debounce';

const Search = () => {
    const [value, setValue] = React.useState('')
    const {searchValue, setSearchValue} = React.useContext(SearchContext);
    const inputRef = React.useRef();
    const testDobounce = React.useCallback(
        debounce(() => {

        }, 1000),
        [],
    );

    const OnClickClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };
    const updateSearchValue = React.useCallback(
        debounce((str) => {
            setSearchValue(str);
        }, 1000),
        [],
    );
    const OnChangeInput = event => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }
    return (
        <div className={styles.root}>
            <img className={styles.searchIcon} src={searchSvg}/>
            <input
                ref={inputRef} value={value} onChange={OnChangeInput} className={styles.input}
                placeholder="Поиск пиццы..."/>
            {value && (<img onClick={OnClickClear} className={styles.closeIcon} src={closeSvg}/>)}
        </div>
    )
};

export default Search;