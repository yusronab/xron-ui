const DOTS = "...";

export { DOTS };

interface PaginationRangeParams {
  total: number;
  page: number;
  pageSize: number;
  siblingCount: number;
}

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export function getPaginationRange({
  total,
  page,
  pageSize,
  siblingCount,
}: PaginationRangeParams): Array<number | typeof DOTS> {
  const totalPageCount = Math.ceil(total / pageSize);

  const totalPageNumbers = siblingCount + 5;

  if (totalPageNumbers >= totalPageCount) {
    return range(1, totalPageCount);
  }

  const leftSibling = Math.max(page - siblingCount, 1);
  const rightSibling = Math.min(page + siblingCount, totalPageCount);

  const showLeftDots = leftSibling > 2;
  const showRightDots = rightSibling < totalPageCount - 2;

  if (!showLeftDots && showRightDots) {
    const leftRange = range(1, 3 + siblingCount * 2);

    return [...leftRange, DOTS, totalPageCount];
  }

  if (showLeftDots && !showRightDots) {
    const rightRange = range(
      totalPageCount - (2 * siblingCount + 2),
      totalPageCount,
    );

    return [1, DOTS, ...rightRange];
  }

  return [1, DOTS, ...range(leftSibling, rightSibling), DOTS, totalPageCount];
}
