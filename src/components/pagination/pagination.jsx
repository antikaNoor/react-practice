import './pagination.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
    return (
        <div className='page-container'>
            <FontAwesomeIcon
                icon={faCircleArrowLeft}
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            />
            {pageNumbers.map((pageNumber) => (
                <span
                    key={pageNumber}
                    className={pageNumber === currentPage ? 'active' : ''}
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </span>
            ))}
            <FontAwesomeIcon
                icon={faCircleArrowRight}
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            />
        </div>
    )
}

export default Pagination