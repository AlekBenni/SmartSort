import React from 'react'
import {useSelector} from 'react-redux'
import Category from './Category'
import Shop from './Shop'

function ShopContainer() {

    const items = useSelector((state:any) => state.shop.shop)

    return (
        <div className="row">
            <div className="col-md-3 col-sm-12" >
                <Category/>
            </div>    
            <div className="col-md-9 col-sm-12" >
                <Shop items={items} />
            </div>     
        </div>
    )
}

export default ShopContainer
