import './pagination.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    return (
        <div>
            <FontAwesomeIcon
                icon={faCircleArrowLeft}
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                className={currentPage === 1 ? 'disabled' : ''}
            />
            <div className='page-number'>{currentPage}</div>
            <FontAwesomeIcon
                icon={faCircleArrowRight}
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                className={currentPage === totalPages ? 'disabled' : ''}
            />
        </div>
    )
}

export default Pagination