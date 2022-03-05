import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ClientApprovedCard from './ClientApprovedCard';

const ClientApproved = () => {
    const [approved, setApproved] = useState([]);


    useEffect(()=>{
        fetch('https://hidden-castle-66023.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setApproved(data))
    },[])
    return (
        <div >
            <Navigation></Navigation>
            <h1 className='mt-5 pt-5'>Client Approved</h1>
                {
                    approved.map(approveds => <ClientApprovedCard
                    key={approveds._id}
                    approveds={approveds}
                    ></ClientApprovedCard> )
                }
        </div>
    );
};

export default ClientApproved;