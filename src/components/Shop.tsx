import React, {useState} from 'react'
import {ShopType, setPageNumberAC} from '../Redux/shopReducer'
import {useSelector,useDispatch} from 'react-redux'
import { RootStateType } from '../Redux/store'
import { ChangeEvent } from 'react'
import Pagination from './Pagination'

type PropsType = {
    items: Array<ShopType>
}

function Shop(props: PropsType) {

    const dispatch = useDispatch()

    const category = useSelector((state: RootStateType) => state.shop.setCategory)
    const currentPage = useSelector((state:RootStateType) => state.shop.setPageNumber)
    const {items} = props
   
   let [result, setResult] = useState(items)
   let [postPerPage] = useState(6)

    const changeSelectValue = (e:ChangeEvent<HTMLSelectElement>) => {
        let newValue = e.currentTarget.value
        if(newValue === '1'){
            const sortArr = result.sort((a, b) => a.rating > b.rating ? -1 : 1)
            setResult([...sortArr]) 
        }else if(newValue === '2'){
            const sortArr = result.sort((a, b) => a.price.old > b.price.old ? -1 : 1)
            setResult([...sortArr]) 
        }else if(newValue === '3'){
            const sortArr = result.sort((a, b) => a.price.old < b.price.old ? -1 : 1)
            setResult([...sortArr]) 
        }
    }

        const total = result.filter(item => {if(category === 'Все товары'){return result}else{return item.category === category} } ).map((item, index) => {
        return (
            <div key={index} className="col-4 mb-4">
            <div className="card">
            <img src={item.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-title">{item.name}</p>
                <span className="card-title">Отзывов: {item.rating}</span>
                <h5 className="card-title">Цена: {item.price.old}</h5>
            </div>
            </div>
            </div>
        )
    })    

    //  Получить индекс последнего поста на странице
    let lastIndex = currentPage * postPerPage
    //  Получить индекс первого поста на странице
    let firstIndex = lastIndex - postPerPage
    //  Получить массив постов из начального массива
    const currentPost = total.slice(firstIndex, lastIndex) 

    const paginate = (pageNumber:number) => {
        dispatch(setPageNumberAC(pageNumber))
    }

    return (
        <div className="row">

            <div className="mb-3">
                <label htmlFor="exampleFormControlSelect2">Сортируйте товар по:</label>
                <select
                onChange={changeSelectValue}
                className="form-control" id="exampleFormControlSelect2">
                    <option selected>Откройте меню</option>
                    <option value={1}>По рейтингу</option>
                    <option value={2}>По цене (начиная с самой большой)</option>
                    <option value={3}>По цене (начиная самой маленькой)</option>
                </select>
            </div>
            {currentPost}
            <Pagination postPerPage={postPerPage} totalPost={total.length} paginate={paginate} />
        </div>
    )
}

export default Shop
