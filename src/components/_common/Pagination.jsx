import React from "react";
import './Pagination.scss';

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPageNum }) => {
    const pagesCount = Math.ceil(itemsCount / pageSize); //Calculate the number of pages to display
    //[1 ... pagesCount].map()

    //If there is only 1 page, don't display the page listing
    //if (pagesCount <= 1) return null;

    const pageButtons = [];
    let i = 1;
    //Create an array of iterating numbers for the page button labels
    do{
        pageButtons.push(i);
        i++;
    }
    while(i <= pagesCount);

    let itemsEnd;
    let itemsStart;
    itemsEnd = pageSize * currentPageNum;
    itemsStart = itemsEnd - pageSize + 1;
    if(currentPageNum === pagesCount) itemsEnd = itemsCount; //If last page, set the range to be the total count

    return (
        <nav>
            <ul className = "pagination ml-1">
                {pageButtons.map(page => (
                    <li key = {page} 
                        className = {page === currentPageNum ? "page-item active" : "page-item"}
                    >
                        <div
                            className = "page-link clickable"
                            onClick={() => onPageChange(page)}>
                            {page}
                        </div>
                    </li>
                ))}
                
                <li className = "page-description">
                    Displaying results {itemsStart}-{itemsEnd} of {itemsCount}
                </li>
            </ul>
            {/* You can't use HTML comments inside of JSX bc it thinks they are real dom nodes, but js comments can still work
            <li className="page-item">
                <a className="page-link">1</a>
            </li>
            */}
        </nav>);
}

export default Pagination;
