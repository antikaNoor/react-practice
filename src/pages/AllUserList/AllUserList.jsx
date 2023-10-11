import React from 'react';
import { useParams } from 'react-router-dom';
import useReaderHook from '../../hooks/useReaderHook';
import Header from '../../components/header/header';
import DeleteData from '../../components/deleteData/deleteData';
import EditUserData from '../../components/EditUserData/EditUserData';

function AllUserList() {
    const { fetchedAllUsers, handleDeleteUser, onEditSubmitHandler } = useReaderHook();
    const { readerId } = useParams();

    return (
        <>
            <Header />
            <div>
                {fetchedAllUsers?.map((user, index) => (
                    <div key={index}>
                        <div className="user-container" key={index}>
                            <div>{user.reader_name}</div>
                            <div>{user.reader_email}</div>
                        </div>
                        <div>
                            <DeleteData onDeleteSubmitHandler={() => handleDeleteUser(user._id)} />
                            {/* Pass onEditSubmitHandler directly to EditUserData component */}
                            <EditUserData readerId={user._id} reader_name={user.reader_name} status={user.status} onEditSubmitHandler={onEditSubmitHandler} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default AllUserList;
