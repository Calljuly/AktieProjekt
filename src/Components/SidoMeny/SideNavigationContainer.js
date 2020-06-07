import React from 'react'
import Options from './SideNavigationOptions'
import Setting from '../../images/cog.svg'
import Home from '../../images/home.svg'
import Portfolio from '../../images/portfolio.png'
import {Link} from 'react-router-dom'

const Container = () => {
return (
    <div>
        <Link to="/"><Options Name="Hem" bild={Home}/></Link>
        <Link to="/portfolio"><Options Name="Min portfolio" bild={Portfolio}/></Link>
        <Link to="/settings"><Options  Name="Inställningar" bild={Setting}/></Link>

    </div>
    );
}
export default Container;