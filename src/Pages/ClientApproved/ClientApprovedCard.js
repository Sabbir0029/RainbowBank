import React from 'react';

const ClientApprovedCard = (props) => {
    const {email} = props.approveds;
    return (
        <div>
            <p>{email}</p> 
        </div>
    );
};

export default ClientApprovedCard;