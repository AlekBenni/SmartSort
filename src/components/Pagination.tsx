import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setCurrentPageAC } from '../Redux/shopReducer'
import { RootStateType } from '../Redux/store'

type PropsType = {
    postPerPage: number
    totalPost: number
    paginate: any
}

function Pagination(props: PropsType) {
    const currentPage = useSelector((state:RootStateType) => state.shop.currentPage)
    const dispatch = useDispatch()
    let {postPerPage, totalPost, paginate} = props
    let pageNumber = []

    for(let i = 1; i <= Math.ceil(totalPost / postPerPage); i++){
        pageNumber.push(i)
    }

    console.log(currentPage)

    const buttonAction = (page:number) => {
        paginate(page)
        dispatch(setCurrentPageAC(page))
    }

    return (
        <div>
            <ul className="pagination mb-5">
                {pageNumber.map((page, index) => {
                    return (
                       <li key={index} className="page-item">
                            <button onClick={() => buttonAction(page)}
                            className={page === currentPage ? "btn btn-primary me-1" : "btn btn-outline-primary me-1"}
                            >{page}</button>
                        </li> 
                    )
                })}
            </ul>          
        </div>
    )
}

export default Pagination
