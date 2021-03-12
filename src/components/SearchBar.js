import styled from 'styled-components';

const Input = styled.input`
  width: 250px;
  margin-top: 7px;
  padding: 5px;
  border-style: none;
  border-radius: 3px;
  box-shadow: 0px 5px 7px -6px;
  background-color: rgb(239, 239, 239);
`

const SearchBar = ({placeholder, onSearch, ...props}) => {
    return (
      <Input 
        type='search' 
        onChange={(event) => onSearch(event.target.value)}
        placeholder={placeholder}
        {...props}>
      </Input>
    )
}

export default SearchBar
