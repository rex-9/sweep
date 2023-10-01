import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchFilter from '../components/SearchFilter';

describe('SearchFilter', () => {
  it('calls the correct function for search', () => {
    const mockSetSearchTerm = jest.fn();
    const { getByPlaceholderText } = render(<SearchFilter setSearchTerm={mockSetSearchTerm} />);
    fireEvent.change(getByPlaceholderText('Search characters...'), { target: { value: 'Luke' } });
    expect(mockSetSearchTerm).toHaveBeenCalledWith('Luke');
  });

  it('calls the correct function for filter', () => {
    const mockSetFilters = jest.fn();
    const { getByText } = render(<SearchFilter setFilters={mockSetFilters} />);
    fireEvent.change(getByText('Options for homeworld filter'), { target: { value: 'Tatooine' } });
    expect(mockSetFilters).toHaveBeenCalledWith({ homeworld: 'Tatooine' });
  });

  it('calls the correct function for combined search and filter', () => {
    const mockSetSearchTerm = jest.fn();
    const mockSetFilters = jest.fn();
    const { getByPlaceholderText, getByText } = render(<SearchFilter setSearchTerm={mockSetSearchTerm} setFilters={mockSetFilters} />);
    fireEvent.change(getByPlaceholderText('Search characters...'), { target: { value: 'Luke' } });
    fireEvent.change(getByText('Options for homeworld filter'), { target: { value: 'Tatooine' } });
    expect(mockSetSearchTerm).toHaveBeenCalledWith('Luke');
    expect(mockSetFilters).toHaveBeenCalledWith({ homeworld: 'Tatooine' });
  });
});
