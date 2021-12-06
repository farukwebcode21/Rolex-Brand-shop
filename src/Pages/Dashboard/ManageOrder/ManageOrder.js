import React, { useEffect, useState } from 'react'



const ManageOrder = () => {
    const [oraders, setOrader] = useState([]);
     let sL = 0;
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrader(data));
    }, [])

    const handleDeleteBooking = (id) => {


    }
    return (
        <section id="appointment" className="dashboard-home">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Manage All Ordes</h2>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">SL. No.</th>
                                <th scope="col">Product Id</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            oraders.length > 0 && oraders.map(order => <tr key={order._id}>
                                    <th scope="row">{sL = sL + 1}</th>
                                    <td>{order._id}</td>
                                    <td>{order.email}</td>
                                    <td>{order.number}</td>
                                    <td>
                                    { order.status === 2 ? <span>Pending</span> : (order.status === 1 ? <span>Approved</span> : <span>Rejected</span>)}
                                    </td>
                                    <td>
                                        {
                                            order.status === 2 ? <button onClick={() => handleDeleteBooking(order._id)}><i className="fas fa-trash"></i></button> : 'N/A'
                                        }
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default ManageOrder
