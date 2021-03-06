import styled from 'styled-components';

const Bar = styled.div`
  min-width: 230px;
  max-width: 300px;
  margin-top: 7px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  border-radius: 20px;
  box-shadow: 0px 5px 7px -6px;
  background-color: rgb(239, 239, 239);
`

const Input = styled.input`
  width: 100%;
  border: none;  
  background-color: transparent;
  outline: none;
`

const SearchBar = ({ placeholder, onSearch, ...props }) => {
  return (
    <Bar>
      <i className="fa fa-search" aria-hidden="true"></i>
      <Input
        type='search'
        onChange={(event) => onSearch(event.target.value)}
        placeholder={placeholder}
        {...props}>
      </Input>
    </Bar>
  )
}

export default SearchBar
