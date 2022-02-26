import { usePagination, DOTS } from "./use-pagination.component";
import { PaginationContainer, PaginationItems } from "./paginatie.styles";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <PaginationContainer>
      <PaginationItems
        className={`${currentPage === 1 ? "disabled" : ""}`}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </PaginationItems>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <PaginationItems className="dots">&#8230;</PaginationItems>;
        }
        return (
          <PaginationItems
            className={`${pageNumber === currentPage ? "selected" : ""}`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationItems>
        );
      })}
      <PaginationItems
        className={`${currentPage === lastPage ? "disabled" : ""}`}
        onClick={onNext}
      >
        <div className="arrow right" />
      </PaginationItems>
    </PaginationContainer>
  );
};

export default Pagination;
