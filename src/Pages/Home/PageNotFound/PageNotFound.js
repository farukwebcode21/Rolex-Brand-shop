import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className="row justify-content-center" style={{height:'100vh'}}>
            <div class="col-md-12 col-sm-12">
                <div class="card shadow-lg border-0 rounded-lg mt-5 mx-auto" style={{width: '60rem', height:'30rem'}}>
                    <h3 class="card-header display-1 text-muted text-center">404</h3>
                    <span class="card-subtitle mb-2 text-muted text-center">Page Could Not Be Found</span>
                    <div class="card-body mx-auto">
                        <Link type="button" to="/home"
                        class="btn btn-sm btn-info text-white">Back To Home </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
