import React,{Component} from "react"

import Link from "gatsby-link"

class Menu extends Component {

    render() {

        const data = this.props.mymenu.allWordpressWpApiMenusMenusItems.edges[0].node.items

        console.log(data)

        return (

            <div>
                <h1>Menu</h1>
                
                <ul>
                    {data.map((item) => 
                            <li key={item.object_slug}>

                                <Link to={item.object_slug}>{item.title} </Link>

                            </li>
                    )}
                </ul>

            </div>
        )

    }

}






export default Menu