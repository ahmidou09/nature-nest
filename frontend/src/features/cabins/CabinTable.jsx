import styled from "styled-components";
import { useCabins } from "../../hooks/useDataHooks";
import Spinner from "../../ui/Spinner";
import React from "react";
import CabinRow from "./CabinRow";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function CabinTable() {
  const { data: cabins, isLoading, error } = useCabins();
  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading cabins: {error.message}</div>;

  console.log(cabins);

  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {cabins.map((cabin, index) => (
        <CabinRow key={cabin._id} cabin={cabin} index={index} />
      ))}
    </Table>
  );
}

export default CabinTable;
