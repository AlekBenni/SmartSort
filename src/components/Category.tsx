import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setCategoryAC, setCurrentPageAC, setPageNumberAC } from '../Redux/shopReducer'
import { RootStateType } from '../Redux/store'

function Category() {
    const dispatch = useDispatch()
    const category = useSelector((state:RootStateType) => state.shop.categoryArray)
    let [categoryStyle, setCategoryStyle] = useState('Все товары')

    const categoryAction = (name:string) => {
        dispatch(setCategoryAC(name))
        dispatch(setPageNumberAC(1))
        dispatch(setCurrentPageAC(1))        
        setCategoryStyle(name)  
    }

    const resultCategory = category.map((item, index) => {
        return(
            <button key={index} onClick={() => categoryAction(item.name)}
            className={categoryStyle === item.name ? "btn btn-outline-primary" : "btn btn-primary"} type="button">{item.name}</button>
        )
    })

    return (
        <div className="d-grid gap-2 mb-4">
            {resultCategory}
        </div>
    )
}

export default Category
