import { SearchOutlined } from "@material-ui/icons";

const SearchItem = () => {
    return (
        <div className="flex">
            <input
                type="text"
                placeholder="search products..."
                className="outline-none border-b-2"
            ></input>
            <SearchOutlined fontSize="large" />
        </div>
    );
};

export default SearchItem;
