import React, { Component } from 'react';

import CustomNavigation from '../components/SideNavbar/SideNavbar.js'
import '../styles/WorkFromHome.css'
import HorizontalLabelPositionBelowStepper from '../components/WorkFromHome/EmployeeTabs'

export class WorkFromHome extends Component {
    constructor() {
        super()
        this.state= {

        }
    }

    render() {

        return(
            <div>
                <CustomNavigation />
                <div class="custom-container">
                    <HorizontalLabelPositionBelowStepper />
                </div>
            </div>
        )
    }
}