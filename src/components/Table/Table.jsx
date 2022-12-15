import { IconContext } from 'react-icons';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableNothingTransactions from './TableNothingTransactions';
import { TableStyle, ButtonLoadMore } from './Table.styled';
import TableMobile from './TableMobile';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  fetchMoreTransaction,
  fetchTransactions,
} from 'redux/transaction/transactionOperation';
import { useDispatch } from 'react-redux';

const Table = () => {
  const dispatch = useDispatch();
  const { transactions } = useSelector(state => state.transactions);
  const { totalPages } = useSelector(state => state.transactions);
  const [page, setPage] = useState(2);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const onSubmitMore = () => {
    setPage(prev => prev + 1);
    if (page >= 1 && page <= totalPages) {
      dispatch(fetchMoreTransaction(page));
    }
  };
  const onTop = () => {
    setPage(1);
  };
  return (
    <>
      {transactions.length === 0 ? (
        <TableStyle id="table">
          <TableHead />
          <TableNothingTransactions text={"Sorry, you haven't transactions"} />
        </TableStyle>
      ) : (
        <>
          <TableStyle>
            <TableHead />
            <TableBody items={transactions} />
          </TableStyle>
          <>
            {page === totalPages ? (
              <ButtonLoadMore onClick={() => onTop()}>
                <IconContext.Provider
                  value={{
                    size: '20px',
                    color: '#000000',
                  }}
                >
                  <BiChevronUp />
                </IconContext.Provider>
              </ButtonLoadMore>
            ) : null}
            {page >= 1 && page < totalPages ? (
              <ButtonLoadMore onClick={() => onSubmitMore()}>
                <IconContext.Provider
                  value={{
                    size: '20px',
                    color: '#000000',
                  }}
                >
                  <BiChevronDown />
                </IconContext.Provider>
              </ButtonLoadMore>
            ) : null}
          </>
          <TableMobile items={transactions} />
        </>
      )}
    </>
  );
};

export default Table;
