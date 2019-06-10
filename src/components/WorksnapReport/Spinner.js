import React from 'react';
import FontAwesome from "react-fontawesome";

export function renderSpinner(){
        return(
			<div className="overlay d-flex justify-content-center align-items-center">
				<div className="overlay-content">
					<div className="d-flex">
						<FontAwesome 
							name='spinner' 
							size='3x'
							pulse spin
							className="mx-auto"   
						/>
					</div>
				</div>
			</div>
		);
    
}

