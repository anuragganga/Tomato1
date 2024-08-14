import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
    return (
        <div className='explore-menu' id='explore-menu'>
                <h1>Explore our menu</h1>
                 <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of delicious food</p>
                 <div  className='explore-menu-list'>
                        {menu_list.map((item, index)=>{
                                return(
                                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)}className='explore-menu-card' key={index}>
                                                <img src={item.menu_image} alt=""  className={category===item.menu_name?"active":""}/>
                                                <p>{item.menu_name}</p>
                                        </div>
                                )
                        })}
                 </div>
                 <hr />
        </div>
    )
}

export default ExploreMenu
