import {FC} from "react";
import {DOTS, PaginationProps, usePagination} from "../hooks/usePagination";
import block from "bem-css-modules";

import s from './Pagination.module.scss';

const b = block(s);

interface Props {
    onPageChange: (page: number) => void;
    totalPageCount: number;
    siblingCount?: number;
    currentPage?: number;
}

const Pagination: FC<Props> = (
    {
        onPageChange,
        totalPageCount,
        siblingCount = 1,
        currentPage = 1,
    }
) => {

    const paginationRange = usePagination({
        currentPage,
        totalPageCount,
        siblingCount,
    } as PaginationProps);

    if (currentPage === 0 || !paginationRange || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        const nextPage = currentPage + 1
        if (nextPage <= lastPage) {
            onPageChange(nextPage);
        }
    };

    const onPrevious = () => {
        const prevPage = currentPage - 1;
        if (prevPage > 0) {
            onPageChange(prevPage);
        }
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={b('container')}
        >
            <li
                className={b('item', {
                    disabled: currentPage === 1
                })}
                onClick={onPrevious}
            >
                <div className={b('arrow', {left: true, disabled: currentPage === 1})}/>
            </li>
            {paginationRange.map((pageNumber, index) => {
                if (pageNumber === DOTS) {
                    return <li key={index} className={b('item', {dots: true})}>&#8230;</li>;
                }

                return (
                    <li
                        key={index}
                        className={b('item', {
                            selected: pageNumber === currentPage
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={b('item', {
                    disabled: currentPage === lastPage
                })}
                onClick={onNext}
            >
                <div className={b('arrow', {right: true, disabled: currentPage === lastPage})}/>
            </li>
        </ul>
    );
};

export default Pagination;
