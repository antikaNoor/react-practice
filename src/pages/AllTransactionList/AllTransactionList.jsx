import React from 'react';
import './AllTransactionList.scss'
import Header from '../../components/header/header';
import useReaderHook from '../../hooks/useReaderHook';

function AllTransactionList() {
    const { allTransactions } = useReaderHook();

    return (
        <>
            <Header />
            <div>
                {allTransactions?.map((transaction, index) => (
                    <div className='transaction-container' key={index}>
                        <div>{transaction?.reader?.reader_name}</div>
                        <div className='transaction-items'>
                            {transaction?.bought_books?.map((book, innerIndex) => (
                                <div key={innerIndex}>
                                    <div>{book?.id?.title}</div>
                                    <div>{book?.id?.author}</div>
                                </div>
                            ))}
                        </div>
                        <div>{transaction?.total_spent}</div>
                        <div>{transaction?.date}</div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default AllTransactionList;
