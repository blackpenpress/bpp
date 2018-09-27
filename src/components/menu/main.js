import React,{Component} from "react"

import Link from "gatsby-link"

class Menu extends Component {

    render() {

        const data = this.props.mymenu.allWordpressWpApiMenusMenusItems.edges[0].node.items

        console.log(data)

        return (

            <div>
                
                <ul
                css={{
                                display: 'inline',
                                float: 'left',
                                width: '100%',
                            }}>
                    {data.map((item) => 
                            <li 
                            css={{
                                display: 'inline',
                                float: 'left',
                                listStyle: 'none',
                                marginRight: '10px',
                            }}
                            key={item.object_slug}>

                                <Link to={item.object_slug}>{item.title} </Link>

                            </li>
                    )}
                </ul>

            </div>
        )

    }

}






export default Menu